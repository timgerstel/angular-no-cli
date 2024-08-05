/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { EventEmitter } from "@angular/core";
export declare class ZluxCheckboxComponent {
    value: boolean;
    valueChange: EventEmitter<boolean>;
    label: string;
    inputId: string;
    dark: boolean;
    disabled: boolean;
    style: any;
    styleClass: string;
    onValueChange(model: boolean): void;
}
export declare class ZluxCheckboxModule {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
