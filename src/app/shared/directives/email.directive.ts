import { Directive } from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        }
    ]
})
export class EmailValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors | null {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        const valid = emailRegex.test(control.value);
        return valid ? null : { invalidEmailFormat: true };
    }
}
