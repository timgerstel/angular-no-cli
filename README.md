# PoC for Angular Component Loader

This is an ongoing development environment for migrating Zowe app framework desktop apps from the technology used in Zowe v2 (angular v12 with viewengine, webpack v4, requirejs) to newer technologies (angular ivy, webpack 5 and esbuild, and ecmascript modules)

To setup what works thus far,
* Install deps with `npm ci`
* Build `npm run build`
* Go into `vt-ng2/webClient`
* `npm ci` and `npm run build` there too.
* Edit dist/index.html to include the right imports, below
* Start `npm run serve`


The file dist/index.html has an import map that is used to determine where to load the plugins and dependencies from.
For some reason the items needed are getting erased upon rebuild, so you will want to edit to ensure the "imports" map looks like this:

```
"imports": {
  "@angular/core": "/node_modules/@angular/core/fesm2022/core.js",
  "@angular/core/primitives/signals": "/node_modules/@angular/core/fesm2022/primitives/signals.js",
  "@angular/compiler": "/node_modules/@angular/compiler/fesm2022/compiler.js",
  "@angular/common": "/node_modules/@angular/common/fesm2022/common.js",
  "@angular/common/http": "/node_modules/@angular/common/fesm2022/http.js",
  "@angular/platform-browser-dynamic": "/node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.js",
  "rxjs": "/node_modules/rxjs/dist/esm/index.js",
  "@company/plugin": "/plugin/index.mjs",
  "@company/vtplugin": "/vt/index.mjs",
  "@company/samplereact": "/sample-react/main.js"
}
```

# Current design

The webpage is designed to be an angular page which can dynamically load angular plugins built in isolation from the webpage core.
That is, the plugins can depend upon source code present in the core, but the core cannot depend upon code in the plugins.
The core also does not need to load all plugins, nor does it know in advance if any exist at all.

Plugins should not include libraries that are already loaded by the core (as in, use "externals" in webpack to accomplish)
But may bring in additional libraries.

The core contains injectables that can be passed to the plugins. This repo contains a mock of the sort of injectables that are seen in a real Zowe desktop to prove this point.
See for example `@Inject(Angular2InjectionTokens.PLUGIN_DEFINITION): DesktopPluginDefinition`
The core is built using [build.mjs](./build.mjs) and [webpack.config.js](./webpack.config.js).


A plugin built from scratch for this repo is in [src/plugin](./src/plugin). It is simple but proves how angular code can be dynamically added as a plugin, with simple styles and logic.
Its webpack rules are within [webpack.plugin.config.js](webpack.plugin.config.js)


[vt-ng2-original](./vt-ng2-original) is a folder containing a Zowe v2 desktop plugin. It is pre-built, with output in [vt-ng2-original/web](./vt-ng2-original/web) from the source in [vt-ng2-original/webClient](./vt-ng2-original/webClient).
It uses webpack base rules from the Zowe v2 desktop core [virtual-desktop-original/plugin-config](virtual-desktop-original/plugin-config)
It adds further webpack rules within [vt-ng2-original/webClient/webpack.config.js](./vt-ng2-original/webClient/webpack.config.js).

[vt-ng2](./vt-ng2) is a folder where we try to convert [vt-ng2-original](./vt-ng2-original) into code that is compatible with the new technologies with as little changes as possible.
Logic was removed to focus on parts of the code that are changing, so that a full zowe install is not required for this research.


# Remaining work
The current goal is to transform `vt-ng2-original` into a plugin that has the same behavior, but uses the new technology stack. This work is in-progress within `vt-ng2` folder, but currently has issues with webpack.
Thus far no meaningful changes to the angular code has been seen other than the lack of modules, because the new code uses "standalone components".
However, it's not picking up css/styles correctly, so it is not yet usable.

## Need to fix CSS loading

When you compare [vt-ng2 dist/vt/index.mjs](./dist/vt/index.mjs) to [vt-ng2-original/web/main.js](vt-ng2-original/web/main.js), you will see differences in how the CSS is packaged.

One uses an `exports.push` on a string, hile the other uses es modules, and it seems the css does not get loaded somehow.

## Other loaders not yet tested
* Do images get loaded correctly?
* plain javascript files? [vt.js](./vt-ng2-original/webClient/src/lib/js/vt.js) is a javascript file using `function(exports){} ()` to load itself. Can we use this without changes with the right loader? Or must we change it to be an es module?