import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// validator creation function
export const passwordStrengthValidator = (): ValidatorFn => {
  // validator function
  return (control: AbstractControl): ValidationErrors | null => {

    const value: string = control.value;

    if (!value || (value && !value.length)) return null;

    const hasLowercase: boolean = /[A-Z]+/.test(value);
    const hasUpperCase: boolean = /[a-z]+/.test(value);
    const hasNumber: boolean = /[0-9]+/.test(value);
    const hasLength: boolean = value.length >= 8;

    const passwordIsValid: boolean = hasLowercase && hasUpperCase && hasNumber && hasLength;
    const validationErrors: ValidationErrors = {passwordStrength: true};

    // se la password è valida restituisco null, cioè NON sono stati trovati errori (NULL ERRORS);
    // altrimenti, restituisco l'oggetto ValidationErrors (sono stati trovati degli errori)
    return passwordIsValid ? null : validationErrors;
  }
}

