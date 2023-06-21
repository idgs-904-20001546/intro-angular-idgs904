import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { IricComponent } from './school/iric/iric.component';
import { MenuComponent } from './school/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PlusComponent } from './school/forms/plus/plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasbasComponent } from './school/forms/operasbas/operasbas.component';
import { OperasModule } from './school/forms/operas/operas.module';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentComponent,
    IricComponent,
    MenuComponent,
    PlusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
