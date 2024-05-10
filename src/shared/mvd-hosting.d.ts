declare namespace ZLUX {
  const enum PluginType {
    Desktop = "desktop",
    Application = "application",
    Bootstrap = "bootstrap"
  }

  interface Plugin {
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
}

export interface DesktopPluginDefinition extends ZLUX.ContainerPluginDefinition {
  getIdentifier(): string;
  getFramework(): string;
  getCopyright(): string;
  hasComponents(): boolean;
}
