import {Injectable} from '@angular/core';
import {ApplicationPrivilege, User, UserSimple} from "../model/User";
import {TicketPrivilege} from "../../features/requirement/model/Request";

@Injectable({
  providedIn: 'root',
})
export class UserConstructorService {
  public static constructUserRegistrationDTO(username: string, firstName: string, lastName: string, email: string): UserSimple {
    const userRegistration: UserSimple = {
      username,
      firstName,
      lastName,
      email,
      fullName: firstName + ' ' + lastName,
      active: true,
      dateCreation: new Date().getTime().toString(),
      dateEnding: undefined,
      userShortedName: firstName.charAt(0) + '. ' + lastName,
    };

    return userRegistration;
  }


  public static constructTicketPrivilege(solveSoftware: string[],
                                         solveHardware: string[],
                                         solveServer: string[],
                                         solveTickets: string[],
  ): TicketPrivilege {
    const ticketPrivilege: TicketPrivilege = {
      Software: solveSoftware ? solveSoftware : [],
      Hardware: solveHardware ? solveHardware : [],
      Server: solveServer ? solveServer : [],
      User: solveTickets.includes('User') ? ["True"] : [],
      Other: solveTickets.includes('Other') ? ["True"] : []
    };
    return ticketPrivilege;
  }

  public static constructApplicationPrivilege(moduleTypesToUse: string[],
                                              requestTypesToSolve: string[],
                                              ticketPrivilege: TicketPrivilege,
                                              submitFinanceRequests: string[]
  ): ApplicationPrivilege {
    const privilege: ApplicationPrivilege = {
      moduleTypesToUse: moduleTypesToUse === null ? [] : moduleTypesToUse,
      requestTypesToSolve: requestTypesToSolve === null ? [] : requestTypesToSolve,
      solveTickets: ticketPrivilege,
      submitFinanceRequests: submitFinanceRequests === null ? [] : submitFinanceRequests
    };
    return privilege;
  }


}
