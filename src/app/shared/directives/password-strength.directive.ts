import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS, ValidationErrors,
  Validator } from '@angular/forms';
import { FormValidationService } from 'src/app/core/services/form-validation.service';

@Directive({
  selector: '[appPasswordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true
    }
  ]
})
export class PasswordStrengthDirective implements Validator {

  constructor(private validation: FormValidationService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validation.passwordStrength()(control);
  }
}
