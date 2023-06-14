import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { IricComponent } from './school/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentComponent,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
