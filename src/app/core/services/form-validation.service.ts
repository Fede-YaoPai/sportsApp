import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  public passwordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      if (!value || (value && !value.length)) return null;

      const hasLowercase: boolean = /[A-Z]+/.test(value);
      const hasUpperCase: boolean = /[a-z]+/.test(value);
      const hasNumber: boolean = /[0-9]+/.test(value);
      const hasLength: boolean = value.length >= 8;

      const passwordIsValid: boolean =
        hasLowercase && hasUpperCase && hasNumber && hasLength;

      const validationErrors: ValidationErrors = {passwordStrength: true};

      return passwordIsValid ? null : validationErrors;
    }
  }
}
