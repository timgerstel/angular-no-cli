/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { OnInit, OnDestroy } from '@angular/core';
import { ZluxPopupManagerService } from '../../services/popup-manager.service';
export declare class ZluxPopupPanelComponent implements OnInit, OnDestroy {
    private popupManager;
    isActive: boolean;
    modal: boolean;
    autoShow: boolean;
    ignoreVeil: boolean;
    blockDisplay: boolean;
    constructor(popupManager: ZluxPopupManagerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
}
export declare class ZluxPopupPanelModule {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
