/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { EventEmitter } from '@angular/core';
export declare class ZluxErrorReportComponent {
    severity: string;
    title: string;
    theme: string;
    style: any;
    buttons: string[];
    timestamp: Date | undefined;
    callToAction: boolean;
    action: EventEmitter<any>;
    constructor();
}
export declare class ZluxErrorReportModule {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
