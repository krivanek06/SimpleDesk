import {Injectable} from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {User} from 'app/shared/models/UserGroups';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {ImageDTO} from 'app/shared/models/ImageDTO';
import {UserSimple} from 'app/shared/models/RequestDetails';
import {UserHttpService} from 'app/api/user-http.service';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userPrefix = 'logged_in_user';
  public user: User;

  constructor(private authService: AuthenticationService, private userHttp: UserHttpService) {
    this.checkIfUserAvailable();
  }


  public loadLoggedInUser(): Observable<boolean> {
    return this.userHttp.getBasicInformation().pipe(
      tap(user => {
        this.saveUserToLocalStorage(user);
        this.user = user;
      }),
      mapTo(true),
      catchError(error => {
        console.log(error);
        return of(false);
      }));
  }

  private checkIfUserAvailable(): void {
    if (this.user === undefined) {
      this.user = JSON.parse(localStorage.getItem(this.userPrefix));
    }
  }

  private saveUserToLocalStorage(user: User): void {
    localStorage.setItem(this.userPrefix, JSON.stringify(user));
  }

  public removeUserFromLocalStorage() {
    localStorage.removeItem(this.userPrefix);
  }

  public changeUserImage(image: ImageDTO) {
    this.user.photoBytes = image.imageBytes;
    this.saveUserToLocalStorage(this.user);
  }

  public getUserSimple(): UserSimple {
    return {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      photoBytes: this.user.photoBytes,
    };
  }

  public isSolverRightHand(): Observable<boolean> {
    return combineLatest(
      this.isSolver(),
      this.isManagerRightHand(),
      this.isManager(),
      (one, two, three) => (one && (two || three))
    );
  }

  public isAdmin(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_ADMIN")));
  }

  public isGhost(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_GHOST")));
  }

  public isManager(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_MANAGER")));
  }

  public isManagerRightHand(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_MANAGER_RIGHT_HAND")));
  }

  public isSolver(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_SOLVER")));
  }

  public hasPrivilegeAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Správa aplikácie")));
  }

  public hasFinanceModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Finance")));
  }

  public hasTicketModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Ticket")));
  }

  public hasReportModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Report")));
  }

  public isMoreThanNormalUser(): Observable<boolean> {
    return combineLatest(
      this.isAdmin(),
      this.isGhost(),
      this.isSolver(),
      this.isManager(),
      this.isManagerRightHand(),
      (one, two, three, four, five) => (one || two || three || four || five));
  }

}
