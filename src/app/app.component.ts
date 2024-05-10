import {Component, ViewContainerRef, Injector, inject} from "@angular/core";
import {Plugin_0, DesktopPluginDefinitionImpl} from '../shared/plugin';
import {Angular2InjectionTokens} from '../shared/inject-resources';
import styles from './app.component.css';
import html from './app.component.html';

@Component({
    selector: "app-root",
    template: html,
    styles: [styles]
})
export class AppComponent {
    title = 'POC for Angular Component Loader';
    private vcr = inject(ViewContainerRef);
    
    async loadPlugin() {
        const pluginLib = '@company/plugin';
        const pluginModule = await import(pluginLib);
        console.log(`plugin loaded`, pluginModule);
        const {plugin} = pluginModule;
        console.log(`plugin`, plugin);

        const pluginDef = {
            identifier: 'org.zowe.foo',
            version: '0.0.1',
            pluginVersion: '0.0.1',
            pluginType: 'application'
        };
        const testPlugin = new Plugin_0(pluginDef);
        const testDesktopPlugin = new DesktopPluginDefinitionImpl(testPlugin);

        const injector = Injector.create([
          {
            provide: Angular2InjectionTokens.PLUGIN_DEFINITION,
            useValue: testDesktopPlugin
          }
        ]);
      
      const componentRef = this.vcr.createComponent(plugin, {injector: injector} );
        if (componentRef) {
            console.log(`component created`, componentRef);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
}
