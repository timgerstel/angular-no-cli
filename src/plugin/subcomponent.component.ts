import {Component} from "@angular/core";

@Component({
    selector: 'sub-component',
    templateUrl: './sub-component.component.html',
    styleUrl: './sub-component.component.css',
    standalone: true
})
export class PluginSubComponent {
  title = 'This is a component within the main plugin component.';
}
