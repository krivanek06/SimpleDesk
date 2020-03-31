import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ApplicationPrivilege} from "../../../core/model/User";

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivilegesComponent implements OnInit {
  @Input() name;
  @Input() applyGreenColor = false;
  @Input() enabledPrivilegesCopy: ApplicationPrivilege;
  @Input() disabledPrivilegesCopy: ApplicationPrivilege;
  @Input() readonly enabledPrivilegesOrig: ApplicationPrivilege;
  @Input() readonly disabledPrivilegesOrig: ApplicationPrivilege;
  @Input() activateUnableClick = false; // true if editing privileges
  @Input() hideUnassignedPriv = true; // true only want to print assigned privileges


  constructor() {
    this.enabledPrivilegesCopy = {
      moduleTypesToUse: [],
      requestTypesToSolve: [],
      submitFinanceRequests: [],
      solveTickets: {
        Software: null,
        Hardware: null,
        Server: null,
        Other: [],
        User: []
      }
    };

    this.disabledPrivilegesCopy = {
      moduleTypesToUse: [],
      requestTypesToSolve: [],
      submitFinanceRequests: [],
      solveTickets: {
        Software: [],
        Hardware: [],
        Server: [],
        Other: [],
        User: []
      }
    };

  }

  ngOnInit() {

  }

  edit() {
    this.enabledPrivilegesCopy = JSON.parse(JSON.stringify(this.enabledPrivilegesOrig));
    this.disabledPrivilegesCopy = JSON.parse(JSON.stringify(this.disabledPrivilegesOrig));
  }

  changeModuleTypeToUse(name: string) {
    if (!this.activateUnableClick) {
      return;
    }

    if (this.enabledPrivilegesCopy.moduleTypesToUse.includes(name)) {
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        moduleTypesToUse: this.enabledPrivilegesCopy.moduleTypesToUse.filter(moduleName => moduleName !== name)
      };
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        moduleTypesToUse: [...this.disabledPrivilegesCopy.moduleTypesToUse, name]
      };
    } else {
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        moduleTypesToUse: this.disabledPrivilegesCopy.moduleTypesToUse.filter(moduleName => moduleName !== name)
      };
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        moduleTypesToUse: [...this.enabledPrivilegesCopy.moduleTypesToUse, name]
      };
    }
    if (name === 'Finance') {
      this.changesubmitFinanceRequestsAll();
    }
  }

  changeRequestTypeToSolve(name: string) {
    if (!this.activateUnableClick) {
      return;
    }

    if (this.enabledPrivilegesCopy.requestTypesToSolve.includes(name)) {
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        requestTypesToSolve: this.enabledPrivilegesCopy.requestTypesToSolve.filter(typeName => typeName !== name)
      };
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        requestTypesToSolve: [...this.disabledPrivilegesCopy.requestTypesToSolve, name]
      };
    } else {
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        requestTypesToSolve: this.disabledPrivilegesCopy.requestTypesToSolve.filter(typeName => typeName !== name)
      };
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        requestTypesToSolve: [...this.enabledPrivilegesCopy.requestTypesToSolve, name]
      };
    }
    if (name === 'Ticket') {
      this.changeTicketsAll();
    }
  }

  changeTicketsAll() {
    if (!this.activateUnableClick) {
      return;
    }
    this.disabledPrivilegesCopy.solveTickets.Software = this.disabledPrivilegesCopy.solveTickets.Software.concat(this.enabledPrivilegesCopy.solveTickets.Software);
    this.enabledPrivilegesCopy.solveTickets.Software = null;

    this.disabledPrivilegesCopy.solveTickets.Hardware = this.disabledPrivilegesCopy.solveTickets.Hardware.concat(this.enabledPrivilegesCopy.solveTickets.Hardware);
    this.enabledPrivilegesCopy.solveTickets.Hardware = null;

    this.disabledPrivilegesCopy.solveTickets.Server = this.disabledPrivilegesCopy.solveTickets.Server.concat(this.enabledPrivilegesCopy.solveTickets.Server);
    this.enabledPrivilegesCopy.solveTickets.Server = null;

    this.enabledPrivilegesCopy.solveTickets.Other = [];
    this.disabledPrivilegesCopy.solveTickets.Other = ['True'];

    this.enabledPrivilegesCopy.solveTickets.User = [];
    this.disabledPrivilegesCopy.solveTickets.User = ['True'];

  }

  changesubmitFinanceRequests(name: string) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.moduleTypesToUse.includes("Finance")) {
      return;
    }

    if (this.enabledPrivilegesCopy.submitFinanceRequests.includes(name)) {
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        submitFinanceRequests: this.enabledPrivilegesCopy.submitFinanceRequests.filter(typeName => typeName !== name)
      };

      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        submitFinanceRequests: [...this.disabledPrivilegesCopy.submitFinanceRequests, name]
      };
    } else {
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        submitFinanceRequests: this.disabledPrivilegesCopy.submitFinanceRequests.filter(typeName => typeName !== name)
      };

      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        submitFinanceRequests: [...this.enabledPrivilegesCopy.submitFinanceRequests, name]
      };
    }
  }

  changesubmitFinanceRequestsAll() {
    if (!this.activateUnableClick) {
      return;
    }

    this.disabledPrivilegesCopy.submitFinanceRequests = this.disabledPrivilegesCopy.submitFinanceRequests.concat(this.enabledPrivilegesCopy.submitFinanceRequests);
    this.enabledPrivilegesCopy.submitFinanceRequests = [];

  }

  changeSolveTicketsSoftware(name: string) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket") ||
      this.enabledPrivilegesCopy.solveTickets.Software === null) {
      return;
    }

    if (this.enabledPrivilegesCopy.solveTickets.Software.includes(name)) {
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        solveTickets: {
          ...this.enabledPrivilegesCopy.solveTickets,
          Software: this.enabledPrivilegesCopy.solveTickets.Software.filter(typeName => typeName !== name)
        }
      };

      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        solveTickets: {
          ...this.disabledPrivilegesCopy.solveTickets,
          Software: [...this.disabledPrivilegesCopy.solveTickets.Software, name]
        }
      };
    } else {
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        solveTickets: {
          ...this.disabledPrivilegesCopy.solveTickets,
          Software: this.disabledPrivilegesCopy.solveTickets.Software.filter(typeName => typeName !== name)
        }
      };

      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        solveTickets: {
          ...this.enabledPrivilegesCopy.solveTickets,
          Software: [...this.enabledPrivilegesCopy.solveTickets.Software, name]
        }
      };
    }
  }

  changeSolveTicketsSoftwareAll(justClear ?: boolean) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket")) {
      return;
    }
    if (this.enabledPrivilegesCopy.solveTickets.Software !== null || justClear) {
      this.disabledPrivilegesCopy.solveTickets.Software = this.disabledPrivilegesCopy.solveTickets.Software.concat(this.enabledPrivilegesCopy.solveTickets.Software);
      this.enabledPrivilegesCopy.solveTickets.Software = null;
    } else {
      this.enabledPrivilegesCopy.solveTickets.Software = [];
    }
  }

  changeSolveTicketsHardware(name: string) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket") ||
      this.enabledPrivilegesCopy.solveTickets.Hardware === null) {
      return;
    }

    if (this.enabledPrivilegesCopy.solveTickets.Hardware.includes(name)) {
      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        solveTickets: {
          ...this.enabledPrivilegesCopy.solveTickets,
          Hardware: this.enabledPrivilegesCopy.solveTickets.Hardware.filter(typeName => typeName !== name)
        }
      };

      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        solveTickets: {
          ...this.disabledPrivilegesCopy.solveTickets,
          Hardware: [...this.disabledPrivilegesCopy.solveTickets.Hardware, name]
        }
      };

    } else {
      this.disabledPrivilegesCopy = {
        ...this.disabledPrivilegesCopy,
        solveTickets: {
          ...this.disabledPrivilegesCopy.solveTickets,
          Hardware: this.disabledPrivilegesCopy.solveTickets.Hardware.filter(typeName => typeName !== name)
        }
      };

      this.enabledPrivilegesCopy = {
        ...this.enabledPrivilegesCopy,
        solveTickets: {
          ...this.enabledPrivilegesCopy.solveTickets,
          Hardware: [...this.enabledPrivilegesCopy.solveTickets.Hardware, name]
        }
      };
    }
  }


  changeSolveTicketsHardwareAll(justClear ?: boolean) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket")) {
      return;
    }
    if (this.enabledPrivilegesCopy.solveTickets.Hardware !== null || justClear) {
      this.disabledPrivilegesCopy.solveTickets.Hardware = this.disabledPrivilegesCopy.solveTickets.Hardware.concat(this.enabledPrivilegesCopy.solveTickets.Hardware);
      this.enabledPrivilegesCopy.solveTickets.Hardware = null;
    } else {
      this.enabledPrivilegesCopy.solveTickets.Hardware = [];
    }
  }

  changeSolveTicketsServer(name: string) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket") ||
      this.enabledPrivilegesCopy.solveTickets.Server === null) {
      return;
    }

    if (this.enabledPrivilegesCopy.solveTickets.Server.includes(name)) {
      if (this.enabledPrivilegesCopy.solveTickets.Server.includes(name)) {
        this.enabledPrivilegesCopy = {
          ...this.enabledPrivilegesCopy,
          solveTickets: {
            ...this.enabledPrivilegesCopy.solveTickets,
            Server: this.enabledPrivilegesCopy.solveTickets.Server.filter(typeName => typeName !== name)
          }
        };

        this.disabledPrivilegesCopy = {
          ...this.disabledPrivilegesCopy,
          solveTickets: {
            ...this.disabledPrivilegesCopy.solveTickets,
            Server: [...this.disabledPrivilegesCopy.solveTickets.Server, name]
          }
        };
      } else {
        this.disabledPrivilegesCopy = {
          ...this.disabledPrivilegesCopy,
          solveTickets: {
            ...this.disabledPrivilegesCopy.solveTickets,
            Server: this.disabledPrivilegesCopy.solveTickets.Server.filter(typeName => typeName !== name)
          }
        };

        this.enabledPrivilegesCopy = {
          ...this.enabledPrivilegesCopy,
          solveTickets: {
            ...this.enabledPrivilegesCopy.solveTickets,
            Server: [...this.enabledPrivilegesCopy.solveTickets.Server, name]
          }
        };
      }
    }
  }

  changeSolveTicketsServerAll(justClear ?: boolean) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket")) {
      return;
    }
    if (this.enabledPrivilegesCopy.solveTickets.Server !== null || justClear) {
      this.disabledPrivilegesCopy.solveTickets.Server = this.disabledPrivilegesCopy.solveTickets.Server.concat(this.enabledPrivilegesCopy.solveTickets.Server);
      this.enabledPrivilegesCopy.solveTickets.Server = null;
    } else {
      this.enabledPrivilegesCopy.solveTickets.Server = [];
    }
  }

  changeSolveTicketsUserAll(justClear ?: boolean) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket")) {
      return;
    }

    if (this.enabledPrivilegesCopy.solveTickets.User.length > 0 || justClear) {
      this.enabledPrivilegesCopy.solveTickets.User = [];
      this.disabledPrivilegesCopy.solveTickets.User = ['True'];
    } else {
      this.disabledPrivilegesCopy.solveTickets.User = [];
      this.enabledPrivilegesCopy.solveTickets.User = ['True'];
    }
  }


  changeSolveTicketsOtherAll(justClear ?: boolean) {
    if (!this.activateUnableClick || !this.enabledPrivilegesCopy.requestTypesToSolve.includes("Ticket")) {
      return;
    }
    if (this.enabledPrivilegesCopy.solveTickets.Other.length > 0 || justClear) {
      this.enabledPrivilegesCopy.solveTickets.Other = [];
      this.disabledPrivilegesCopy.solveTickets.Other = ['True'];
    } else {
      this.disabledPrivilegesCopy.solveTickets.Other = [];
      this.enabledPrivilegesCopy.solveTickets.Other = ['True'];
    }
  }
}
