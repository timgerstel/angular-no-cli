
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
import * as React from 'react';

import { Angular2InjectionTokens, Angular2PluginWindowActions, Angular2PluginViewportEvents,  } from '../../../src/shared/inject-resources';

type ReactPluginWindowActions = Angular2PluginWindowActions;
type ReactPluginViewportEvents = Angular2PluginViewportEvents;

export interface ReactMVDResources {
  readonly windowActions: ReactPluginWindowActions | null;
  readonly viewportEvents: ReactPluginViewportEvents;
  readonly logger: any;
  readonly pluginDefinition: any;
  readonly launchMetadata: any;
  readonly instanceId: any;
};

export const MVDResources: React.Context<ReactMVDResources> = React.createContext({} as any);

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
