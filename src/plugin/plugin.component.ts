import {Component} from "@angular/core";


@Component({
    selector: 'app-plugin',
    templateUrl: './plugin.component.html',
    styleUrl: './plugin.component.css',
    standalone: true
})
export class PluginComponent {
    title = 'This is a plugin';
}