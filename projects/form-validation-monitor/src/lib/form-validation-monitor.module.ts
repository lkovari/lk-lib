import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormValidationMonitorComponent } from './form-validation-monitor.component';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,    
    CommonModule
  ],
  exports: [FormValidationMonitorComponent]
})
export class FormValidationMonitorModule { }
