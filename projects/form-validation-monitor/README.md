# FormValidationMonitor

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Usage of the form-validation-monitor

The library lk-lib is contains currently the Angular form validation monitor tool. (lk-form-validation-monitor)
The purpose of the Angular form validation monitor tool is,  tho show in realtime the angular validation result (status, valid, invalid) and validation signales (pristine, dirty, touched, untouched) with the FormControl, FormGroup, FormArray value eg. of the the three fundamental building blocks (FormControl, FormGroup, FormArray) of Angular forms. If the main form contain complex building block eg. FormGroup or FormArray, the user if click on it, can recursivelly traverse the complex building block content.

Usage example:
<lk-form-validation-monitor []="mainFrorm"></lk-form-validation-monitor>

Where the mainFrorm is the reference in the templae of the form, 
<form (ngSubmit)="onSubmit(dataEntryForm)" #dataEntryForm="ngForm" novalidate autocomplete="off">

what we captured with ViewChild, eg.
@ViewChild('dataEntryForm', {static: true} ) dataEntryForm: NgForm | undefined;

Do not forget to import the FormValidationMonitorModule.

## Build

Run `ng build form-validation-monitor` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build form-validation-monitor`, go to the dist folder `cd dist/form-validation-monitor` and run `npm publish`.

## Sources

Demo example app
https://github.com/lkovari/lk-lib/tree/main/projects/form-validation-monitor-example

The library
https://github.com/lkovari/lk-lib/tree/main/projects/form-validation-monitor


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
