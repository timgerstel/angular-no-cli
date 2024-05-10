import { DesktopPluginDefinition } from './mvd-hosting';

  const enum PluginType {
    Desktop = "desktop",
    Application = "application",
    Bootstrap = "bootstrap"
  }

  interface PluginInterface {
    getKey():string;
    getIdentifier():string;
    getVersion():string;
    getWebContent():any;
    getType():PluginType;
    getCopyright(): string;
    hasComponents(): boolean;
  }

  interface ContainerPluginDefinition {
    getBasePlugin():Plugin;
  }

export interface DesktopPluginDefinition extends ContainerPluginDefinition {
  getIdentifier(): string;
  getFramework(): string;
  getCopyright(): string;
  hasComponents(): boolean;
}


export class ContainerPluginImpl implements ContainerPluginDefinition {
  constructor(private plugin: Plugin) {

  }
  getBasePlugin() {
    return this.plugin;
  }
}

export class DesktopPluginDefinitionImpl implements DesktopPluginDefinition {
  private key:string;

  constructor(
    public readonly basePlugin: Plugin
  ) {
    this.key = basePlugin.getKey();
  }

  get hasWebContent(): boolean {
    return this.basePlugin.getWebContent() != null;
  }

  getFramework(): string {
    if (this.hasWebContent) {
      if ('framework' in this.basePlugin.getWebContent()) {
        return this.basePlugin.getWebContent().framework;
      } else {
        this.logger.warn(`Plugin ${this.getIdentifier()} has no framework specified`);
        return 'unsupported';
      }
    } else {
      return 'n/a';
    }
  }

  getIdentifier(): string {
    return this.basePlugin.getIdentifier();
  }

  getKey(): string {
    return this.key;
  }

  getBasePlugin(): Plugin {
    return this.basePlugin;
  }

  getCopyright():string {
    return this.basePlugin.getCopyright();
  }

  hasComponents(): boolean {
    return this.basePlugin.hasComponents();
  }
  
  get label(): string {
    if (this.hasWebContent && this.basePlugin.getWebContent().launchDefinition != null) {
      return this.basePlugin.getWebContent().launchDefinition.pluginShortNameDefault;
    } else {
      return this.basePlugin.getIdentifier().split('\.').slice(-1)[0];
    }
  }
}


function parsePluginType(value: string): PluginType | null {
  switch (value) {
    case "desktop":
      return PluginType.Desktop;
    case "application":
      return PluginType.Application;
    case "bootstrap":
      return PluginType.Bootstrap;
    default:
      return null;
  }
}

export abstract class Plugin implements PluginInterface {
  abstract readonly identifier: string;
  abstract readonly version: string;
  abstract readonly type: PluginType;
  abstract readonly webContent: any;
  abstract readonly copyright: string;

  static parsePluginDefinition(definition: any): Plugin {
    return new Plugin_0(definition);
  }

  abstract getKey():string;//For use in mappings of unique Plugins to objects

  abstract getIdentifier():string;

  abstract getVersion():string;

  abstract getWebContent():any;

  abstract getType():PluginType;
  
  abstract getCopyright():string;

  abstract hasComponents(): boolean;

  public toString():string {
    return "<plugin "+this.getKey()+">";
  }
}

export class Plugin_0 extends Plugin {
  readonly identifier: string;
  readonly version: string;
  readonly type: PluginType;
  readonly webContent: any;
  readonly key:string;
  readonly copyright:string;
  readonly _hasComponents: boolean;

  constructor(definition: any) {
    super()

    if (typeof definition.identifier === "string") {
      this.identifier = definition.identifier;
    } else {
      throw new Error("Plugin identifier is not a string");
    }

    if (typeof definition.pluginVersion === "string") {
      this.version = definition.pluginVersion;
    } else {
      throw new Error("Plugin version is not a string");
    }

    if (typeof definition.pluginType === "string") {
      const pluginType = parsePluginType(definition.pluginType);
      if (pluginType != null) {
        this.type = pluginType;
      } else {
        throw new Error("Plugin type is not present");
      }
    } else {
      throw new Error("Plugin type is not a string");
    }
    
    this.key = definition.identifier + '@' + definition.pluginVersion;

    this.webContent = definition.webContent;

    if(this.webContent) {
      if('hasComponents' in this.webContent) {
        this._hasComponents = this.webContent.hasComponents;
      } else {
        this._hasComponents = false;
      }
    }
    
    if (typeof definition.copyright === "string") {
      this.copyright = definition.copyright;
    } 
  }

  getIdentifier():string{
    return this.identifier;
  }

  getKey():string{
    return this.key;
  }

  getVersion():string{
    return this.version;
  }

  getWebContent():any{
    return this.webContent;
  }

  getType():PluginType{
    return this.type;
  }

  getCopyright():string{
    return this.copyright==null?'':this.copyright;
  }

  hasComponents(): boolean {
    return this._hasComponents;
  }

}
