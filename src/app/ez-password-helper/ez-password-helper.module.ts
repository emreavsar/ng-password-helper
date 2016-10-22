import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzPasswordHelperComponent } from './ez-password-helper.component';
import { EzPasswordValidatorDirective } from './ez-password-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EzPasswordHelperComponent,
    EzPasswordValidatorDirective
  ],
  declarations: [EzPasswordHelperComponent, EzPasswordValidatorDirective]
})
export class EzPasswordHelperModule { }
