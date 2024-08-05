

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

import { NgModule, Directive, Input, ElementRef, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import styles from '../../assets/css/inputtext.module.css';

@Directive({
  selector: '[zluxInputText]'
})
export class ZluxInputText implements OnInit {
  @Input() dark: boolean = false;

  constructor(private element: ElementRef) {
    this.element.nativeElement.className += ' ' + styles['text-input'];
  }

  ngOnInit(): void {
    if (this.dark) {
      this.element.nativeElement.className += ' ' + styles['text-input-dark'];
    }
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [ZluxInputText],
  declarations: [ZluxInputText]
})
export class ZluxInputTextModule { }


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

