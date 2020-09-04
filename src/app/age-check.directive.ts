import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appAgeCheck]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AgeCheckDirective,
    multi: true
  }]
})
export class AgeCheckDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value < 18 || control.value > 60) ? { 'incorrectAge': true } : null;
  }
}
