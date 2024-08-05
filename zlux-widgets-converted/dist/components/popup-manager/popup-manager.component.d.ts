/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { ZluxPopupManagerService, ErrorReportStruct } from '../../services/popup-manager.service';
export declare class ZluxPopupManagerComponent {
    private popupManager;
    static REPORT_VISIBLE_TIMEOUT: number;
    blockCount: number;
    currentErrorBlocking: ErrorReportStruct;
    currentErrorNonblocking: ErrorReportStruct;
    errors: ErrorReportStruct[];
    constructor(popupManager: ZluxPopupManagerService);
    updateErrors(): void;
    createReport(error: any): void;
    removeReport(id: number): void;
    block(): void;
    unblock(): void;
    closeForegroundError(error: any): void;
    onChoose(error: any, buttonCaption: any): void;
    getClass(): string;
}
export declare class ZluxPopupManagerModule {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
