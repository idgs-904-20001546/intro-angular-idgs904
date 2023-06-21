import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { OperasbasComponent } from '../operasbas/operasbas.component';


@NgModule({
  declarations: [
    OperasbasComponent
  ],
  imports: [
    MatIconModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [
    OperasbasComponent
  ]
})
export class OperasModule { }
