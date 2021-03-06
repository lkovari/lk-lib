import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormValidationMonitorComponent } from './form-validation-monitor.component';



@NgModule({
  declarations: [FormValidationMonitorComponent],
  imports: [
    BrowserModule,
    FormsModule,    
    CommonModule
  ],
  exports: [FormValidationMonitorComponent]
})
export class FormValidationMonitorModule { }
