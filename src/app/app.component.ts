import {Component} from "@angular/core";
import styles from './app.component.css';
import html from './app.component.html';

@Component({
    selector: "app-root",
    template: html,
    styles: [styles]
})
export class AppComponent {
    title = 'Angular no CLI';
}