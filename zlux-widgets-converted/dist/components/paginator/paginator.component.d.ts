/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
export declare class ZluxPaginatorComponent implements OnChanges {
    rows: number;
    totalRecords: number;
    hasMoreRecords: boolean;
    onPageChange: EventEmitter<any>;
    onFetchMoreData: EventEmitter<void>;
    pageIndex: number;
    loadedPageNumber: number;
    isInputIncorrect: boolean;
    preventEvent: boolean;
    get indexMax(): number;
    get indexMin(): number;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    onChange(event: any): void;
    onPrevButtonClick(): void;
    onNextButtonClick(): void;
    onFirstButtonClick(): void;
    pageChange(): void;
    changePage(pageIndex: number): void;
    toLastPage(): void;
    fetchMoreData(): void;
}
export declare class ZluxPaginatorModule {
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
