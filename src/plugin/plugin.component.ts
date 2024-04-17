import {Component} from "@angular/core";


@Component({
    selector: 'app-plugin',
    template: '<div> {{ title }} </div>',
    styles: [],
    standalone: true
})
export class PluginComponent {
    title = 'This is a plugin';
}