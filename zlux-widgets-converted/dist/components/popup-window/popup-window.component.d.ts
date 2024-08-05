/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { ZluxPopupManagerService } from '../../services/popup-manager.service';
export declare class ZluxPopupWindowComponent implements OnInit, OnDestroy {
    private popupManager;
    header: string;
    dark: boolean;
    currentStyle: popupWindowPopupStyle;
    maxWidth: string;
    maxHeight: string;
    onCloseWindow: EventEmitter<any>;
    popupStyle: popupWindowPopupStyle;
    constructor(popupManager: ZluxPopupManagerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ZluxPopupWindowModule {
}
export interface popupWindowPopupStyle {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
