import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    imports: [CommonModule, MatDialogModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }
