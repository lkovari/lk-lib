import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from './user.interface';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-validation-monitor-example';
  user: IUser = new User();
  userNameMinLength = 5;
  userNameMaxLength = 20;
  // originated from : https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204
  usPhoneNumberPattern = '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$';
  submittedFormData: any;
  @ViewChild('dataEntryForm', {static: true} ) dataEntryForm: NgForm | undefined;

  constructor() {
    
   }

  ngOnInit() {
    this.user = new User();
  }


  setValues() {
    this.dataEntryForm?.resetForm();
    this.user = new User('lkovary', 'lkovary@lkovary.com', 8001234567);
    console.log('setValues Click event fired');
  }

  clearValues() {
    this.dataEntryForm?.form.setValue(
      {
        userName: null,
        email: null,
        phone: null
      }
    );
    this.dataEntryForm?.resetForm();
    this.submittedFormData = undefined;
    console.log('clearValues click event fired');
  }

  getDataEntryForm(): NgForm | undefined {
    return this.dataEntryForm;
  }

  onSubmit(userForm: NgForm) {
    this.submittedFormData = userForm.value;
    console.log(this.dataEntryForm);
  }

}
