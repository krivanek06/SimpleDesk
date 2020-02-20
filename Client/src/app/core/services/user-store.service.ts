import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {ImageDTO, User, UserSimple} from 'app/resources/user/model/User';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {UserHttpService} from 'app/api/user-http.service';
import {AuthenticationService} from './authentication.service';
import {Request} from "../../resources/request/model/interface/Request";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userPrefix = 'logged_in_user';
  private user$: BehaviorSubject<User> = new BehaviorSubject(null);


  constructor(private authService: AuthenticationService, private userHttp: UserHttpService) {
    if (localStorage.getItem(this.userPrefix)) {
      console.log('start')
      this.user$.next(JSON.parse(localStorage.getItem(this.userPrefix) ) as User);
    }
  }

  get user(): User {
    return this.user$.getValue();
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  loadLoggedInUser(): Observable<boolean> {
    return this.userHttp.getBasicInformation().pipe(
      tap(user => {
        this.saveUserToLocalStorage(user);
        this.user$.next(user);
      }),
      mapTo(true),
      catchError(error => {
        console.log(error);
        return of(false);
      }));
  }

  private saveUserToLocalStorage(user: User): void {
    localStorage.setItem(this.userPrefix, JSON.stringify(user));
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem(this.userPrefix);
    this.user$.next(null);
  }

  changeUserImage(image: ImageDTO) {
    this.user.photoBytes = image.imageBytes;
    this.saveUserToLocalStorage(this.user);
  }

  getUserSimple(): UserSimple {
    return {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      photoBytes: this.user.photoBytes,
    };
  }

  isSolverRightHand(): Observable<boolean> {
    return combineLatest(
      this.isSolver(),
      this.isManagerRightHand(),
      this.isManager(),
      (one, two, three) => (one && (two || three))
    );
  }

  isAdmin(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_ADMIN")));
  }

  isGhost(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_GHOST")));
  }

  isManager(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_MANAGER")));
  }

  isManagerRightHand(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_MANAGER_RIGHT_HAND")));
  }

  isSolver(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.AUTHORITIES.includes("ROLE_SOLVER")));
  }

  hasPrivilegeAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Správa aplikácie")));
  }

  hasFinanceModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Finance")));
  }

  hasTicketModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Ticket")));
  }

  hasReportModuleAccess(): Observable<boolean> {
    return this.authService.getDecodedToken().pipe(map(x => x.MODULE_TYPES_TO_USE.includes("Report")));
  }

  isMoreThanNormalUser(): Observable<boolean> {
    return combineLatest(
      this.isAdmin(),
      this.isGhost(),
      this.isSolver(),
      this.isManager(),
      this.isManagerRightHand(),
      (one, two, three, four, five) => (one || two || three || four || five));
  }

}
