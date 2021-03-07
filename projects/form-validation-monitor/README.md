# Form Validation Monitor

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Description of the form-validation-monitor

The library lk-lib is contains currently the Angular form validation monitor tool. (lk-form-validation-monitor)
The purpose of the Angular form validation monitor tool is,  tho show in realtime the angular validation result (status, valid, invalid) and validation signales (pristine, dirty, touched, untouched) with the FormControl, FormGroup, FormArray value eg. of the the three fundamental building blocks (FormControl, FormGroup, FormArray) of Angular forms. If the main form contain complex building block eg. FormGroup or FormArray, the user if click on it, can recursivelly traverse the complex building block content.

## Usage of the  Form Validation Monitor selector: _lk-form-validation-monitor_
_<lk-form-validation-monitor [mainFormGroup]="dataEntryForm"></lk-form-validation-monitor>_

Where the dataEntryForm is the reference in the templae of the main form, 
_<form (ngSubmit)="onSubmit(dataEntryForm)" #dataEntryForm="ngForm" novalidate autocomplete="off">_

what we captured with ViewChild, eg.
_@ViewChild('dataEntryForm', {static: true} ) dataEntryForm: NgForm | undefined;_

Do not forget to import the _FormValidationMonitorModule_ into that module which contains the main form.

## Build

Run `ng build form-validation-monitor` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build form-validation-monitor`, go to the dist folder `cd dist/form-validation-monitor` and run `npm publish`.

## Sources

[Demo app source of the lk-form-validation-monitor](https://github.com/lkovari/lk-lib/tree/main/projects/form-validation-monitor-example) 

The library
[Library source of the  lk-form-validation-monitor](https://github.com/lkovari/lk-lib/tree/main/projects/form-validation-monitor)

## Example UI.

![Example UI](https://github.com/lkovari/KLHome/blob/master/src/assets/images/Example-Of-the-lk-form-validation-monitor.png)