import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormValidationMonitorModule } from 'form-validation-monitor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormValidationMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
