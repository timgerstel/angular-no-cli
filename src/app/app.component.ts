import {Component, ViewContainerRef, inject} from "@angular/core";
import styles from './app.component.css';
import html from './app.component.html';

@Component({
    selector: "app-root",
    template: html,
    styles: [styles]
})
export class AppComponent {
    title = 'Angular no CLI';
    private vcr = inject(ViewContainerRef);
    
    async loadPlugin() {
        const pluginLib = '@company/plugin';
        const pluginModule = await import(pluginLib);
        console.log(`plugin loaded`, pluginModule);
        const {plugin} = pluginModule;
        const componentRef = this.vcr.createComponent(plugin);
        console.log(`component created`, componentRef);
    }
}