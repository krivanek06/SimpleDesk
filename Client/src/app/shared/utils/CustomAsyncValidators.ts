import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {UserHttpService} from "../../core/api/user-http.service";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, first, map, switchMap, take, tap} from "rxjs/operators";

export class CustomAsyncValidators {

  static asyncUniqueUsernameValidator(userService: UserHttpService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        debounceTime(650),
        distinctUntilChanged(),
        first(),
        map((username: string) => username.toLocaleLowerCase()),
        switchMap((username: string) => userService.checkIfUsernameExists(username).pipe(
          map((result: boolean) => result ? {notUniqueUsername: true} : null)
        ))
      );
    };
  }


}
