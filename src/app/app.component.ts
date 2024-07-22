import {Component, ViewContainerRef, Injector, inject, EventEmitter, ViewChild, ElementRef } from "@angular/core";
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

    @ViewChild('pluginOne', {read: ViewContainerRef})
    pluginOneRef!: ViewContainerRef;

    @ViewChild('pluginTwo', {read: ViewContainerRef})
    pluginTwoRef!: ElementRef;

    @ViewChild('pluginThree') pluginThreeRef!: ElementRef;
  
    
    async loadPlugin() {
        const pluginLib = '@company/plugin';
        const pluginModule = await import(pluginLib);
        console.log(`plugin loaded`, pluginModule);
        const plugin = pluginModule.pluginComponent;
        console.log(`plugin`, plugin);


        const vtPluginLib = '@company/vtplugin';
        const vtPluginModule = await import(vtPluginLib);
        console.log(`vtPlugin loaded`, vtPluginModule);
        const vtPlugin = vtPluginModule.pluginComponent;
        console.log(`vtPlugin`, vtPlugin);

        const reactPluginLib = "@company/samplereact";
        const reactPluginModule = await import(reactPluginLib);
        console.log(`sample react loaded`, reactPluginModule);
        // const reactPlugin = reactPluginModule.pluginComponent;
        // console.log(`reactPlugin`, reactPlugin);

      
        const pluginDef = {
            identifier: 'org.zowe.foo',
            version: '0.0.1',
            pluginVersion: '0.0.1',
            pluginType: 'application'
        };

        const vtPluginDef = {
            identifier: 'org.zowe.terminal.vt',
            version: '0.0.1',
            pluginVersion: '3.0.0',
            pluginType: 'application'
        };

        const reactPluginDef = {
            identifier: 'org.zowe.zlux.sample.react',
            version: '0.0.1',
            pluginVersion: '2.17.0',
            pluginType: 'application'
        };

      console.log(this.pluginOneRef);


      const componentRef = this.pluginOneRef.createComponent(plugin, {injector: makeInjector(pluginDef)} );
        if (componentRef) {
            console.log(`component created`, componentRef);
            componentRef.changeDetectorRef.detectChanges();
        }

      const vtComponentRef = this.pluginTwoRef.createComponent(vtPlugin, {injector: makeInjector(vtPluginDef)} );
        if (vtComponentRef) {
            console.log(`component created`, vtComponentRef);
            vtComponentRef.changeDetectorRef.detectChanges();
        }

      reactPluginModule.renderPlugin(this.pluginThreeRef.nativeElement, makeInjector(reactPluginDef));
      // const reactComponentRef = this.pluginThreeRef.createComponent(vtPlugin, {injector: makeInjector(reactPluginDef)} );
      // if (reactComponentRef) {
      //     console.log(`component created`, reactComponentRef);
      //     reactComponentRef.changeDetectorRef.detectChanges();
      // }
    }
}
  
function makeInjector(pluginDef: any): Injector {
  let pluginDefImpl = new DesktopPluginDefinitionImpl(new Plugin_0(pluginDef));


  let resizeEmitter = new EventEmitter<{ width: number, height: number }>();
  setInterval(()=> {
    resizeEmitter.emit({width: 640, height: 480});
  },3000);
  
  
  return Injector.create([
    {
      provide: Angular2InjectionTokens.LOGGER,
      useValue: {
        debug: console.log,
        info: console.log,
        warn: console.log
      }
    },
    {
      provide: Angular2InjectionTokens.VIEWPORT_EVENTS,
      useValue: {
        resized: resizeEmitter,
        spawnContextMenu: (xRel, yRel, items) => console.log('viewport event spawn context menu'),
        registerCloseHandler: (handler: ()=>Promise<any>) => console.log('viewport event register close handler')
      }
    },
    {
      provide: Angular2InjectionTokens.WINDOW_ACTIONS,
      useValue: {
        close: function() {console.log('close window action')},
        minimize: function() {console.log('minimize window action')},
        maximize: function() {console.log('maximize window action')},
        restore: function() {console.log('restore window action')},
        setTitle: function(title: string) {console.log('setTitle window action', title)},
        setPosition: function(pos: {top: number, left: number, width: number, height: number}) {console.log('setPosition window action', pos)},
        spawnContextMenu: function(xPos: number, yPos: number, items: any[], isAbsolutePos?: boolean) {console.log('spawnContextMenu window action'); return true;},
        registerCloseHandler: function(handler: () => Promise<void>) {console.log('registerCloseHandler window action')}
      }
    },
    {
      provide: Angular2InjectionTokens.LAUNCH_METADATA,
      useValue: {data: 'hello world'}
    },
    {
      provide: Angular2InjectionTokens.PLUGIN_DEFINITION,
      useValue: pluginDefImpl
    }
  ]);
}
