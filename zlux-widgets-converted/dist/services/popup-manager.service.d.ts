/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { Observable, Subject } from 'rxjs';
export interface ErrorReportStruct {
    severity: string;
    modal: boolean;
    text: string;
    title: string;
    buttons: string[];
    id: number;
    timestamp: Date;
    subject: Subject<any>;
    theme?: string;
    style?: {};
    callToAction?: boolean;
}
export declare enum ZluxErrorSeverity {
    ERROR = "error",
    WARNING = "warning",
    INFO = "info"
}
export declare class ZluxPopupManagerService {
    eventsSubject: Subject<any>;
    listeners: any;
    events: any;
    logger: any;
    constructor();
    setLogger(logger: any): void;
    on(name: any, listener: any): void;
    broadcast(name: any, ...args: any[]): void;
    processButtons(buttons: any[]): any[];
    block(): void;
    unblock(): void;
    getLoggerSeverity(severity: ZluxErrorSeverity): any;
    removeReport(id: number): void;
    createErrorReport(severity: ZluxErrorSeverity, title: string, text: string, options?: any): ErrorReportStruct;
    reportError(severity: ZluxErrorSeverity, title: string, text: string, options?: any): Observable<any>;
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
