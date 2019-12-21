import { FormGroup, AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export function accessValidator(accessPeople: any[]) {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (accessPeople === undefined || accessPeople.length === 0) {
            return { accessValid: true };
          }
          return null;
    };
}
