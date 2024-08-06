import { Subject } from 'rxjs';

export const Angular2InjectionTokens = {
  /* Module level resources */
  PLUGIN_DEFINITION: 'virtualdesktop-ng2.0-0-0.plugin-definition',
  LOGGER: 'virtualdesktop-ng2.0-0-0.logger',
  VIEWPORT_EVENTS: 'virtualdesktop-ng2.0-0-0.viewport-events',
  WINDOW_ACTIONS: 'virtualdesktop-ng2.0-0-0.window-actions', /* optional */
  LAUNCH_METADATA: 'virtualdesktop-ng2.0-0-0.launch-metadata',

};

export interface ContextMenuItem {
  text: string;
  icon?: string;
  shortcutText?: string;
  shortcutProps?: {
    "code": string;
    "altKey": boolean;
    "ctrlKey": boolean;
    "metaKey": boolean;
    "shiftKey": boolean;
  };
  action?: () => void;
  children?: ContextMenuItem[];
  disabled?: boolean;
  preventCloseMenu?: boolean;
}



export interface Angular2PluginWindowActions {
  readonly close: () => void;
  readonly minimize: () => void;
  readonly maximize: () => void;
  readonly restore: () => void;
  readonly setTitle: (title: string) => void;
  readonly setPosition: (pos: {top: number, left: number, width: number, height: number}) => void;
  readonly spawnContextMenu: (xPos: number, yPos: number, items: any[], isAbsolutePos?: boolean) => boolean;
  readonly registerCloseHandler: (handler: () => Promise<void>) => void;
}

export interface Angular2PluginViewportEvents {
  readonly resized: Subject<{width: number, height: number}>;
  readonly spawnContextMenu: (xPos: number, yPos: number, items: any[], isAbsolutePos?: boolean) => boolean;
  readonly registerCloseHandler: (handler: () => Promise<any>) => void;
}
