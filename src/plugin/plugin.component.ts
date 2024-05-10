import {Component, Inject} from "@angular/core";
import {PluginSubComponent} from "./subcomponent.component";
import {Angular2InjectionTokens} from "../shared/inject-resources";
import {DesktopPluginDefinition} from "../shared/mvd-hosting";

@Component({
    selector: 'app-plugin',
    templateUrl: './plugin.component.html',
    styleUrl: './plugin.component.css',
    standalone: true,
    imports: [PluginSubComponent]
})
export class PluginComponent {
  title = 'This is a plugin';
  public identifier: string;

  constructor(
    @Inject(Angular2InjectionTokens.PLUGIN_DEFINITION) private testDef: DesktopPluginDefinition
  ) {
    this.identifier = this.testDef.getIdentifier();
    console.log('testDef=',this.testDef);
  }
}
