function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/app-management.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/app-management.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAppManagementAppManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-navigation></app-navigation>\n\n\n<div id='contentContainer'>\n    <div class=\"windowButtonChangers\">\n        <span class='formTitleSmall'>Správa aplikácie</span>\n        <a mat-raised-button class=\"requestFormButton\" routerLink=\"/app_management/register_user\"\n        *ngIf =  \"(isAdmin$ | async) || (hasPrivilegeAccess$ | async)\"  >\n            Registrovať uživateĺa\n        </a>\n        <a mat-raised-button class=\"requestFormButton\" routerLink=\"/app_management/register_group\"\n        *ngIf =  \"(isAdmin$ | async) || (hasPrivilegeAccess$ | async)\">\n            Registrovať skupinu\n        </a>      \n    </div>\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-group/register-group.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-group/register-group.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAppManagementRegisterGroupRegisterGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = 'leftContainer'>\n    <form [formGroup] = \"groupRegistrationForm\" (ngSubmit)=\"submit()\" #groupFormViewChild=\"ngForm\">\n        <div class='inlineParameters formTitleContainer'>\n            <img src = \"../../../../assets/images_design/registeru_user_icon.png\" class='registerUserIcon'>\n            <span class='formTitle'>Registrovanie skupiny</span>\n        </div>\n\n       \n        <div class = 'formInformationContainer'>\n             <!-- information -->\n            <div class = 'formInformationContainerSubcontent'>\n                <span class='formTitleSmall'>\n                    <img src = '../../../../assets/images_design/info.png' class='icon'/>\n                    Informácie skupiny\n                </span>\n                \n                <mat-form-field  class='inlineParameters extraSpace'>\n                    <input matInput placeholder=\"Meno skupiny\" formControlName = \"groupName\">\n                    <mat-error *ngIf=\"groupName.invalid\">  Prosím zadefinujte meno skupiny</mat-error>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters'>\n                    <input  matInput placeholder=\"Email skupiny\" formControlName = \"groupEmail\">\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters'>\n                    <textarea  matInput placeholder=\"Popis skupiny\" formControlName = \"groupDescription\"></textarea>\n                    <mat-error *ngIf=\"groupDescription.invalid\">  Prosím zadefinujte krátky popis skupiny, minimálne 10 znakov</mat-error>\n                </mat-form-field>\n                <hr>\n            </div>\n\n            <!-- user selection -->\n            <div class = 'formInformationContainerSubcontent'>\n                <span class='formTitleSmall'>\n                    <img src = '../../../../assets/images_design/groups_icon_2.png' class='icon'/>\n                    Uživatelia skupiny\n                </span>\n\n                <mat-form-field class='inlineParameters extraSpace' >\n                    <mat-label>Manežér skupiny</mat-label>\n                    <mat-select formControlName=\"groupManager\"   >\n                        <mat-option *ngFor = \"let user of allAvailableUsers\" [value] = \"user\">\n                                {{ user.firstName }}  {{ user.lastName }}\n                        </mat-option>\n\n                        <mat-error *ngIf=\"groupManager.invalid\">  Prosím vyberte menežéra skupiny</mat-error>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' >\n                    <mat-label>Sledovatelia skupiny</mat-label>\n                    <mat-select formControlName=\"usersWatchGroup\" multiple >\n                        <mat-option *ngFor = \"let user of allAvailableUsers\" [value] = \"user\">\n                                {{ user.firstName }}  {{ user.lastName }}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' >\n                    <mat-label>Členovia skupiny</mat-label>\n                    <mat-select formControlName=\"usersInGroup\"  multiple >\n                        <mat-option *ngFor = \"let user of allAvailableUsers\" [value] = \"user\">\n                                {{ user.firstName }}  {{ user.lastName }}\n                        </mat-option>\n\n                        <mat-error *ngIf=\"usersInGroup.invalid\">  Prosím vyberte členov do skupiny</mat-error>\n                    </mat-select>\n                </mat-form-field>\n                <hr>\n            </div>\n        </div>\n\n\n\n\n\n\n\n        <!-- privileges -->\n        <div class = 'formInformationContainer'>\n            <div class = 'formInformationContainerSubcontent'>\n                <span class='formTitleSmall'>\n                    <img src = '../../../../assets/images_design/checkmark.png' class='icon'/>\n                    Právomoc skupiny\n                </span>\n\n                <mat-form-field class='inlineParameters extraSpace' >\n                    <mat-label>Moduly na používanie</mat-label>\n                    <mat-select formControlName=\"moduleTypesToUse\" multiple (selectionChange)= \"changeModuleTypesToUse()\">\n                        <mat-option value = \"Ticket\"> Tikety </mat-option>\n                        <mat-option value = \"Report\"> Reporty </mat-option>\n                        <mat-option value = \"Finance\"> Financie </mat-option>\n                        <mat-option value = \"Privilege\"\n                                    matTooltip=\"Vybertu možnosť ak chcete spístupniť sekciu 'Správa aplikácie' pre uživateľov v danej skupine\"\n                                    matTooltipPosition=\"right\"\n                                    matTooltipClass=\"custom-tooltip\"\n                                    matTooltipShowDelay=\"150\"> \n                                        Privilege \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' *ngIf = \"moduleTypesToUse.value !== null && moduleTypesToUse.value.includes('Finance')\" multiple>\n                    <mat-label>Posielanie finančných typov</mat-label>\n                    <mat-select formControlName=\"submitFinanceRequests\" multiple>\n                        <mat-option *ngFor=\"let financeType of financeTypes\" [value] = \"financeType.name\"> \n                            {{ financeType.name }} \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                \n                <mat-form-field class='inlineParameters' >\n                    <mat-label>Požiadavky na riešenie</mat-label>\n                    <mat-select formControlName=\"requestTypesToSolve\" multiple (selectionChange)= \"changeTicketTypeToSolve()\">\n                        <mat-option value = \"Ticket\"> Tikety </mat-option>\n                        <mat-option value = \"Report\"> Reporty </mat-option>\n                        <mat-option value = \"Finance\"> Financie </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n\n                <mat-form-field class='inlineParameters' *ngIf = \"requestTypesToSolve.value != null && requestTypesToSolve.value.includes('Ticket')\">\n                    <mat-label>Tikety na riešenie</mat-label>\n                    <mat-select  formControlName=\"solveTickets\" multiple (selectionChange)= \"changeTicketTypeToSolve()\">\n                        <mat-option value = \"Software\"> Software </mat-option>\n                        <mat-option value = \"Hardware\"> Hardware </mat-option>\n                        <mat-option value = \"Server\"> Server </mat-option>\n                        <mat-option value = \"User\"> Užívateľ </mat-option>\n                        <mat-option value = \"Other\"> Iné </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' *ngIf = \"solveTickets.value !== null && solveTickets.value.includes('Software')\" multiple>\n                    <mat-label>Riešenie softvéru</mat-label>\n                    <mat-select formControlName=\"solveSoftware\"  multiple>\n                        <mat-option *ngFor=\"let software of softwares\" [value] = \"software.name\"> \n                            {{ software.name }} \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' *ngIf = \"solveTickets.value !== null && solveTickets.value.includes('Hardware')\" multiple>\n                    <mat-label>Riešenie hardvéru</mat-label>\n                    <mat-select formControlName=\"solveHardware\"  multiple>\n                        <mat-option *ngFor=\"let hardware of hardwares\" [value] = \"hardware.name\"> \n                            {{ hardware.name }} \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class='inlineParameters' *ngIf = \"solveTickets.value !== null && solveTickets.value.includes('Server')\" multiple>\n                    <mat-label>Riešenie serverov</mat-label>\n                    <mat-select formControlName=\"solveServer\"  multiple>\n                        <mat-option *ngFor=\"let server of servers\" [value] = \"server.name\"> \n                            {{ server.name }} \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <hr>\n            </div>   \n        </div>\n\n        <button mat-raised-button color=\"primary\" class=\"sendingButton\"  type=\"submit\">\n            Odoslať\n        </button>\n    </form>\n</div>\n\n\n<div class = 'rightContainer'>\n    <div class = 'formInformationContainerSubcontent smallerContent'>\n        <span class='formTitleSmall'>\n            <img src = '../../../../assets/images_design/research.png' class='icon'/>\n            Detaily skupiny\n        </span>\n\n        <li class='informationsContainer topspace' *ngIf=\"groupName.value !== '' \">\n            <div class='informationTitle'>Meno skupiny</div>\n            <ul class='informationsHolder'>\n                <li > {{groupName.value}} </li> \n            </ul>\n        </li>\n\n        <li class='informationsContainer' *ngIf=\"groupEmail.value !== '' \">\n            <div class='informationTitle'>Email skupiny</div>\n            <ul class='informationsHolder'>\n                <li > {{groupEmail.value}} </li> \n            </ul>\n        </li>\n\n        <li class='informationsContainer' *ngIf=\"groupDescription.value !== '' \">\n            <div class='informationTitle'>Popis skupiny</div>\n            <ul class='informationsHolder'>\n                <li > {{groupDescription.value}} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"groupManager.value !== null \">\n            <div class='informationTitle'>Manažér</div>\n            <ul class='informationsHolder'>\n                <li > {{groupManager.value.firstName}} {{groupManager.value.lastName}} </li> \n            </ul>\n        </li>\n\n        <li class='informationsContainer' *ngIf=\"usersWatchGroup.value !== null \">\n            <div class='informationTitle'>Sledovatelia</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let user of usersWatchGroup.value'> {{user.firstName}} {{user.lastName}} </li> \n            </ul>\n        </li>\n\n        <li class='informationsContainer' *ngIf=\"usersInGroup.value !== null \">\n            <div class='informationTitle'>Členovia</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let user of usersInGroup.value'> {{user.firstName}} {{user.lastName}} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"moduleTypesToUse.value !== null \">\n            <div class='informationTitle'>Používanie modulov</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of moduleTypesToUse.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"submitFinanceRequests.value !== null \">\n            <div class='informationTitle'>Zasielanie financií</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of submitFinanceRequests.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"requestTypesToSolve.value !== null \">\n            <div class='informationTitle'>Riešenie požiadaviek</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of requestTypesToSolve.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"solveTickets.value !== null \">\n            <div class='informationTitle'>Riešenie typov tiketov</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of solveTickets.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"solveSoftware.value !== null \">\n            <div class='informationTitle'>Riešenie typov software</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of solveSoftware.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"solveHardware.value !== null \">\n            <div class='informationTitle'>Riešenie typov hardware</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of solveHardware.value'> {{ type }} </li> \n            </ul>\n        </li>\n        <li class='informationsContainer' *ngIf=\"solveServer.value !== null \">\n            <div class='informationTitle'>Riešenie typov server</div>\n            <ul class='informationsHolder'>\n                <li *ngFor='let type of solveServer.value'> {{ type }} </li> \n            </ul>\n        </li>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-user/register-user.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-user/register-user.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAppManagementRegisterUserRegisterUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class = 'leftContainer'>\n    <form [formGroup] = \"userRegistrationForm\" (ngSubmit)=\"submit()\" #userFormViewChild=\"ngForm\">\n        <div class='inlineParameters formTitleContainer'>\n            <img src = \"../../../../assets/images_design/registeru_user_icon.png\" class='registerUserIcon'>\n            <span class='formTitle'>Registrovanie uživateľa</span>\n        </div>\n\n        <mat-form-field  class='inlineParameters'>\n            <input matInput placeholder=\"Meno uživateľa\" formControlName = \"firstname\">\n            <mat-error *ngIf=\"firstname.invalid\">  Prosím zadefinujte meno uživateľa</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class='inlineParameters'>\n            <input  matInput placeholder=\"Priezvisko uživateľa\" formControlName = \"lastname\">\n            <mat-error *ngIf=\"lastname.invalid\">  Prosím zadefinujte priezvisko uživateľa</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class='inlineParameters'>\n            <input  matInput placeholder=\"Prihlasovacie meno (username) uživateľa\" formControlName = \"username\">\n            <mat-error *ngIf=\"username.invalid\">  Prosím zadefinujte prihlasovacie meno uživateľa</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class='inlineParameters'>\n            <input  matInput placeholder=\"Email uživateľa\" formControlName = \"email\">\n            <mat-error *ngIf=\"email.invalid\">  Prosím zadefinujte email uživateľa</mat-error>\n        </mat-form-field>\n    \n        <!-- submit button -->\n        <div class='inlineParameters'>\n            <button mat-raised-button color=\"primary\" class=\"sendingButton\"  type=\"submit\">\n                    Odoslať\n            </button>\n        </div>\n    </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/user-group-management/user-group-management.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/user-group-management/user-group-management.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAppManagementUserGroupManagementUserGroupManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- user management -->\n<div class = 'container'>\n    <div class = 'contanierTitle'>\n        <span class='formTitleSmall selectTitleSpace'>Zvoľte uživateľa</span>\n        <mat-form-field >\n            <mat-label>Vyberte uživateľa</mat-label>\n            <mat-select (selectionChange)= \"selectUser($event.value)\">\n                <mat-option *ngFor = 'let value of users | async ' [value] = 'value.username'> \n                    {{ value.firstName }} {{ value.lastName }}\n                </mat-option>\n            </mat-select>\n\n        </mat-form-field>\n    </div>   \n    \n    <!-- modifycation buttons -->\n    <ng-container  *ngIf='userDetails.displayedUser && !(isGhost$ | async)'>\n        <button mat-button \n                color=\"primary\" \n                class='modificationButton' \n                id='resetButton'  \n                (click) = 'resetUserPassword()'\n                matTooltip=\"Resetovaním uživateľa sa vygeneruje nové heslo, ktoré mu bude zaslané emailom\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\">\n            Resetovať\n        </button>\n\n        <button mat-button \n                color=\"success\" \n                class='modificationButton' \n                id='ActivateDisableBUtton' \n                *ngIf='!userDetails.displayedUser.active'\n                (click) = 'modifyUserState()'\n                matTooltip=\"Aktiváciou uživateľa povolíte prihlásenie do systému\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\">\n            Aktivovať\n        </button>\n\n        <button mat-button \n                color=\"warn\"  \n                class='modificationButton' \n                id='ActivateDisableBUtton'  \n                *ngIf='userDetails.displayedUser.active'\n                (click) = 'modifyUserState()'\n                matTooltip=\"Zablokovaním uživateľa zakážete prihlásenie do systému\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\">\n            Zablokovať\n        </button>\n    </ng-container>\n\n\n    <app-user-details  #userDetails ></app-user-details>\n    <app-privileges #userPrivileges ></app-privileges>\n    <app-user-groups #userGroups ></app-user-groups>\n</div>\n\n\n<!-- group management -->\n<div class = 'container leftLine'>\n    <div class = 'contanierTitle'>\n        <span class='formTitleSmall selectTitleSpace'>Zvoľte skupinu</span>\n        <mat-form-field >\n            <mat-label>Vyberte skupinu</mat-label>\n            <mat-select (selectionChange)= \"selectGroup($event.value)\">\n                <mat-option *ngFor = 'let name of groups | async ' [value] = 'name'> {{ name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <!-- modifycation buttons -->\n    <app-serdbuttons #serdbuttonsGroup \n        id='serdbuttonsGroup' \n        *ngIf=\"groupDetails.group  && !(isGhost$ | async)\" \n        (editEmittter) = \"editGroup()\" \n        (resetEmittter) = \"resetGroup()\"\n        (saveEmittter) = \"saveGroup()\"\n        (deleteEmittter) = \"deleteGroup()\">\n    </app-serdbuttons>\n\n    <app-group-details #groupDetails ></app-group-details>\n    <app-privileges #groupPrivileges [applyGreenColor] = 'true'></app-privileges>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-header></app-header>\n<app-navigation></app-navigation>\n\n<div id='contentContainer'>\n    <app-request-table #myOpenRequests \n        headerColor=\"#358BF0\" \n        [displayedColumns]= \"viewTable\"\n        tableTitle=\"Moje požiadávky\"\n        [hidden] = \" (isGhost$ | async) || (isAdmin$ | async) \">\n    </app-request-table>   \n\n    <app-request-table #meAssignedRequests \n        [hidden] = '!(isSolver$ | async) &&  meAssignedRequests.dataSource.data.length === 0'\n        headerColor=\"#56A3FF\" \n        [displayedColumns]= \"modifyTable\"\n        tableTitle=\"Požiadavky pridelené na mňa\"\n        (removeFromMeEmitter) = \"removeFromMe($event)\">\n    </app-request-table> \n\n    <app-request-table #otherOpenRequests \n        [hidden] = '!((isSolver$ | async)  || (isGhost$ | async)  || (isAdmin$ | async) ||  otherOpenRequests.dataSource.data.length > 0)'\n        headerColor=\"#E8F3FF\" \n        [displayedColumns]= \"viewTable\" \n        [displayAssignToMe] ='(isSolver$ | async)'\n        tableTitle=\"Ostatné otvorené požiadavky\"\n        (assignOnMeEmitter) = \"assignOnMe($event)\">\n    </app-request-table> \n\n    <ngx-spinner  >  \n        <p style=\"font-size: 20px; color: white\">Načítavam požiadavky...</p> \n    </ngx-spinner>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-background/loginBackground.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-background/loginBackground.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLoginBackgroundLoginBackgroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<!-- particles.js container -->\r\n<particles [style]=\"style\"  [params]=\"params\"></particles>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!--Login form -->\r\n<div class=\"login-box\" *ngIf='!loggingIn'>\r\n    <h1>Helpdesk</h1>\r\n    <form  [formGroup]=\"form\">\r\n      <fieldset>\r\n\r\n        <div class=\"textbox\">\r\n          <i class=\"fas fa-user\"></i>\r\n          <input name=\"username\" formControlName=\"username\" type=\"text\" placeholder=\"prihlasovacie meno\" required>\r\n        </div>\r\n\r\n        <div class=\"textbox\">\r\n          <i class=\"fas fa-lock\"></i>\r\n          <input name=\"password\" formControlName=\"password\" type=\"password\" placeholder=\"heslo\" required>\r\n        </div>\r\n        \r\n      </fieldset>\r\n      <input type=\"submit\" class=\"btn\" (click)=\"login()\"  value=\"Prihlásiť sa\">\r\n    </form>\r\n</div> \r\n\r\n\r\n<!-- spinner -->\r\n<app-dot-loader *ngIf='loggingIn' class ='spinner'></app-dot-loader>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-login-form></app-login-form>\n\n\n\n<app-login-background></app-login-background>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-closed/request-closed.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-closed/request-closed.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestClosedRequestClosedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-navigation></app-navigation>\n\n\n<div id='contentContainer'>\n    <!-- filter -->\n    <div class='filterContent'>\n        <app-request-filter \n            #requestFilter \n            (changedDate) = \"loadClosedRequests()\"\n            (changedFormFilter) = \"filterClosedRequests($event)\">\n        </app-request-filter>\n    </div>\n\n    <!-- table with requests -->\n    <app-request-table \n        #closedRequests \n        headerColor=\"#E8F3FF\" \n        [displayedColumns]= \"viewTable\" \n        displayAssignToMe='true'\n        tableTitle=\"Uzatvorené požiadavky\">\n    </app-request-table>   \n\n    <ngx-spinner  >  \n        <p style=\"font-size: 20px; color: white\">Načítavam požiadavky...</p> \n    </ngx-spinner>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-form/comment-form.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-form/comment-form.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsCommentFormCommentFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div *ngIf = \"(requestDetails$ | async)?.closed === null && !(isGhost$ | async)\">\n\n    <mat-form-field class='inlineParameters' >\n        <textarea  matInput placeholder=\"Napíšte komentár\" id=\"commentField\" [(ngModel)]=\"commentInput\" ></textarea>\n        <!--<mat-error *ngIf=\"commentField.invalid\"> Prosím zadajte komentár</mat-error>-->\n    </mat-form-field>\n\n    <div class='inlineParameters' >\n\n        <mat-checkbox   \n            name='Solution'  \n            (change)=\"onChange($event)\" \n            [disabled]=\"isChecked && (isCheckedName!=='Solution')\"\n            matTooltip=\"Označiť komentár ako riešenie požiadavky, \n                        prebehne automatická emailová notifikácia riešiteľovi a výtvorcovi požiadavky\"\n            matTooltipPosition=\"right\"\n            matTooltipClass=\"custom-tooltip\"\n            matTooltipShowDelay=\"150\">\n            Riešenie\n        </mat-checkbox>\n\n        <mat-checkbox \n            name='Private'\n            (change)=\"onChange($event)\" \n            [disabled]=\"isChecked && (isCheckedName!=='Private')\"\n            matTooltip=\"Označiť komentár ako privátny\"\n            matTooltipPosition=\"right\"\n            matTooltipClass=\"custom-tooltip\"\n            matTooltipShowDelay=\"150\">\n            Privátny\n        </mat-checkbox>\n\n        <mat-checkbox  \n            name='Notification' \n            (change)=\"onChange($event)\" \n            [disabled]=\"isChecked && (isCheckedName!=='Notification')\"\n            matTooltip=\"Zaškrnutím emailovo notifikujete priradeného riešiteľia a výtvorcu požiadavky\"\n            matTooltipPosition=\"right\"\n            matTooltipClass=\"custom-tooltip\"\n            matTooltipShowDelay=\"150\">\n            Notifikovať\n        </mat-checkbox> \n    </div>\n\n    <button mat-raised-button color=\"primary\" id=\"sendingButton\" (click)=\"submit()\"> Odoslať </button>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-sharing/comment-sharing.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-sharing/comment-sharing.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsCommentSharingCommentSharingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div id=\"myModal\" class=\"modal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span class=\"close\" (click)=\"closeWindow()\">&times;</span>\n        <div class='content'>   \n                <ul class='ulSecondColl'> \n                    <li class='information groupTitle' >Vyberte skupinu pre zdieľanie komentáru</li>\n                    <li class='information lineHeight elevation' \n                        *ngFor=\"let name of (involvedInGroups$ | async)\"\n                        (click)=\"getGroupDetails(name)\">\n                        {{ name }} \n                    </li>\n                </ul>\n\n                <button mat-raised-button color=\"primary\" \n                        id=\"sendingButton\" \n                        type=\"submit\" \n                        [hidden] = \"clickedGroup === undefined\"\n                        (click) = \"shareWith()\"> \n                        Zdieľať </button>\n            </div>\n\n\n\n\n        <div class='groupDetails'>\n            <app-group-details #groupDetails class='groupDetailContent'></app-group-details>\n        </div>\n\n\n    </div>  \n</div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment/comment.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment/comment.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div *ngFor = \"let requestComment of requestComments\" \n    [ngClass] = \"requestComment.creator.username === userService.user.username ? 'floatRight' : 'floatLeft'\"\n    class=\"commentBox \" >\n\n    <div class='flex'>\n        <!-- comment info -->\n        <div class=\"commentBoxName\" >\n            <img [src]=\"'data:image/jpeg;base64,'+requestComment.creator.photoBytes\" class='avatar' />\n                {{ requestComment.creator.firstName }} {{ requestComment.creator.lastName }}<br>\n              <div class='light'>  {{ requestComment.timestamp | date:'MMM d, y, HH:mm:ss '}}  </div>            \n        </div>\n\n        <!-- private comment info -->\n        <div class=\"commentBoxName\" *ngIf='requestComment.isPrivate' >\n            <div class='light bigBold'> \n                Privátny komentár, zdieľané s : <br>\n            </div>\n            <div class='light'> \n                <span *ngFor='let groupName of requestComment.groupsToShare'> {{ groupName  }} </span>\n            </div>     \n        </div>\n\n        <!-- solution flag -->\n        <div class=\"commentBoxName\" *ngIf='requestComment.id === (requestDetails$ | async).solutionComment' >\n            <img src=\"../../../../assets/images_design/request_solution.png\" id='solutionImg'/>\n            <span id='solutionText'>Riešenie</span>   \n        </div>\n\n        <div class = 'commentIcons' \n            *ngIf='(requestComment.creator.username === userService.user.username || (isAdmin$ | async)) && \n                  (requestDetails$ | async).closed === null'>\n\n\n            <img *ngIf='requestComment.isPrivate  &&  \n                requestComment.id !== (requestDetails$ | async).solutionComment' \n                src=\"../../../../assets/images_design/share_icon.png\" \n                class = 'icon'\n                (click) = \"changeFrames(requestComment)\"\n                matTooltip=\"Zdieľať\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip-icon\"\n                matTooltipShowDelay=\"200\"/>\n\n            <img *ngIf='requestComment.isPrivate  && \n                requestComment.id !== (requestDetails$ | async).solutionComment' \n                src=\"../../../../assets/images_design/lock_closed_icon.png\" \n                class = 'icon' \n                (click) = \"changeCommentPrivacy(requestComment)\"\n                matTooltip=\"Otvoriť\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip-icon\"\n                matTooltipShowDelay=\"200\"/>\n        \n            <img *ngIf='!requestComment.isPrivate &&  \n                requestComment.id !== (requestDetails$ | async).solutionComment' \n                src=\"../../../../assets/images_design/lock_open_icon.png\" \n                class = 'icon' \n                (click) = \"changeCommentPrivacy(requestComment)\"\n                matTooltip=\"Uzamknúť\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip-icon\"\n                matTooltipShowDelay=\"200\" />\n    \n\n            <img src=\"../../../../assets/images_design/edit_icon.png\" \n                class = 'icon' \n                (click) = \"editComment(requestComment)\" \n                matTooltip=\"Editovať\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip-icon\"\n                matTooltipShowDelay=\"200\"/>\n\n            <img src=\"../../../../assets/images_design/delete_bin_icon.png\" \n                class = 'icon'  \n                (click)='deleteComment(requestComment)'\n                matTooltip=\"Vymazať\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip-icon\"\n                matTooltipShowDelay=\"200\" />\n\n           \n        </div>\n    </div>\n\n\n    <p > {{requestComment.comment}} </p>\n\n</div>\n\n\n<div  class = 'displayCommentSharing' *ngIf=\"changeFramws\" >\n    <app-comment-sharing  (changeWindow) = \"changeFrames(undefined)\" (shareWithGroup) = \"shareWith($event)\"></app-comment-sharing>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-details.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-details.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsRequestDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ng-sidebar-container>\n\n    <ng-sidebar [opened]=\"sideBarBoolean\" mode=\"over\" keyClose=\"false\" position=\"right\" [dock]='false' [dockedSize]=\"'50px'\"\n        autoCollapseHeight=\"null\" autoCollapseWidth=\"null\"  [closeOnClickOutside]='false' [showBackdrop]='true'\n         [ariaLabel]=\"'My sidebar'\"  *ngIf = \"!(isGhost$ | async)\">\n\n        <div id = 'sliderDiv1'  (click)='openSideBar()' > \n            <i class=\"material-icons sliderButton\" > reorder</i>\n        </div>\n        <hr>\n\n        <app-request-side-options #sideBar ></app-request-side-options>\n    </ng-sidebar>\n    \n    <div ng-sidebar-content>    \n        <app-header></app-header>\n        <app-navigation></app-navigation>\n\n\n    <div id='contentContainer' *ngIf = 'requestDetail$ | async as requestDetail' >\n        <div id=requestRightSide >\n            <div id = 'sliderDiv2'  (click)='openSideBar()' *ngIf = \"!(isGhost$ | async)\"> \n                <i class=\"material-icons sliderButton\" > reorder</i>\n            </div>\n            <app-request-side-information #sideDetails></app-request-side-information>\n        </div>\n\n        <div id='requestLeftSide'>\n\n\n            <!-- TICKET -->\n            <div  *ngIf = \" requestDetail.requestType === 'Ticket'\" class='customRow mainInformationContainer' >\n                    <div class=\"raisedbox customCol\" [style.width.%] = 75>\n                        <p class=\"raisedboxName\" >\n                            <img [src]=\"'data:image/jpeg;base64,'+ requestDetail.creator.photoBytes\" class='avatar' />\n                                {{ requestDetail.creator.firstName }} {{ requestDetail.creator.lastName }}<br>\n                                {{ requestDetail.timestampCreation | date:'MMM d, y, h:mm:ss a'}}            \n                        </p>\n                        <p > {{ requestDetail.name}} </p>\n                    </div>\n            </div>\n            <!-- ------------------- -->\n\n            <!-- REPORT -->\n            <div  *ngIf = \" requestDetail.requestType === 'Report'\" class='mainInformationContainer'>\n                <div class='customRow'>\n                        <div class=\"raisedbox customCol\" [style.width.%] = 45>\n                            <p class=\"raisedboxName\">Účeľ reportu</p>\n                            <p class='test'>\n                                {{ $any(requestDetail).purpose}} \n                            </p>\n                        </div>\n\n                        <div class=\"raisedbox customCol\" [style.width.%] = 45>\n                            <p class=\"raisedboxName\">Kritériá reportu</p>\n                            <p  class='test'> \n                                {{ $any(requestDetail).criteria}} \n                            </p>\n                        </div>\n                    </div>\n                    <div class='customRow'>\n                        <div class=\"raisedbox customCol\" [style.width.%] = 45>\n                            <p class=\"raisedboxName\">Viditeľné údaje</p>\n                            <p   class='test'>\n                                {{ $any(requestDetail).visibleData}} \n                            </p>\n                        </div>\n                        <div class=\"raisedbox customCol\" [style.width.%] = 45 *ngIf=\" $any(requestDetail).otherInformation !== '' \">\n                            <p class=\"raisedboxName\">Dodatočné informácie</p>\n                            <p class='test'> {{ $any(requestDetail).otherInformation}} </p>\n                        </div>\n                    </div>\n            </div>\n                <!-- ------------------- -->\n\n\n\n            <app-comment #requestComments  [requestComments] = \"requestDetail.requestCommentDTOS\"></app-comment>\n            <app-comment-form (addedCommentEmitter)=\"addCommentToArray($event)\"></app-comment-form>\n\n        </div>\n    </div>\n\n    <ngx-spinner >  <p style=\"font-size: 20px; color: white\">Načítavam požiadavku...</p> </ngx-spinner>\n </div>\n\n\n\n\n</ng-sidebar-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-information/request-side-information.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-information/request-side-information.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsRequestSideInformationRequestSideInformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='content' *ngIf ='requestDetails$ | async as requestDetails'>   \n    <h3 class='detailTitle'>\n        <img src=\"../../../../assets/images_design/information_icon.png\" class=\"titleIcon\"/>\n        Všeobecné informácie\n    </h3>\n\n    <ul class='userInformations'>\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Meno požiadavky</div>\n            <ul ><li div class='information'> {{ requestDetails.name }}</li> </ul>\n        </li>\n        \n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Typ</div>\n            <ul ><li div class='information'> {{ requestDetails.requestType}}</li> </ul>\n        </li>\n\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Priorita</div>\n            <ul> \n                <li class='information'>\n                    <img src=\"../../../../assets/images_design/priority_low_icon_2.png\" class=\"avatar\" \n                            *ngIf='requestDetails.requestPriority === \"nízka\"'/>\n                    <img src=\"../../../../assets/images_design/priority_medium_icon_2.png\" class=\"avatar\"\n                             *ngIf='requestDetails.requestPriority === \"stredná\"'/>\n                    <img src=\"../../../../assets/images_design/priority_high_icon_2.png\" class=\"avatar\"\n                             *ngIf='requestDetails.requestPriority === \"vysoká\"'/>\n                    {{ requestDetails.requestPriority | titlecase }}  \n                </li>\n            </ul>\n        </li>\n\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Stav</div>\n            <ul> <li class='information'>{{ requestDetails.requestPosition }}  </li></ul>\n        </li>\n\n        <!-- Ticket informations -->\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Ticket\" '>\n            <div class='informationAnswer'>Typ ticketu</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).ticketType }}</li> </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Ticket\" '> \n            <div class='informationAnswer'>{{ $any(requestDetails).ticketType }}</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).ticketSubtypeName }}</li> </ul>\n        </li>\n\n         <!-- Finance informations -->\n         <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Finance\" '>\n            <div class='informationAnswer'>Typ financií</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).financeType }}</li> </ul>\n        </li>\n\n\n\n        <!-- Report informations -->\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Vlastník reportu</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).owner }}</li> </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Frekvencia obnovenia</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).reportRefresh }}</li> </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Prístup pre</div>\n            <ul *ngIf = '$any(requestDetails).accessByPeople != null'>\n                <li div class='information' *ngFor = \"let access of $any(requestDetails).accessByPeople.split(',')\"> \n                    {{ access }}\n                </li> \n            </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Prístup cez</div>\n            <ul *ngIf = '$any(requestDetails).accessMethods != null'>\n                <li div class='information' *ngFor = \"let access of $any(requestDetails).accessMethods.split(',')\"> \n                    {{ access }}\n                </li> \n            </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n             <ng-container *ngFor = 'let store of $any(requestDetails).reportAccessStored'>\n                <div class='informationAnswer'>{{ store.reportAccess }}</div>\n                <ul ><li div class='information'> {{  store.path }}</li> </ul>\n             </ng-container>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Vyhodnotenie v dňoch</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).evaluation }}</li> </ul>\n        </li>\n        <li class='userInformationsContainer' *ngIf = 'requestDetails.requestType === \"Report\" '>\n            <div class='informationAnswer'>Deadline</div>\n            <ul ><li div class='information'> {{ $any(requestDetails).deadline | date:'MMM d, y '}}</li> </ul>\n        </li>\n\n    </ul>\n</div>\n\n\n<div class='content'  *ngIf ='requestDetails$ | async as requestDetails'>   \n    <h3 class='detailTitle'>\n        <img src=\"../../../../assets/images_design/user_infomatio_icon.png\" class=\"titleIcon\"/>\n        Ľudia\n    </h3>\n\n    <ul class='userInformations'>\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Vytvoril</div>\n            <ul>\n                <li class='information'>\n                    <img [src]=\"'data:image/jpeg;base64,'+requestDetails.creator.photoBytes\" class='avatar'/>\n                    {{ requestDetails.creator.firstName }} {{ requestDetails.creator.lastName }}\n                </li>\n            </ul>\n        </li>\n        \n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Pridelené</div>\n            <ul *ngIf = 'requestDetails.assigned !== null'>\n                <li class='information'>\n                    <img [src]=\"'data:image/jpeg;base64,'+requestDetails.assigned.photoBytes\" class='avatar'/>\n                    {{ requestDetails.assigned.firstName }} {{ requestDetails.assigned.lastName }}\n                </li>\n            </ul>\n            <ul *ngIf = 'requestDetails.closed === null &&requestDetails.assigned === null && ( isSolver$ | async )'> \n                <li class='information clicable' (click) = \"assignOnMe(requestDetails)\"> prideliť mne  </li>\n            </ul>\n        </li>\n\n        <li class='userInformationsContainer' [hidden] = 'true'>\n            <div class='informationAnswer'>Sledované</div>\n            <ul> \n                <li class='information ' *ngFor='let person of requestDetails.userToWatchRequest'>\n                    <img [src]=\"'data:image/jpeg;base64,'+person.photoBytes\" class='avatar'/>\n                    {{ person.firstName }} {{ person.lastName }}\n                </li>\n            </ul>\n        </li>\n\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Uzavrel</div>\n            <ul *ngIf = 'requestDetails.closed !== null'>\n                <li class='information'>\n                    <img [src]=\"'data:image/jpeg;base64,'+requestDetails.closed.photoBytes\" class='avatar'/>\n                    {{ requestDetails.closed.firstName }} {{ requestDetails.closed.lastName }}\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n\n\n\n\n<div class='content' *ngIf ='requestDetails$ | async as requestDetails'>   \n    <h3 class='detailTitle'>\n        <img src=\"../../../../assets/images_design/clock_icon.png\" class=\"titleIcon\"/>\n        Sledovanie času\n    </h3>\n\n    <ul class='userInformations'>\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Čas vytvorenia</div>\n            <ul>\n                <li class='information'>\n                    {{ requestDetails.timestampCreation | date:'MMM d, y, HH:mm:ss ' }}\n                </li>\n            </ul>\n        </li>\n        \n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Čas uzatvorenia</div>\n            <ul>\n                <li class='information'>\n                    {{ requestDetails.timestampClosed | date:'MMM d, y, HH:mm:ss '}} \n                </li>\n            </ul>\n        </li>\n\n        <li class='userInformationsContainer'>\n            <div class='informationAnswer'>Čas otvorenia</div>\n            <ul> \n                <li class='information'>\n                    {{ calculateOpenDays(requestDetails) }} dni\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n\n\n\n<div class='content' *ngIf ='requestDetails$ | async as requestDetails'>   \n    <h3 class='detailTitle'>\n        <img src=\"../../../../assets/images_design/download_document_icon.png\" class=\"titleIcon\"/>\n        Dokumenty\n    </h3>\n\n    <ul class='userInformations'>\n        <li class='userInformationsContainer' *ngFor='let document of requestDetails.documents'>\n            <div class='informationAnswer clicable' (click) = \"downloadFile(requestDetails ,document.name)\"> {{ document.name }}</div>\n            <ul>\n                <li class='information'>\n                    {{ document.lastModified  |  date:'MMM d, y, HH:mm:ss ' }}\n                </li>\n            </ul>\n        </li>\n\n         <!-- uploader -->\n        <div class='uploaderContainer' *ngIf = 'requestDetails.closed === null && !(isGhost$  | async)'> \n            <app-file-upload id='uploader' \n                            [uploaderHeight] = '45' \n                            #fileUploader \n                            (fileInserted) = \"uploadFile( requestDetails,$event)\"\n                            hideIt = true>\n            </app-file-upload>\n        </div>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-options/request-side-options.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-options/request-side-options.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestDetailsRequestSideOptionsRequestSideOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='content' *ngIf= 'requestDetail$ | async as requestDetails'>\n\n\n        \n    <div class = 'module'>\n        <button mat-raised-button id = 'sliderButton' color='warn' \n                class='customInput' (click) = 'closeRequest(requestDetails)'\n                *ngIf='requestDetails.closed === null && ((isAdmin$ | async) || \n                isAssignedOnMe(requestDetails) || (requestDetails.creator.username === userService.user.username ))   ' > \n                    Uzatvoriť\n                </button>\n                \n        <button mat-raised-button id = 'sliderButton' color='warn' \n                class='customInput openInput'  *ngIf='requestDetails.closed !== null' (click) = 'reopenRequest(requestDetails)'>Otvoriť</button>\n        <hr>\n    </div>\n\n\n    <div class = 'module' *ngIf='requestDetails.closed === null && ((isAdmin$ | async) || isAssignedOnMe(requestDetails))'>\n        <label class=\"switch\">\n            <input class=\"switch-input\" type=\"checkbox\"  (click) = 'changeCommenting(requestDetails)' [checked] = \"requestDetails.allowCommenting\" />\n            <span class=\"switch-label\" data-on=\"Povolené komentovanie\" data-off=\"Zakázané komentovanie\"></span> \n            <span class=\"switch-handle\"></span> \n        </label>\n        <hr>\n    </div>\n\n\n    <div class = 'module'  *ngIf='requestDetails.closed === null  && (isAssignedOnMe(requestDetails) || (isAdmin$ | async))'>\n        <button mat-raised-button id = 'sliderButton' color='warn'  class='customInput' (click) = 'dropRequest(requestDetails)'> \n                Zmazať riešiteľa\n        </button>\n        <hr>\n    </div>\n\n\n    <div class = 'module' *ngIf = \"requestDetails.closed === null &&  (\n        ( ((isSolverRightHand$ | async) || (isManager$ | async)) && (isSolver$ | async))  ||  (isAdmin$ | async))\">\n        <mat-form-field class='customInputSmall'>\n            <mat-label>Zmena riešiteľa</mat-label>\n            <mat-select  (selectionChange)=\"selectedUser($event.value)\">\n                <mat-option *ngFor='let user of (allusers$ | async)' [value] = \"user\">{{ user.firstName }} {{ user.lastName }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <button mat-raised-button  class='sendingButton' (click) = 'changeAssignedUser(requestDetails)'>Zmeniť</button>\n        <hr>\n    </div>\n\n    <div class = 'module'  *ngIf='requestDetails.closed === null && ((isSolver$ | async) || (isAdmin$ | async)) && isAssignedOnMe(requestDetails)'>\n        <mat-form-field class='customInputSmall'>\n            <mat-label>Zmena priority</mat-label>\n            <mat-select (selectionChange)=\"selectedPriority($event.value)\">\n                <mat-option value=\"nízka\">nízka</mat-option>\n                <mat-option value=\"stredná\">stredná</mat-option>\n                <mat-option value=\"vysoká\">vysoká</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <button mat-raised-button  class='sendingButton' (click) = 'changePriority(requestDetails)'>Zmeniť</button>\n        <hr>\n    </div>\n\n    <div class = 'module'  \n        *ngIf='requestDetails.closed === null && \n                requestDetails.requestType === \"Report\" && \n                ((isAssignedOnMe(requestDetails)) || (isAdmin$ | async))'>\n        <mat-form-field class='customInputSmall'>\n            <input  matInput placeholder=\"Nahodnocenie v dňoch\" (keyup)=\"addedEvaluation($event.target.value)\"  type=\"number\">\n        </mat-form-field>\n        <button mat-raised-button  class='sendingButton' (click) = \"addEvaluationForReport(requestDetails)\">Odoslať</button>\n        <hr>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-finance-form/request-finance-form.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-finance-form/request-finance-form.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestFormsRequestFinanceFormRequestFinanceFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<h2 class='formTitle'>Požiadavka na Účtáreň</h2>\n\n<form [formGroup] = \"financeForm\" (ngSubmit)=\"submit()\" #financeFormViewChild=\"ngForm\">\n    <!-- finance type -->\n    <mat-form-field class='InlineParameters'>\n        <mat-label>Typ požiadavky</mat-label>\n\n        <mat-select formControlName=\"financeType\">\n            <mat-option  *ngFor=\"let type of financeTypeArray\" [value]=\"type.name\"  >{{ type.name }} </mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\"financeType.invalid\"> Prosím vyberte kategóriu pre Finančný typ</mat-error>\n    </mat-form-field>\n\n    <!--name -->\n    <mat-form-field class='InlineParameters'>\n        <input  matInput placeholder=\"Číslo zmluvy\" formControlName = \"name\" >\n\n        <mat-error *ngIf=\"name.invalid\"> Prosím zadefinujte meno tiketu v dĺžke od 5 po 254 znakov</mat-error>\n    </mat-form-field>\n\n    <!--Priority -->\n    <div class='InlineParameters' >\n        <mat-checkbox (change) = \"changeToUrgent($event.checked)\">Urgent</mat-checkbox>\n    </div>\n\n     <!-- uploader -->\n    <div class='InlineParameters'> \n        <app-file-upload id='fileUploader' [uploaderHeight] = '45' #fileUploader></app-file-upload>\n        <mat-error *ngIf=\"fileInput && fileInput.isEmpty()\" class='movedError'> Prosím vyberte súbor</mat-error>\n    </div>\n\n    <!-- submit button -->\n    <div class='InlineParameters'>\n        <button mat-raised-button color=\"primary\" id=\"ticketSendingButton\" type=\"submit\"> Odoslať </button>\n    </div>\n\n</form>\n\n<ngx-spinner><p style=\"font-size: 20px; color: white\">Posielanie požiadavky...</p> </ngx-spinner>\n<img id='FormImage' src=\"../../../../assets/images_design/finance_form.png\"/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-forms.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-forms.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestFormsRequestFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-navigation></app-navigation>\n\n\n\n<div id='contentContainer'>\n        <div class=\"requestFormButtonContainer\">\n            <a mat-raised-button class=\"requestFormButton\" routerLink=\"/request_new/ticket\"\n                *ngIf = 'hasTicketModuleAccess$ | async'>IT a Projekty</a>\n\n            <a mat-raised-button class=\"requestFormButton\" routerLink=\"/request_new/report\" \n                *ngIf = 'hasReportModuleAccess$ | async'>Report</a>\n\n            <a mat-raised-button class=\"requestFormButton\"  routerLink=\"/request_new/finance\"\n                *ngIf = \"hasFinanceModuleAccess$ | async\">Účtáreň</a>\n        </div>\n        <div class='requestForm'>\n            <router-outlet></router-outlet>\n        </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-report-form/request-report-form.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-report-form/request-report-form.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestFormsRequestReportFormRequestReportFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class='formTitle'>Požiadavka na Report</h2>\n\n<form [formGroup] = \"reportForm\" (ngSubmit)=\"submit()\" #reportFormViewChild=\"ngForm\">\n      <!--  Values : {{ reportForm.value | json }}\n        <hr> -->\n\n        <div class = 'reportInlineParameters'>\n            <!--name -->\n            <mat-form-field >\n                <input  matInput placeholder=\"Názov reportu\" formControlName = \"name\">\n\n                <mat-error *ngIf=\"name.invalid\">\n                        Prosím zadefinujte meno reportu v dĺžke od 5 po 254 znakov\n                </mat-error>\n\n            </mat-form-field>\n\n            <!--nazov -->\n            <mat-form-field >\n                <input  matInput placeholder=\"Vlastník reportu\" formControlName = \"owner\">\n\n                <mat-error *ngIf=\"owner.invalid\">\n                        Prosím zadefinujte vlastníka reportu v dĺžke od 5 po 254 znakov\n                </mat-error>\n\n            </mat-form-field>\n\n            <!--deadline -->\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Deadline\" formControlName = \"deadline\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                \n                <mat-error *ngIf=\"deadline.invalid\">\n                    Prosím zadefinujte deadline reportu\n                </mat-error>\n            </mat-form-field>\n        </div>\n\n        <div class = 'reportInlineParameters'>\n            <!--refresh -->\n            <mat-form-field >\n                <mat-label>Frekvencia obnovenia:</mat-label>\n                <mat-select formControlName=\"reportRefresh\">\n                    <mat-option value=\"Jednorázové\">jendorázové</mat-option>\n                    <mat-option value=\"Denne\">denne</mat-option>\n                    <mat-option value=\"Týždenne\">týždenne</mat-option>\n                    <mat-option value=\"Mesačne\">mesačne</mat-option>\n                </mat-select>\n\n                <mat-error *ngIf=\"reportRefresh.invalid\">\n                        Prosím zadefinujte frekvenciu obnovenia\n                </mat-error>\n\n            </mat-form-field>\n\n            <!--Priority -->\n            <mat-form-field >\n                <mat-label>Priorita</mat-label>\n                <mat-select formControlName=\"requestPriority\">\n                    <mat-option value=\"nízka\">nízka</mat-option>\n                    <mat-option value=\"stredná\">stredná</mat-option>\n                    <mat-option value=\"vysoká\">vysoká</mat-option>\n                </mat-select>\n\n                <mat-error *ngIf=\"reportRefresh.invalid\">\n                        Prosím vyberte prioritu reportu\n                </mat-error>\n            </mat-form-field>\n\n\n            <!--report type -->\n            <mat-form-field >\n                <mat-label>Typ reportu</mat-label>\n                <mat-select formControlName=\"reportType\">\n                    <mat-option value=\"Nový report\">Nový report</mat-option>\n                    <mat-option value=\"Existujúci report\">Existujúci report</mat-option>\n                </mat-select>\n\n                <mat-error *ngIf=\"reportType.invalid\">\n                        Prosím vyberte typ reportu\n                </mat-error>\n            </mat-form-field>\n        </div>\n    \n        <div class='reportInlineParameters'>\n            <mat-form-field >\n                <textarea  matInput placeholder=\"Účeľ reportu\" formControlName = \"purpose\"></textarea>\n\n                <mat-error *ngIf=\"purpose.invalid\">\n                        Prosím zadefinujte účeľ reportu\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field >\n                <textarea  matInput placeholder=\"Kritéria reportu\" formControlName = \"criteria\"></textarea>\n\n                <mat-error *ngIf=\"criteria.invalid\">\n                        Prosím zadefinujte kritéria reportu\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field >\n                <textarea  matInput placeholder=\"Viditeľne údaje\" formControlName = \"visibleData\"></textarea>\n\n                <mat-error *ngIf=\"visibleData.invalid\">\n                        Prosím zadefinujte viditeľné údaje reportu\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field >\n                <textarea  matInput placeholder=\"Iné Informácie\" formControlName = \"otherInformation\"></textarea>\n            </mat-form-field>\n        </div>\n\n\n        <div class = 'reportInlineParameters'>\n            <!--access -->\n            <mat-form-field >\n                <input  matInput placeholder=\"Sprístupniť pre\" formControlName = \"accessByPeople\">\n                <mat-error *ngIf=\"accessByPeople.errors?.accessValid\">\n                        Prosím zadefinujte pre koho má byť report sprístupnený\n                </mat-error>\n                \n            </mat-form-field>\n          <!--  <button mat-raised-button type = \"button\" color=\"primary\" class='formAssignedButton'>Pridať</button>-->\n          <img src=\"../../../../assets/images_design/add_icon.png\" class='formAssignedButton'  (click)=\"addPeopleToAccess()\">\n\n          <!-- display added people / remove them -->\n            <div class = 'printingResults'> \n                <ul> \n                    <li *ngFor=\"let item of accessByPeopleArray; let i = index\" class=\"oneLineLI\">\n                        <img src=\"../../../../assets/images_design/delete_icon.png\" \n                            class='formdeleteButton'  \n                            (click)=\"deletePeopleItem(i)\">\n                            {{item}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n\n\n\n        <div class = 'reportInlineParameters'>\n            <!--access method -->\n            <mat-form-field >\n                <input  matInput placeholder=\"Sprístupniť cez\" formControlName = \"accessMethods\">\n                <mat-error *ngIf=\"accessMethods.errors?.accessValid\">\n                        Prosím zadefinujte spôsob sprístupnenia reportu\n                </mat-error>\n                \n            </mat-form-field>\n          <img src=\"../../../../assets/images_design/add_icon.png\" class='formAssignedButton'  (click)=\"addMethodToAccess()\">\n\n          <!-- display added people / remove them -->\n            <div class = 'printingResults'> \n                <ul> \n                    <li *ngFor=\"let item of accessByMethodArray; let i = index\" class=\"oneLineLI\">\n                        <img src=\"../../../../assets/images_design/delete_icon.png\" \n                            class='formdeleteButton'  \n                            (click)=\"deleteMethodItem(i)\">\n                            {{item}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n\n\n         <!-- uploader -->\n        <div class = 'reportInlineParameters'>\n            <app-file-upload id='uploader' [uploaderHeight] = '45' #fileUploader></app-file-upload>\n        </div>\n\n         <!-- submit button -->\n        <div class = 'reportInlineParameters'>\n            <button mat-raised-button color=\"primary\" id=\"reportSendingButton\" type=\"submit\">Odoslať</button>\n        </div>\n   \n\n    </form>\n\n    <ngx-spinner><p style=\"font-size: 20px; color: white\">Posielanie požiadavky...</p> </ngx-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesRequestFormsRequestTicketFormRequestTicketFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h2 class='formTitle'>Požiadavka na IT & Projekty</h2>\n\n<form [formGroup] = \"ticketForm\"  #ticketFormViewChild=\"ngForm\"  (ngSubmit)=\"submit()\">\n   <!-- Values : {{ ticketForm.value | json }}\n    <hr> -->\n    <mat-form-field class='ticketInlineParameters'>\n        <mat-label>Typ Tiketu</mat-label>\n        <mat-select formControlName=\"ticketType\" (selectionChange)= \"changeTicketType($event.value)\">\n            <mat-option value=\"Software\">Software</mat-option>\n            <mat-option value=\"Hardware\">Hardware</mat-option>\n            <mat-option value=\"User\">Uživateľ</mat-option>\n            <mat-option value=\"Server\">Server</mat-option>\n            <mat-option value=\"Other\">Iné</mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\"ticketType.invalid && ticketType.touched\"> Typ tiketu nemôže byť prázdny </mat-error>\n    </mat-form-field>\n\n    <!--TICKET TYPE -->\n\n    <!-- software -->\n    <mat-form-field *ngIf = \"ticketForm.value.ticketType === 'Software' \" class='ticketInlineParameters'>\n        <mat-label>{{ ticketForm.value.ticketType  }}</mat-label>\n\n        <mat-select formControlName=\"ticketSubtypeName\">\n            <mat-option  *ngFor=\"let software of softwareTypes\" [value]=\"software.name\"  >{{ software.name }} </mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\"ticketSubtypeName.invalid && ticketSubtypeName.touched\"> Prosím vyberte kategóriu pre {{ ticketForm.value.ticketType  }}</mat-error>\n    </mat-form-field>\n\n     <!--hardware  -->\n    <mat-form-field *ngIf = \"ticketForm.value.ticketType === 'Hardware'  \" class='ticketInlineParameters'>\n        <mat-label>{{ ticketForm.value.ticketType  }}</mat-label>\n\n        <mat-select formControlName=\"ticketSubtypeName\" >\n            <mat-option  *ngFor=\"let hardware of hardwareTypes\" [value]=\"hardware.name\"  >{{ hardware.name }} </mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\" ticketSubtypeName.invalid && ticketSubtypeName.touched\">Prosím vyberte kategóriu pre {{ ticketForm.value.ticketType  }}</mat-error>\n    </mat-form-field>\n\n     <!-- server -->\n    <mat-form-field *ngIf = \" ticketForm.value.ticketType === 'Server' \"  class='ticketInlineParameters'>\n        <mat-label>{{ ticketForm.value.ticketType  }}</mat-label>\n\n        <mat-select formControlName=\"ticketSubtypeName\" >\n            <mat-option  *ngFor=\"let server of serverTypes\" [value]=\"server.name\"  >{{ server.name }} </mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\" ticketSubtypeName.invalid  && ticketSubtypeName.touched\">Prosím vyberte kategóriu pre {{ ticketForm.value.ticketType  }}</mat-error>\n    </mat-form-field>\n\n    <!-- username or other -->\n    <mat-form-field *ngIf = \"ticketForm.value.ticketType === 'User' || ticketForm.value.ticketType === 'Other' \" class='ticketInlineParameters'>\n        <input matInput placeholder=\"Definujte meno\" formControlName = \"ticketSubtypeName\">\n\n        <mat-error *ngIf=\" ticketSubtypeName.invalid  && ticketSubtypeName.touched\"> Prosím vyberte kategóriu pre {{ ticketForm.value.ticketType  }}</mat-error>\n    </mat-form-field>\n\n\n    <!--Priority -->\n    <mat-form-field class='ticketInlineParameters' >\n        <mat-label>Priorita</mat-label>\n        <mat-select formControlName=\"requestPriority\">\n            <mat-option value=\"nízka\">nízka</mat-option>\n            <mat-option value=\"stredná\">stredná</mat-option>\n            <mat-option value=\"vysoká\">vysoká</mat-option>\n        </mat-select>\n\n        <mat-error *ngIf=\" requestPriority.invalid && requestPriority.touched\"> Prosím vyberte prioritu tiketu</mat-error>\n\n    </mat-form-field>\n\n    <!--nazov -->\n    <mat-form-field class='ticketInlineParameters'>\n        <input  matInput placeholder=\"Názov tiketu\" formControlName = \"name\">\n\n        <mat-error *ngIf=\" name.invalid && name.touched\"> Prosím zadefinujte meno tiketu v dĺžke od 5 po 254 znakov</mat-error>\n\n    </mat-form-field>\n\n    <!--problem -->\n    <mat-form-field class='ticketInlineParameters' >\n        <textarea  matInput placeholder=\"Popis problému\" formControlName = \"problem\"></textarea>\n\n        <mat-error *ngIf=\"problem.invalid  && problem.touched\"> Prosím zadefinujte váš problém, minimálne 10 zankov</mat-error>\n    </mat-form-field>\n\n     <!-- uploader -->\n    <div class='ticketInlineParameters'> \n        <app-file-upload id='uploader' [uploaderHeight] = '45' #fileUploader></app-file-upload>\n    </div>\n\n    <!-- submit button -->\n    <div class='ticketInlineParameters'>\n        <button mat-raised-button color=\"primary\" id=\"ticketSendingButton\" type=\"submit\"> Odoslať </button>\n    </div>\n\n</form>\n\n<ngx-spinner><p style=\"font-size: 20px; color: white\">Posielanie požiadavky...</p> </ngx-spinner>\n<img id='ticketFormImage' src=\"../../../../assets/images_design/ticket_form.png\"/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/unauthorized/unauthorized.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/unauthorized/unauthorized.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUnauthorizedUnauthorizedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-navigation></app-navigation>\n\n\n<div id='contentContainer'>\n    <img src = '../../../assets/images_design/guard.png' id='guardImg'/>  \n    <img src = '../../../assets/images_design/forbidden.png' id='forbidden'/>  \n\n    <p class = 'text'>\n            Autorizečný prístup zlyhal<br>\n            Prosím dajte vedieť administrátorom v prípade chyby\n    </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/group-details/group-details.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/group-details/group-details.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileGroupDetailsGroupDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n<div class='rightContainer' *ngIf = \"group !== undefined\">   \n    <div class = ' smallerContent'>\n        <span class='formTitleSmall' >\n            <img src=\"../../../../assets/images_design/group_icon_details.png\" class=\"icon\"/>\n            <span class='formTitleSmallText'>  Skupina {{ group.name }} </span>\n        </span>\n\n        <!-- select manager -->\n        <li class='informationsContainer topspace'>\n            <div class='informationTitle'>Manažér skupiny</div>\n            <ul class='informationsHolder' *ngIf = '!editGroupActivated'>\n                <li > {{ group.groupManager.firstName }} {{ group.groupManager.lastName }}</li> \n            </ul>\n            <ul class='informationsHolder' *ngIf = 'editGroupActivated'> \n               <mat-form-field >\n                    <mat-select  [(ngModel)] = \"group.groupManager\"  placeholder=\"Manažér skupiny\">\n                        <mat-option [value]=\"group.groupManager\">\n                            {{group.groupManager.firstName}} {{group.groupManager.lastName}}\n                        </mat-option>\n                        <mat-option *ngFor = \"let user of allUsers$ | async\" [value] = \"user\" >\n                                {{ user.firstName }}  {{ user.lastName }}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field >\n            </ul>\n        </li>\n        \n        <!-- description -->\n        <li class='informationsContainer topspace'  [hidden]=\"(group.description === null || group.description.length === 0) && !editGroupActivated\">\n            <div class='informationTitle'>Popis skupiny</div>\n            <ul class='informationsHolder'  *ngIf = '!editGroupActivated'>\n                <li> {{ group.description }}</li> \n            </ul>\n            <ul class='informationsHolder' *ngIf = 'editGroupActivated'>\n                <mat-form-field >\n                    <textarea matInput  [(ngModel)] = \"group.description\" placeholder=\"Popis skupiny\"> </textarea> \n                </mat-form-field>\n            </ul>\n        </li>\n\n        <!-- watched group activity -->\n        <li class='informationsContainer topspace' [hidden]=\"group.usersWatchGroup.length === 0 && !editGroupActivated\">\n            <div class='informationTitle'>Sledovatelia skupiny</div>\n            <ul class='informationsHolder'>\n                <mat-form-field  *ngIf = 'editGroupActivated'>\n                     <mat-select  [(ngModel)] = \"group.usersWatchGroup\" multiple [compareWith]=\"compareUsersInSelect\" placeholder=\"Sledovatelia skupiny\">\n                         <mat-option *ngFor = \"let user of allUsers$ | async\" [value] = \"user\" >\n                                 {{ user.firstName }}  {{ user.lastName }}\n                         </mat-option>\n                     </mat-select>\n                 </mat-form-field >\n  \n                <li *ngFor=\"let user of group.usersWatchGroup\"> \n                    {{ user.firstName }} {{ user.lastName }}  \n                </li>\n            </ul> \n        </li>\n\n        <!-- users in group -->\n        <li class='informationsContainer topspace' [hidden]=\"group.usersInGroup.length === 0 && !editGroupActivated\">\n            <div class='informationTitle'>Členovia skupiny</div>\n            <ul class='informationsHolder'>\n                <mat-form-field  *ngIf = 'editGroupActivated'>\n                    <mat-select  [(ngModel)] = \"group.usersInGroup\" multiple [compareWith]=\"compareUsersInSelect\"  placeholder=\"Členovia skupiny\">\n                        <mat-option *ngFor = \"let user of allUsers$ | async\" [value] = \"user\" >\n                                {{ user.firstName }}  {{ user.lastName }}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field >\n\n                <li *ngFor=\"let user of group.usersInGroup\"> \n                    {{ user.firstName }} {{ user.lastName }}  \n                </li>\n            </ul>    \n        </li>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/privileges/privileges.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/privileges/privileges.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfilePrivilegesPrivilegesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = 'rightContainer' *ngIf='name'> \n    <div class = ' smallerContent'>\n        <span class='formTitleSmall' >\n            <img src=\"../../../../assets/images_design/privilege_icon.png\" class=\"icon\"/>\n               <span class='formTitleSmallText'> Oprávnenia {{ name }} </span>       \n        </span>\n\n    \n        <li class='informationsContainer topspace' *ngIf ='enabledPrivileges.moduleTypesToUse.length > 0 || disabledPrivileges.moduleTypesToUse.length > 0'>\n            <div class='informationTitle'>Používanie modulov</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.moduleTypesToUse' \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'\n                        (click) = 'changeModuleTypeToUse(type)' > {{ type }} </li>  \n\n                <li *ngFor='let type of disabledPrivileges.moduleTypesToUse' \n                     [hidden] = \"!activateUnableClick && hideUnassignedPriv\"\n                    (click) = 'changeModuleTypeToUse(type)'\n                    [ngClass] = '{ \"ableClick\" :  activateUnableClick }' > {{ type }} </li>  \n            </ul>\n        </li>\n        <li class='informationsContainer topspace' \n        *ngIf ='enabledPrivileges.submitFinanceRequests.length > 0 || disabledPrivileges.submitFinanceRequests.length > 0' \n        [ngClass] = '{\"unableClick\" : activateUnableClick &&  !enabledPrivileges.moduleTypesToUse.includes(\"Finance\") }'>\n            <div class='informationTitle'>Zasielanie financií</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.submitFinanceRequests'\n                     [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'\n                        (click) = 'changesubmitFinanceRequests(type)'> {{ type }} </li>  \n\n                <li *ngFor='let type of disabledPrivileges.submitFinanceRequests'  \n                    [hidden] = \"!activateUnableClick && hideUnassignedPriv\"  \n                    (click) = 'changesubmitFinanceRequests(type)'\n                    [ngClass] = '{ \"ableClick\" :  activateUnableClick  && enabledPrivileges.moduleTypesToUse.includes(\"Finance\")}'> {{ type }} </li>  \n            </ul>\n        </li>\n        <li class='informationsContainer topspace' *ngIf ='enabledPrivileges.requestTypesToSolve.length > 0 || disabledPrivileges.requestTypesToSolve.length > 0'>\n            <div class='informationTitle'>Riešenie požiadávok</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.requestTypesToSolve' \n                        [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'\n                        (click) = 'changeRequestTypeToSolve(type)'> \n                    {{ type }} \n                </li> \n\n                <li *ngFor='let type of disabledPrivileges.requestTypesToSolve' \n                    (click) = 'changeRequestTypeToSolve(type)'\n                    [hidden] = \"!activateUnableClick && hideUnassignedPriv\"  \n                    [ngClass] = '{ \"ableClick\" :  activateUnableClick }'> {{ type }} </li>  \n            </ul>\n        </li>\n        <li class='informationsContainer topspace' \n            *ngIf ='enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") || \n                     disabledPrivileges.requestTypesToSolve.includes(\"Ticket\")'  \n            [ngClass] = '{\"unableClick\" : activateUnableClick &&  \n                        (!enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")) }'>\n            <div class='informationTitle'>Riešenie tiketov</div>\n            <ul class='informationsHolder'> \n                <li *ngIf = ' enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") && enabledPrivileges.solveTickets.Software !== null' \n                    (click) = \"changeSolveTicketsSoftwareAll()\"  \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'>Softvér</li>\n\n                <li *ngIf = ' enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") && enabledPrivileges.solveTickets.Hardware !== null' \n                    (click) = \"changeSolveTicketsHardwareAll()\"\n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'>Hardvér</li>\n\n                <li *ngIf = ' enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") &&  enabledPrivileges.solveTickets.Server !== null' \n                    (click) = \"changeSolveTicketsServerAll()\" \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'>Server</li>\n\n                <li *ngIf = ' enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") &&  enabledPrivileges.solveTickets.User.length > 0' \n                    (click) = 'changeSolveTicketsUserAll()' \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'>Uživateľ</li>\n                    \n                <li *ngIf = ' enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") &&  enabledPrivileges.solveTickets.Other.length > 0' \n                    (click) = 'changeSolveTicketsOtherAll()' \n                     [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'>Iné</li>\n                \n       \n                <div  >\n                    <li *ngIf = ' activateUnableClick && enabledPrivileges.solveTickets.Software === null'  \n                        (click) = \"changeSolveTicketsSoftwareAll()\" \n                        [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")}'>Softvér</li>\n\n                    <li *ngIf = ' activateUnableClick && enabledPrivileges.solveTickets.Hardware === null ' \n                        (click) = \"changeSolveTicketsHardwareAll()\"\n                        [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")  }'>Hardvér</li>\n\n                    <li *ngIf = ' activateUnableClick && enabledPrivileges.solveTickets.Server === null' \n                        (click) = \"changeSolveTicketsServerAll()\"\n                        [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")}'>Server</li>\n\n                    <li *ngIf = ' activateUnableClick && enabledPrivileges.solveTickets.User.length === 0' \n                        (click) = 'changeSolveTicketsUserAll()'\n                        [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")}'>Uživateľ</li>\n\n                    <li *ngIf = 'activateUnableClick && enabledPrivileges.solveTickets.Other.length === 0' \n                        (click) = 'changeSolveTicketsOtherAll()'\n                        [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")}'>Iné</li>\n                </div>\n            </ul>\n        </li>\n      <li class='informationsContainer topspace' \n            *ngIf ='enabledPrivileges.solveTickets.Software?.length > 0 || disabledPrivileges.solveTickets.Software.length > 0' \n            [ngClass] = '{\"unableClick\" : activateUnableClick && (!enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") \n                        || enabledPrivileges.solveTickets.Software === null)}'>\n            <div class='informationTitle'>Riešenie Softvéru</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.solveTickets.Software' \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }' \n                    (click) = 'changeSolveTicketsSoftware(type)'> {{ type }} </li>  \n\n                <li *ngFor='let type of disabledPrivileges.solveTickets.Software' \n                    [hidden] = \"!activateUnableClick && hideUnassignedPriv\"  \n                    (click) = 'changeSolveTicketsSoftware(type)'\n                    [ngClass] = '{ \"ableClick\" :  activateUnableClick && \n                        enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") && \n                        enabledPrivileges.solveTickets.Software !== null}'> \n                        {{ type }} \n                </li>  \n            </ul>\n        </li>\n        <li class='informationsContainer topspace' \n            *ngIf ='enabledPrivileges.solveTickets.Hardware?.length > 0 || disabledPrivileges.solveTickets.Hardware.length > 0' \n            [ngClass] = '{\"unableClick\" : activateUnableClick &&  \n                    (!enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") || enabledPrivileges.solveTickets.Hardware === null ) }'>\n            <div class='informationTitle'>Riešenie Hardvéru</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.solveTickets.Hardware' \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }' \n                    (click) = 'changeSolveTicketsHardware(type)'> {{ type }} </li>  \n\n                <li *ngFor='let type of disabledPrivileges.solveTickets.Hardware' \n                    (click) = 'changeSolveTicketsHardware(type)'\n                    [hidden] = \"!activateUnableClick && hideUnassignedPriv\"  \n                    [ngClass] = '{ \"ableClick\" : activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")\n                                && enabledPrivileges.solveTickets.Hardware !== null }'> {{ type }} </li>  \n            </ul>\n        </li>\n        <li class='informationsContainer topspace' \n            *ngIf ='enabledPrivileges.solveTickets.Server?.length > 0 || disabledPrivileges.solveTickets.Server.length > 0' \n            [ngClass] = '{\"unableClick\" : activateUnableClick &&  \n                    (!enabledPrivileges.requestTypesToSolve.includes(\"Ticket\") || enabledPrivileges.solveTickets.Server === null) }'>\n            <div class='informationTitle'>Riešenie Serverov</div>\n            <ul class='informationsHolder'> \n                <li *ngFor='let type of enabledPrivileges.solveTickets.Server' \n                    [ngClass] = '{ \"enabledPriv\" :  activateUnableClick, \"coloredLi\" : applyGreenColor }'\n                    (click) = 'changeSolveTicketsServer(type)'> {{ type }} </li>  \n\n                <li *ngFor='let type of disabledPrivileges.solveTickets.Server' \n                    (click) = 'changeSolveTicketsServer(type)'\n                    [hidden] = \"!activateUnableClick && hideUnassignedPriv\"  \n                    [ngClass] = '{ \"ableClick\" :  activateUnableClick && enabledPrivileges.requestTypesToSolve.includes(\"Ticket\")\n                                && enabledPrivileges.solveTickets.Server !== null}'> {{ type }} </li>  \n            </ul>\n        </li>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-details/user-details.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-details/user-details.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='rightContainer' *ngIf = \"displayedUser !== undefined\">   \n    <div class = ' smallerContent'>\n\n        <span class='formTitleSmall' >\n            <img src=\"../../../../assets/images_design/information_icon.png\" class=\"icon\"/>\n            Detaily uživateľa\n        </span>\n\n\n        <li class='informationsContainer topspace'>\n            <div class='informationTitle'>Avatar</div>\n            <ul class='informationsHolder'>\n                <li>\n                    <img [src]=\"'data:image/jpeg;base64,'+ displayedUser.photoBytes\" class='avatar' \n                    (click)=\"changeFrames()\"  [ngClass] = '{\"avatarReactive\" : addImageClick }' />\n                </li>\n            </ul> \n        </li>\n        \n        <li class='informationsContainer topspace'>\n            <div class='informationTitle'>Meno</div>\n            <ul class='informationsHolder'><li > {{ displayedUser.firstName }}</li> </ul>\n        </li>\n\n        <li class='informationsContainer topspace'>\n            <div class='informationTitle'>Priezvisko</div>\n            <ul class='informationsHolder'> <li>{{ displayedUser.lastName }}  </li></ul>\n        </li>\n\n        <li class='informationsContainer topspace'>\n            <div class='informationTitle'>Email</div>\n            <ul class='informationsHolder'> <li>{{ displayedUser.email }}  </li></ul>\n        </li>\n\n        <li class='informationsContainer topspace' *ngIf = 'showPasswordChange'>\n            <div class='informationTitle'>Heslo</div>\n            <ul class='informationsHolder'> <li class='passwordChange' (click) = \"changePassword()\">zmeniť  </li></ul>\n        </li>\n\n        <ngx-spinner><p style=\"font-size: 20px; color: white\">Načítavanie...</p> </ngx-spinner>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-groups/user-groups.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-groups/user-groups.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileUserGroupsUserGroupsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class='rightContainer' *ngIf = \"groupContainer !== undefined\">  \n    <div class = ' smallerContent'>\n\n        <span class='formTitleSmall' >\n            <img src=\"../../../../assets/images_design/groups_icon.png\" class=\"icon\"/>\n            Skupiny\n        </span>\n\n        <li class='informationsContainer topspace'  *ngIf=\"groupContainer && groupContainer.managerOfGroups.length > 0\"> \n            <div class='informationTitle'>Manažér skupín</div>\n            <ul class='informationsHolder'>\n                <li [ngClass] = '{ \"elevation\" : elevationActivated}'  *ngFor=\"let name of groupContainer.managerOfGroups\" (click)=\"getGroupDetails(name)\"> \n                    {{ name }}  \n                </li>\n            </ul>\n        </li>\n\n        <li class='informationsContainer topspace' *ngIf=\"groupContainer && groupContainer.watchedGroupActivity.length > 0\">\n            <div class='informationTitle'>Sledované skupiny</div>\n            <ul class='informationsHolder'>\n                <li [ngClass] = '{ \"elevation\" : elevationActivated}'   *ngFor=\"let name of groupContainer.watchedGroupActivity\" (click)=\"getGroupDetails(name)\"> \n                    {{ name }}\n                </li> \n            </ul>\n        </li>\n\n        <li class='informationsContainer topspace' *ngIf=\"groupContainer && groupContainer.userInGroups.length > 0\">\n            <div class='informationTitle' >Člen skupín</div>\n            <ul class='informationsHolder'> \n                <li [ngClass] = '{ \"elevation\" : elevationActivated}'   *ngFor=\"let name of groupContainer.userInGroups\" (click)=\"getGroupDetails(name)\">\n                    {{ name }} \n                </li>\n            </ul>\n        </li>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-images/user-images.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-images/user-images.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileUserImagesUserImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div id=\"myModal\" class=\"modal\" *ngIf=\"images.length > 0\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" (click)=\"closeWindow()\">&times;</span>\n    <div class='imageContent' *ngFor=\"let image of images\">\n        <img class='icon' [src]=\"'data:image/jpeg;base64,'+image.imageBytes\"  (click) = \"selectImage(image)\"/> \n    </div>\n  </div>\n\n  \n</div>\n\n<ngx-spinner><p style=\"font-size: 20px; color: white\">Načítavanie...</p> </ngx-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-navigation></app-navigation>\n\n\n\n<div id='contentContainer' >\n    <!-- user details -->\n    <div  class = 'windowLeft' id = 'userInforContainer'  >\n        <app-user-details \n            #userDetials\n            (changeWindow) = \"changeFrames($event)\"  \n            [displayedUser] = \"userService.user\"  \n            addImageClick = 'true' \n            showPasswordChange = 'true'>\n        </app-user-details>\n        <app-privileges \n            #userPrivileges \n            name = \"uživateľa\">\n        </app-privileges>\n    </div>\n\n    <!-- group details -->\n    <div  class = 'windowLeft' >\n        <app-user-groups \n            (selectedGroupEmmiter) = \"initGroupPrivileges($event)\"  \n            [groupContainer] = \"groupContainer | async\" \n            elevationActivated = \"true\">\n        </app-user-groups>\n        <app-group-details #groupDetails></app-group-details>\n        <app-privileges #groupPrivileges ></app-privileges>\n    </div>\n\n    <div *ngIf=\"displayAvatarts\" >\n        <app-user-images (changeWindow) = \"changeFrames($event)\"></app-user-images>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/chart.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/chart.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>chart works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dot-loader/dot-loader.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dot-loader/dot-loader.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsDotLoaderDotLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='dot-content'>\n    <div class=\"multi-spinner-container\">\n        <div class=\"multi-spinner\">\n            <div class=\"multi-spinner\">\n                <div class=\"multi-spinner\">\n                   <div class=\"multi-spinner\">\n                        <div class=\"multi-spinner\">\n                            <div class=\"multi-spinner\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-upload/file-upload.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-upload/file-upload.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFileUploadFileUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  appDragDrop\nclass=\"uploadfilecontainer\" \n(click)=\"fileInput.click()\"  \n(onFileDropped)=\"uploadFile($event)\" \n[style.height.px]=\"uploaderHeight\">\n    <input hidden type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\" multiple >\n</div>\n<div  class=\"files-list\" *ngFor=\"let file of files;let i=index\" [hidden] = \"hideIt\">\n    <p>{{ file.name }}</p>\n    <button class=\"delete-file\" (click)=\"deleteAttachment(i)\">\n    <img src=\"../../../../assets/images_design/trash_icon.png\">\n    </button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div id='headerBackground'>\n\n    <div  id='headerContainer'>\n        <div id=\"headerTitle\">\n           Vitaj, {{ userService.user.fullname }}\n        </div>\n\n        <div id=\"headerLogout\">\n            <div class=\"button_cont example_f\" (click)= \"logout()\">\n                <span>\n                <img [src]=\"'data:image/jpeg;base64,'+userService.user.photoBytes\" class='userIcon'/>\n                 Odhlásiť sa\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navigation/navigation.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navigation/navigation.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div id=\"navigationContainer\">\n    <!-- navigation background -->\n    <img src=\"./../../../../assets/images_design/navigation_background_3.png\" \n        alt=\"dashboard navigation icon\"\n        id=\"navigationBackground\" >\n\n\n        <!-- dashboard -->\n        <a class='navigationIconContainer' routerLink=\"/dashboard\" >\n            <img src=\"./../../../../assets/images_design/dashboard_2.png\" \n                alt=\"dashboard navigation icon\" \n                id='dashboardIcon'\n                class='navigationIcon'\n                matTooltip=\"Dashboard\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\"\n                > <!-- appNavigationIconHover -->\n        </a>\n\n        <!-- request new -->\n        <a class='navigationIconContainer'  routerLink=\"/request_new\" \n            *ngIf = \"!(isGhost$ | async) && \n                ((hasFinanceModuleAccess$ | async) || (hasTicketModuleAccess$ | async) || (hasReportModuleAccess$ | async))\" >\n            <img src=\"./../../../../assets/images_design/request_new_icon.png\" \n                alt=\"dashboard navigation icon\" \n                id='requestNewIcon'\n                class='navigationIcon'\n                matTooltip=\"Nová požiadavka\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\" >\n        </a>\n\n        <!-- request closed -->\n        <a class='navigationIconContainer' routerLink=\"/request_closed\">\n            <img src=\"./../../../../assets/images_design/request_closed_icon.png\" \n                alt=\"dashboard navigation icon\" \n                id='requestClosedIcon'\n                class='navigationIcon'\n                matTooltip=\"Zatvorené požiadavky\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\" >\n        </a>\n\n        <!-- user profile -->\n        <a class='navigationIconContainer'  routerLink=\"/user_profile\">\n            <img src=\"./../../../../assets/images_design/user_profile_icon.png\" \n                alt=\"dashboard navigation icon\" \n                id='userProfileIcon'\n                class='navigationIcon'\n                matTooltip=\"Profil\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\">\n        </a>\n\n        <!-- app management -->\n        <a class='navigationIconContainer' routerLink=\"/app_management\"  \n            *ngIf='(hasPrivilegeAccess$ | async) || (isAdmin$ | async) || (isGhost$ | async)'>\n            <img src=\"./../../../../assets/images_design/team_icon.png\" \n                alt=\"dashboard navigation icon\" \n                id='appManagementIcon'\n                class='navigationIcon'\n                matTooltip=\"Správa aplikácie\"\n                matTooltipPosition=\"right\"\n                matTooltipClass=\"custom-tooltip\"\n                matTooltipShowDelay=\"150\">\n        </a>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-filter/request-filter.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-filter/request-filter.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsRequestFilterRequestFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class='filterContainer'>\n    <!-- filter by time -->\n    <mat-form-field >\n        <input matInput  placeholder=\"Filtrovanie dátumu\"   [satDatepicker]=\"picker\"   (dateChange)=\"saveDateAndFilter($event.value)\">\n        <sat-datepicker #picker [rangeMode]=\"true\"></sat-datepicker>\n        <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n    </mat-form-field>\n    <span class=\" fontChange \">Uzavretia požiadávok od <b>{{ dateFrom }} </b> do   <b>{{ dateTo }} </b> </span>\n</div>\n\n<!-- main filter type -->\n<mat-form-field class='filterContainer'>\n    <mat-label>Filtrovanie požiadávok</mat-label>\n\n    <mat-select [(ngModel)]=\"selectedType\">\n        <mat-option value='type' > Typ </mat-option>\n        <mat-option value='creator' > Vytvoril </mat-option>\n        <mat-option value='closed' > Uzavrel </mat-option>\n        <mat-option value='name' > Názov </mat-option>\n        <mat-option value='priority' > Priorita </mat-option>\n    </mat-select>\n</mat-form-field>\n\n\n<!-- filter form -->\n<form [formGroup] = \"filterForm\" >\n    <mat-form-field class='filterContainer' *ngIf='selectedType === \"type\" '>\n        <mat-label>Typu</mat-label>\n        <mat-select  formControlName=\"type\">\n            <mat-option value='Ticket' > Tiket </mat-option>\n            <mat-option value='Report' > Report </mat-option>\n            <mat-option value='Finance' > Financie </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class='filterContainer' *ngIf='selectedType === \"creator\" && isMoreThanNormalUser$ | async ' >\n        <mat-label>Výtvorca</mat-label>\n        <mat-select  formControlName=\"creator\">\n            <mat-option \n                *ngFor= 'let user of allUsers$ | async' \n                [value] = 'user.firstName + \" \" + user.lastName'> \n                    {{ user.firstName }} {{ user.lastName }} \n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class='filterContainer' *ngIf='selectedType === \"closed\" && isMoreThanNormalUser$ | async '>\n        <mat-label>Uzavrel</mat-label>\n        <mat-select  formControlName=\"closed\">\n            <mat-option \n                *ngFor= 'let user of allUsers$ | async' \n                [value] = 'user.firstName + \" \" + user.lastName' > \n                    {{ user.firstName }} {{ user.lastName }} \n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf='selectedType === \"name\" ' >\n        <input  matInput placeholder=\"Názov požiadavky\" formControlName = \"name\" >        \n    </mat-form-field>\n\n    <mat-form-field class='filterContainer' *ngIf='selectedType === \"priority\" ' >\n        <mat-label>Priorita</mat-label>\n        <mat-select  formControlName=\"priority\">\n            <mat-option value='nízka' > nízka </mat-option>\n            <mat-option value='stredná' > stredná </mat-option>\n            <mat-option value='vysoká' > vysoká </mat-option>\n        </mat-select>\n    </mat-form-field>\n</form>\n\n\n<!-- print filtering results -->\n<div class = 'filterContainer filterOptions'>\n    <li *ngIf=\"type.value !== '' \"> \n        <img src=\"../../../../assets/images_design/delete_icon.png\" class='formdeleteButton' (click)=\"deleteFilterOption('type')\">\n            Typ {{type.value}} \n    </li>\n    <li *ngIf=\"creator.value !== '' \"> \n        <img src=\"../../../../assets/images_design/delete_icon.png\" class='formdeleteButton' (click)=\"deleteFilterOption('creator')\">\n        Vytvoril {{creator.value}} \n    </li>\n    <li *ngIf=\"closed.value !== '' \"> \n        <img src=\"../../../../assets/images_design/delete_icon.png\" class='formdeleteButton' (click)=\"deleteFilterOption('closed')\">\n        Uzavrel {{closed.value}} \n    </li>\n    <li *ngIf=\"name.value !== '' \">\n        <img src=\"../../../../assets/images_design/delete_icon.png\" class='formdeleteButton' (click)=\"deleteFilterOption('name')\">\n         Názov {{name.value}} \n    </li>\n    <li *ngIf=\"priority.value !== '' \"> \n        <img src=\"../../../../assets/images_design/delete_icon.png\" class='formdeleteButton' (click)=\"deleteFilterOption('priority')\">\n        Priorita {{priority.value}} \n    </li>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-table/request-table.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-table/request-table.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsRequestTableRequestTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='header'>\n    <div class='headerTitle'> {{ tableTitle }}</div>\n</div>\n<div class=\"tableRequest mat-elevation-z3\">\n        <mat-table #table [dataSource]=\"dataSource\" >\n        \n            <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class='fontWeight'> \n               {{ element.id }}.\n                <img *ngIf=\"element.requestType === 'Ticket' \" src=\"../../../../assets/images_design/ticket_icon.png\"  class ='userIcon requestIcon'/>\n                <img  *ngIf=\"element.requestType === 'Report' \" src=\"../../../../assets/images_design/report_icon_2.png\"  class ='userIcon requestIcon'/>\n                <img *ngIf=\"element.requestType === 'Finance' \" src=\"../../../../assets/images_design/finance_icon.png\"  class ='userIcon requestIcon'/>  \n                {{ element.requestType}} \n            </mat-cell>\n            </ng-container>\n    \n\n           <ng-container matColumnDef=\"additionalInformation\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Typ </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.additionalInformation}}  </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"creator\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Vytvoril </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <img [src]='getImage(element.creatorImageByte)' class='userIcon'/>\n                {{ element.creator  | slice:0:1 | titlecase}}. {{ element.creator.split(' ')[1] | titlecase}}\n            </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Názov </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.name}} </mat-cell>\n            </ng-container>\n\n           <ng-container matColumnDef=\"priority\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Priorita </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <img *ngIf=\"element.requestPriority === 'nízka' \" src=\"../../../../assets/images_design/priority_low_icon_2.png\"  class ='userIcon'/>\n                <img  *ngIf=\"element.requestPriority === 'stredná' \" src=\"../../../../assets/images_design/priority_medium_icon_2.png\"  class ='userIcon'/>\n                <img *ngIf=\"element.requestPriority === 'vysoká' \" src=\"../../../../assets/images_design/priority_high_icon_2.png\"  class ='userIcon'/>\n                 {{ element.requestPriority}} \n            </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"assigned\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Pridelené </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <div *ngIf = \"element.assigned !== ' ' \">\n                    <img [src]='getImage(element.assignedImageByte)' class='userIcon'/> \n                    {{ element.assigned  | slice:0:1 | titlecase}}. {{ element.assigned.split(' ')[1] | titlecase}}\n                </div>  \n                <div *ngIf = \"element.assigned === ' ' && displayAssignToMe\" class='assignOnMe' (click) = \"assignOnMe(element)\">\n                    pridelit mne\n                </div>\n            </mat-cell>\n            </ng-container> \n\n        <ng-container matColumnDef=\"userAction\" >\n            <mat-header-cell *matHeaderCellDef [ngStyle]=\"{'background-color': headerColor}\" > Zahodit </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" > \n                <div *ngIf = \"element.assigned === userService.user.fullname \" class='removeFromMe' (click) = \"removeFromMe(element)\">\n                    Vzdať sa\n                </div>\n            </mat-cell>\n        </ng-container>\n\n         <ng-container matColumnDef=\"closed\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Uzatvoril </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <img [src]='getImage(element.closedImageByte)' class='userIcon'/>\n                {{ element.closed  | slice:0:1 | titlecase}}. {{ element.closed.split(' ')[1] | titlecase}}\n            </mat-cell>\n            </ng-container>\n    \n        <ng-container matColumnDef=\"timeCreated\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Vytvorené </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.timestampCreation | date:'MMM d, y, HH:mm:ss '}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"timeClosed\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" > Uzatvorené</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.timestampClosed | date:'MMM d, y, HH:mm:ss '}} </mat-cell>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"details\">\n            <mat-header-cell *matHeaderCellDef  [ngStyle]=\"{'background-color': headerColor}\" >   </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> \n            <button mat-button   class=\"detailButton\" (click)=\"navigateToDetails(element.id)\">\n                    detaily\n            </button>\n            </mat-cell>\n        </ng-container> \n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        \n        <mat-paginator #paginator\n                        [pageSize]=\"10\"\n                        [pageSizeOptions]=\"[5, 10, 20, 100]\">\n        </mat-paginator>\n    </div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/serdbuttons/serdbuttons.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/serdbuttons/serdbuttons.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSerdbuttonsSerdbuttonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<button mat-button color=\"primary\"  (click) = \"save()\"  *ngIf=' editActivated '>\n    Uložiť\n</button>\n\n<button mat-button color=\"warn\"   (click) = 'reset()' *ngIf=' editActivated '>\n    Resetovať\n</button>\n\n<button mat-button class='editButton'  (click) = 'edit()'  *ngIf=' !editActivated '>\n    Editovať\n</button>\n\n<button mat-button color=\"warn\"  (click) = 'delete()'  *ngIf=' !editActivated'>\n    Vymazať\n</button>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/login/login.component */
    "./src/app/modules/login/login.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/guards/AuthGuard */
    "./src/app/core/guards/AuthGuard.ts");
    /* harmony import */


    var _modules_request_forms_request_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/request-forms/request-forms.component */
    "./src/app/modules/request-forms/request-forms.component.ts");
    /* harmony import */


    var _modules_request_forms_request_ticket_form_request_ticket_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/request-forms/request-ticket-form/request-ticket-form.component */
    "./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.ts");
    /* harmony import */


    var _modules_request_forms_request_report_form_request_report_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/request-forms/request-report-form/request-report-form.component */
    "./src/app/modules/request-forms/request-report-form/request-report-form.component.ts");
    /* harmony import */


    var _modules_request_forms_request_finance_form_request_finance_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/request-forms/request-finance-form/request-finance-form.component */
    "./src/app/modules/request-forms/request-finance-form/request-finance-form.component.ts");
    /* harmony import */


    var _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/user-profile/user-profile.component */
    "./src/app/modules/user-profile/user-profile.component.ts");
    /* harmony import */


    var _modules_request_closed_request_closed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modules/request-closed/request-closed.component */
    "./src/app/modules/request-closed/request-closed.component.ts");
    /* harmony import */


    var _modules_app_management_app_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modules/app-management/app-management.component */
    "./src/app/modules/app-management/app-management.component.ts");
    /* harmony import */


    var _modules_app_management_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/app-management/register-user/register-user.component */
    "./src/app/modules/app-management/register-user/register-user.component.ts");
    /* harmony import */


    var _modules_app_management_register_group_register_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/app-management/register-group/register-group.component */
    "./src/app/modules/app-management/register-group/register-group.component.ts");
    /* harmony import */


    var _modules_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modules/request-details/request-details.component */
    "./src/app/modules/request-details/request-details.component.ts");
    /* harmony import */


    var _modules_app_management_user_group_management_user_group_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./modules/app-management/user-group-management/user-group-management.component */
    "./src/app/modules/app-management/user-group-management/user-group-management.component.ts");
    /* harmony import */


    var _core_guards_finance_guard_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./core/guards/finance-guard.guard */
    "./src/app/core/guards/finance-guard.guard.ts");
    /* harmony import */


    var _core_guards_privilege_manager_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./core/guards/privilege-manager.guard */
    "./src/app/core/guards/privilege-manager.guard.ts");
    /* harmony import */


    var _modules_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modules/unauthorized/unauthorized.component */
    "./src/app/modules/unauthorized/unauthorized.component.ts");

    var routes = [{
      path: 'login',
      component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'request_new',
      component: _modules_request_forms_request_forms_component__WEBPACK_IMPORTED_MODULE_6__["RequestFormsComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [{
        path: 'ticket',
        component: _modules_request_forms_request_ticket_form_request_ticket_form_component__WEBPACK_IMPORTED_MODULE_7__["RequestTicketFormComponent"]
      }, {
        path: 'report',
        component: _modules_request_forms_request_report_form_request_report_form_component__WEBPACK_IMPORTED_MODULE_8__["RequestReportFormComponent"]
      }, {
        path: 'finance',
        component: _modules_request_forms_request_finance_form_request_finance_form_component__WEBPACK_IMPORTED_MODULE_9__["RequestFinanceFormComponent"],
        canActivate: [_core_guards_finance_guard_guard__WEBPACK_IMPORTED_MODULE_17__["FinanceGuardGuard"]]
      }, {
        path: '**',
        redirectTo: 'ticket'
      }]
    }, {
      path: 'request_closed',
      component: _modules_request_closed_request_closed_component__WEBPACK_IMPORTED_MODULE_11__["RequestClosedComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'request_details/:id',
      component: _modules_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_15__["RequestDetailsComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'user_profile',
      component: _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'app_management',
      component: _modules_app_management_app_management_component__WEBPACK_IMPORTED_MODULE_12__["AppManagementComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _core_guards_privilege_manager_guard__WEBPACK_IMPORTED_MODULE_18__["PrivilegeManagerGuard"]],
      children: [{
        path: '',
        component: _modules_app_management_user_group_management_user_group_management_component__WEBPACK_IMPORTED_MODULE_16__["UserGroupManagementComponent"],
        canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'register_user',
        component: _modules_app_management_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_13__["RegisterUserComponent"],
        canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'register_group',
        component: _modules_app_management_register_group_register_group_component__WEBPACK_IMPORTED_MODULE_14__["RegisterGroupComponent"],
        canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: ''
      }]
    }, {
      path: 'unauthorized',
      component: _modules_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_19__["UnauthorizedComponent"],
      canActivate: [_core_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'dashboard'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'top'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'helpdeskAngular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-particle */
    "./node_modules/angular-particle/index.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-svg-icon-sprite */
    "./node_modules/ng-svg-icon-sprite/fesm2015/ng-svg-icon-sprite.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var saturn_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! saturn-datepicker */
    "./node_modules/saturn-datepicker/fesm2015/saturn-datepicker.js");
    /* harmony import */


    var _core_interceptors_AuthInterceptor___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./core/interceptors/AuthInterceptor  */
    "./src/app/core/interceptors/AuthInterceptor .ts");
    /* harmony import */


    var _core_interceptors_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./core/interceptors/ErrorInterceptor */
    "./src/app/core/interceptors/ErrorInterceptor.ts");
    /* harmony import */


    var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/components/navigation/navigation.component */
    "./src/app/shared/components/navigation/navigation.component.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _shared_components_chart_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/components/chart/chart.component */
    "./src/app/shared/components/chart/chart.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./modules/user-profile/user-profile.component */
    "./src/app/modules/user-profile/user-profile.component.ts");
    /* harmony import */


    var _modules_user_profile_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./modules/user-profile/user-details/user-details.component */
    "./src/app/modules/user-profile/user-details/user-details.component.ts");
    /* harmony import */


    var _modules_user_profile_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./modules/user-profile/privileges/privileges.component */
    "./src/app/modules/user-profile/privileges/privileges.component.ts");
    /* harmony import */


    var _modules_user_profile_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./modules/user-profile/user-groups/user-groups.component */
    "./src/app/modules/user-profile/user-groups/user-groups.component.ts");
    /* harmony import */


    var _modules_user_profile_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./modules/user-profile/group-details/group-details.component */
    "./src/app/modules/user-profile/group-details/group-details.component.ts");
    /* harmony import */


    var _modules_request_forms_request_ticket_form_request_ticket_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./modules/request-forms/request-ticket-form/request-ticket-form.component */
    "./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.ts");
    /* harmony import */


    var _modules_request_forms_request_report_form_request_report_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./modules/request-forms/request-report-form/request-report-form.component */
    "./src/app/modules/request-forms/request-report-form/request-report-form.component.ts");
    /* harmony import */


    var _modules_request_forms_request_finance_form_request_finance_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./modules/request-forms/request-finance-form/request-finance-form.component */
    "./src/app/modules/request-forms/request-finance-form/request-finance-form.component.ts");
    /* harmony import */


    var _modules_request_closed_request_closed_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./modules/request-closed/request-closed.component */
    "./src/app/modules/request-closed/request-closed.component.ts");
    /* harmony import */


    var _modules_request_details_comment_comment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./modules/request-details/comment/comment.component */
    "./src/app/modules/request-details/comment/comment.component.ts");
    /* harmony import */


    var _modules_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./modules/request-details/request-details.component */
    "./src/app/modules/request-details/request-details.component.ts");
    /* harmony import */


    var _modules_app_management_app_management_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./modules/app-management/app-management.component */
    "./src/app/modules/app-management/app-management.component.ts");
    /* harmony import */


    var _modules_app_management_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./modules/app-management/register-user/register-user.component */
    "./src/app/modules/app-management/register-user/register-user.component.ts");
    /* harmony import */


    var _modules_app_management_register_group_register_group_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./modules/app-management/register-group/register-group.component */
    "./src/app/modules/app-management/register-group/register-group.component.ts");
    /* harmony import */


    var _modules_request_forms_request_forms_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./modules/request-forms/request-forms.component */
    "./src/app/modules/request-forms/request-forms.component.ts");
    /* harmony import */


    var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./modules/login/login.component */
    "./src/app/modules/login/login.component.ts");
    /* harmony import */


    var _modules_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./modules/login/login-form/login-form.component */
    "./src/app/modules/login/login-form/login-form.component.ts");
    /* harmony import */


    var _modules_login_login_background_loginBackground_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./modules/login/login-background/loginBackground.component */
    "./src/app/modules/login/login-background/loginBackground.component.ts");
    /* harmony import */


    var _shared_directives_navigation_icon_hover_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./shared/directives/navigation-icon-hover.directive */
    "./src/app/shared/directives/navigation-icon-hover.directive.ts");
    /* harmony import */


    var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./shared/components/file-upload/file-upload.component */
    "./src/app/shared/components/file-upload/file-upload.component.ts");
    /* harmony import */


    var _modules_app_management_user_group_management_user_group_management_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./modules/app-management/user-group-management/user-group-management.component */
    "./src/app/modules/app-management/user-group-management/user-group-management.component.ts");
    /* harmony import */


    var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _core_services_user_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var _shared_components_request_table_request_table_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./shared/components/request-table/request-table.component */
    "./src/app/shared/components/request-table/request-table.component.ts");
    /* harmony import */


    var _core_services_file_service_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./core/services/file-service.service */
    "./src/app/core/services/file-service.service.ts");
    /* harmony import */


    var _modules_user_profile_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./modules/user-profile/user-images/user-images.component */
    "./src/app/modules/user-profile/user-images/user-images.component.ts");
    /* harmony import */


    var _modules_request_details_request_side_information_request_side_information_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./modules/request-details/request-side-information/request-side-information.component */
    "./src/app/modules/request-details/request-side-information/request-side-information.component.ts");
    /* harmony import */


    var _modules_request_details_comment_sharing_comment_sharing_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./modules/request-details/comment-sharing/comment-sharing.component */
    "./src/app/modules/request-details/comment-sharing/comment-sharing.component.ts");
    /* harmony import */


    var _modules_request_details_request_side_options_request_side_options_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./modules/request-details/request-side-options/request-side-options.component */
    "./src/app/modules/request-details/request-side-options/request-side-options.component.ts");
    /* harmony import */


    var _shared_components_request_filter_request_filter_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./shared/components/request-filter/request-filter.component */
    "./src/app/shared/components/request-filter/request-filter.component.ts");
    /* harmony import */


    var _modules_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./modules/unauthorized/unauthorized.component */
    "./src/app/modules/unauthorized/unauthorized.component.ts");
    /* harmony import */


    var _shared_components_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./shared/components/dot-loader/dot-loader.component */
    "./src/app/shared/components/dot-loader/dot-loader.component.ts");
    /* harmony import */


    var _shared_components_serdbuttons_serdbuttons_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./shared/components/serdbuttons/serdbuttons.component */
    "./src/app/shared/components/serdbuttons/serdbuttons.component.ts");
    /* harmony import */


    var _modules_request_details_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./modules/request-details/comment-form/comment-form.component */
    "./src/app/modules/request-details/comment-form/comment-form.component.ts"); // custom interceptors
    // custom components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"], _modules_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_40__["LoginFormComponent"], _modules_login_login_background_loginBackground_component__WEBPACK_IMPORTED_MODULE_41__["LoginBackgroundComponent"], _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _shared_components_chart_chart_component__WEBPACK_IMPORTED_MODULE_22__["ChartComponent"], _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"], _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__["UserProfileComponent"], _modules_user_profile_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_25__["UserDetailsComponent"], _modules_user_profile_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_27__["UserGroupsComponent"], _modules_user_profile_group_details_group_details_component__WEBPACK_IMPORTED_MODULE_28__["GroupDetailsComponent"], _modules_user_profile_privileges_privileges_component__WEBPACK_IMPORTED_MODULE_26__["PrivilegesComponent"], _modules_request_forms_request_ticket_form_request_ticket_form_component__WEBPACK_IMPORTED_MODULE_29__["RequestTicketFormComponent"], _modules_request_forms_request_report_form_request_report_form_component__WEBPACK_IMPORTED_MODULE_30__["RequestReportFormComponent"], _modules_request_forms_request_finance_form_request_finance_form_component__WEBPACK_IMPORTED_MODULE_31__["RequestFinanceFormComponent"], _modules_request_closed_request_closed_component__WEBPACK_IMPORTED_MODULE_32__["RequestClosedComponent"], _modules_request_details_comment_comment_component__WEBPACK_IMPORTED_MODULE_33__["CommentComponent"], _modules_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_34__["RequestDetailsComponent"], _modules_app_management_app_management_component__WEBPACK_IMPORTED_MODULE_35__["AppManagementComponent"], _modules_app_management_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_36__["RegisterUserComponent"], _modules_app_management_register_group_register_group_component__WEBPACK_IMPORTED_MODULE_37__["RegisterGroupComponent"], _modules_request_forms_request_forms_component__WEBPACK_IMPORTED_MODULE_38__["RequestFormsComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_39__["LoginComponent"], _shared_directives_navigation_icon_hover_directive__WEBPACK_IMPORTED_MODULE_42__["NavigationIconHoverDirective"], _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_43__["FileUploadComponent"], _modules_app_management_user_group_management_user_group_management_component__WEBPACK_IMPORTED_MODULE_44__["UserGroupManagementComponent"], _shared_components_request_table_request_table_component__WEBPACK_IMPORTED_MODULE_47__["RequestTableComponent"], _modules_user_profile_user_images_user_images_component__WEBPACK_IMPORTED_MODULE_49__["UserImagesComponent"], _modules_request_details_request_side_information_request_side_information_component__WEBPACK_IMPORTED_MODULE_50__["RequestSideInformationComponent"], _modules_request_details_comment_sharing_comment_sharing_component__WEBPACK_IMPORTED_MODULE_51__["CommentSharingComponent"], _modules_request_details_request_side_options_request_side_options_component__WEBPACK_IMPORTED_MODULE_52__["RequestSideOptionsComponent"], _shared_components_request_filter_request_filter_component__WEBPACK_IMPORTED_MODULE_53__["RequestFilterComponent"], _modules_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_54__["UnauthorizedComponent"], _shared_components_dot_loader_dot_loader_component__WEBPACK_IMPORTED_MODULE_55__["DotLoaderComponent"], _shared_components_serdbuttons_serdbuttons_component__WEBPACK_IMPORTED_MODULE_56__["SERDButtonsComponent"], _modules_request_details_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_57__["CommentFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_particle__WEBPACK_IMPORTED_MODULE_6__["ParticlesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_12__["IconSpriteModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SweetAlert2Module"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_16__["SidebarModule"].forRoot(), saturn_datepicker__WEBPACK_IMPORTED_MODULE_17__["SatNativeDateModule"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_17__["SatDatepickerModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_45__["AuthenticationService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_46__["UserService"], _core_services_file_service_service__WEBPACK_IMPORTED_MODULE_48__["FileServiceService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_AuthInterceptor___WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/guards/AuthGuard.ts":
  /*!******************************************!*\
    !*** ./src/app/core/guards/AuthGuard.ts ***!
    \******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isAuthenticated() && this.authService.isTokenValid()) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/core/guards/finance-guard.guard.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/guards/finance-guard.guard.ts ***!
    \****************************************************/

  /*! exports provided: FinanceGuardGuard */

  /***/
  function srcAppCoreGuardsFinanceGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinanceGuardGuard", function () {
      return FinanceGuardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FinanceGuardGuard =
    /*#__PURE__*/
    function () {
      function FinanceGuardGuard(router, authService) {
        _classCallCheck(this, FinanceGuardGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(FinanceGuardGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this = this;

          return this.authService.hasFinanceModuleAccess().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (res) {
            if (res) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
            }

            _this.router.navigate(['/request_new/ticket']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }));
        }
      }]);

      return FinanceGuardGuard;
    }();

    FinanceGuardGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    FinanceGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FinanceGuardGuard);
    /***/
  },

  /***/
  "./src/app/core/guards/privilege-manager.guard.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/guards/privilege-manager.guard.ts ***!
    \********************************************************/

  /*! exports provided: PrivilegeManagerGuard */

  /***/
  function srcAppCoreGuardsPrivilegeManagerGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivilegeManagerGuard", function () {
      return PrivilegeManagerGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var PrivilegeManagerGuard =
    /*#__PURE__*/
    function () {
      function PrivilegeManagerGuard(router, authService) {
        _classCallCheck(this, PrivilegeManagerGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(PrivilegeManagerGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.authService.hasPrivilegeAccess(), this.authService.isAdmin(), this.authService.isGhost(), function (bool1, bool2, bool3) {
            return bool1 || bool2 || bool3;
          });
        }
      }]);

      return PrivilegeManagerGuard;
    }();

    PrivilegeManagerGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    PrivilegeManagerGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrivilegeManagerGuard);
    /***/
  },

  /***/
  "./src/app/core/interceptors/AuthInterceptor .ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/interceptors/AuthInterceptor .ts ***!
    \*******************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppCoreInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var jwtToken = this.authService.getAccessToken();

          if (jwtToken) {
            req = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + jwtToken)
            });
          }

          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/core/interceptors/ErrorInterceptor.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/interceptors/ErrorInterceptor.ts ***!
    \*******************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppCoreInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(router) {
        _classCallCheck(this, ErrorInterceptor);

        this.router = router;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this2 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);

            if (err.status === 401) {
              _this2.authenticationFailed();
            } else if (err.status === 403) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                text: err.error
              }).then(function () {
                return _this2.router.navigate(['/unauthorized']);
              });
            } else if (err.status === 404) {
              console.log("404 error, shoud be created an error page");
            } else {
              _this2.generalError(err.error);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error.error);
          }));
        }
      }, {
        key: "generalError",
        value: function generalError(error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'error',
            text: 'Požiadavka zlyhala, chyba hlášky : ' + error
          });
        }
      }, {
        key: "authenticationFailed",
        value: function authenticationFailed() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'error',
            text: 'Zadali ste nesprávne prihlasovacie údaje.'
          });
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/core/services/authentication.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/authentication.service.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppCoreServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
      }

      _createClass(AuthenticationService, [{
        key: "getDecodedToken",
        value: function getDecodedToken() {
          if (this.JWToken$ === undefined) {
            this.JWToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.jwtHelper.decodeToken(this.getAccessToken()));
          }

          return this.JWToken$.asObservable();
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this3 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].loginUrl + "login", {
            username: username,
            password: password
          }, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (ressponse) {
            _this3.setAccessToken(ressponse.headers.get("authorization")); // this.setRefreshToken(tokens.refresh_token);

          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this3.handleAuthenticationError(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.setAccessToken(null);
          this.setRefreshToken(null);
          this.JWToken$.next(null);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.getAccessToken();
        }
      }, {
        key: "isTokenValid",
        value: function isTokenValid() {
          return !this.jwtHelper.isTokenExpired(this.getAccessToken());
        }
      }, {
        key: "handleAuthenticationError",
        value: function handleAuthenticationError(err) {
          this.setAccessToken(null);
          this.setRefreshToken(null);
        }
      }, {
        key: "setAccessToken",
        value: function setAccessToken(accessToken) {
          if (accessToken) {
            localStorage.setItem('access_token', accessToken);
            this.saveJwtToken(accessToken);
          } else {
            localStorage.removeItem('access_token');
            this.saveJwtToken(null);
          }
        }
      }, {
        key: "saveJwtToken",
        value: function saveJwtToken(accessToken) {
          if (this.JWToken$) {
            this.JWToken$.next(this.jwtHelper.decodeToken(accessToken));
          } else {
            this.JWToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.jwtHelper.decodeToken(accessToken));
          }
        }
      }, {
        key: "setRefreshToken",
        value: function setRefreshToken(refreshToken) {
          if (refreshToken) {
            localStorage.setItem('refresh_token', refreshToken);
          } else {
            localStorage.removeItem('refresh_token');
          }
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return localStorage.getItem('access_token');
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem('refresh_token');
        }
        /* ----------------- privileges ------------------- */

      }, {
        key: "isSolverRightHand",
        value: function isSolverRightHand() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.isSolver(), this.isManagerRightHand(), this.isManager(), function (one, two, three) {
            return one && (two || three);
          });
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.AUTHORITIES.includes("ROLE_ADMIN");
          }));
        }
      }, {
        key: "isGhost",
        value: function isGhost() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.AUTHORITIES.includes("ROLE_GHOST");
          }));
        }
      }, {
        key: "isManager",
        value: function isManager() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.AUTHORITIES.includes("ROLE_MANAGER");
          }));
        }
      }, {
        key: "isManagerRightHand",
        value: function isManagerRightHand() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.AUTHORITIES.includes("ROLE_MANAGER_RIGHT_HAND");
          }));
        }
      }, {
        key: "isSolver",
        value: function isSolver() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.AUTHORITIES.includes("ROLE_SOLVER");
          }));
        }
      }, {
        key: "hasPrivilegeAccess",
        value: function hasPrivilegeAccess() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.MODULE_TYPES_TO_USE.includes("Privilege");
          }));
        }
      }, {
        key: "hasFinanceModuleAccess",
        value: function hasFinanceModuleAccess() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.MODULE_TYPES_TO_USE.includes("Finance");
          }));
        }
      }, {
        key: "hasTicketModuleAccess",
        value: function hasTicketModuleAccess() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.MODULE_TYPES_TO_USE.includes("Ticket");
          }));
        }
      }, {
        key: "hasReportModuleAccess",
        value: function hasReportModuleAccess() {
          return this.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            return x.MODULE_TYPES_TO_USE.includes("Report");
          }));
        }
      }, {
        key: "isMoreThanNormalUser",
        value: function isMoreThanNormalUser() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.isAdmin(), this.isGhost(), this.isSolver(), this.isManager(), this.isManagerRightHand(), function (one, two, three, four, five) {
            return one || two || three || four || five;
          });
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/core/services/comment-http.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/comment-http.service.ts ***!
    \*******************************************************/

  /*! exports provided: CommentHttpService */

  /***/
  function srcAppCoreServicesCommentHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentHttpService", function () {
      return CommentHttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var CommentHttpService =
    /*#__PURE__*/
    function () {
      function CommentHttpService(http) {
        _classCallCheck(this, CommentHttpService);

        this.http = http;
      }

      _createClass(CommentHttpService, [{
        key: "addComment",
        value: function addComment(requestComment) {
          var sendEmail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var solution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("sendEmail", String(sendEmail)).set("solution", String(solution));
          return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/comment", requestComment, {
            params: params
          });
        }
      }, {
        key: "editComment",
        value: function editComment(requestComment) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/comment", requestComment);
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(requestComment) {
          return this.http.request('delete', environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/comment", {
            body: requestComment
          });
        }
      }, {
        key: "changePrivacy",
        value: function changePrivacy(requestComment) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/comment/privacy", requestComment);
        }
      }, {
        key: "shareComment",
        value: function shareComment(requestComment) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/comment/share", requestComment);
        }
      }]);

      return CommentHttpService;
    }();

    CommentHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommentHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommentHttpService);
    /***/
  },

  /***/
  "./src/app/core/services/file-service.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/file-service.service.ts ***!
    \*******************************************************/

  /*! exports provided: FileServiceService */

  /***/
  function srcAppCoreServicesFileServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileServiceService", function () {
      return FileServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);

    var FileServiceService =
    /*#__PURE__*/
    function () {
      function FileServiceService(http) {
        _classCallCheck(this, FileServiceService);

        this.http = http;
      }

      _createClass(FileServiceService, [{
        key: "postFileForRequest",
        value: function postFileForRequest(id, filesToUpload) {
          if (filesToUpload.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }

          var formData = new FormData();

          for (var i = 0; i < filesToUpload.length; i++) {
            formData.append("filesToUpload", filesToUpload[i]);
          }

          return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "requests/requestDetails/".concat(id, "/files"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return true;
          }));
        }
      }, {
        key: "downloadFileForRequest",
        value: function downloadFileForRequest(id, fileName) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('fileName', fileName);
          this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "requests/requestDetails/".concat(id, "/download"), {
            params: params,
            responseType: 'blob'
          }).subscribe(function (res) {
            return Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(res, fileName);
          });
        }
      }]);

      return FileServiceService;
    }();

    FileServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    FileServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FileServiceService);
    /***/
  },

  /***/
  "./src/app/core/services/group.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/group.service.ts ***!
    \************************************************/

  /*! exports provided: GroupService */

  /***/
  function srcAppCoreServicesGroupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupService", function () {
      return GroupService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var GroupService =
    /*#__PURE__*/
    function () {
      function GroupService(http) {
        _classCallCheck(this, GroupService);

        this.http = http;
      }

      _createClass(GroupService, [{
        key: "getAllGroupNamesForUser",
        value: function getAllGroupNamesForUser() {
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/available"));
        }
      }, {
        key: "getAllGroupContainersForUser",
        value: function getAllGroupContainersForUser() {
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group"));
        }
      }, {
        key: "getGroupDetails",
        value: function getGroupDetails(groupName) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('groupName', groupName);
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/details"), {
            params: params
          });
        } // accessed only user containing module privilege

      }, {
        key: "getGroupDetailsWithUnsetPrivileges",
        value: function getGroupDetailsWithUnsetPrivileges(groupName) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('groupName', groupName);
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/secure/manage/details"), {
            params: params
          });
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups() {
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/secure/manage/getAll"));
        }
      }, {
        key: "registerGroup",
        value: function registerGroup(group) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/secure/manage/registration"), group, {
            headers: headers
          });
        }
      }, {
        key: "modifyGroup",
        value: function modifyGroup(group) {
          return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/secure/manage/").concat(group.name, "/modifyGroup"), group);
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup(name) {
          return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "group/secure/manage/").concat(name, "/removeGroup"));
        }
      }]);

      return GroupService;
    }();

    GroupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GroupService);
    /***/
  },

  /***/
  "./src/app/core/services/request-modification.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/services/request-modification.service.ts ***!
    \***************************************************************/

  /*! exports provided: RequestModificationService */

  /***/
  function srcAppCoreServicesRequestModificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestModificationService", function () {
      return RequestModificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RequestModificationService =
    /*#__PURE__*/
    function () {
      function RequestModificationService(http) {
        _classCallCheck(this, RequestModificationService);

        this.http = http;
        this.requestDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(RequestModificationService, [{
        key: "loadRequestDetails",
        value: function loadRequestDetails(id) {
          var _this4 = this;

          return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/requestDetails/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (requestDetails) {
            //console.log(requestDetails)
            _this4.requestDetails.next(requestDetails);
          }));
        }
      }, {
        key: "removeRequestDetails",
        value: function removeRequestDetails() {
          this.requestDetails.next(null);
        }
        /*public completeRequestDetails(): void{
          this.requestDetails.next(null);
          this.requestDetails.complete();
        }*/

      }, {
        key: "getRequestDetials",
        value: function getRequestDetials() {
          return this.requestDetails.asObservable();
        }
      }, {
        key: "getRequestOnDashboard",
        value: function getRequestOnDashboard() {
          return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "requests/dashboard"));
        }
      }, {
        key: "getClosedRequests",
        value: function getClosedRequests(dateFrom, dateTo) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('dateFrom', dateFrom).set('dateTo', dateTo);
          return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/closed", {
            params: params
          });
        }
        /* public getTicketDetials():Observable<TicketDetails>{
           return this.requestDetails.pipe(
             map( detials => <TicketDetails> detials)
           );
         }
        
         public getReportDetails():Observable<ReportDetails>{
           return this.requestDetails.pipe(
             map( detials => <ReportDetails> detials)
           );
         }
        
         public getFinanceDetials():Observable<FinanceDetails>{
           return this.requestDetails.pipe(
             map( detials => <FinanceDetails> detials)
           );
         }*/

      }, {
        key: "assignOrRemoveRequestOnMe",
        value: function assignOrRemoveRequestOnMe(requestid, assign) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('assign', String(assign));
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/".concat(requestid, "/solver"), null, {
            params: params
          });
        }
      }, {
        key: "changePriority",
        value: function changePriority(requestid, priority) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('priority', priority);
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/".concat(requestid, "/priority"), null, {
            params: params
          });
        }
      }, {
        key: "changeState",
        value: function changeState(requestid, close) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('close', String(close));
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/".concat(requestid, "/state"), null, {
            params: params
          });
        }
      }, {
        key: "changeCommenting",
        value: function changeCommenting(requestid) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/".concat(requestid, "/commenting"), null);
        }
      }, {
        key: "assignSolver",
        value: function assignSolver(requestid, userSimple) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/secure/".concat(requestid, "/addSolver"), userSimple);
        }
      }, {
        key: "removeSolver",
        value: function removeSolver(requestid) {
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/modification/secure/".concat(requestid, "/removeSolver"), null);
        }
        /**
         * Report modification
         */

      }, {
        key: "reportAddEvaluation",
        value: function reportAddEvaluation(requestid, days) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('days', String(days));
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/report/".concat(requestid, "/evaluation"), null, {
            params: params
          });
        }
      }]);

      return RequestModificationService;
    }();

    RequestModificationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    RequestModificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequestModificationService);
    /***/
  },

  /***/
  "./src/app/core/services/request-type.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/request-type.service.ts ***!
    \*******************************************************/

  /*! exports provided: RequestTypeService */

  /***/
  function srcAppCoreServicesRequestTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestTypeService", function () {
      return RequestTypeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var RequestTypeService =
    /*#__PURE__*/
    function () {
      function RequestTypeService(http) {
        _classCallCheck(this, RequestTypeService);

        this.http = http;
      }

      _createClass(RequestTypeService, [{
        key: "getFinanceTypesForUseToSubmit",
        value: function getFinanceTypesForUseToSubmit() {
          return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/finance/types");
        }
      }, {
        key: "getFinanceTypesAll",
        value: function getFinanceTypesAll() {
          return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/finance/secure/types");
        }
      }, {
        key: "getTicketSubtype",
        value: function getTicketSubtype(ticketType) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ticketTypeName', ticketType);
          return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "requests/ticket/ticketSubtype", {
            params: params
          });
        }
      }]);

      return RequestTypeService;
    }();

    RequestTypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RequestTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequestTypeService);
    /***/
  },

  /***/
  "./src/app/core/services/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.userPrefix = 'logged_in_user';
        this.checkIfUserAvailable();
      }

      _createClass(UserService, [{
        key: "loadLoggedInUser",
        value: function loadLoggedInUser() {
          var _this5 = this;

          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/basicInformation").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) {
            _this5.saveUserToLocalStorage(user);

            _this5.user = user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "checkIfUserAvailable",
        value: function checkIfUserAvailable() {
          if (this.user === undefined) {
            this.user = JSON.parse(localStorage.getItem(this.userPrefix));
          }
        }
      }, {
        key: "saveUserToLocalStorage",
        value: function saveUserToLocalStorage(user) {
          localStorage.setItem(this.userPrefix, JSON.stringify(user));
        }
      }, {
        key: "removeUserFromLocalStorage",
        value: function removeUserFromLocalStorage() {
          localStorage.removeItem(this.userPrefix);
        }
      }, {
        key: "changeUserImage",
        value: function changeUserImage(image) {
          this.user.photoBytes = image.imageBytes;
          this.saveUserToLocalStorage(this.user);
        }
      }, {
        key: "getUserSimple",
        value: function getUserSimple() {
          var user = {
            username: this.user.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            photoBytes: this.user.photoBytes
          };
          return user;
        } // endpoints

      }, {
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/registration", user, {
            headers: headers
          });
        }
      }, {
        key: "getAllActiveUsers",
        value: function getAllActiveUsers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/secure/allActive");
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/secure/all");
        }
      }, {
        key: "getUserDetials",
        value: function getUserDetials(username) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/secure/".concat(username));
        }
      }, {
        key: "resetUserPassword",
        value: function resetUserPassword(username) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/secure/resetPassword/".concat(username), null);
        }
      }, {
        key: "modifyUserState",
        value: function modifyUserState(username) {
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/secure/modifyState/".concat(username), null);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"] //MatPaginator,
      // MatSort,
      // MatTableDataSource,
      // MatCell,
      // MatRadioButton
      ]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/modules/app-management/app-management.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/app-management/app-management.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAppManagementAppManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 0 10px 0 10px;\n  float: right;\n  position: relative;\n}\n\n.windowButtonChangers {\n  position: relative;\n  float: right;\n  width: 100%;\n  /*border-bottom: 1px solid #d7d7d7;*/\n  margin-bottom: 20px;\n}\n\n.requestFormButton {\n  float: right;\n  margin-right: 10px;\n  background-color: #ffec98;\n}\n\n/** used in user / group registration */\n\n.inlineParameters {\n  display: block;\n  margin-left: 40px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.sendingButton {\n  float: right;\n  background-color: #3757c9;\n}\n\n.registerUserIcon {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.formTitle {\n  font-size: 25px;\n  font-weight: bold;\n  color: #818181;\n}\n\n.formTitleSmall {\n  font-size: 26px;\n  font-weight: bold;\n  color: #2c8d61;\n  position: absolute;\n  left: 30px;\n}\n\n.formTitleContainer {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 20px;\n  width: 100%;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n\n.leftContainer {\n  float: left;\n  width: 45%;\n  margin-left: 20px;\n}\n\n@media (min-width: 1919px) {\n  .windowButtonChangers {\n    margin-bottom: 35px;\n  }\n\n  .formTitleSmall {\n    font-size: 30px;\n  }\n\n  .registerUserIcon {\n    width: 45px;\n    height: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhcHAtbWFuYWdlbWVudFxcYXBwLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXBwLW1hbmFnZW1lbnQvYXBwLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FETUEsdUNBQUE7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRko7O0FET0E7RUFDSTtJQUNJLG1CQUFBO0VDSk47O0VET0U7SUFDSSxlQUFBO0VDSk47O0VET0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcC1tYW5hZ2VtZW50L2FwcC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jY29udGVudENvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi53aW5kb3dCdXR0b25DaGFuZ2Vyc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNzsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi5yZXF1ZXN0Rm9ybUJ1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjOTg7XHJcbn1cclxuXHJcblxyXG4vKiogdXNlZCBpbiB1c2VyIC8gZ3JvdXAgcmVnaXN0cmF0aW9uICovXHJcbi5pbmxpbmVQYXJhbWV0ZXJze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zZW5kaW5nQnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzc1N2M5O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJVc2VySWNvbntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojODE4MTgxO1xyXG59XHJcblxyXG4uZm9ybVRpdGxlU21hbGx7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiMyYzhkNjE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZm9ybVRpdGxlQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmxlZnRDb250YWluZXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NSU7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5AbWVkaWEobWluLXdpZHRoOjE5MTlweCkge1xyXG4gICAgLndpbmRvd0J1dHRvbkNoYW5nZXJze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1UaXRsZVNtYWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXJVc2VySWNvbntcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIiNjb250ZW50Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2luZG93QnV0dG9uQ2hhbmdlcnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7Ki9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJlcXVlc3RGb3JtQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjOTg7XG59XG5cbi8qKiB1c2VkIGluIHVzZXIgLyBncm91cCByZWdpc3RyYXRpb24gKi9cbi5pbmxpbmVQYXJhbWV0ZXJzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZW5kaW5nQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1N2M5O1xufVxuXG4ucmVnaXN0ZXJVc2VySWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvcm1UaXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuXG4uZm9ybVRpdGxlU21hbGwge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJjOGQ2MTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xufVxuXG4uZm9ybVRpdGxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxlZnRDb250YWluZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgLndpbmRvd0J1dHRvbkNoYW5nZXJzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG5cbiAgLmZvcm1UaXRsZVNtYWxsIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAucmVnaXN0ZXJVc2VySWNvbiB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/app-management/app-management.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/app-management/app-management.component.ts ***!
    \********************************************************************/

  /*! exports provided: AppManagementComponent */

  /***/
  function srcAppModulesAppManagementAppManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppManagementComponent", function () {
      return AppManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var AppManagementComponent =
    /*#__PURE__*/
    function () {
      function AppManagementComponent(authService) {
        _classCallCheck(this, AppManagementComponent);

        this.authService = authService;
        this.isAdmin$ = this.authService.isAdmin();
        this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
      }

      _createClass(AppManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppManagementComponent;
    }();

    AppManagementComponent.ctorParameters = function () {
      return [{
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AppManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/app-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-management.component.scss */
      "./src/app/modules/app-management/app-management.component.scss")).default]
    })], AppManagementComponent);
    /***/
  },

  /***/
  "./src/app/modules/app-management/register-group/register-group.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/app-management/register-group/register-group.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAppManagementRegisterGroupRegisterGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 0 10px 0 10px;\n  float: right;\n  position: relative;\n}\n\n.windowButtonChangers {\n  position: relative;\n  float: right;\n  width: 100%;\n  /*border-bottom: 1px solid #d7d7d7;*/\n  margin-bottom: 20px;\n}\n\n.requestFormButton {\n  float: right;\n  margin-right: 10px;\n  background-color: #ffec98;\n}\n\n/** used in user / group registration */\n\n.inlineParameters {\n  display: block;\n  margin-left: 40px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.sendingButton {\n  float: right;\n  background-color: #3757c9;\n}\n\n.registerUserIcon {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.formTitle {\n  font-size: 25px;\n  font-weight: bold;\n  color: #818181;\n}\n\n.formTitleSmall {\n  font-size: 26px;\n  font-weight: bold;\n  color: #2c8d61;\n  position: absolute;\n  left: 30px;\n}\n\n.formTitleContainer {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 20px;\n  width: 100%;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n\n.leftContainer {\n  float: left;\n  width: 45%;\n  margin-left: 20px;\n}\n\n@media (min-width: 1919px) {\n  .windowButtonChangers {\n    margin-bottom: 35px;\n  }\n\n  .formTitleSmall {\n    font-size: 30px;\n  }\n\n  .registerUserIcon {\n    width: 45px;\n    height: 45px;\n  }\n}\n\n.topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\n.leftContainer {\n  width: 60%;\n  float: left;\n}\n\n.formInformationContainer {\n  float: left;\n  width: 45%;\n  margin-right: 15px;\n  margin-bottom: 5px;\n}\n\n.rightContainer {\n  float: left;\n  margin-left: 3%;\n  margin-top: 30px;\n  max-width: 28%;\n}\n\n.informationsContainer {\n  margin-left: 50px;\n  border-bottom: 1px solid #bababa;\n}\n\n.smallerContent {\n  font-size: 14px;\n  border-left: 1px solid #bababa;\n}\n\n.extraSpace {\n  margin-top: 10px;\n}\n\n@media (min-width: 1919px) {\n  .formTitleSmall {\n    font-size: 21px;\n  }\n\n  .smallerContent {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC9yZWdpc3Rlci1ncm91cC9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhcHAtbWFuYWdlbWVudFxcYXBwLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXBwLW1hbmFnZW1lbnQvcmVnaXN0ZXItZ3JvdXAvcmVnaXN0ZXItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXBwLW1hbmFnZW1lbnQvcmVnaXN0ZXItZ3JvdXAvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXFNpZGVUYWJsZVByaW50U2Nzcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FwcC1tYW5hZ2VtZW50L3JlZ2lzdGVyLWdyb3VwL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFwcC1tYW5hZ2VtZW50XFxyZWdpc3Rlci1ncm91cFxccmVnaXN0ZXItZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FETUEsdUNBQUE7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRko7O0FET0E7RUFDSTtJQUNJLG1CQUFBO0VDSk47O0VET0U7SUFDSSxlQUFBO0VDSk47O0VET0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0pOO0FBQ0Y7O0FDbEZBO0VBQ0ksZ0JBQUE7QURvRko7O0FDakZBO0VBQ0ksZUFBQTtBRG9GSjs7QUNqRkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURvRko7O0FDL0VBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEa0ZKOztBQy9FQTtFQUNJLGdCQUFBO0FEa0ZKOztBQy9FQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QURrRko7O0FDL0VBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBRGtGSjs7QUMvRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEa0ZKOztBQy9FQTtFQUNJLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGlCQUFBO0FEa0ZKOztBQy9FQTtFQUNJLGNBQUE7QURrRko7O0FDL0VBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRGtGSjs7QUMvRUE7RUFDSSxrQkFBQTtBRGtGSjs7QUUxSUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRjZJSjs7QUV6SUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUY0SUo7O0FFeElBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUYySUo7O0FFeElBO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtBRjJJSjs7QUV4SUE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7QUYySUo7O0FFeElBO0VBQ0ksZ0JBQUE7QUYySUo7O0FFdklBO0VBQ0k7SUFDSSxlQUFBO0VGMElOOztFRXZJRTtJQUNJLGVBQUE7RUYwSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwLW1hbmFnZW1lbnQvcmVnaXN0ZXItZ3JvdXAvcmVnaXN0ZXItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNjb250ZW50Q29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndpbmRvd0J1dHRvbkNoYW5nZXJze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkN2Q3OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnJlcXVlc3RGb3JtQnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWM5ODtcclxufVxyXG5cclxuXHJcbi8qKiB1c2VkIGluIHVzZXIgLyBncm91cCByZWdpc3RyYXRpb24gKi9cclxuLmlubGluZVBhcmFtZXRlcnN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNlbmRpbmdCdXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNzU3Yzk7XHJcbn1cclxuXHJcbi5yZWdpc3RlclVzZXJJY29ue1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtVGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiM4MTgxODE7XHJcbn1cclxuXHJcbi5mb3JtVGl0bGVTbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzJjOGQ2MTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtVGl0bGVDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubGVmdENvbnRhaW5lcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ1JTsgICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbiAgXHJcbkBtZWRpYShtaW4td2lkdGg6MTkxOXB4KSB7XHJcbiAgICAud2luZG93QnV0dG9uQ2hhbmdlcnN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybVRpdGxlU21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3RlclVzZXJJY29ue1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiI2NvbnRlbnRDb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53aW5kb3dCdXR0b25DaGFuZ2VycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNzsqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmVxdWVzdEZvcm1CdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWM5ODtcbn1cblxuLyoqIHVzZWQgaW4gdXNlciAvIGdyb3VwIHJlZ2lzdHJhdGlvbiAqL1xuLmlubGluZVBhcmFtZXRlcnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlbmRpbmdCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzU3Yzk7XG59XG5cbi5yZWdpc3RlclVzZXJJY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9ybVRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5cbi5mb3JtVGl0bGVTbWFsbCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmM4ZDYxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5mb3JtVGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubGVmdENvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xuICAud2luZG93QnV0dG9uQ2hhbmdlcnMge1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAuZm9ybVRpdGxlU21hbGwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5yZWdpc3RlclVzZXJJY29uIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cbi50b3BzcGFjZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zbWFsbGVyQ29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm1UaXRsZVNtYWxsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuI2RldGFpbFRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZvcm1JbmZvcm1hdGlvbkNvbnRhaW5lclN1YmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yaWdodENvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbmZvcm1hdGlvbnNDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmluZm9ybWF0aW9uVGl0bGUge1xuICBmbGV4OiAwIDAgMTY1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYXRpb25zSG9sZGVyIHtcbiAgY29sb3I6ICM2NzY2NjY7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxudWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mb3JtSW5mb3JtYXRpb25Db250YWluZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yaWdodENvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1heC13aWR0aDogMjglO1xufVxuXG4uaW5mb3JtYXRpb25zQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmFiYWJhO1xufVxuXG4uc21hbGxlckNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JhYmFiYTtcbn1cblxuLmV4dHJhU3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIC5mb3JtVGl0bGVTbWFsbCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG5cbiAgLnNtYWxsZXJDb250ZW50IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn0iLCIudG9wc3BhY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc21hbGxlckNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb3JtVGl0bGVTbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzgxODE4MTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG4uaWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4jZGV0YWlsVGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZm9ybUluZm9ybWF0aW9uQ29udGFpbmVyU3ViY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yaWdodENvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25zQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25UaXRsZXtcclxuICAgIGZsZXg6IDAgMCAxNjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25zSG9sZGVye1xyXG4gICAgY29sb3I6IzY3NjY2NjtcclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG5cclxuICB9XHJcbnVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59IiwiQGltcG9ydCBcIi4uL2FwcC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzXCI7IFxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL2N1c3RvbUNzcy9TaWRlVGFibGVQcmludFNjc3Muc2Nzc1wiO1xyXG5cclxuLmxlZnRDb250YWluZXJ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybUluZm9ybWF0aW9uQ29udGFpbmVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLnJpZ2h0Q29udGFpbmVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyOCU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmFiYWJhO1xyXG59XHJcblxyXG4uc21hbGxlckNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiYWJhYmE7XHJcbn1cclxuXHJcbi5leHRyYVNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTkxOXB4KSB7XHJcbiAgICAuZm9ybVRpdGxlU21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbWFsbGVyQ29udGVudHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/app-management/register-group/register-group.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/app-management/register-group/register-group.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: RegisterGroupComponent */

  /***/
  function srcAppModulesAppManagementRegisterGroupRegisterGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterGroupComponent", function () {
      return RegisterGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_request_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/request-type.service */
    "./src/app/core/services/request-type.service.ts");
    /* harmony import */


    var app_core_services_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/group.service */
    "./src/app/core/services/group.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var RegisterGroupComponent =
    /*#__PURE__*/
    function () {
      function RegisterGroupComponent(formBuilder, userService, requestTypeService, groupService) {
        _classCallCheck(this, RegisterGroupComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.requestTypeService = requestTypeService;
        this.groupService = groupService;
        this.allAvailableUsers = [];
        this.financeTypes = [];
      }

      _createClass(RegisterGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.initFormGroup();
          this.userService.getAllActiveUsers().subscribe(function (users) {
            return _this6.allAvailableUsers = users;
          });
          this.requestTypeService.getFinanceTypesAll().subscribe(function (types) {
            return _this6.financeTypes = types;
          });
          this.requestTypeService.getTicketSubtype("Software").subscribe(function (x) {
            return _this6.softwares = x;
          });
          this.requestTypeService.getTicketSubtype("Hardware").subscribe(function (x) {
            return _this6.hardwares = x;
          });
          this.requestTypeService.getTicketSubtype("Server").subscribe(function (x) {
            return _this6.servers = x;
          });
        }
      }, {
        key: "initFormGroup",
        value: function initFormGroup() {
          this.groupRegistrationForm = this.formBuilder.group({
            groupName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            groupEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            groupDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            groupManager: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            usersWatchGroup: [],
            usersInGroup: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            moduleTypesToUse: [],
            submitFinanceRequests: [],
            requestTypesToSolve: [],
            solveTickets: [],
            solveSoftware: [],
            solveHardware: [],
            solveServer: []
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          if (this.groupRegistrationForm.invalid) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            text: "Naozaj chcetete vytvoriť skupinu ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (res) {
            if (res.value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                position: 'top-end',
                text: 'Žiadosť o vytvorenie skupiny bolo zaslané',
                showConfirmButton: false,
                timer: 1500
              });

              var group = _this7.consructGroup();

              _this7.groupService.registerGroup(group).subscribe(function () {
                _this7.groupFormViewChild.resetForm();

                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                  position: 'top-end',
                  text: 'Skupina ' + group.name + " bola vytvorená   ",
                  showConfirmButton: false,
                  timer: 1500
                });
              });
            }
          });
        }
      }, {
        key: "consructGroup",
        value: function consructGroup() {
          var ticketpriv = {};

          if (this.solveTickets.value !== null) {
            ticketpriv = {
              "Software": this.solveSoftware.value === null ? [] : this.solveSoftware.value,
              "Hardware": this.solveHardware.value === null ? [] : this.solveHardware.value,
              "Server": this.solveServer.value === null ? [] : this.solveServer.value,
              "User": this.solveTickets.value.includes('User') ? ["True"] : [],
              "Other": this.solveTickets.value.includes('Other') ? ["True"] : []
            };
          }

          var privilege = {
            moduleTypesToUse: this.moduleTypesToUse.value === null ? [] : this.moduleTypesToUse.value,
            requestTypesToSolve: this.requestTypesToSolve.value === null ? [] : this.requestTypesToSolve.value,
            solveTickets: ticketpriv,
            submitFinanceRequests: this.submitFinanceRequests.value === null ? [] : this.submitFinanceRequests.value
          };
          var group = {
            name: this.groupName.value.charAt(0).toUpperCase() + this.groupName.value.slice(1),
            description: this.groupDescription.value,
            email: this.groupEmail.value,
            groupManager: this.groupManager.value,
            usersInGroup: this.usersInGroup.value === null ? [] : this.usersInGroup.value,
            usersWatchGroup: this.usersWatchGroup.value === null ? [] : this.usersWatchGroup.value,
            applicationPrivilegeDTO: privilege,
            unsetApplicationPrivilegeDTO: null
          };
          return group;
        }
      }, {
        key: "changeModuleTypesToUse",
        value: function changeModuleTypesToUse() {
          if (!this.moduleTypesToUse.value.includes("Finance")) {
            this.submitFinanceRequests.reset();
          }
        }
      }, {
        key: "changeTicketTypeToSolve",
        value: function changeTicketTypeToSolve() {
          if (!this.requestTypesToSolve.value.includes("Ticket")) {
            this.solveSoftware.reset();
            this.solveHardware.reset();
            this.solveServer.reset();
            this.solveTickets.reset();
          }

          if (this.solveTickets.value !== null) {
            if (!this.solveTickets.value.includes("Software")) {
              this.solveSoftware.reset();
            }

            if (!this.solveTickets.value.includes("Hardware")) {
              this.solveHardware.reset();
            }

            if (!this.solveTickets.value.includes("Server")) {
              this.solveServer.reset();
            }
          }
        }
      }, {
        key: "groupName",
        get: function get() {
          return this.groupRegistrationForm.get("groupName");
        }
      }, {
        key: "groupEmail",
        get: function get() {
          return this.groupRegistrationForm.get("groupEmail");
        }
      }, {
        key: "groupDescription",
        get: function get() {
          return this.groupRegistrationForm.get("groupDescription");
        }
      }, {
        key: "groupManager",
        get: function get() {
          return this.groupRegistrationForm.get("groupManager");
        }
      }, {
        key: "usersWatchGroup",
        get: function get() {
          return this.groupRegistrationForm.get("usersWatchGroup");
        }
      }, {
        key: "usersInGroup",
        get: function get() {
          return this.groupRegistrationForm.get("usersInGroup");
        }
      }, {
        key: "moduleTypesToUse",
        get: function get() {
          return this.groupRegistrationForm.get("moduleTypesToUse");
        }
      }, {
        key: "submitFinanceRequests",
        get: function get() {
          return this.groupRegistrationForm.get("submitFinanceRequests");
        }
      }, {
        key: "requestTypesToSolve",
        get: function get() {
          return this.groupRegistrationForm.get("requestTypesToSolve");
        }
      }, {
        key: "solveTickets",
        get: function get() {
          return this.groupRegistrationForm.get("solveTickets");
        }
      }, {
        key: "solveSoftware",
        get: function get() {
          return this.groupRegistrationForm.get("solveSoftware");
        }
      }, {
        key: "solveHardware",
        get: function get() {
          return this.groupRegistrationForm.get("solveHardware");
        }
      }, {
        key: "solveServer",
        get: function get() {
          return this.groupRegistrationForm.get("solveServer");
        }
      }]);

      return RegisterGroupComponent;
    }();

    RegisterGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: app_core_services_request_type_service__WEBPACK_IMPORTED_MODULE_4__["RequestTypeService"]
      }, {
        type: app_core_services_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupFormViewChild', {
      static: true
    })], RegisterGroupComponent.prototype, "groupFormViewChild", void 0);
    RegisterGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-group/register-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-group.component.scss */
      "./src/app/modules/app-management/register-group/register-group.component.scss")).default]
    })], RegisterGroupComponent);
    /***/
  },

  /***/
  "./src/app/modules/app-management/register-user/register-user.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/app-management/register-user/register-user.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAppManagementRegisterUserRegisterUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 0 10px 0 10px;\n  float: right;\n  position: relative;\n}\n\n.windowButtonChangers {\n  position: relative;\n  float: right;\n  width: 100%;\n  /*border-bottom: 1px solid #d7d7d7;*/\n  margin-bottom: 20px;\n}\n\n.requestFormButton {\n  float: right;\n  margin-right: 10px;\n  background-color: #ffec98;\n}\n\n/** used in user / group registration */\n\n.inlineParameters {\n  display: block;\n  margin-left: 40px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.sendingButton {\n  float: right;\n  background-color: #3757c9;\n}\n\n.registerUserIcon {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.formTitle {\n  font-size: 25px;\n  font-weight: bold;\n  color: #818181;\n}\n\n.formTitleSmall {\n  font-size: 26px;\n  font-weight: bold;\n  color: #2c8d61;\n  position: absolute;\n  left: 30px;\n}\n\n.formTitleContainer {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 20px;\n  width: 100%;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n\n.leftContainer {\n  float: left;\n  width: 45%;\n  margin-left: 20px;\n}\n\n@media (min-width: 1919px) {\n  .windowButtonChangers {\n    margin-bottom: 35px;\n  }\n\n  .formTitleSmall {\n    font-size: 30px;\n  }\n\n  .registerUserIcon {\n    width: 45px;\n    height: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC9yZWdpc3Rlci11c2VyL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFwcC1tYW5hZ2VtZW50XFxhcHAtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC9yZWdpc3Rlci11c2VyL3JlZ2lzdGVyLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FETUEsdUNBQUE7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRko7O0FET0E7RUFDSTtJQUNJLG1CQUFBO0VDSk47O0VET0U7SUFDSSxlQUFBO0VDSk47O0VET0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcC1tYW5hZ2VtZW50L3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud2luZG93QnV0dG9uQ2hhbmdlcnN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ucmVxdWVzdEZvcm1CdXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYzk4O1xyXG59XHJcblxyXG5cclxuLyoqIHVzZWQgaW4gdXNlciAvIGdyb3VwIHJlZ2lzdHJhdGlvbiAqL1xyXG4uaW5saW5lUGFyYW1ldGVyc3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VuZGluZ0J1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM3NTdjOTtcclxufVxyXG5cclxuLnJlZ2lzdGVyVXNlckljb257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvcm1UaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzgxODE4MTtcclxufVxyXG5cclxuLmZvcm1UaXRsZVNtYWxse1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojMmM4ZDYxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZvcm1UaXRsZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5sZWZ0Q29udGFpbmVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDUlOyAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuICBcclxuQG1lZGlhKG1pbi13aWR0aDoxOTE5cHgpIHtcclxuICAgIC53aW5kb3dCdXR0b25DaGFuZ2Vyc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtVGl0bGVTbWFsbHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyVXNlckljb257XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIjY29udGVudENvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndpbmRvd0J1dHRvbkNoYW5nZXJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkN2Q3OyovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yZXF1ZXN0Rm9ybUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYzk4O1xufVxuXG4vKiogdXNlZCBpbiB1c2VyIC8gZ3JvdXAgcmVnaXN0cmF0aW9uICovXG4uaW5saW5lUGFyYW1ldGVycyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VuZGluZ0J1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTdjOTtcbn1cblxuLnJlZ2lzdGVyVXNlckljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb3JtVGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgxODE4MTtcbn1cblxuLmZvcm1UaXRsZVNtYWxsIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyYzhkNjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbn1cblxuLmZvcm1UaXRsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sZWZ0Q29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIC53aW5kb3dCdXR0b25DaGFuZ2VycyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5mb3JtVGl0bGVTbWFsbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLnJlZ2lzdGVyVXNlckljb24ge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/app-management/register-user/register-user.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/app-management/register-user/register-user.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: RegisterUserComponent */

  /***/
  function srcAppModulesAppManagementRegisterUserRegisterUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
      return RegisterUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var RegisterUserComponent =
    /*#__PURE__*/
    function () {
      function RegisterUserComponent(formBuilder, userService) {
        _classCallCheck(this, RegisterUserComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
      }

      _createClass(RegisterUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userRegistrationForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this8 = this;

          if (this.userRegistrationForm.invalid) {
            return;
          }

          var formValues = this.userRegistrationForm.value;
          var userRegistraion = {
            username: formValues.username.trim(),
            firstName: formValues.firstname.trim(),
            lastName: formValues.lastname.trim(),
            email: formValues.email.trim()
          };
          console.log(userRegistraion);
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete vytvoriť uživateľa ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (res) {
            if (res.value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                position: 'top-end',
                text: 'Žiadosť o vytvorenie uživateľa bolo zaslané',
                showConfirmButton: false,
                timer: 1500
              });

              _this8.userService.registerUser(userRegistraion).subscribe(function (x) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'top-end',
                  text: 'Uživateľ bol zaregistrovaný, emailom sa bude notifikovať',
                  showConfirmButton: false,
                  timer: 1500
                });

                _this8.userFormViewChild.resetForm();
              });
            }
          });
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.userRegistrationForm.get("firstname");
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.userRegistrationForm.get("lastname");
        }
      }, {
        key: "username",
        get: function get() {
          return this.userRegistrationForm.get("username");
        }
      }, {
        key: "email",
        get: function get() {
          return this.userRegistrationForm.get("email");
        }
      }]);

      return RegisterUserComponent;
    }();

    RegisterUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userFormViewChild', {
      static: true
    })], RegisterUserComponent.prototype, "userFormViewChild", void 0);
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/register-user/register-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-user.component.scss */
      "./src/app/modules/app-management/register-user/register-user.component.scss")).default]
    })], RegisterUserComponent);
    /***/
  },

  /***/
  "./src/app/modules/app-management/user-group-management/user-group-management.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/modules/app-management/user-group-management/user-group-management.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAppManagementUserGroupManagementUserGroupManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Success syling */\n.mat-button.mat-success,\n.mat-stroked-button.mat-success {\n  color: #155724;\n}\n.mat-button.mat-success:hover,\n.mat-stroked-button.mat-success:hover {\n  background-color: #f0fff3;\n}\n.mat-raised-button.mat-success,\n.mat-flat-button.mat-success,\n.mat-fab.mat-success,\n.mat-mini-fab.mat-success {\n  color: #f0fff3;\n  background-color: #155724;\n}\n.mat-icon-button.mat-success {\n  color: #155724;\n}\n.container {\n  width: 40%;\n  float: left;\n  height: 100%;\n  padding: 20px 0px 0px 35px;\n  position: relative;\n}\n.leftLine {\n  border-left: 1px solid #d7d7d7;\n}\n.selectTitleSpace {\n  margin-right: 15px;\n}\n.formTitleSmall {\n  font-size: 17px;\n  font-weight: bold;\n  color: #818181;\n}\n.contanierTitle {\n  position: relative;\n}\n#serdbuttonsGroup {\n  position: absolute;\n  right: 0px;\n}\n#resetButton {\n  position: absolute;\n  right: 28%;\n}\n#ActivateDisableBUtton {\n  position: absolute;\n  right: 12%;\n}\n.modificationButton {\n  z-index: 1;\n  cursor: pointer;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC91c2VyLWdyb3VwLW1hbmFnZW1lbnQvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXFN1Y2Nlc3NNYXRCdXR0b24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hcHAtbWFuYWdlbWVudC91c2VyLWdyb3VwLW1hbmFnZW1lbnQvdXNlci1ncm91cC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FwcC1tYW5hZ2VtZW50L3VzZXItZ3JvdXAtbWFuYWdlbWVudC9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhcHAtbWFuYWdlbWVudFxcdXNlci1ncm91cC1tYW5hZ2VtZW50XFx1c2VyLWdyb3VwLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFDQTs7RUFFSSxjQUFBO0FDQ0o7QURDQTs7RUFFRSx5QkFBQTtBQ0VGO0FEQ0E7Ozs7RUFJRSxjQUFBO0VBQ0EseUJBQUE7QUNFRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FDbkJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBRHNCSjtBQ25CQTtFQUNJLDhCQUFBO0FEc0JKO0FDbkJBO0VBRUksa0JBQUE7QURxQko7QUNsQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEcUJKO0FDbEJBO0VBQ0ksa0JBQUE7QURxQko7QUNsQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURxQko7QUNsQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURxQko7QUNsQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURxQko7QUNsQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURxQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcC1tYW5hZ2VtZW50L3VzZXItZ3JvdXAtbWFuYWdlbWVudC91c2VyLWdyb3VwLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdWNjZXNzIHN5bGluZyAqL1xyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlcixcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmMGZmZjM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NTcyNDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgY29sb3I6IzE1NTcyNDtcclxufVxyXG4iLCIvKiBTdWNjZXNzIHN5bGluZyAqL1xuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2YwZmZmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NTcyNDtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnRMaW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDdkN2Q3O1xufVxuXG4uc2VsZWN0VGl0bGVTcGFjZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZvcm1UaXRsZVNtYWxsIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5cbi5jb250YW5pZXJUaXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3NlcmRidXR0b25zR3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbiNyZXNldEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI4JTtcbn1cblxuI0FjdGl2YXRlRGlzYWJsZUJVdHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEyJTtcbn1cblxuLm1vZGlmaWNhdGlvbkJ1dHRvbiB7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9jdXN0b21Dc3MvU3VjY2Vzc01hdEJ1dHRvbi5zY3NzJztcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxlZnRMaW5le1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDdkN2Q3O1xyXG59XHJcblxyXG4uc2VsZWN0VGl0bGVTcGFjZXtcclxuICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybVRpdGxlU21hbGx7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG59XHJcblxyXG4uY29udGFuaWVyVGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNzZXJkYnV0dG9uc0dyb3Vwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuI3Jlc2V0QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI4JTtcclxufVxyXG5cclxuI0FjdGl2YXRlRGlzYWJsZUJVdHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMiU7XHJcbn1cclxuXHJcbi5tb2RpZmljYXRpb25CdXR0b257XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/app-management/user-group-management/user-group-management.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/app-management/user-group-management/user-group-management.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: UserGroupManagementComponent */

  /***/
  function srcAppModulesAppManagementUserGroupManagementUserGroupManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGroupManagementComponent", function () {
      return UserGroupManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/group.service */
    "./src/app/core/services/group.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var UserGroupManagementComponent =
    /*#__PURE__*/
    function () {
      function UserGroupManagementComponent(groupService, userService, authService) {
        _classCallCheck(this, UserGroupManagementComponent);

        this.groupService = groupService;
        this.userService = userService;
        this.authService = authService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAdmin$ = this.authService.isAdmin();
        this.isGhost$ = this.authService.isGhost();
        this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
      }

      _createClass(UserGroupManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groups = this.groupService.getAllGroups();
          this.users = this.userService.getAllUsers();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.groupPrivileges.hideUnassignedPriv = true;
        }
      }, {
        key: "selectGroup",
        value: function selectGroup(groupName) {
          var _this9 = this;

          this.groupService.getGroupDetailsWithUnsetPrivileges(groupName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (group) {
            _this9.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
            _this9.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
            _this9.groupPrivileges.name = 'Skupiny';
            _this9.groupDetails.group = group;
          });
        }
      }, {
        key: "selectUser",
        value: function selectUser(username) {
          var _this10 = this;

          this.userService.getUserDetials(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (user) {
            _this10.userDetails.displayedUser = user;
            _this10.userPrivileges.enabledPrivileges = user.applicationPrivilegeDTO;
            _this10.userPrivileges.name = 'Uživateľa';
            var groupContainer = {
              managerOfGroups: user.groupsToManage,
              watchedGroupActivity: user.groupsActivityWatched,
              userInGroups: user.groupsInvolved
            };
            _this10.userGroups.groupContainer = groupContainer;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "editGroup",
        value: function editGroup() {
          this.groupDetails.editGroup();
          this.groupPrivileges.editGroup();
        }
      }, {
        key: "resetGroup",
        value: function resetGroup() {
          this.groupDetails.resetGroup();
          this.groupPrivileges.resetGroup();
        }
      }, {
        key: "resetUserPassword",
        value: function resetUserPassword() {
          this.userService.resetUserPassword(this.userDetails.displayedUser.username).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              position: 'top-end',
              text: 'Heslo uživateľa bolo resetované',
              showConfirmButton: false,
              timer: 1200
            });
          });
        }
      }, {
        key: "modifyUserState",
        value: function modifyUserState() {
          var _this11 = this;

          this.userService.modifyUserState(this.userDetails.displayedUser.username).subscribe(function () {
            _this11.userDetails.displayedUser.active = !_this11.userDetails.displayedUser.active;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              position: 'top-end',
              text: 'Stav uživateľa bol zmeneý',
              showConfirmButton: false,
              timer: 1200
            });
          });
        }
      }, {
        key: "saveGroup",
        value: function saveGroup() {
          var _this12 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: "Naozaj chcetete editovať skupinu ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                position: 'top-end',
                text: 'Požiadavka editovanie skupiny zaslaná',
                showConfirmButton: false,
                timer: 1200
              });

              _this12.groupService.modifyGroup(_this12.groupDetails.group).subscribe(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  position: 'top-end',
                  text: 'Skupina bola editovaná',
                  showConfirmButton: false,
                  timer: 1200
                });
                _this12.groupDetails.editGroupActivated = false;
                _this12.groupPrivileges.activateUnableClick = false;
                _this12.groupPrivileges.hideUnassignedPriv = true;
                _this12.serdbuttonsGroup.editActivated = false;
              });
            }
          });
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup() {
          var _this13 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: "Naozaj chcetete vymazať skupinu ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                position: 'top-end',
                text: 'Požiadavka zmazania skupiny zaslaná',
                showConfirmButton: false,
                timer: 1200
              });

              _this13.groupService.deleteGroup(_this13.groupDetails.group.name).subscribe(function () {
                var grouName = _this13.groupDetails.group.name;
                _this13.groups = _this13.groups.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (group) {
                  return group.filter(function (name) {
                    return name !== grouName;
                  });
                }));
                _this13.groupPrivileges.enabledPrivileges = undefined;
                _this13.groupPrivileges.disabledPrivileges = undefined;
                _this13.groupPrivileges.name = undefined;
                _this13.groupDetails.group = undefined;
                _this13.serdbuttonsGroup.editActivated = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  position: 'top-end',
                  text: 'Skupina bola zmazaná',
                  showConfirmButton: false,
                  timer: 1200
                });
              });
            }
          });
        }
      }]);

      return UserGroupManagementComponent;
    }();

    UserGroupManagementComponent.ctorParameters = function () {
      return [{
        type: app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userDetails', {
      static: false
    })], UserGroupManagementComponent.prototype, "userDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userPrivileges', {
      static: false
    })], UserGroupManagementComponent.prototype, "userPrivileges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userGroups', {
      static: false
    })], UserGroupManagementComponent.prototype, "userGroups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupPrivileges', {
      static: false
    })], UserGroupManagementComponent.prototype, "groupPrivileges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupDetails', {
      static: false
    })], UserGroupManagementComponent.prototype, "groupDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serdbuttonsGroup', {
      static: false
    })], UserGroupManagementComponent.prototype, "serdbuttonsGroup", void 0);
    UserGroupManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-group-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-group-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/app-management/user-group-management/user-group-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-group-management.component.scss */
      "./src/app/modules/app-management/user-group-management/user-group-management.component.scss")).default]
    })], UserGroupManagementComponent);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 5px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiIsIiNjb250ZW50Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(spinner, authService, userService, requestService) {
        _classCallCheck(this, DashboardComponent);

        this.spinner = spinner;
        this.authService = authService;
        this.userService = userService;
        this.requestService = requestService;
        this.viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'timeCreated', 'details'];
        this.modifyTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'userAction', 'timeCreated', 'details'];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.getRequestOnDashboard();
          this.isAdmin$ = this.authService.isAdmin();
          this.isGhost$ = this.authService.isGhost();
          this.isSolver$ = this.authService.isSolver();
          this.isManager$ = this.authService.isManager();
          this.isManagerRightHand$ = this.authService.isManagerRightHand();
          this.refreshIntervalId = setInterval(function () {
            return _this14.getRequestOnDashboard();
          }, 600000); // 10minutes 600000
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.refreshIntervalId);
        }
      }, {
        key: "getRequestOnDashboard",
        value: function getRequestOnDashboard() {
          var _this15 = this;

          this.spinner.show();
          this.requestService.getRequestOnDashboard().subscribe(function (requests) {
            _this15.myOpenRequests.dataSource.data = requests.myOpen;
            _this15.meAssignedRequests.dataSource.data = requests.assignedOnMe;
            _this15.otherOpenRequests.dataSource.data = requests.otherOpen;

            _this15.spinner.hide();
          });
        }
      }, {
        key: "assignOnMe",
        value: function assignOnMe(request) {
          var _this16 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete prideliť na seba požiadavku s id : " + request.id + " ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this16.requestService.assignOrRemoveRequestOnMe(request.id, true).subscribe(function (result) {
                _this16.updateTableAssignMeOnRequest(request);

                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'top-end',
                  text: 'Úspešne ste na seba pridelili požiadavku s id: ' + request.id,
                  showConfirmButton: false,
                  timer: 1200
                });
              });
            }
          });
        }
      }, {
        key: "updateTableAssignMeOnRequest",
        value: function updateTableAssignMeOnRequest(request) {
          request.assigned = this.userService.user.firstName + " " + this.userService.user.lastName;
          request.assignedImageByte = this.userService.user.photoBytes;
          this.meAssignedRequests.dataSource.data = [request].concat(this.meAssignedRequests.dataSource.data);
          this.otherOpenRequests.dataSource.data = this.otherOpenRequests.dataSource.data.filter(function (req) {
            return req.id !== request.id;
          });

          this.meAssignedRequests.dataSource._updateChangeSubscription();

          this.otherOpenRequests.dataSource._updateChangeSubscription();
        }
      }, {
        key: "updateTableRemoveRequestFromMe",
        value: function updateTableRemoveRequestFromMe(request) {
          request.assigned = ' ';
          request.assignedImageString = null;
          request.assignedImageByte = null;
          this.meAssignedRequests.dataSource.data = this.meAssignedRequests.dataSource.data.filter(function (req) {
            return req.id !== request.id;
          });
          this.otherOpenRequests.dataSource.data.push(request);

          this.meAssignedRequests.dataSource._updateChangeSubscription();

          this.otherOpenRequests.dataSource._updateChangeSubscription();
        }
      }, {
        key: "removeFromMe",
        value: function removeFromMe(request) {
          var _this17 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete odstrániť zo seba požiadavku s id : " + request.id + " ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this17.requestService.assignOrRemoveRequestOnMe(request.id, false).subscribe(function (result) {
                _this17.updateTableRemoveRequestFromMe(request);

                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'top-end',
                  text: 'Úspešne ste odstránili zo seba požiadavku s id : ' + request.id,
                  showConfirmButton: false,
                  timer: 1200
                });
              });
            }
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_6__["RequestModificationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myOpenRequests', {
      static: false
    })], DashboardComponent.prototype, "myOpenRequests", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meAssignedRequests', {
      static: false
    })], DashboardComponent.prototype, "meAssignedRequests", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otherOpenRequests', {
      static: false
    })], DashboardComponent.prototype, "otherOpenRequests", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/modules/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/login/login-background/loginBackground.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/login/login-background/loginBackground.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLoginBackgroundLoginBackgroundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*particles{\n  position: 'fixed';\n  width: '100%';\n  height: '100%';\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: '#040225';\n}*/\n* {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGxvZ2luXFxsb2dpbi1iYWNrZ3JvdW5kXFxsb2dpbkJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4tYmFja2dyb3VuZC9sb2dpbkJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQ0UsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kL2xvZ2luQmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcGFydGljbGVze1xyXG4gIHBvc2l0aW9uOiAnZml4ZWQnO1xyXG4gIHdpZHRoOiAnMTAwJSc7XHJcbiAgaGVpZ2h0OiAnMTAwJSc7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICcjMDQwMjI1JztcclxufSovXHJcblxyXG4qe1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbiIsIi8qcGFydGljbGVze1xuICBwb3NpdGlvbjogJ2ZpeGVkJztcbiAgd2lkdGg6ICcxMDAlJztcbiAgaGVpZ2h0OiAnMTAwJSc7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICcjMDQwMjI1Jztcbn0qL1xuKiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/login/login-background/loginBackground.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/login/login-background/loginBackground.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LoginBackgroundComponent */

  /***/
  function srcAppModulesLoginLoginBackgroundLoginBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginBackgroundComponent", function () {
      return LoginBackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginBackgroundComponent =
    /*#__PURE__*/
    function () {
      function LoginBackgroundComponent() {
        _classCallCheck(this, LoginBackgroundComponent);

        this.style = {};
        this.params = {};
      }

      _createClass(LoginBackgroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // style for particles
          this.style = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            'z-index': -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            'background-color': '#040225'
          }; // config for particles

          this.params = {
            particles: {
              number: {
                value: 130,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 4,
                  color: '#0059ff'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.75,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 30,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#00d1ff',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          };
        }
      }]);

      return LoginBackgroundComponent;
    }();

    LoginBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-background',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loginBackground.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-background/loginBackground.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loginBackground.component.scss */
      "./src/app/modules/login/login-background/loginBackground.component.scss")).default]
    })], LoginBackgroundComponent);
    /***/
  },

  /***/
  "./src/app/modules/login/login-form/login-form.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/login/login-form/login-form.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLoginFormLoginFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://use.fontawesome.com/releases/v5.5.0/css/all.css\";\n* {\n  color: white;\n}\n.login-box {\n  width: 280px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n}\n.login-box h1 {\n  font-size: 40px;\n  border-bottom: 6px solid #0084A5;\n  /*#4caf50*/\n  margin-bottom: 50px;\n  padding: 13px 0;\n}\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n  padding: 8px 0;\n  margin: 8px 0;\n  border-bottom: 1px solid #0084A5;\n}\n.textbox i {\n  width: 26px;\n  float: left;\n  text-align: center;\n}\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 18px;\n  width: 80%;\n  float: left;\n  margin: 0 10px;\n}\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #0084A5;\n  color: white;\n  padding: 5px;\n  font-size: 18px;\n  cursor: pointer;\n  margin: 12px 0;\n}\n.btn:hover {\n  background-color: #0084A5;\n}\n.spinner {\n  position: absolute;\n  top: 35%;\n  left: 45%;\n}\n/*\n//IE\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n   .wrap-login100{\n\tmargin-top:150px;\n\tdisplay: none;\n\t}\n\n\n\tdiv[id='internetExplorer']{\n\t\twidth: auto;\n\t\theight: 150px;\n\t\tfont-size: 40px;\n\t\tmargin-top:100px;\n\t\tcolor:red;\n\t\tfloat: left;\n\t\tdisplay: block;\n\t}\n\n\tdiv[id='emoji']{\n\t\twidth: 150px;\n\t\theight: 150px;\n\t\tmargin-top:180px;\n\t\tposition: absolute;\n\t\tleft: 45%;\n\t\tbackground-image: url('../chat/images/emoji1.png');\n\t  \tbackground-repeat: no-repeat;\n\t  \tbackground-size: 100% 100%;\n\t}\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGxvZ2luXFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLUSxpRUFBQTtBQUxSO0VBQ0UsWUFBQTtBQ0VGO0FESUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0FDREY7QURHQTtFQUVFLGVBQUE7RUFDQSxnQ0FBQTtFQUFpQyxVQUFBO0VBQ2pDLG1CQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUY7QURBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0dGO0FEREE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0FDS0Y7QURGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNLRjtBREZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGNvbG9yOndoaXRlO1xyXG5cclxufVxyXG5cclxuQGltcG9ydCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIjtcclxuXHJcbi5sb2dpbi1ib3h7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxvZ2luLWJveCBoMXtcclxuICAvL2Zsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzAwODRBNTsvKiM0Y2FmNTAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZzogMTNweCAwO1xyXG59XHJcbi50ZXh0Ym94e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDg0QTU7XHJcbn1cclxuLnRleHRib3ggaXtcclxuICB3aWR0aDogMjZweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRib3ggaW5wdXR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLmJ0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0QTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcbi5idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA4NEE1O1xyXG59XHJcblxyXG4uc3Bpbm5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNSU7XHJcbiAgbGVmdDogNDUlO1xyXG59XHJcblxyXG4vKlxyXG4vL0lFXHJcbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XHJcbiAgIC53cmFwLWxvZ2luMTAwe1xyXG5cdG1hcmdpbi10b3A6MTUwcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cclxuXHRkaXZbaWQ9J2ludGVybmV0RXhwbG9yZXInXXtcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHRcdG1hcmdpbi10b3A6MTAwcHg7XHJcblx0XHRjb2xvcjpyZWQ7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0ZGl2W2lkPSdlbW9qaSdde1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHRcdG1hcmdpbi10b3A6MTgwcHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA0NSU7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2NoYXQvaW1hZ2VzL2Vtb2ppMS5wbmcnKTtcclxuXHQgIFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHQgIFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0fVxyXG59Ki9cclxuIiwiQGltcG9ydCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIjtcbioge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1ib3gge1xuICB3aWR0aDogMjgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWJveCBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICMwMDg0QTU7XG4gIC8qIzRjYWY1MCovXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDEzcHggMDtcbn1cblxuLnRleHRib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDg0QTU7XG59XG5cbi50ZXh0Ym94IGkge1xuICB3aWR0aDogMjZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRib3ggaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogODAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwODRBNTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg0QTU7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogNDUlO1xufVxuXG4vKlxuLy9JRVxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgIC53cmFwLWxvZ2luMTAwe1xuXHRtYXJnaW4tdG9wOjE1MHB4O1xuXHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblxuXHRkaXZbaWQ9J2ludGVybmV0RXhwbG9yZXInXXtcblx0XHR3aWR0aDogYXV0bztcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRtYXJnaW4tdG9wOjEwMHB4O1xuXHRcdGNvbG9yOnJlZDtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXG5cdGRpdltpZD0nZW1vamknXXtcblx0XHR3aWR0aDogMTUwcHg7XG5cdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRtYXJnaW4tdG9wOjE4MHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA0NSU7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9jaGF0L2ltYWdlcy9lbW9qaTEucG5nJyk7XG5cdCAgXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgIFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdH1cbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/login/login-form/login-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/login/login-form/login-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppModulesLoginLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var LoginFormComponent =
    /*#__PURE__*/
    function () {
      function LoginFormComponent(fb, router, authService, userService, location) {
        _classCallCheck(this, LoginFormComponent);

        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.location = location;
        this.loggingIn = false;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this18 = this;

          var val = this.form.value;

          if (val.username && val.password) {
            this.loggingIn = true;
            this.authService.login(val.username, val.password).subscribe(function (result) {
              _this18.userService.loadLoggedInUser().subscribe(function (subs) {
                _this18.loggingIn = false;

                if (result && subs) {
                  //this.router.navigateByUrl('/dashboard');
                  // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
                  // this.router.navigate(['/dashboard']); // tells them they've been logged out (somehow)
                  window.location.href = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].dashboard, "dashboard"); // this.router.navigate(['dashboard'], {relativeTo: this.route});
                }
              });
            });
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };

    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-form.component.scss */
      "./src/app/modules/login/login-form/login-form.component.scss")).default]
    })], LoginFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/login/login.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/modules/login/login.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/modules/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-closed/request-closed.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/request-closed/request-closed.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestClosedRequestClosedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 5px;\n  float: right;\n}\n\n.filterContent {\n  position: relative;\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWNsb3NlZC9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxyZXF1ZXN0LWNsb3NlZFxccmVxdWVzdC1jbG9zZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1jbG9zZWQvcmVxdWVzdC1jbG9zZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWNsb3NlZC9yZXF1ZXN0LWNsb3NlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGVudENvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbi5maWx0ZXJDb250ZW50e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufSIsIiNjb250ZW50Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmlsdGVyQ29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/request-closed/request-closed.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/request-closed/request-closed.component.ts ***!
    \********************************************************************/

  /*! exports provided: RequestClosedComponent */

  /***/
  function srcAppModulesRequestClosedRequestClosedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestClosedComponent", function () {
      return RequestClosedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");

    var RequestClosedComponent =
    /*#__PURE__*/
    function () {
      function RequestClosedComponent(spinner, requestService) {
        _classCallCheck(this, RequestClosedComponent);

        this.spinner = spinner;
        this.requestService = requestService;
        this.loadedRequests = [];
        this.viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'closed', 'timeCreated', 'timeClosed', 'details'];
      }

      _createClass(RequestClosedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadClosedRequests();
        }
      }, {
        key: "loadClosedRequests",
        value: function loadClosedRequests() {
          var _this19 = this;

          this.spinner.show();
          this.requestService.getClosedRequests(this.requestFilter.dateFrom, this.requestFilter.dateTo).subscribe(function (requests) {
            _this19.closedRequests.dataSource.data = requests;
            _this19.loadedRequests = requests;

            _this19.filterClosedRequests(_this19.requestFilter.filterForm.value);

            _this19.spinner.hide();
          });
        }
      }, {
        key: "filterClosedRequests",
        value: function filterClosedRequests(filter) {
          var _this20 = this;

          // copy back original requests
          this.closedRequests.dataSource.data = _toConsumableArray(this.loadedRequests); // filter requests

          this.loadedRequests.forEach(function (request) {
            if (filter.closed !== '' && filter.closed !== request.closed) {
              _this20.closedRequests.dataSource.data.splice(_this20.closedRequests.dataSource.data.indexOf(request), 1);
            } else if (filter.creator !== '' && filter.creator !== request.creator) {
              _this20.closedRequests.dataSource.data.splice(_this20.closedRequests.dataSource.data.indexOf(request), 1);
            } else if (filter.type !== '' && filter.type !== request.requestType) {
              _this20.closedRequests.dataSource.data.splice(_this20.closedRequests.dataSource.data.indexOf(request), 1);
            } else if (filter.priority !== '' && filter.priority !== request.requestPriority) {
              _this20.closedRequests.dataSource.data.splice(_this20.closedRequests.dataSource.data.indexOf(request), 1);
            } else if (!request.name.includes(filter.name)) {
              _this20.closedRequests.dataSource.data.splice(_this20.closedRequests.dataSource.data.indexOf(request), 1);
            }
          }); // re-render table with data

          this.closedRequests.dataSource.data = this.closedRequests.dataSource.data;
        }
      }]);

      return RequestClosedComponent;
    }();

    RequestClosedComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__["RequestModificationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closedRequests', {
      static: false
    })], RequestClosedComponent.prototype, "closedRequests", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('requestFilter', {
      static: false
    })], RequestClosedComponent.prototype, "requestFilter", void 0);
    RequestClosedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-closed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-closed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-closed/request-closed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-closed.component.scss */
      "./src/app/modules/request-closed/request-closed.component.scss")).default]
    })], RequestClosedComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment-form/comment-form.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/request-details/comment-form/comment-form.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsCommentFormCommentFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inlineParameters {\n  display: block;\n  width: 80%;\n  position: relative;\n  margin-bottom: 5px;\n  margin: auto;\n}\n\n#commentField {\n  height: 150px;\n}\n\n#sendingButton {\n  float: right;\n  background-color: #0077ec;\n  margin-bottom: 25px;\n}\n\nmat-form-field {\n  margin-top: 60px;\n}\n\nmat-checkbox {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC1mb3JtL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHJlcXVlc3QtZGV0YWlsc1xcY29tbWVudC1mb3JtXFxjb21tZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL2NvbW1lbnQtZm9ybS9jb21tZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcXVlc3QtZGV0YWlscy9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZVBhcmFtZXRlcnN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuI2NvbW1lbnRGaWVsZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbiNzZW5kaW5nQnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdlYztcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbm1hdC1jaGVja2JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59IiwiLmlubGluZVBhcmFtZXRlcnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2NvbW1lbnRGaWVsZCB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbiNzZW5kaW5nQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2VjO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment-form/comment-form.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/request-details/comment-form/comment-form.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CommentFormComponent */

  /***/
  function srcAppModulesRequestDetailsCommentFormCommentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function () {
      return CommentFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_core_services_comment_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/core/services/comment-http.service */
    "./src/app/core/services/comment-http.service.ts");

    var CommentFormComponent =
    /*#__PURE__*/
    function () {
      function CommentFormComponent(userService, requestService, formBuilder, authService, commentService) {
        _classCallCheck(this, CommentFormComponent);

        this.userService = userService;
        this.requestService = requestService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commentService = commentService;
        this.commentInput = '';
        this.isChecked = false; // if checkbotton is checked

        this.isCheckedName = ''; // name of checkButton

        this.addedCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CommentFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.requestDetails$ = this.requestService.getRequestDetials();
          this.isSolver$ = this.authService.isSolver();
          this.isGhost$ = this.authService.isGhost();
          this.isAdmin$ = this.authService.isAdmin();
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          this.isChecked = !this.isChecked;
          this.isCheckedName = event.source.name;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this21 = this;

          if (this.commentInput === '') {
            return;
          } // send solution


          if (this.isChecked && this.isCheckedName === "Solution") {
            this.constructRequestComment(this.userService.getUserSimple()).subscribe(function (commentDTO) {
              return _this21.sendComment(commentDTO, false, true);
            });
            return;
          } // send simple comment


          this.constructRequestComment(this.userService.getUserSimple()).subscribe(function (commentDTO) {
            return _this21.sendComment(commentDTO, _this21.isChecked && _this21.isCheckedName === "Notification", false);
          });
        }
      }, {
        key: "constructRequestComment",
        value: function constructRequestComment(userSimple) {
          var _this22 = this;

          return this.requestDetails$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (request) {
            var commentDTO = {
              id: null,
              requestId: request.id,
              creator: userSimple,
              comment: _this22.commentInput,
              isPrivate: _this22.isChecked && _this22.isCheckedName === "Private",
              groupsToShare: [],
              timestamp: new Date()
            };
            return commentDTO;
          }));
        }
      }, {
        key: "sendComment",
        value: function sendComment(commentDTO, sendEmail, solution) {
          var _this23 = this;

          if (this.commentInput === '') return;
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Odoslať komentár ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0077ec',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Odoslať'
          }).then(function (result) {
            if (result.value) {
              _this23.commentService.addComment(commentDTO, sendEmail, solution).subscribe(function (addedComment) {
                _this23.addedCommentEmitter.emit(addedComment);

                _this23.commentInput = '';

                if (solution) {
                  _this23.requestDetails$.subscribe(function (requst) {
                    return requst.solutionComment = addedComment.id;
                  });
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  position: 'top-end',
                  text: 'Komentár bol odoslaný',
                  showConfirmButton: false,
                  timer: 1500
                });
              });
            }
          });
        }
      }]);

      return CommentFormComponent;
    }();

    CommentFormComponent.ctorParameters = function () {
      return [{
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_4__["RequestModificationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: app_core_services_comment_http_service__WEBPACK_IMPORTED_MODULE_8__["CommentHttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommentFormComponent.prototype, "addedCommentEmitter", void 0);
    CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-form/comment-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-form.component.scss */
      "./src/app/modules/request-details/comment-form/comment-form.component.scss")).default]
    })], CommentFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment-sharing/comment-sharing.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/request-details/comment-sharing/comment-sharing.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsCommentSharingCommentSharingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\n.elevation {\n  cursor: pointer;\n  padding: 2px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: #4d72f9;\n}\n\n.elevation:hover {\n  color: #8a8a8a;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 3px rgba(119, 119, 119, 0.75);\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  display: block;\n}\n\n/* Modal Content */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 29px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flow-root;\n}\n\n/* The Close Button */\n\n.close {\n  color: #ff5252;\n  font-size: 39px;\n  font-weight: bold;\n  position: absolute;\n  right: 10px;\n  top: 0px;\n  opacity: 1;\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s ease-out;\n}\n\n.close:hover {\n  -webkit-transform: scale(1.35);\n          transform: scale(1.35);\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s ease-out;\n}\n\n.close:hover,\n.close:focus {\n  color: #ff0000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.groupTitle {\n  margin-bottom: 20px;\n  font-weight: bold;\n  margin-left: -10px;\n  color: #8a8a8a;\n  font-size: 22px;\n}\n\n.groupDetails {\n  float: left;\n  display: contents;\n}\n\n.content {\n  float: left;\n  margin-top: 14px;\n  margin-right: 40px;\n  width: 45%;\n}\n\n#sendingButton {\n  float: right;\n  margin-right: 25px;\n  margin-top: 15px;\n  background-color: #0077ec;\n}\n\n.groupDetailContent {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC1zaGFyaW5nL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9tQ3NzXFxTaWRlVGFibGVQcmludFNjc3Muc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC1zaGFyaW5nL2NvbW1lbnQtc2hhcmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC1zaGFyaW5nL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9tQ3NzXFxFbGV2YXRpb25CdXR0b25TY3NzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL2NvbW1lbnQtc2hhcmluZy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbUNzc1xcTW9kYWxTY3NzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL2NvbW1lbnQtc2hhcmluZy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxyZXF1ZXN0LWRldGFpbHNcXGNvbW1lbnQtc2hhcmluZ1xcY29tbWVudC1zaGFyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7VUFBQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FDMURBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtBRDZESjs7QUMxREE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBR0EscURBQUE7RUFFQyxpQ0FBQTtFQUdELHlCQUFBO0FENERKOztBRTlFQSwyQkFBQTs7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixrQkFBQTtFQUFvQix3QkFBQTtFQUNwQixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtFQUE4QixtQkFBQTtFQUM5QixvQ0FBQTtFQUFtQyxxQkFBQTtFQUNuQyxjQUFBO0FGMEZKOztBRXZGRSxrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRjBGSjs7QUV2RkUscUJBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQUdBLHlCQUFBO0FGeUZKOztBRXZGSTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtFQUdBLHlCQUFBO0FGeUZSOztBRXJGRTs7RUFFRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FGd0ZKOztBRzFJQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FINklKOztBRzFJQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBSDZJSjs7QUcxSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SUo7O0FHeklBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBSDRJSjs7QUd6SUE7RUFDSSxXQUFBO0FINElKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC1zaGFyaW5nL2NvbW1lbnQtc2hhcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BzcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zbWFsbGVyQ29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvcm1UaXRsZVNtYWxse1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojODE4MTgxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbiNkZXRhaWxUaXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtSW5mb3JtYXRpb25Db250YWluZXJTdWJjb250ZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvblRpdGxle1xyXG4gICAgZmxleDogMCAwIDE2NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnNIb2xkZXJ7XHJcbiAgICBjb2xvcjojNjc2NjY2O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcblxyXG4gIH1cclxudWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iLCIudG9wc3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc21hbGxlckNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtVGl0bGVTbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbiNkZXRhaWxUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5mb3JtSW5mb3JtYXRpb25Db250YWluZXJTdWJjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucmlnaHRDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5mb3JtYXRpb25zQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbmZvcm1hdGlvblRpdGxlIHtcbiAgZmxleDogMCAwIDE2NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm9ybWF0aW9uc0hvbGRlciB7XG4gIGNvbG9yOiAjNjc2NjY2O1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZWxldmF0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGNvbG9yOiAjNGQ3MmY5O1xufVxuXG4uZWxldmF0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM4YThhOGE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDNweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICNmZjUyNTI7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMHB4O1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi5jbG9zZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncm91cFRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6ICM4YThhOGE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmdyb3VwRGV0YWlscyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDUlO1xufVxuXG4jc2VuZGluZ0J1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2VjO1xufVxuXG4uZ3JvdXBEZXRhaWxDb250ZW50IHtcbiAgZmxvYXQ6IGxlZnQ7XG59IiwiLmVsZXZhdGlvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgY29sb3I6ICM0ZDcyZjk7XHJcbn1cclxuXHJcbi5lbGV2YXRpb246aG92ZXJ7ICAgIFxyXG4gICAgY29sb3I6IzhhOGE4YTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDJweCAzcHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAzcHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcclxuXHJcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG59XHJcbiIsIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDI5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIiwiQGltcG9ydCBcIi4uLy4uL3VzZXItcHJvZmlsZS91c2VyLWdyb3Vwcy91c2VyLWdyb3Vwcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL2N1c3RvbUNzcy9Nb2RhbFNjc3Muc2Nzc1wiO1xyXG5cclxuXHJcbi5ncm91cFRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5ncm91cERldGFpbHN7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcblxyXG4jc2VuZGluZ0J1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3ZWM7XHJcbn1cclxuXHJcbi5ncm91cERldGFpbENvbnRlbnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment-sharing/comment-sharing.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/request-details/comment-sharing/comment-sharing.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CommentSharingComponent */

  /***/
  function srcAppModulesRequestDetailsCommentSharingCommentSharingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentSharingComponent", function () {
      return CommentSharingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/group.service */
    "./src/app/core/services/group.service.ts");

    var CommentSharingComponent =
    /*#__PURE__*/
    function () {
      function CommentSharingComponent(groupService) {
        _classCallCheck(this, CommentSharingComponent);

        this.groupService = groupService;
        this.changeWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shareWithGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CommentSharingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.involvedInGroups$ = this.groupService.getAllGroupNamesForUser();
        }
      }, {
        key: "closeWindow",
        value: function closeWindow() {
          this.changeWindow.emit(false);
        }
      }, {
        key: "shareWith",
        value: function shareWith() {
          this.shareWithGroup.emit(this.clickedGroup);
        }
      }, {
        key: "getGroupDetails",
        value: function getGroupDetails(groupName) {
          var _this24 = this;

          this.groupService.getGroupDetails(groupName).subscribe(function (group) {
            _this24.groupDetails.group = group;
            _this24.clickedGroup = group;
          });
        }
      }]);

      return CommentSharingComponent;
    }();

    CommentSharingComponent.ctorParameters = function () {
      return [{
        type: app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommentSharingComponent.prototype, "changeWindow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommentSharingComponent.prototype, "shareWithGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupDetails', {
      static: false
    })], CommentSharingComponent.prototype, "groupDetails", void 0);
    CommentSharingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-sharing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-sharing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment-sharing/comment-sharing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-sharing.component.scss */
      "./src/app/modules/request-details/comment-sharing/comment-sharing.component.scss")).default]
    })], CommentSharingComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment/comment.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/modules/request-details/comment/comment.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsCommentCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".commentBox {\n  width: 70%;\n  color: #8a8a8a;\n  padding: 10px;\n  margin-right: 10px;\n  margin-bottom: 25px;\n  font-size: 14px;\n  border-bottom: 1px solid #bdbdbd;\n  white-space: pre-wrap;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.floatLeft {\n  float: left;\n}\n\n.floatRight {\n  float: right;\n}\n\n.avatar {\n  height: 35px;\n  width: 35px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  float: left;\n}\n\n.commentBoxName {\n  position: relative;\n  font-weight: bold;\n  font-size: 12px;\n  display: flow-root;\n  margin-right: 20px;\n}\n\n.light {\n  font-weight: lighter;\n  display: contents;\n}\n\n.bigBold {\n  font-weight: bold;\n}\n\n.flex {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\np {\n  margin-bottom: 0px;\n  word-break: break-all;\n}\n\n.icon {\n  margin-right: 2px;\n  margin-bottom: 5px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n.icon:hover {\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n.commentIcons {\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  display: inline-grid;\n}\n\n#solutionImg {\n  position: absolute;\n  left: 10px;\n}\n\n#solutionText {\n  position: relative;\n  color: white;\n  font-size: 19px;\n  left: 68px;\n  top: 2px;\n}\n\n.displayCommentSharing {\n  width: 90%;\n  float: left;\n  margin-left: 7%;\n}\n\n::ng-deep .custom-tooltip-icon {\n  background-color: #818181;\n  font-size: 14px;\n  padding: 5px;\n}\n\n@media (min-width: 1919px) {\n  .commentIcons {\n    position: absolute;\n    top: -10px;\n    right: 0px;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvY29tbWVudC9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxyZXF1ZXN0LWRldGFpbHNcXGNvbW1lbnRcXGNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsaUNBQUE7RUFHQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGlDQUFBO0VBR0EseUJBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtBQ0RKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNISjs7QURNQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE9BO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBRUEsY0FBQTtFQ0xOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcXVlc3QtZGV0YWlscy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudEJveHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmZsb2F0TGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmxvYXRSaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY29tbWVudEJveE5hbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubGlnaHR7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uYmlnQm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZmxleHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb21tZW50SWNvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG5cclxufVxyXG5cclxuXHJcbiNzb2x1dGlvbkltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzb2x1dGlvblRleHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsZWZ0OiA2OHB4O1xyXG4gICAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5Q29tbWVudFNoYXJpbmd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLXRvb2x0aXAtaWNvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjE5MTlweCkge1xyXG4gICAgLmNvbW1lbnRJY29uc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iLCIuY29tbWVudEJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmZsb2F0TGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmxvYXRSaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbW1lbnRCb3hOYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uYmlnQm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmxleCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG59XG4uaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4uY29tbWVudEljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogLTE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuXG4jc29sdXRpb25JbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbiNzb2x1dGlvblRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsZWZ0OiA2OHB4O1xuICB0b3A6IDJweDtcbn1cblxuLmRpc3BsYXlDb21tZW50U2hhcmluZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNyU7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLXRvb2x0aXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIC5jb21tZW50SWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/comment/comment.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/request-details/comment/comment.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppModulesRequestDetailsCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_core_services_comment_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/comment-http.service */
    "./src/app/core/services/comment-http.service.ts");

    var CommentComponent =
    /*#__PURE__*/
    function () {
      function CommentComponent(userService, commentHttp, requestService, authService) {
        _classCallCheck(this, CommentComponent);

        this.userService = userService;
        this.commentHttp = commentHttp;
        this.requestService = requestService;
        this.authService = authService;
        this.changeFramws = false;
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.requestDetails$ = this.requestService.getRequestDetials();
          this.isSolver$ = this.authService.isSolver();
          this.isGhost$ = this.authService.isGhost();
          this.isAdmin$ = this.authService.isAdmin();
        }
      }, {
        key: "editComment",
        value: function editComment(requestComment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _ref, formValues;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                      html: '<label for="commentText">Zmente komentár a potvrdte</label>' + '<textarea id="commentText" class="swal2-input" style = "height: 200px;">' + requestComment.comment + '</textarea>',
                      focusConfirm: false,
                      width: 750,
                      preConfirm: function preConfirm() {
                        return [document.getElementById('commentText').value];
                      }
                    });

                  case 2:
                    _ref = _context.sent;
                    formValues = _ref.value;

                    if (formValues) {
                      requestComment.comment = formValues[0];
                      this.commentHttp.editComment(requestComment).subscribe(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                          position: 'top-end',
                          text: 'Komentár bol zmenený',
                          showConfirmButton: false,
                          timer: 1500
                        });
                      });
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(requestComment) {
          var _this25 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Naozaj chcete zmazať komentár ?',
            text: requestComment.comment,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'rgb(40, 171, 22)',
            cancelButtonText: "Zatvoriť",
            confirmButtonText: 'Zmazať'
          }).then(function (result) {
            if (result.value) {
              _this25.commentHttp.deleteComment(requestComment).subscribe(function () {
                var index = _this25.requestComments.indexOf(requestComment);

                if (index > -1) {
                  _this25.requestComments.splice(index, 1);
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'top-end',
                  text: 'Komentár bol zmazaný',
                  showConfirmButton: false,
                  timer: 1500
                });
              });
            }
          });
        }
      }, {
        key: "changeCommentPrivacy",
        value: function changeCommentPrivacy(requestComment) {
          requestComment.isPrivate = !requestComment.isPrivate;
          this.commentHttp.changePrivacy(requestComment).subscribe(function () {
            if (!requestComment.isPrivate) {
              requestComment.groupsToShare = [];
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              position: 'top-end',
              text: 'Viditeľnosť komentára bolo zmenené',
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      }, {
        key: "changeFrames",
        value: function changeFrames(requestComment) {
          this.changeFramws = !this.changeFramws;
          this.sharingComment = requestComment;
        }
      }, {
        key: "shareWith",
        value: function shareWith(group) {
          var _this26 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            text: "Naozaj chcete vyzdie\u013Ea\u0165 koment\xE1r so skupinou : ".concat(group.name, " ?"),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0077ec',
            cancelButtonColor: '#d33',
            cancelButtonText: "zatvoriť",
            confirmButtonText: 'Zdieľať'
          }).then(function (result) {
            if (result.value) {
              _this26.sharingComment.groupsToShare.push(group.name);

              _this26.commentHttp.shareComment(_this26.sharingComment).subscribe(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  position: 'top-end',
                  text: 'Komentár bol vyzdieľaný',
                  showConfirmButton: false,
                  timer: 1500
                });
              });
            }
          });
        }
      }]);

      return CommentComponent;
    }();

    CommentComponent.ctorParameters = function () {
      return [{
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: app_core_services_comment_http_service__WEBPACK_IMPORTED_MODULE_6__["CommentHttpService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_4__["RequestModificationService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "requestComments", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/comment/comment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment.component.scss */
      "./src/app/modules/request-details/comment/comment.component.scss")).default]
    })], CommentComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-details.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/modules/request-details/request-details.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsRequestDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 5px;\n  float: right;\n}\n\n#requestLeftSide {\n  width: 60%;\n  float: left;\n}\n\n#requestRightSide {\n  /*  width: 35%;*/\n  width: 30%;\n  margin-right: 5%;\n  float: right;\n  position: relative;\n}\n\n.customRow {\n  display: -webkit-box;\n  display: flex;\n}\n\n.customCol {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.raisedbox {\n  color: #8a8a8a;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px 2px rgba(119, 119, 119, 0.75);\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background-color: #FBFBFB;\n  font-size: 14px;\n  overflow-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.avatar {\n  height: 35px;\n  width: 35px;\n  margin-right: 5px;\n}\n\n.raisedboxName {\n  position: relative;\n  font-weight: bold;\n  font-size: 12px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.mainInformationContainer {\n  margin-bottom: 20px;\n}\n\n#sliderDiv1 {\n  position: absolute;\n  top: 0px;\n  right: 5px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n#sliderDiv2 {\n  position: absolute;\n  top: -18px;\n  right: 5px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.sliderButton {\n  font-size: 40px;\n  color: coral;\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n.sliderButton:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\nng-sidebar-container {\n  height: 100vh;\n}\n\n::ng-deep aside {\n  background-color: #f6f6f6;\n  padding: 2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccmVxdWVzdC1kZXRhaWxzXFxyZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0UsZ0JBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDRUo7O0FEQ0E7RUFDQyxjQUFBO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0VBR0EscURBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFHQSx5QkFBQTtBQ0FKOztBREVJO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGlDQUFBO0VBR0EseUJBQUE7QUNBUjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGVudENvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jcmVxdWVzdExlZnRTaWRle1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jcmVxdWVzdFJpZ2h0U2lkZXtcclxuICAvKiAgd2lkdGg6IDM1JTsqL1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmN1c3RvbVJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICB9XHJcbiAgXHJcbi5jdXN0b21Db2wge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4ucmFpc2VkYm94IHsgXHJcblx0Y29sb3I6IzhhOGE4YTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5yYWlzZWRib3hOYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWFpbkluZm9ybWF0aW9uQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI3NsaWRlckRpdjF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2xpZGVyRGl2MntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlckJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiBjb3JhbDtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5nLXNpZGViYXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuOjpuZy1kZWVwIGFzaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y2ZjZmNjtcclxuICAgIHBhZGRpbmc6IDJlbSAxZW07XHJcbiAgfVxyXG5cclxuICAiLCIjY29udGVudENvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI3JlcXVlc3RMZWZ0U2lkZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jcmVxdWVzdFJpZ2h0U2lkZSB7XG4gIC8qICB3aWR0aDogMzUlOyovXG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tUm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmN1c3RvbUNvbCB7XG4gIGZsZXg6IDE7XG59XG5cbi5yYWlzZWRib3gge1xuICBjb2xvcjogIzhhOGE4YTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJhaXNlZGJveE5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluSW5mb3JtYXRpb25Db250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jc2xpZGVyRGl2MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NsaWRlckRpdjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE4cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGNvcmFsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbn1cbi5zbGlkZXJCdXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG5uZy1zaWRlYmFyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjo6bmctZGVlcCBhc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIHBhZGRpbmc6IDJlbSAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/request-details/request-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RequestDetailsComponent */

  /***/
  function srcAppModulesRequestDetailsRequestDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function () {
      return RequestDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var RequestDetailsComponent =
    /*#__PURE__*/
    function () {
      function RequestDetailsComponent(requestService, spinner, authService) {
        _classCallCheck(this, RequestDetailsComponent);

        this.requestService = requestService;
        this.spinner = spinner;
        this.authService = authService;
        this.sideBarBoolean = false;
        this.isGhost$ = this.authService.isGhost();
        this.isAdmin$ = this.authService.isAdmin();
        this.requestDetail$ = this.requestService.getRequestDetials();
      }

      _createClass(RequestDetailsComponent, [{
        key: "openSideBar",
        value: function openSideBar() {
          this.sideBarBoolean = !this.sideBarBoolean;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          var url = window.location.pathname;
          var id = url.substring(url.lastIndexOf('/') + 1);
          this.spinner.show();
          this.requestService.loadRequestDetails(id).subscribe(function (value) {
            return _this27.spinner.hide();
          }, function (err) {
            return _this27.spinner.hide();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.requestService.removeRequestDetails();
        }
      }, {
        key: "addCommentToArray",
        value: function addCommentToArray(requestComment) {
          this.requestComments.requestComments.push(requestComment);
        }
      }]);

      return RequestDetailsComponent;
    }();

    RequestDetailsComponent.ctorParameters = function () {
      return [{
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_2__["RequestModificationService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sideDetails', {
      static: false
    })], RequestDetailsComponent.prototype, "sideDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('requestComments', {
      static: false
    })], RequestDetailsComponent.prototype, "requestComments", void 0);
    RequestDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-details.component.scss */
      "./src/app/modules/request-details/request-details.component.scss")).default]
    })], RequestDetailsComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-side-information/request-side-information.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/request-details/request-side-information/request-side-information.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsRequestSideInformationRequestSideInformationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "li {\n  display: -webkit-box;\n  display: flex;\n  font-size: 13px;\n}\n\n.information {\n  color: #676666;\n  margin-right: 5px;\n}\n\n.detailTitle {\n  font-weight: bold;\n  color: #8a8a8a;\n  margin-bottom: 10px;\n  font-size: 17px;\n}\n\n.informationAnswer {\n  -webkit-box-flex: 0;\n          flex: 0 0 150px;\n  font-weight: bold;\n}\n\n.lineHeight {\n  line-height: 16px;\n}\n\n.ulSecondColl {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.content {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.titleIcon {\n  width: 23px;\n  margin-top: -5px;\n}\n\n.avatar {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n  margin-left: -30px;\n  margin-bottom: 8px;\n  margin-top: -3px;\n}\n\n.clicable {\n  color: #5fa9ff;\n  cursor: pointer;\n}\n\n.uploaderContainer {\n  margin-top: 20px;\n  width: 350px;\n}\n\n@media (min-width: 1919px) {\n  .detailTitle {\n    font-size: 19px;\n  }\n\n  li {\n    font-size: 14px;\n  }\n\n  .titleIcon {\n    width: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1zaWRlLWluZm9ybWF0aW9uL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHJlcXVlc3QtZGV0YWlsc1xccmVxdWVzdC1zaWRlLWluZm9ybWF0aW9uXFxyZXF1ZXN0LXNpZGUtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3Qtc2lkZS1pbmZvcm1hdGlvbi9yZXF1ZXN0LXNpZGUtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRE9BO0VBQ0ksbUJBQUE7VUFBQSxlQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURTQTtFQUNJLGlCQUFBO0FDTko7O0FEU0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNOSjs7QURVQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDUEo7O0FEVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUEo7O0FEVUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDUEo7O0FEV0E7RUFDSTtJQUNJLGVBQUE7RUNSTjs7RURXRTtJQUNJLGVBQUE7RUNSTjs7RURVRTtJQUNJLFdBQUE7RUNQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1zaWRlLWluZm9ybWF0aW9uL3JlcXVlc3Qtc2lkZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBcclxuLmluZm9ybWF0aW9uIHtcclxuICAgIGNvbG9yOiM2NzY2NjY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4uZGV0YWlsVGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiM4YThhOGE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmluZm9ybWF0aW9uQW5zd2Vye1xyXG4gICAgZmxleDogMCAwIDE1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG5cclxuLmxpbmVIZWlnaHR7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLnVsU2Vjb25kQ29sbHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuXHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZUljb257XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5jbGljYWJsZXtcclxuICAgIGNvbG9yOiAjNWZhOWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXBsb2FkZXJDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjE5MTlweCkge1xyXG4gICAgLmRldGFpbFRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAudGl0bGVJY29ue1xyXG4gICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgfVxyXG59XHJcbiIsImxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5mb3JtYXRpb24ge1xuICBjb2xvcjogIzY3NjY2NjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kZXRhaWxUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzhhOGE4YTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaW5mb3JtYXRpb25BbnN3ZXIge1xuICBmbGV4OiAwIDAgMTUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluZUhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4udWxTZWNvbmRDb2xsIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlSWNvbiB7XG4gIHdpZHRoOiAyM3B4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uY2xpY2FibGUge1xuICBjb2xvcjogIzVmYTlmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXBsb2FkZXJDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMzUwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgLmRldGFpbFRpdGxlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICBsaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRpdGxlSWNvbiB7XG4gICAgd2lkdGg6IDI2cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-side-information/request-side-information.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/request-details/request-side-information/request-side-information.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: RequestSideInformationComponent */

  /***/
  function srcAppModulesRequestDetailsRequestSideInformationRequestSideInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestSideInformationComponent", function () {
      return RequestSideInformationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/file-service.service */
    "./src/app/core/services/file-service.service.ts");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/shared/enums/request-position.enum */
    "./src/app/shared/enums/request-position.enum.ts");

    var RequestSideInformationComponent =
    /*#__PURE__*/
    function () {
      function RequestSideInformationComponent(fileService, userService, requestService, authService) {
        _classCallCheck(this, RequestSideInformationComponent);

        this.fileService = fileService;
        this.userService = userService;
        this.requestService = requestService;
        this.authService = authService;
      }

      _createClass(RequestSideInformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.requestDetails$ = this.requestService.getRequestDetials();
          this.isSolver$ = this.authService.isSolver();
          this.isGhost$ = this.authService.isGhost();
        }
      }, {
        key: "calculateOpenDays",
        value: function calculateOpenDays(requestDetails) {
          var open = new Date(requestDetails.timestampCreation);
          var result = 0;
          var one_day = 1000 * 60 * 60 * 24; //Get 1 day in milliseconds

          if (requestDetails.timestampClosed === null) {
            var today = new Date();
            result = today.getTime() - open.getTime();
          } else {
            var closed = new Date(requestDetails.timestampClosed);
            result = closed.getTime() - open.getTime();
          }

          return Math.round(result / one_day);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(requestDetails, file) {
          this.fileService.postFileForRequest(requestDetails.id, [file]).subscribe(function () {
            requestDetails.documents.push({
              name: file.name,
              lastModified: new Date().getTime()
            });
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(requestDetails, name) {
          this.fileService.downloadFileForRequest(requestDetails.id, name);
        }
      }, {
        key: "assignOnMe",
        value: function assignOnMe(requestDetails) {
          var _this28 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: "Naozaj chcetete prideliť na seba požiadavku s id : " + requestDetails.id + " ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this28.requestService.assignOrRemoveRequestOnMe(requestDetails.id, true).subscribe(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  text: 'Pridelené',
                  position: 'top-end',
                  timer: 1200,
                  showConfirmButton: false
                });
                requestDetails.assigned = _this28.userService.getUserSimple();
                requestDetails.requestPosition = app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_7__["RequestPosition"].Assigned;
              });
            }
          });
        }
      }]);

      return RequestSideInformationComponent;
    }();

    RequestSideInformationComponent.ctorParameters = function () {
      return [{
        type: app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_2__["FileServiceService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__["RequestModificationService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    RequestSideInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-side-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-side-information.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-information/request-side-information.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-side-information.component.scss */
      "./src/app/modules/request-details/request-side-information/request-side-information.component.scss")).default]
    })], RequestSideInformationComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-side-options/request-side-options.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/modules/request-details/request-side-options/request-side-options.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestDetailsRequestSideOptionsRequestSideOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".switch {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  width: 200px;\n  height: 30px;\n  padding: 3px;\n  margin: 0 10px 10px 0;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n  border-radius: 18px;\n  box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  box-sizing: content-box;\n}\n\n.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  box-sizing: content-box;\n}\n\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 10px;\n  text-transform: uppercase;\n  background: #eceeef;\n  border-radius: inherit;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n  box-sizing: content-box;\n}\n\n.switch-label:before, .switch-label:after {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5em;\n  line-height: 1;\n  -webkit-transition: inherit;\n  transition: inherit;\n  box-sizing: content-box;\n}\n\n.switch-label:before {\n  content: attr(data-off);\n  right: 11px;\n  color: #aaaaaa;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.switch-label:after {\n  content: attr(data-on);\n  left: 11px;\n  color: #FFFFFF;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label {\n  background: #E1B42B;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.switch-input:checked ~ .switch-label:before {\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label:after {\n  opacity: 1;\n}\n\n.switch-handle {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 28px;\n  height: 28px;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(40%, #FFFFFF), to(#f0f0f0));\n  background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n  background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n.switch-handle:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -6px 0 0 -6px;\n  width: 12px;\n  height: 12px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#eeeeee), to(#FFFFFF));\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n  border-radius: 6px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n\n.switch-input:checked ~ .switch-handle {\n  left: 174px;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Transition\n========================== */\n\n.switch-label, .switch-handle {\n  transition: All 0.3s ease;\n  -webkit-transition: All 0.3s ease;\n  -moz-transition: All 0.3s ease;\n  -o-transition: All 0.3s ease;\n}\n\n.content {\n  position: relative;\n  text-align: center;\n}\n\n.module {\n  position: relative;\n  /*margin: auto;*/\n  width: 250px;\n  margin-bottom: 25px;\n  display: block;\n}\n\n.switch {\n  margin: auto;\n}\n\n.customInput {\n  width: 200px;\n  margin: auto;\n}\n\n.customInputSmall {\n  width: 150px;\n  float: left;\n}\n\n.openInput {\n  background-color: #4cc715;\n}\n\n.sendingButton {\n  background-color: #0077ec;\n  margin-top: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1zaWRlLW9wdGlvbnMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXFN3aXRjaFNjc3Muc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1zaWRlLW9wdGlvbnMvcmVxdWVzdC1zaWRlLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3Qtc2lkZS1vcHRpb25zL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHJlcXVlc3QtZGV0YWlsc1xccmVxdWVzdC1zaWRlLW9wdGlvbnNcXHJlcXVlc3Qtc2lkZS1vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0EscUVBQUE7RUFDQSxtQkFBQTtFQUNBLG1FQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDRUQ7O0FEQUE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtGQUFBO0VBQ0EsdUJBQUE7QUNHRDs7QUREQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBR0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lEOztBREZBO0VBQ0MsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FDS0Q7O0FESEE7RUFDQyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0FDTUQ7O0FESkE7RUFDQyxtQkFBQTtFQUNBLGlGQUFBO0FDT0Q7O0FETEE7RUFDQyxVQUFBO0FDUUQ7O0FETkE7RUFDQyxVQUFBO0FDU0Q7O0FEUEE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrR0FBQTtFQUFBLDREQUFBO0VBQ0Esb0VBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDVUQ7O0FEUkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1RkFBQTtFQUFBLHdEQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDV0Q7O0FEVEE7RUFDQyxXQUFBO0VBQ0EsMkNBQUE7QUNZRDs7QURUQTs0QkFBQTs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDWUQ7O0FDaEhBO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtBRGtISjs7QUNoSEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRG1ISjs7QUNoSEE7RUFDSSxZQUFBO0FEbUhKOztBQ2hIQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FEbUhKOztBQ2hIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEbUhKOztBQ2hIQTtFQUNJLHlCQUFBO0FEbUhKOztBQ2hIQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEbUhKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1zaWRlLW9wdGlvbnMvcmVxdWVzdC1zaWRlLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmc6IDNweDtcclxuXHRtYXJnaW46IDAgMTBweCAxMHB4IDA7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZWVlZSwgI0ZGRkZGRiAyNXB4KTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZWVlZWUsICNGRkZGRkYgMjVweCk7XHJcblx0Ym9yZGVyLXJhZGl1czogMThweDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggd2hpdGUsIGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xyXG59XHJcbi5zd2l0Y2gtaW5wdXQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGJveC1zaXppbmc6Y29udGVudC1ib3g7XHJcbn1cclxuLnN3aXRjaC1sYWJlbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogaW5oZXJpdDtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRiYWNrZ3JvdW5kOiAjZWNlZWVmO1xyXG5cdGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xyXG59XHJcbi5zd2l0Y2gtbGFiZWw6YmVmb3JlLCAuc3dpdGNoLWxhYmVsOmFmdGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLS41ZW07XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBpbmhlcml0O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogaW5oZXJpdDtcclxuXHQtby10cmFuc2l0aW9uOiBpbmhlcml0O1xyXG5cdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0Ym94LXNpemluZzpjb250ZW50LWJveDtcclxufVxyXG4uc3dpdGNoLWxhYmVsOmJlZm9yZSB7XHJcblx0Y29udGVudDogYXR0cihkYXRhLW9mZik7XHJcblx0cmlnaHQ6IDExcHg7XHJcblx0Y29sb3I6ICNhYWFhYWE7XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG4uc3dpdGNoLWxhYmVsOmFmdGVyIHtcclxuXHRjb250ZW50OiBhdHRyKGRhdGEtb24pO1xyXG5cdGxlZnQ6IDExcHg7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWwge1xyXG5cdGJhY2tncm91bmQ6ICNFMUI0MkI7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLnN3aXRjaC1oYW5kbGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDRweDtcclxuXHRsZWZ0OiA0cHg7XHJcblx0d2lkdGg6IDI4cHg7XHJcblx0aGVpZ2h0OiAyOHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uc3dpdGNoLWhhbmRsZTpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW46IC02cHggMCAwIC02cHg7XHJcblx0d2lkdGg6IDEycHg7XHJcblx0aGVpZ2h0OiAxMnB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWVlZWUsICNGRkZGRkYpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZWVlZSwgI0ZGRkZGRik7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1oYW5kbGUge1xyXG5cdGxlZnQ6IDE3NHB4O1xyXG5cdGJveC1zaGFkb3c6IC0xcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuIFxyXG4vKiBUcmFuc2l0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5zd2l0Y2gtbGFiZWwsIC5zd2l0Y2gtaGFuZGxlIHtcclxuXHR0cmFuc2l0aW9uOiBBbGwgMC4zcyBlYXNlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcclxufSIsIi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWVlZWUsICNGRkZGRkYgMjVweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZWVlZSwgI0ZGRkZGRiAyNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHdoaXRlLCBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnN3aXRjaC1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnN3aXRjaC1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjZWNlZWVmO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnN3aXRjaC1sYWJlbDpiZWZvcmUsIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGluaGVyaXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgLW8tdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7XG4gIHJpZ2h0OiAxMXB4O1xuICBjb2xvcjogI2FhYWFhYTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnN3aXRjaC1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7XG4gIGxlZnQ6IDExcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogI0UxQjQyQjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3dpdGNoLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiA0MCUsICNmMGYwZjApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3dpdGNoLWhhbmRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogLTZweCAwIDAgLTZweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZWVlZSwgI0ZGRkZGRik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZWVlZSwgI0ZGRkZGRik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbn1cblxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1oYW5kbGUge1xuICBsZWZ0OiAxNzRweDtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogVHJhbnNpdGlvblxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zd2l0Y2gtbGFiZWwsIC5zd2l0Y2gtaGFuZGxlIHtcbiAgdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBBbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2R1bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2l0Y2gge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jdXN0b21JbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY3VzdG9tSW5wdXRTbWFsbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5vcGVuSW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNjNzE1O1xufVxuXG4uc2VuZGluZ0J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3ZWM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvY3VzdG9tQ3NzL1N3aXRjaFNjc3Muc2Nzcyc7XHJcblxyXG4uY29udGVudHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1vZHVsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qbWFyZ2luOiBhdXRvOyovXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zd2l0Y2h7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbUlucHV0U21hbGx7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm9wZW5JbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2M3MTU7XHJcbn1cclxuXHJcbi5zZW5kaW5nQnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdlYztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/request-details/request-side-options/request-side-options.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/request-details/request-side-options/request-side-options.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: RequestSideOptionsComponent */

  /***/
  function srcAppModulesRequestDetailsRequestSideOptionsRequestSideOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestSideOptionsComponent", function () {
      return RequestSideOptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/shared/enums/request-position.enum */
    "./src/app/shared/enums/request-position.enum.ts");

    var RequestSideOptionsComponent =
    /*#__PURE__*/
    function () {
      function RequestSideOptionsComponent(userService, requestService, authService) {
        _classCallCheck(this, RequestSideOptionsComponent);

        this.userService = userService;
        this.requestService = requestService;
        this.authService = authService;
      }

      _createClass(RequestSideOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allusers$ = this.userService.getAllActiveUsers();
          this.requestDetail$ = this.requestService.getRequestDetials();
          this.isSolver$ = this.authService.isSolver();
          this.isManager$ = this.authService.isManager();
          this.isManagerRightHand$ = this.authService.isManagerRightHand();
          this.isAdmin$ = this.authService.isAdmin();
          this.isSolverRightHand$ = this.authService.isSolverRightHand();
        }
      }, {
        key: "changePriority",
        value: function changePriority(requestDetails) {
          var _this29 = this;

          if (this.priority === undefined) {
            return;
          }

          this.requestService.changePriority(requestDetails.id, this.priority).subscribe(function () {
            requestDetails.requestPriority = _this29.priority;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: 'top-end',
              text: 'Priorita bola zmenená',
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      }, {
        key: "changeAssignedUser",
        value: function changeAssignedUser(requestDetails) {
          if (this.userSimple === undefined) {
            return;
          }

          this.requestService.assignSolver(requestDetails.id, this.userSimple).subscribe(function (userSimple) {
            requestDetails.assigned = userSimple;
            requestDetails.requestPosition = app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_6__["RequestPosition"].Assigned;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: 'top-end',
              text: 'Riešiteľ zmenený',
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      }, {
        key: "changeCommenting",
        value: function changeCommenting(requestDetails) {
          this.requestService.changeCommenting(requestDetails.id).subscribe(function () {
            requestDetails.allowCommenting = !requestDetails.allowCommenting;

            if (requestDetails.allowCommenting) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                position: 'top-end',
                text: 'Komentovanie požiadavky sa zakázalo',
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                position: 'top-end',
                text: 'Komentovanie požiadavky sa povolilo',
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
        }
      }, {
        key: "closeRequest",
        value: function closeRequest(requestDetails) {
          var _this30 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete uzatvoriť požiadavku ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this30.requestService.changeState(requestDetails.id, true).subscribe(function () {
                requestDetails.closed = _this30.userService.getUserSimple();
                requestDetails.timestampClosed = new Date();
                requestDetails.requestPosition = app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_6__["RequestPosition"].Closed;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'top-end',
                  text: 'Požiadavka ' + requestDetails.id + ". bola uzavretá.",
                  showConfirmButton: false,
                  timer: 1200
                });
              });
            }
          });
        }
      }, {
        key: "reopenRequest",
        value: function reopenRequest(requestDetails) {
          var _this31 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete znovu otvoriť požiadavku ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this31.requestService.changeState(requestDetails.id, false).subscribe(function () {
                requestDetails.closed = null;
                requestDetails.timestampClosed = null;
                requestDetails.requestPosition = app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_6__["RequestPosition"].Assigned;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  position: 'top-end',
                  text: 'Požiadavka ' + requestDetails.id + ". bola otvorená.",
                  showConfirmButton: false,
                  timer: 1200
                });
              });
            }
          });
        }
      }, {
        key: "addEvaluationForReport",
        value: function addEvaluationForReport(requestDetails) {
          var _this32 = this;

          if (this.reportEvaluation === undefined) {
            return;
          }

          this.requestService.reportAddEvaluation(requestDetails.id, this.reportEvaluation).subscribe(function () {
            requestDetails.evaluation = _this32.reportEvaluation;
            _this32.reportEvaluation = undefined;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: 'top-end',
              text: 'Nadhodnocenie reportu bolo zaznamenané',
              showConfirmButton: false,
              timer: 1200
            });
          });
        }
      }, {
        key: "selectedPriority",
        value: function selectedPriority(priority) {
          this.priority = priority;
        }
      }, {
        key: "selectedUser",
        value: function selectedUser(userSimple) {
          this.userSimple = userSimple;
        }
      }, {
        key: "addedEvaluation",
        value: function addedEvaluation(evaluation) {
          this.reportEvaluation = evaluation;
        }
      }, {
        key: "isAssignedOnMe",
        value: function isAssignedOnMe(requestDetails) {
          return requestDetails.assigned != null && requestDetails.assigned.username === this.userService.user.username;
        }
      }, {
        key: "dropRequest",
        value: function dropRequest(requestDetails) {
          this.requestService.removeSolver(requestDetails.id).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: 'top-end',
              text: 'Riešiteľ bol odstránený',
              showConfirmButton: false,
              timer: 1200
            });
            requestDetails.assigned = null;
            requestDetails.requestPosition = app_shared_enums_request_position_enum__WEBPACK_IMPORTED_MODULE_6__["RequestPosition"].UnAssigned;
          });
        }
      }]);

      return RequestSideOptionsComponent;
    }();

    RequestSideOptionsComponent.ctorParameters = function () {
      return [{
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_3__["RequestModificationService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    RequestSideOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-side-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-side-options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-details/request-side-options/request-side-options.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-side-options.component.scss */
      "./src/app/modules/request-details/request-side-options/request-side-options.component.scss")).default]
    })], RequestSideOptionsComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-finance-form/request-finance-form.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-finance-form/request-finance-form.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestFormsRequestFinanceFormRequestFinanceFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".InlineParameters {\n  display: block;\n  width: 40%;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n#fileUploader {\n  float: left;\n  width: 100%;\n  margin-left: 20px;\n}\n\n#ticketSendingButton {\n  margin-top: 10px;\n  float: right;\n  background-color: #0077ec;\n}\n\n#FormImage {\n  position: absolute;\n  top: 125px;\n  width: 325px;\n  left: 55%;\n  -webkit-transition: -webkit-transform 0.8s ease-in-out;\n  transition: -webkit-transform 0.8s ease-in-out;\n  transition: transform 0.8s ease-in-out;\n  transition: transform 0.8s ease-in-out, -webkit-transform 0.8s ease-in-out;\n}\n\nmat-form-field, mat-checkbox, .movedError {\n  margin-left: 20px;\n}\n\ntextarea {\n  height: 175px;\n}\n\n@media (min-width: 1919px) {\n  #FormImage {\n    width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtZmluYW5jZS1mb3JtL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHJlcXVlc3QtZm9ybXNcXHJlcXVlc3QtZmluYW5jZS1mb3JtXFxyZXF1ZXN0LWZpbmFuY2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtZmluYW5jZS1mb3JtL3JlcXVlc3QtZmluYW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzREFBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7RUFBQSwwRUFBQTtBQ0NKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURNQTtFQUNJO0lBQ0ksWUFBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcXVlc3QtZm9ybXMvcmVxdWVzdC1maW5hbmNlLWZvcm0vcmVxdWVzdC1maW5hbmNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSW5saW5lUGFyYW1ldGVyc3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNmaWxlVXBsb2FkZXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiN0aWNrZXRTZW5kaW5nQnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3ZWM7XHJcbn1cclxuXHJcbiNGb3JtSW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTI1cHg7XHJcbiAgICB3aWR0aDogMzI1cHg7XHJcbiAgICBsZWZ0OiA1NSU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246ICB0cmFuc2Zvcm0gLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkLCBtYXQtY2hlY2tib3gsIC5tb3ZlZEVycm9ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxOTE5cHgpIHtcclxuICAgICNGb3JtSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSIsIi5JbmxpbmVQYXJhbWV0ZXJzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI2ZpbGVVcGxvYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiN0aWNrZXRTZW5kaW5nQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2VjO1xufVxuXG4jRm9ybUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyNXB4O1xuICB3aWR0aDogMzI1cHg7XG4gIGxlZnQ6IDU1JTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjhzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLWluLW91dDtcbn1cblxubWF0LWZvcm0tZmllbGQsIG1hdC1jaGVja2JveCwgLm1vdmVkRXJyb3Ige1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDE3NXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gICNGb3JtSW1hZ2Uge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-finance-form/request-finance-form.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-finance-form/request-finance-form.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: RequestFinanceFormComponent */

  /***/
  function srcAppModulesRequestFormsRequestFinanceFormRequestFinanceFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestFinanceFormComponent", function () {
      return RequestFinanceFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/file-service.service */
    "./src/app/core/services/file-service.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var RequestFinanceFormComponent =
    /*#__PURE__*/
    function () {
      function RequestFinanceFormComponent(formBuilder, http, fileService, spinner) {
        _classCallCheck(this, RequestFinanceFormComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.fileService = fileService;
        this.spinner = spinner;
        this.financeTypeArray = [];
      }

      _createClass(RequestFinanceFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFinanceType();
          this.initFormGroup();
        }
      }, {
        key: "initFormGroup",
        value: function initFormGroup() {
          this.financeForm = this.formBuilder.group({
            financeType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: [''],
            requestPriority: ['nízka']
          });
        }
      }, {
        key: "changeToUrgent",
        value: function changeToUrgent(checked) {
          if (checked) {
            this.financeForm.patchValue({
              'requestPriority': 'vysoká'
            });
          } else {
            this.financeForm.patchValue({
              'requestPriority': 'nízka'
            });
          }
        }
      }, {
        key: "loadFinanceType",
        value: function loadFinanceType() {
          var _this33 = this;

          this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "requests/finance/types").subscribe(function (financeType) {
            return _this33.financeTypeArray = financeType;
          });
        }
      }, {
        key: "sendFinanceFormToAPI",
        value: function sendFinanceFormToAPI() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'requests/finance', this.financeForm.value, {
            headers: headers
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this34 = this;

          if (this.financeForm.invalid || this.fileInput.isEmpty()) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            text: "Naozaj chcetete odoslať požiadavku na financie ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this34.spinner.show();

              _this34.sendFinanceFormToAPI().subscribe(function (id) {
                return _this34.fileService.postFileForRequest(id, _this34.fileInput.files).subscribe(function (succ) {
                  _this34.financeFormViewChild.resetForm();

                  _this34.spinner.hide();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'top-end',
                    text: 'Vaša požiadavka s id : ' + id + ". bola zaznamenaná.'",
                    showConfirmButton: false,
                    timer: 1200
                  });
                });
              });
            }
          });
        }
      }, {
        key: "financeType",
        get: function get() {
          return this.financeForm.get("financeType");
        }
      }, {
        key: "requestPriority",
        get: function get() {
          return this.financeForm.get("requestPriority");
        }
      }, {
        key: "name",
        get: function get() {
          return this.financeForm.get("name");
        }
      }]);

      return RequestFinanceFormComponent;
    }();

    RequestFinanceFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_6__["FileServiceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileUploader', {
      static: true
    })], RequestFinanceFormComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('financeFormViewChild', {
      static: true
    })], RequestFinanceFormComponent.prototype, "financeFormViewChild", void 0);
    RequestFinanceFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-finance-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-finance-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-finance-form/request-finance-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-finance-form.component.scss */
      "./src/app/modules/request-forms/request-finance-form/request-finance-form.component.scss")).default]
    })], RequestFinanceFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-forms.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/request-forms/request-forms.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestFormsRequestFormsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 5px;\n  float: right;\n  position: relative;\n  color: #8a8a8a;\n}\n\n.requestFormButtonContainer {\n  position: absolute;\n  display: inline-grid;\n  right: 35px;\n}\n\n.requestFormButton {\n  margin-bottom: 10px;\n  background-color: #ffec98;\n}\n\n.requestForm {\n  padding: 20px 40px;\n}\n\n@media (min-width: 1919px) {\n  .requestForm {\n    padding: 40px 100px;\n  }\n}\n\n.formTitle {\n  margin-top: -20px;\n  margin-left: -10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHJlcXVlc3QtZm9ybXNcXHJlcXVlc3QtZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1mb3Jtcy9yZXF1ZXN0LWZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxtQkFBQTtFQ0ROO0FBQ0Y7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdC1mb3Jtcy9yZXF1ZXN0LWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjb250ZW50Q29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IzhhOGE4YTtcclxufVxyXG5cclxuXHJcbi5yZXF1ZXN0Rm9ybUJ1dHRvbkNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0Rm9ybUJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYzk4O1xyXG59XHJcblxyXG4ucmVxdWVzdEZvcm17XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbn0gXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjE5MTlweCkge1xyXG4gICAgLnJlcXVlc3RGb3Jte1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTAwcHg7XHJcbiAgICB9IFxyXG5cclxufVxyXG5cclxuLmZvcm1UaXRsZXtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4iLCIjY29udGVudENvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzhhOGE4YTtcbn1cblxuLnJlcXVlc3RGb3JtQnV0dG9uQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgcmlnaHQ6IDM1cHg7XG59XG5cbi5yZXF1ZXN0Rm9ybUJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjOTg7XG59XG5cbi5yZXF1ZXN0Rm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xuICAucmVxdWVzdEZvcm0ge1xuICAgIHBhZGRpbmc6IDQwcHggMTAwcHg7XG4gIH1cbn1cbi5mb3JtVGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-forms.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/request-forms/request-forms.component.ts ***!
    \******************************************************************/

  /*! exports provided: RequestFormsComponent */

  /***/
  function srcAppModulesRequestFormsRequestFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestFormsComponent", function () {
      return RequestFormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var RequestFormsComponent =
    /*#__PURE__*/
    function () {
      function RequestFormsComponent(authService) {
        _classCallCheck(this, RequestFormsComponent);

        this.authService = authService;
      }

      _createClass(RequestFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.hasFinanceModuleAccess$ = this.authService.hasFinanceModuleAccess();
          this.hasTicketModuleAccess$ = this.authService.hasTicketModuleAccess();
          this.hasReportModuleAccess$ = this.authService.hasReportModuleAccess();
        }
      }]);

      return RequestFormsComponent;
    }();

    RequestFormsComponent.ctorParameters = function () {
      return [{
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    RequestFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-forms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-forms.component.scss */
      "./src/app/modules/request-forms/request-forms.component.scss")).default]
    })], RequestFormsComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-report-form/request-report-form.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-report-form/request-report-form.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestFormsRequestReportFormRequestReportFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  display: block;\n  width: 50%;\n  margin-left: 20px;\n}\n\n.reportInlineParameters {\n  width: 90%;\n  height: auto;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.reportInlineParameters mat-form-field textarea {\n  height: 210px;\n}\n\n#uploader {\n  float: left;\n  width: 100%;\n  margin-left: 20px;\n}\n\n#reportSendingButton {\n  position: absolute;\n  right: 0px;\n  background-color: #0077ec;\n  margin-bottom: 20px;\n}\n\n.formAssignedButton {\n  height: 35px;\n  margin: auto 10px;\n  cursor: pointer;\n}\n\n.formdeleteButton {\n  height: 16px;\n  width: 16px;\n  cursor: pointer;\n}\n\n.oneLineLI {\n  list-style-type: none;\n}\n\nmat-checkbox {\n  padding: 16px 0px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtcmVwb3J0LWZvcm0vQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccmVxdWVzdC1mb3Jtc1xccmVxdWVzdC1yZXBvcnQtZm9ybVxccmVxdWVzdC1yZXBvcnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtcmVwb3J0LWZvcm0vcmVxdWVzdC1yZXBvcnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcXVlc3QtZm9ybXMvcmVxdWVzdC1yZXBvcnQtZm9ybS9yZXF1ZXN0LXJlcG9ydC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJlcG9ydElubGluZVBhcmFtZXRlcnN7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVwb3J0SW5saW5lUGFyYW1ldGVycyBtYXQtZm9ybS1maWVsZCB0ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbn1cclxuXHJcbiN1cGxvYWRlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuI3JlcG9ydFNlbmRpbmdCdXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3N2VjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm1Bc3NpZ25lZEJ1dHRvbntcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybWRlbGV0ZUJ1dHRvbntcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub25lTGluZUxJe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcclxufVxyXG5cclxubWF0LWNoZWNrYm94e1xyXG4gICAgcGFkZGluZzogMTZweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucmVwb3J0SW5saW5lUGFyYW1ldGVycyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlcG9ydElubGluZVBhcmFtZXRlcnMgbWF0LWZvcm0tZmllbGQgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDIxMHB4O1xufVxuXG4jdXBsb2FkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4jcmVwb3J0U2VuZGluZ0J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdlYztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm1Bc3NpZ25lZEJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm1kZWxldGVCdXR0b24ge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vbmVMaW5lTEkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDBweCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-report-form/request-report-form.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-report-form/request-report-form.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: RequestReportFormComponent */

  /***/
  function srcAppModulesRequestFormsRequestReportFormRequestReportFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestReportFormComponent", function () {
      return RequestReportFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_shared_validators_reportAccessValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/validators/reportAccessValidator */
    "./src/app/shared/validators/reportAccessValidator.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/core/services/file-service.service */
    "./src/app/core/services/file-service.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var RequestReportFormComponent =
    /*#__PURE__*/
    function () {
      function RequestReportFormComponent(formBuilder, http, fileService, spinner) {
        _classCallCheck(this, RequestReportFormComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.fileService = fileService;
        this.spinner = spinner;
        this.accessByPeopleArray = []; // people who can access report

        this.accessByMethodArray = [];
      }

      _createClass(RequestReportFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reportForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            requestPriority: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            owner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportRefresh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            purpose: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            criteria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            visibleData: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            otherInformation: '',
            accessMethods: ['', [Object(app_shared_validators_reportAccessValidator__WEBPACK_IMPORTED_MODULE_3__["accessValidator"])(this.accessByMethodArray)]],
            accessByPeople: ['', [Object(app_shared_validators_reportAccessValidator__WEBPACK_IMPORTED_MODULE_3__["accessValidator"])(this.accessByPeopleArray)]],
            deadline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "sendReportFormToAPI",
        value: function sendReportFormToAPI() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
          this.reportForm.patchValue({
            'accessByPeople': this.accessByPeopleArray.join(",")
          });
          this.reportForm.patchValue({
            'accessMethods': this.accessByMethodArray.join(",")
          });
          return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "requests/report", this.reportForm.value, {
            headers: headers
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this35 = this;

          if (this.reportForm.invalid) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            text: "Naozaj chcetete odoslať report ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this35.spinner.show();

              _this35.sendReportFormToAPI().subscribe(function (id) {
                _this35.fileService.postFileForRequest(id, _this35.fileInput.files).subscribe(function (succ) {
                  _this35.reportFormViewChild.resetForm();

                  _this35.spinner.hide();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    position: 'top-end',
                    text: 'Vaša požiadavka s id : ' + id + ". bola zaznamenaná.",
                    showConfirmButton: false,
                    timer: 1200
                  });
                });
              });
            }
          });
        }
      }, {
        key: "addPeopleToAccess",
        value: function addPeopleToAccess() {
          var value = this.reportForm.get("accessByPeople").value;

          if (value === "") {
            return;
          }

          this.accessByPeopleArray.push(value);
          this.reportForm.patchValue({
            accessByPeople: ''
          });
        }
      }, {
        key: "addMethodToAccess",
        value: function addMethodToAccess() {
          var value = this.reportForm.get("accessMethods").value;

          if (value === "") {
            return;
          }

          this.accessByMethodArray.push(value);
          this.reportForm.patchValue({
            accessMethods: ''
          });
        }
      }, {
        key: "deletePeopleItem",
        value: function deletePeopleItem(index) {
          this.accessByPeopleArray.splice(index, 1);
        }
      }, {
        key: "deleteMethodItem",
        value: function deleteMethodItem(index) {
          this.accessByMethodArray.splice(index, 1);
        }
      }, {
        key: "requestPriority",
        get: function get() {
          return this.reportForm.get("requestPriority");
        }
      }, {
        key: "name",
        get: function get() {
          return this.reportForm.get("name");
        }
      }, {
        key: "owner",
        get: function get() {
          return this.reportForm.get("owner");
        }
      }, {
        key: "reportType",
        get: function get() {
          return this.reportForm.get("reportType");
        }
      }, {
        key: "reportRefresh",
        get: function get() {
          return this.reportForm.get("reportRefresh");
        }
      }, {
        key: "purpose",
        get: function get() {
          return this.reportForm.get("purpose");
        }
      }, {
        key: "criteria",
        get: function get() {
          return this.reportForm.get("criteria");
        }
      }, {
        key: "visibleData",
        get: function get() {
          return this.reportForm.get("visibleData");
        }
      }, {
        key: "otherInformation",
        get: function get() {
          return this.reportForm.get("otherInformation");
        }
      }, {
        key: "accessByPeople",
        get: function get() {
          return this.reportForm.get("accessByPeople");
        }
      }, {
        key: "deadline",
        get: function get() {
          return this.reportForm.get("deadline");
        }
      }, {
        key: "accessMethods",
        get: function get() {
          return this.reportForm.get("accessMethods");
        }
      }]);

      return RequestReportFormComponent;
    }();

    RequestReportFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_7__["FileServiceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileUploader', {
      static: true
    })], RequestReportFormComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportFormViewChild', {
      static: true
    })], RequestReportFormComponent.prototype, "reportFormViewChild", void 0);
    RequestReportFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-report-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-report-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-report-form/request-report-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-report-form.component.scss */
      "./src/app/modules/request-forms/request-report-form/request-report-form.component.scss")).default]
    })], RequestReportFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesRequestFormsRequestTicketFormRequestTicketFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ticketInlineParameters {\n  display: block;\n  width: 40%;\n  position: relative;\n  margin-bottom: 5px;\n}\n\n#uploader {\n  float: left;\n  width: 100%;\n  margin-left: 20px;\n}\n\n#ticketSendingButton {\n  margin-top: 10px;\n  float: right;\n  background-color: #0077ec;\n}\n\n#ticketFormImage {\n  position: absolute;\n  top: 125px;\n  width: 325px;\n  left: 55%;\n  -webkit-transition: -webkit-transform 0.8s ease-in-out;\n  transition: -webkit-transform 0.8s ease-in-out;\n  transition: transform 0.8s ease-in-out;\n  transition: transform 0.8s ease-in-out, -webkit-transform 0.8s ease-in-out;\n}\n\n#ticketFormImage:hover {\n  -webkit-transform: rotate(360deg);\n  transform: rotate(360deg);\n}\n\nmat-form-field {\n  margin-left: 20px;\n}\n\ntextarea {\n  height: 175px;\n}\n\n@media (min-width: 1919px) {\n  #ticketFormImage {\n    width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtdGlja2V0LWZvcm0vQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccmVxdWVzdC1mb3Jtc1xccmVxdWVzdC10aWNrZXQtZm9ybVxccmVxdWVzdC10aWNrZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtdGlja2V0LWZvcm0vcmVxdWVzdC10aWNrZXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0RBQUE7RUFDQSw4Q0FBQTtFQUFBLHNDQUFBO0VBQUEsMEVBQUE7QUNDSjs7QURDQTtFQUNJLGlDQUFBO0VBQ1EseUJBQUE7QUNFWjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FES0E7RUFDSTtJQUNJLFlBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXF1ZXN0LWZvcm1zL3JlcXVlc3QtdGlja2V0LWZvcm0vcmVxdWVzdC10aWNrZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXRJbmxpbmVQYXJhbWV0ZXJze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jdXBsb2FkZXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiN0aWNrZXRTZW5kaW5nQnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3ZWM7XHJcbn1cclxuXHJcbiN0aWNrZXRGb3JtSW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTI1cHg7XHJcbiAgICB3aWR0aDogMzI1cHg7XHJcbiAgICBsZWZ0OiA1NSU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246ICB0cmFuc2Zvcm0gLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiN0aWNrZXRGb3JtSW1hZ2U6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuXHJcblxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG5cclxuICBcclxuQG1lZGlhKG1pbi13aWR0aDoxOTE5cHgpIHtcclxuICAgICN0aWNrZXRGb3JtSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIudGlja2V0SW5saW5lUGFyYW1ldGVycyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuI3VwbG9hZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI3RpY2tldFNlbmRpbmdCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3ZWM7XG59XG5cbiN0aWNrZXRGb3JtSW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTI1cHg7XG4gIHdpZHRoOiAzMjVweDtcbiAgbGVmdDogNTUlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuOHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2UtaW4tb3V0O1xufVxuXG4jdGlja2V0Rm9ybUltYWdlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMTc1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgI3RpY2tldEZvcm1JbWFnZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: RequestTicketFormComponent */

  /***/
  function srcAppModulesRequestFormsRequestTicketFormRequestTicketFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestTicketFormComponent", function () {
      return RequestTicketFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/file-service.service */
    "./src/app/core/services/file-service.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var RequestTicketFormComponent =
    /*#__PURE__*/
    function () {
      function RequestTicketFormComponent(formBuilder, http, fileService, spinner) {
        _classCallCheck(this, RequestTicketFormComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.fileService = fileService;
        this.spinner = spinner;
        this.softwareTypes = [];
        this.hardwareTypes = [];
        this.serverTypes = [];
      }

      _createClass(RequestTicketFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ticketForm = this.formBuilder.group({
            ticketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ticketSubtypeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]),
            requestPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(254)]),
            problem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])
          });
        }
      }, {
        key: "sendTicketFormToAPI",
        value: function sendTicketFormToAPI() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'requests/ticket', this.ticketForm.value, {
            headers: headers
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this36 = this;

          if (this.ticketForm.invalid) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: "Naozaj chcetete odoslať ticket ? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Zrušiť",
            confirmButtonText: 'Ano'
          }).then(function (result) {
            if (result.value) {
              _this36.spinner.show();

              _this36.sendTicketFormToAPI().subscribe(function (id) {
                _this36.fileService.postFileForRequest(id, _this36.fileInput.files).subscribe(function (succ) {
                  _this36.ticketFormViewChild.resetForm();

                  _this36.spinner.hide();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    position: 'top-end',
                    text: 'Vaša požiadavka s id : ' + id + ". bola zaznamenaná.",
                    showConfirmButton: false,
                    timer: 1200
                  });
                }, function (err) {
                  return _this36.spinner.hide();
                });
              });
            }
          });
        }
      }, {
        key: "changeTicketType",
        value: function changeTicketType(value) {
          this.loadTicketSubtype(value);
          this.ticketForm.patchValue({
            'ticketSubtypeName': ''
          });
        }
      }, {
        key: "loadTicketSubtype",
        value: function loadTicketSubtype(value) {
          var _this37 = this;

          //let headers = new Headers().set('Content-Type', 'application/json');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ticketTypeName', value);

          if (value === 'Software' && this.softwareTypes.length === 0) {
            this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "requests/ticket/ticketSubtype", {
              params: params
            }).subscribe(function (ticketSubTypes) {
              return _this37.softwareTypes = ticketSubTypes;
            });
          } else if (value === 'Hardware' && this.hardwareTypes.length === 0) {
            this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "requests/ticket/ticketSubtype", {
              params: params
            }).subscribe(function (ticketSubTypes) {
              return _this37.hardwareTypes = ticketSubTypes;
            });
          } else if (value === 'Server' && this.serverTypes.length === 0) {
            this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "requests/ticket/ticketSubtype", {
              params: params
            }).subscribe(function (ticketSubTypes) {
              return _this37.serverTypes = ticketSubTypes;
            });
          }
        }
      }, {
        key: "ticketType",
        get: function get() {
          return this.ticketForm.get("ticketType");
        }
      }, {
        key: "ticketSubtypeName",
        get: function get() {
          return this.ticketForm.get("ticketSubtypeName");
        }
      }, {
        key: "requestPriority",
        get: function get() {
          return this.ticketForm.get("requestPriority");
        }
      }, {
        key: "name",
        get: function get() {
          return this.ticketForm.get("name");
        }
      }, {
        key: "problem",
        get: function get() {
          return this.ticketForm.get("problem");
        }
      }]);

      return RequestTicketFormComponent;
    }();

    RequestTicketFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: app_core_services_file_service_service__WEBPACK_IMPORTED_MODULE_6__["FileServiceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileUploader', {
      static: true
    })], RequestTicketFormComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ticketFormViewChild', {
      static: true
    })], RequestTicketFormComponent.prototype, "ticketFormViewChild", void 0);
    RequestTicketFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-ticket-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-ticket-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-ticket-form.component.scss */
      "./src/app/modules/request-forms/request-ticket-form/request-ticket-form.component.scss")).default]
    })], RequestTicketFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/unauthorized/unauthorized.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/unauthorized/unauthorized.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUnauthorizedUnauthorizedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 5px;\n  float: right;\n  position: relative;\n}\n\n#guardImg {\n  width: 850px;\n  height: 600px;\n  position: absolute;\n  right: 0;\n}\n\n#forbidden {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  height: 100px;\n  width: 100px;\n}\n\n.text {\n  margin-top: 150px;\n  margin-left: 50px;\n  font-size: 22px;\n  color: #ff6161;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91bmF1dGhvcml6ZWQvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcdW5hdXRob3JpemVkXFx1bmF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNndWFyZEltZ3tcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuXHJcbiNmb3JiaWRkZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZjYxNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsIiNjb250ZW50Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNndWFyZEltZyB7XG4gIHdpZHRoOiA4NTBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuI2ZvcmJpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmY2MTYxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/unauthorized/unauthorized.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/unauthorized/unauthorized.component.ts ***!
    \****************************************************************/

  /*! exports provided: UnauthorizedComponent */

  /***/
  function srcAppModulesUnauthorizedUnauthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function () {
      return UnauthorizedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnauthorizedComponent =
    /*#__PURE__*/
    function () {
      function UnauthorizedComponent() {
        _classCallCheck(this, UnauthorizedComponent);
      }

      _createClass(UnauthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnauthorizedComponent;
    }();

    UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unauthorized',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unauthorized.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/unauthorized/unauthorized.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unauthorized.component.scss */
      "./src/app/modules/unauthorized/unauthorized.component.scss")).default]
    })], UnauthorizedComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/group-details/group-details.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/user-profile/group-details/group-details.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfileGroupDetailsGroupDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\nmat-form-field {\n  margin-top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvZ3JvdXAtZGV0YWlscy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbUNzc1xcU2lkZVRhYmxlUHJpbnRTY3NzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL2dyb3VwLWRldGFpbHMvZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvZ3JvdXAtZGV0YWlscy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyLXByb2ZpbGVcXGdyb3VwLWRldGFpbHNcXGdyb3VwLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QUN2REE7RUFDSSxpQkFBQTtBRDBESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL2dyb3VwLWRldGFpbHMvZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BzcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zbWFsbGVyQ29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvcm1UaXRsZVNtYWxse1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojODE4MTgxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbiNkZXRhaWxUaXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtSW5mb3JtYXRpb25Db250YWluZXJTdWJjb250ZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnNDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvblRpdGxle1xyXG4gICAgZmxleDogMCAwIDE2NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnNIb2xkZXJ7XHJcbiAgICBjb2xvcjojNjc2NjY2O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcblxyXG4gIH1cclxudWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iLCIudG9wc3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc21hbGxlckNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtVGl0bGVTbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbiNkZXRhaWxUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5mb3JtSW5mb3JtYXRpb25Db250YWluZXJTdWJjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucmlnaHRDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5mb3JtYXRpb25zQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbmZvcm1hdGlvblRpdGxlIHtcbiAgZmxleDogMCAwIDE2NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm9ybWF0aW9uc0hvbGRlciB7XG4gIGNvbG9yOiAjNjc2NjY2O1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvY3VzdG9tQ3NzL1NpZGVUYWJsZVByaW50U2Nzcy5zY3NzXCI7XHJcblxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/group-details/group-details.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/user-profile/group-details/group-details.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: GroupDetailsComponent */

  /***/
  function srcAppModulesUserProfileGroupDetailsGroupDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function () {
      return GroupDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");

    var GroupDetailsComponent =
    /*#__PURE__*/
    function () {
      function GroupDetailsComponent(userService) {
        _classCallCheck(this, GroupDetailsComponent);

        this.userService = userService;
        this.editGroupActivated = false;
        this.allUsers$ = this.userService.getAllActiveUsers();
      }

      _createClass(GroupDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editGroup",
        value: function editGroup() {
          this.editGroupActivated = !this.editGroupActivated;
          this.copyGroup = Object.assign({}, this.group);
        }
      }, {
        key: "resetGroup",
        value: function resetGroup() {
          this.editGroupActivated = false;
          this.group = Object.assign({}, this.copyGroup);
        }
      }, {
        key: "compareUsersInSelect",
        value: function compareUsersInSelect(c1, c2) {
          return c1 && c2 ? c1.username === c2.username : c1 === c2;
        }
      }]);

      return GroupDetailsComponent;
    }();

    GroupDetailsComponent.ctorParameters = function () {
      return [{
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    GroupDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/group-details/group-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group-details.component.scss */
      "./src/app/modules/user-profile/group-details/group-details.component.scss")).default]
    })], GroupDetailsComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/privileges/privileges.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/user-profile/privileges/privileges.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfilePrivilegesPrivilegesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\n.coloredLi {\n  color: #21cd2c;\n}\n\n.enabledPriv {\n  cursor: pointer;\n}\n\n.enabledPriv:hover {\n  font-weight: bold;\n}\n\n.unableClick {\n  opacity: 0.5;\n  cursor: no-drop;\n}\n\n.ableClick {\n  opacity: 1;\n  cursor: pointer !important;\n}\n\n.ableClick:hover {\n  font-weight: bold;\n}\n\n.rightButton {\n  margin-right: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvcHJpdmlsZWdlcy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbUNzc1xcU2lkZVRhYmxlUHJpbnRTY3NzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3ByaXZpbGVnZXMvcHJpdmlsZWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvcHJpdmlsZWdlcy9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyLXByb2ZpbGVcXHByaXZpbGVnZXNcXHByaXZpbGVnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QUN4REE7RUFDSSxjQUFBO0FEMkRKOztBQ3hEQTtFQUNJLGVBQUE7QUQyREo7O0FDeERBO0VBQ0ksaUJBQUE7QUQyREo7O0FDeERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUQyREo7O0FDeERBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FEMkRKOztBQ3hEQTtFQUNJLGlCQUFBO0FEMkRKOztBQ3hEQTtFQUNJLG1CQUFBO0FEMkRKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvcHJpdmlsZWdlcy9wcml2aWxlZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNtYWxsZXJDb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybVRpdGxlU21hbGx7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiM4MTgxODE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuI2RldGFpbFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmZvcm1JbmZvcm1hdGlvbkNvbnRhaW5lclN1YmNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHRDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uc0NvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uVGl0bGV7XHJcbiAgICBmbGV4OiAwIDAgMTY1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uc0hvbGRlcntcclxuICAgIGNvbG9yOiM2NzY2NjY7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuXHJcbiAgfVxyXG51bHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSIsIi50b3BzcGFjZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zbWFsbGVyQ29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm1UaXRsZVNtYWxsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuI2RldGFpbFRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZvcm1JbmZvcm1hdGlvbkNvbnRhaW5lclN1YmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yaWdodENvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbmZvcm1hdGlvbnNDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmluZm9ybWF0aW9uVGl0bGUge1xuICBmbGV4OiAwIDAgMTY1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYXRpb25zSG9sZGVyIHtcbiAgY29sb3I6ICM2NzY2NjY7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxudWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jb2xvcmVkTGkge1xuICBjb2xvcjogIzIxY2QyYztcbn1cblxuLmVuYWJsZWRQcml2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW5hYmxlZFByaXY6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVuYWJsZUNsaWNrIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5hYmxlQ2xpY2sge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFibGVDbGljazpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHRCdXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvY3VzdG9tQ3NzL1NpZGVUYWJsZVByaW50U2Nzcy5zY3NzXCI7XHJcblxyXG4uY29sb3JlZExpe1xyXG4gICAgY29sb3I6ICMyMWNkMmM7XHJcbn1cclxuXHJcbi5lbmFibGVkUHJpdntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVuYWJsZWRQcml2OmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udW5hYmxlQ2xpY2t7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuXHJcbi5hYmxlQ2xpY2t7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWJsZUNsaWNrOmhvdmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yaWdodEJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/privileges/privileges.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/user-profile/privileges/privileges.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PrivilegesComponent */

  /***/
  function srcAppModulesUserProfilePrivilegesPrivilegesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivilegesComponent", function () {
      return PrivilegesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivilegesComponent =
    /*#__PURE__*/
    function () {
      function PrivilegesComponent() {
        _classCallCheck(this, PrivilegesComponent);

        this.applyGreenColor = false;
        this.activateUnableClick = false; // true if editing privileges

        this.hideUnassignedPriv = false; // true only want to print assigned privileges

        this.enabledPrivileges = {
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
        this.disabledPrivileges = {
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

      _createClass(PrivilegesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editGroup",
        value: function editGroup() {
          this.enabledPrivilegesCopy = JSON.parse(JSON.stringify(this.enabledPrivileges));
          this.disabledPrivilegesCopy = JSON.parse(JSON.stringify(this.disabledPrivileges));
          this.activateUnableClick = true;
          this.hideUnassignedPriv = false;
        }
      }, {
        key: "resetGroup",
        value: function resetGroup() {
          this.enabledPrivileges = JSON.parse(JSON.stringify(this.enabledPrivilegesCopy));
          this.disabledPrivileges = JSON.parse(JSON.stringify(this.disabledPrivilegesCopy));
          this.activateUnableClick = false;
          this.hideUnassignedPriv = true;
        }
      }, {
        key: "changeModuleTypeToUse",
        value: function changeModuleTypeToUse(name) {
          if (!this.activateUnableClick) {
            return;
          }

          if (this.enabledPrivileges.moduleTypesToUse.includes(name)) {
            var index = this.enabledPrivileges.moduleTypesToUse.indexOf(name);
            this.enabledPrivileges.moduleTypesToUse.splice(index, 1);
            this.disabledPrivileges.moduleTypesToUse.push(name);
          } else {
            var _index = this.disabledPrivileges.moduleTypesToUse.indexOf(name);

            this.disabledPrivileges.moduleTypesToUse.splice(_index, 1);
            this.enabledPrivileges.moduleTypesToUse.push(name);
          }

          if (name === 'Finance') {
            this.changesubmitFinanceRequestsAll();
          }
        }
      }, {
        key: "changeRequestTypeToSolve",
        value: function changeRequestTypeToSolve(name) {
          if (!this.activateUnableClick) {
            return;
          }

          if (this.enabledPrivileges.requestTypesToSolve.includes(name)) {
            var index = this.enabledPrivileges.requestTypesToSolve.indexOf(name);
            this.enabledPrivileges.requestTypesToSolve.splice(index, 1);
            this.disabledPrivileges.requestTypesToSolve.push(name);
          } else {
            var _index2 = this.disabledPrivileges.requestTypesToSolve.indexOf(name);

            this.disabledPrivileges.requestTypesToSolve.splice(_index2, 1);
            this.enabledPrivileges.requestTypesToSolve.push(name);
          }

          if (name === 'Ticket') {
            this.changeTicketsAll();
          }
        }
      }, {
        key: "changeTicketsAll",
        value: function changeTicketsAll() {
          if (!this.activateUnableClick) {
            return;
          }

          this.disabledPrivileges.solveTickets.Software = this.disabledPrivileges.solveTickets.Software.concat(this.enabledPrivileges.solveTickets.Software);
          this.enabledPrivileges.solveTickets.Software = null;
          this.disabledPrivileges.solveTickets.Hardware = this.disabledPrivileges.solveTickets.Hardware.concat(this.enabledPrivileges.solveTickets.Hardware);
          this.enabledPrivileges.solveTickets.Hardware = null;
          this.disabledPrivileges.solveTickets.Server = this.disabledPrivileges.solveTickets.Server.concat(this.enabledPrivileges.solveTickets.Server);
          this.enabledPrivileges.solveTickets.Server = null;
          this.enabledPrivileges.solveTickets.Other = [];
          this.disabledPrivileges.solveTickets.Other.push('True');
          this.enabledPrivileges.solveTickets.User = [];
          this.disabledPrivileges.solveTickets.User.push('True');
        }
      }, {
        key: "changesubmitFinanceRequests",
        value: function changesubmitFinanceRequests(name) {
          if (!this.activateUnableClick || !this.enabledPrivileges.moduleTypesToUse.includes("Finance")) {
            return;
          }

          if (this.enabledPrivileges.submitFinanceRequests.includes(name)) {
            var index = this.enabledPrivileges.submitFinanceRequests.indexOf(name);
            this.enabledPrivileges.submitFinanceRequests.splice(index, 1);
            this.disabledPrivileges.submitFinanceRequests.push(name);
          } else {
            var _index3 = this.disabledPrivileges.submitFinanceRequests.indexOf(name);

            this.disabledPrivileges.submitFinanceRequests.splice(_index3, 1);
            this.enabledPrivileges.submitFinanceRequests.push(name);
          }
        }
      }, {
        key: "changesubmitFinanceRequestsAll",
        value: function changesubmitFinanceRequestsAll() {
          if (!this.activateUnableClick) {
            return;
          }

          this.disabledPrivileges.submitFinanceRequests = this.disabledPrivileges.submitFinanceRequests.concat(this.enabledPrivileges.submitFinanceRequests);
          this.enabledPrivileges.submitFinanceRequests = [];
        }
      }, {
        key: "changeSolveTicketsSoftware",
        value: function changeSolveTicketsSoftware(name) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") || this.enabledPrivileges.solveTickets.Software === null) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Software.includes(name)) {
            var index = this.enabledPrivileges.solveTickets.Software.indexOf(name);
            this.enabledPrivileges.solveTickets.Software.splice(index, 1);
            this.disabledPrivileges.solveTickets.Software.push(name);
          } else {
            var _index4 = this.disabledPrivileges.solveTickets.Software.indexOf(name);

            this.disabledPrivileges.solveTickets.Software.splice(_index4, 1);
            this.enabledPrivileges.solveTickets.Software.push(name);
          }
        }
      }, {
        key: "changeSolveTicketsSoftwareAll",
        value: function changeSolveTicketsSoftwareAll(justClear) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Software !== null || justClear) {
            this.disabledPrivileges.solveTickets.Software = this.disabledPrivileges.solveTickets.Software.concat(this.enabledPrivileges.solveTickets.Software);
            this.enabledPrivileges.solveTickets.Software = null;
          } else {
            this.enabledPrivileges.solveTickets.Software = [];
          }
        }
      }, {
        key: "changeSolveTicketsHardware",
        value: function changeSolveTicketsHardware(name) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") || this.enabledPrivileges.solveTickets.Hardware === null) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Hardware.includes(name)) {
            var index = this.enabledPrivileges.solveTickets.Hardware.indexOf(name);
            this.enabledPrivileges.solveTickets.Hardware.splice(index, 1);
            this.disabledPrivileges.solveTickets.Hardware.push(name);
          } else {
            var _index5 = this.disabledPrivileges.solveTickets.Hardware.indexOf(name);

            this.disabledPrivileges.solveTickets.Hardware.splice(_index5, 1);
            this.enabledPrivileges.solveTickets.Hardware.push(name);
          }
        }
      }, {
        key: "changeSolveTicketsHardwareAll",
        value: function changeSolveTicketsHardwareAll(justClear) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Hardware !== null || justClear) {
            this.disabledPrivileges.solveTickets.Hardware = this.disabledPrivileges.solveTickets.Hardware.concat(this.enabledPrivileges.solveTickets.Hardware);
            this.enabledPrivileges.solveTickets.Hardware = null;
          } else {
            this.enabledPrivileges.solveTickets.Hardware = [];
          }
        }
      }, {
        key: "changeSolveTicketsServer",
        value: function changeSolveTicketsServer(name) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") || this.enabledPrivileges.solveTickets.Server === null) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Server.includes(name)) {
            var index = this.enabledPrivileges.solveTickets.Server.indexOf(name);
            this.enabledPrivileges.solveTickets.Server.splice(index, 1);
            this.disabledPrivileges.solveTickets.Server.push(name);
          } else {
            var _index6 = this.disabledPrivileges.solveTickets.Server.indexOf(name);

            this.disabledPrivileges.solveTickets.Server.splice(_index6, 1);
            this.enabledPrivileges.solveTickets.Server.push(name);
          }
        }
      }, {
        key: "changeSolveTicketsServerAll",
        value: function changeSolveTicketsServerAll(justClear) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Server !== null || justClear) {
            this.disabledPrivileges.solveTickets.Server = this.disabledPrivileges.solveTickets.Server.concat(this.enabledPrivileges.solveTickets.Server);
            this.enabledPrivileges.solveTickets.Server = null;
          } else {
            this.enabledPrivileges.solveTickets.Server = [];
          }
        }
      }, {
        key: "changeSolveTicketsUserAll",
        value: function changeSolveTicketsUserAll(justClear) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.User.length > 0 || justClear) {
            this.enabledPrivileges.solveTickets.User = [];
            this.disabledPrivileges.solveTickets.User.push('True');
          } else {
            this.disabledPrivileges.solveTickets.User = [];
            this.enabledPrivileges.solveTickets.User.push('True');
          }
        }
      }, {
        key: "changeSolveTicketsOtherAll",
        value: function changeSolveTicketsOtherAll(justClear) {
          if (!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")) {
            return;
          }

          if (this.enabledPrivileges.solveTickets.Other.length > 0 || justClear) {
            this.enabledPrivileges.solveTickets.Other = [];
            this.disabledPrivileges.solveTickets.Other.push('True');
          } else {
            this.disabledPrivileges.solveTickets.Other = [];
            this.enabledPrivileges.solveTickets.Other.push('True');
          }
        }
      }]);

      return PrivilegesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PrivilegesComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PrivilegesComponent.prototype, "applyGreenColor", void 0);
    PrivilegesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privileges',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privileges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/privileges/privileges.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privileges.component.scss */
      "./src/app/modules/user-profile/privileges/privileges.component.scss")).default]
    })], PrivilegesComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-details/user-details.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-details/user-details.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfileUserDetailsUserDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\n.passwordChange {\n  cursor: pointer;\n  color: #4d72f9;\n}\n\n.passwordChange:hover {\n  font-weight: bold;\n}\n\n.avatar {\n  width: 120px;\n  margin-left: -25px;\n  margin-top: -10px;\n}\n\n.avatarReactive {\n  cursor: pointer;\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n.avatarReactive:hover {\n  -webkit-transform: scale(1.15);\n          transform: scale(1.15);\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n\n/*\n.informationAnswer{\n    margin-top: -2px;\n}\n\n.userInformationsContainer{\n    margin-top:8px;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1kZXRhaWxzL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9tQ3NzXFxTaWRlVGFibGVQcmludFNjc3Muc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1kZXRhaWxzL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXItcHJvZmlsZVxcdXNlci1kZXRhaWxzXFx1c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QUN4REE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBRDJESjs7QUN4REE7RUFDSSxpQkFBQTtBRDJESjs7QUN4REE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRDJESjs7QUN4REE7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFHQSx5QkFBQTtBRDJESjs7QUN6REk7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUNBQUE7RUFHQSx5QkFBQTtBRDJEUjs7QUN0REE7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wc3BhY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc21hbGxlckNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb3JtVGl0bGVTbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzgxODE4MTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG4uaWNvbntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4jZGV0YWlsVGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZm9ybUluZm9ybWF0aW9uQ29udGFpbmVyU3ViY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yaWdodENvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25zQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25UaXRsZXtcclxuICAgIGZsZXg6IDAgMCAxNjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25zSG9sZGVye1xyXG4gICAgY29sb3I6IzY3NjY2NjtcclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG5cclxuICB9XHJcbnVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59IiwiLnRvcHNwYWNlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNtYWxsZXJDb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybVRpdGxlU21hbGwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgxODE4MTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4jZGV0YWlsVGl0bGUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZm9ybUluZm9ybWF0aW9uQ29udGFpbmVyU3ViY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJpZ2h0Q29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmluZm9ybWF0aW9uc0NvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5mb3JtYXRpb25UaXRsZSB7XG4gIGZsZXg6IDAgMCAxNjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbmZvcm1hdGlvbnNIb2xkZXIge1xuICBjb2xvcjogIzY3NjY2Njtcbn1cblxubGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG51bCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnBhc3N3b3JkQ2hhbmdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzRkNzJmOTtcbn1cblxuLnBhc3N3b3JkQ2hhbmdlOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5hdmF0YXJSZWFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG59XG4uYXZhdGFyUmVhY3RpdmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbn1cblxuLypcbi5pbmZvcm1hdGlvbkFuc3dlcntcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4udXNlckluZm9ybWF0aW9uc0NvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOjhweDtcbn0qLyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvY3VzdG9tQ3NzL1NpZGVUYWJsZVByaW50U2Nzcy5zY3NzXCI7XHJcblxyXG4ucGFzc3dvcmRDaGFuZ2V7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzRkNzJmOTtcclxufVxyXG5cclxuLnBhc3N3b3JkQ2hhbmdlOmhvdmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmF2YXRhclJlYWN0aXZle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8qXHJcbi5pbmZvcm1hdGlvbkFuc3dlcntcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi51c2VySW5mb3JtYXRpb25zQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-details/user-details.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-details/user-details.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppModulesUserProfileUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var UserDetailsComponent =
    /*#__PURE__*/
    function () {
      function UserDetailsComponent(http, spinner) {
        _classCallCheck(this, UserDetailsComponent);

        this.http = http;
        this.spinner = spinner;
        this.addImageClick = false;
        this.showPasswordChange = false;
        this.changeWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeFrames",
        value: function changeFrames() {
          this.changeWindow.emit(true);
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _ref2, formValues;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                      title: 'Zmena hesla',
                      html: '<label for="old_pwd">Staré heslo</label> <input id="old_pwd" type = "password" class="swal2-input">' + '<label for="new_pwd1">nové heslo</label><input id="new_pwd1" type = "password"  class="swal2-input">' + '<label for="new_pwd2">nové heslo znovu</label><input id="new_pwd2" type = "password"  class="swal2-input">',
                      focusConfirm: false,
                      preConfirm: function preConfirm() {
                        return [document.getElementById('old_pwd').value, document.getElementById('new_pwd1').value, document.getElementById('new_pwd2').value];
                      }
                    });

                  case 2:
                    _ref2 = _context2.sent;
                    formValues = _ref2.value;

                    if (formValues) {
                      this.sendPasswordToAPI(this.convertFormValuesToPasswordContainer(formValues));
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "convertFormValuesToPasswordContainer",
        value: function convertFormValuesToPasswordContainer(formValues) {
          var passwordContainer = {
            oldPassword: formValues[0],
            newPassword1: formValues[1],
            newPassword2: formValues[2]
          };
          return passwordContainer;
        }
      }, {
        key: "sendPasswordToAPI",
        value: function sendPasswordToAPI(password) {
          var _this38 = this;

          if (password.newPassword1 !== password.newPassword2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Heslá sa nezhodujú',
              text: 'Požiadavka o zmenu hesla nebola odoslaná',
              icon: 'error'
            });
          } else if (password.newPassword1.length < 6 || password.newPassword2.length < 6) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Heslo príliž krátke',
              text: 'Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.',
              icon: 'error'
            });
          } else {
            this.spinner.show();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
            this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "user/changePassword", password, {
              headers: headers
            }).subscribe(function (result) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'top-end',
                title: 'Heslo bolo zmenené',
                showConfirmButton: false,
                timer: 1500
              });
            }, function () {
              return _this38.spinner.hide();
            });
          }
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserDetailsComponent.prototype, "addImageClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserDetailsComponent.prototype, "showPasswordChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserDetailsComponent.prototype, "displayedUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserDetailsComponent.prototype, "changeWindow", void 0);
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-details/user-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details.component.scss */
      "./src/app/modules/user-profile/user-details/user-details.component.scss")).default]
    })], UserDetailsComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-groups/user-groups.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-groups/user-groups.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfileUserGroupsUserGroupsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topspace {\n  margin-top: 15px;\n}\n\n.smallerContent {\n  font-size: 14px;\n}\n\n.formTitleSmall {\n  font-size: 19px;\n  font-weight: bold;\n  color: #818181;\n  position: relative;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  margin-top: -8px;\n}\n\n#detailTitle {\n  margin-left: 5px;\n}\n\n.formInformationContainerSubcontent {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.rightContainer {\n  margin-left: 15px;\n  position: relative;\n}\n\n.informationsContainer {\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.informationTitle {\n  -webkit-box-flex: 0;\n          flex: 0 0 165px;\n  font-weight: bold;\n}\n\n.informationsHolder {\n  color: #676666;\n}\n\nli {\n  display: -webkit-box;\n  display: flex;\n  word-break: break-word;\n  min-width: 150px;\n}\n\nul {\n  margin-bottom: 0px;\n}\n\n.elevation {\n  cursor: pointer;\n  padding: 2px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: #4d72f9;\n}\n\n.elevation:hover {\n  color: #8a8a8a;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 3px rgba(119, 119, 119, 0.75);\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1ncm91cHMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXFNpZGVUYWJsZVByaW50U2Nzcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3VzZXItcHJvZmlsZS91c2VyLWdyb3Vwcy91c2VyLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1ncm91cHMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXEVsZXZhdGlvbkJ1dHRvblNjc3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBQzFEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7QUQ2REo7O0FDMURBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUdBLHFEQUFBO0VBRUMsaUNBQUE7RUFHRCx5QkFBQTtBRDRESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItZ3JvdXBzL3VzZXItZ3JvdXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNtYWxsZXJDb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybVRpdGxlU21hbGx7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiM4MTgxODE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuI2RldGFpbFRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmZvcm1JbmZvcm1hdGlvbkNvbnRhaW5lclN1YmNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHRDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uc0NvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uVGl0bGV7XHJcbiAgICBmbGV4OiAwIDAgMTY1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uc0hvbGRlcntcclxuICAgIGNvbG9yOiM2NzY2NjY7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuXHJcbiAgfVxyXG51bHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSIsIi50b3BzcGFjZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zbWFsbGVyQ29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm1UaXRsZVNtYWxsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuI2RldGFpbFRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZvcm1JbmZvcm1hdGlvbkNvbnRhaW5lclN1YmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yaWdodENvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbmZvcm1hdGlvbnNDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmluZm9ybWF0aW9uVGl0bGUge1xuICBmbGV4OiAwIDAgMTY1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYXRpb25zSG9sZGVyIHtcbiAgY29sb3I6ICM2NzY2NjY7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxudWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5lbGV2YXRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY29sb3I6ICM0ZDcyZjk7XG59XG5cbi5lbGV2YXRpb246aG92ZXIge1xuICBjb2xvcjogIzhhOGE4YTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDJweCAzcHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAzcHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufSIsIi5lbGV2YXRpb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGNvbG9yOiAjNGQ3MmY5O1xyXG59XHJcblxyXG4uZWxldmF0aW9uOmhvdmVyeyAgICBcclxuICAgIGNvbG9yOiM4YThhOGE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDNweCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggM3B4IHJnYmEoMTE5LCAxMTksIDExOSwgMC43NSk7XHJcblxyXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAgMC40cyBlYXNlLW91dDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-groups/user-groups.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-groups/user-groups.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UserGroupsComponent */

  /***/
  function srcAppModulesUserProfileUserGroupsUserGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGroupsComponent", function () {
      return UserGroupsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/group.service */
    "./src/app/core/services/group.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserGroupsComponent =
    /*#__PURE__*/
    function () {
      function UserGroupsComponent(groupService) {
        _classCallCheck(this, UserGroupsComponent);

        this.groupService = groupService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedGroupEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elevationActivated = false;
      }

      _createClass(UserGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "getGroupDetails",
        value: function getGroupDetails(groupName) {
          var _this39 = this;

          if (!this.elevationActivated) {
            return;
          }

          this.groupService.getGroupDetails(groupName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (group) {
            _this39.selectedGroupEmmiter.emit(group);
          });
        }
      }]);

      return UserGroupsComponent;
    }();

    UserGroupsComponent.ctorParameters = function () {
      return [{
        type: app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserGroupsComponent.prototype, "selectedGroupEmmiter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserGroupsComponent.prototype, "groupContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserGroupsComponent.prototype, "elevationActivated", void 0);
    UserGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-groups',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-groups.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-groups/user-groups.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-groups.component.scss */
      "./src/app/modules/user-profile/user-groups/user-groups.component.scss")).default]
    })], UserGroupsComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-images/user-images.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-images/user-images.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfileUserImagesUserImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  display: block;\n}\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 29px;\n  border: 1px solid #888;\n  width: 80%;\n  display: flow-root;\n}\n/* The Close Button */\n.close {\n  color: #ff5252;\n  font-size: 39px;\n  font-weight: bold;\n  position: absolute;\n  right: 10px;\n  top: 0px;\n  opacity: 1;\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s ease-out;\n}\n.close:hover {\n  -webkit-transform: scale(1.35);\n          transform: scale(1.35);\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s ease-out;\n}\n.close:hover,\n.close:focus {\n  color: #ff0000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.icon {\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n}\n.imageContent {\n  padding: 5px;\n  margin: 5px;\n  display: inline-block;\n  -webkit-transition: 0.8s;\n  transition: 0.8s;\n  -webkit-transition: 0.8s ease-out;\n  transition: 0.8s ease-out;\n}\n.imageContent:hover {\n  -webkit-transform: scale(1.35);\n          transform: scale(1.35);\n  -webkit-transition: 0.8s ease-out;\n  transition: 0.8s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1pbWFnZXMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21Dc3NcXE1vZGFsU2Nzcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3VzZXItcHJvZmlsZS91c2VyLWltYWdlcy91c2VyLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1pbWFnZXMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcdXNlci1wcm9maWxlXFx1c2VyLWltYWdlc1xcdXNlci1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQUE7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixrQkFBQTtFQUFvQix3QkFBQTtFQUNwQixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtFQUE4QixtQkFBQTtFQUM5QixvQ0FBQTtFQUFtQyxxQkFBQTtFQUNuQyxjQUFBO0FDVUo7QURQRSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDVUo7QURQRSxxQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7RUFHQSx5QkFBQTtBQ1NKO0FEUEk7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUNBQUE7RUFHQSx5QkFBQTtBQ1NSO0FETEU7O0VBRUUsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1FKO0FDNURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEK0RKO0FDM0RFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSxpQ0FBQTtFQUdBLHlCQUFBO0FENkRKO0FDM0RJO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGlDQUFBO0VBR0EseUJBQUE7QUQ2RFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItcHJvZmlsZS91c2VyLWltYWdlcy91c2VyLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDI5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgMC4zcyBlYXNlLW91dDtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246ICAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIiwiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICNmZjUyNTI7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMHB4O1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi5jbG9zZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2VDb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjhzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuOHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbn1cbi5pbWFnZUNvbnRlbnQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMzUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuOHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogMC44cyBlYXNlLW91dDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL2N1c3RvbUNzcy9Nb2RhbFNjc3Muc2Nzc1wiO1xyXG5cclxuICAuaWNvbntcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuaW1hZ2VDb250ZW50e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICAwLjhzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogIDAuOHMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAgMC44cyBlYXNlLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMzUpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAgMC44cyBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAgMC44cyBlYXNlLW91dDtcclxuICAgIH1cclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-images/user-images.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/user-profile/user-images/user-images.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UserImagesComponent */

  /***/
  function srcAppModulesUserProfileUserImagesUserImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserImagesComponent", function () {
      return UserImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");

    var UserImagesComponent =
    /*#__PURE__*/
    function () {
      function UserImagesComponent(http, spinner, userService) {
        _classCallCheck(this, UserImagesComponent);

        this.http = http;
        this.spinner = spinner;
        this.userService = userService;
        this.changeWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.images = [];
      }

      _createClass(UserImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAvailableAvatars();
        }
      }, {
        key: "closeWindow",
        value: function closeWindow() {
          this.changeWindow.emit(false);
        }
      }, {
        key: "loadAvailableAvatars",
        value: function loadAvailableAvatars() {
          var _this40 = this;

          this.spinner.show();
          this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "user/getImages").subscribe(function (images) {
            _this40.images = images;

            _this40.spinner.hide();
          });
        }
      }, {
        key: "changeImage",
        value: function changeImage(image) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('imageToUpdate', image.name);
          return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "user/changeImage", null, {
            params: params
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(imageDTO) {
          var _this41 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Potvrďte zmenu obrázku",
            html: "<img src='data:image/jpeg;base64, " + imageDTO.imageBytes + "' style='width:350px' />",
            imageHeight: 500,
            imageAlt: 'A tall image',
            showConfirmButton: true,
            confirmButtonText: "Potvrdiť"
          }).then(function (result) {
            if (result.value === true) {
              _this41.spinner.show();

              _this41.changeImage(imageDTO).subscribe(function (res) {
                _this41.userService.changeUserImage(imageDTO);

                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  position: 'top-end',
                  title: 'Váš obrázok bol zmenený',
                  showConfirmButton: false,
                  timer: 1500
                });
              });
            }
          }).finally(function () {
            return _this41.spinner.hide();
          });
        }
      }]);

      return UserImagesComponent;
    }();

    UserImagesComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserImagesComponent.prototype, "changeWindow", void 0);
    UserImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-images/user-images.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-images.component.scss */
      "./src/app/modules/user-profile/user-images/user-images.component.scss")).default]
    })], UserImagesComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-profile.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/user-profile/user-profile.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#contentContainer {\n  height: 100%;\n  width: calc(100% - 85px);\n  padding: 15px 35px;\n  float: right;\n  font-size: 14px;\n}\n\n.windowLeft {\n  width: 37%;\n  float: left;\n}\n\n#userInforContainer {\n  margin-left: 3%;\n}\n\n@media (min-width: 1919px) {\n  .windowLeft {\n    width: 32%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FES0E7RUFDSTtJQUNJLFVBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4ud2luZG93TGVmdHtcclxuICAgIHdpZHRoOiAzNyU7XHJcbiAgICBmbG9hdDogbGVmdDsgIFxyXG59XHJcblxyXG5cclxuI3VzZXJJbmZvckNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTkxOXB4KSB7XHJcbiAgICAud2luZG93TGVmdHtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiI2NvbnRlbnRDb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgcGFkZGluZzogMTVweCAzNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndpbmRvd0xlZnQge1xuICB3aWR0aDogMzclO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI3VzZXJJbmZvckNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xuICAud2luZG93TGVmdCB7XG4gICAgd2lkdGg6IDMyJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppModulesUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/group.service */
    "./src/app/core/services/group.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(authService, userService, groupService) {
        _classCallCheck(this, UserProfileComponent);

        this.authService = authService;
        this.userService = userService;
        this.groupService = groupService;
        this.displayAvatarts = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this42 = this;

          setTimeout(function () {
            _this42.initUserPrivileges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "initUserPrivileges",
        value: function initUserPrivileges() {
          var _this43 = this;

          this.authService.getDecodedToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (token) {
            var priv = {
              moduleTypesToUse: token.MODULE_TYPES_TO_USE,
              requestTypesToSolve: token.REQUEST_TYPE_TO_SOLVE,
              submitFinanceRequests: token.FINANCE_TYPE_TO_SUBMIT,
              solveTickets: {
                Software: token.TICKET_SOFTWARE_PRIVILEGES,
                Hardware: token.TICKET_HARDWARE_PRIVILEGES,
                Server: token.TICKET_SERVER_PRIVILEGES,
                User: token.TICKET_USER_PRIVILEGES,
                Other: token.TICKET_OTHER_PRIVILEGES
              }
            };
            _this43.userPrivileges.enabledPrivileges = priv;
          });
          this.groupContainer = this.groupService.getAllGroupContainersForUser();
        }
      }, {
        key: "initGroupPrivileges",
        value: function initGroupPrivileges(group) {
          this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
          this.groupPrivileges.name = 'Skupiny';
          this.groupDetails.group = group;
        }
      }, {
        key: "changeFrames",
        value: function changeFrames(change) {
          this.displayAvatarts = change;
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: app_core_services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userDetials', {
      static: false
    })], UserProfileComponent.prototype, "userDetials", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userPrivileges', {
      static: false
    })], UserProfileComponent.prototype, "userPrivileges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupPrivileges', {
      static: false
    })], UserProfileComponent.prototype, "groupPrivileges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupDetails', {
      static: false
    })], UserProfileComponent.prototype, "groupDetails", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.scss */
      "./src/app/modules/user-profile/user-profile.component.scss")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/chart/chart.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/chart/chart.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsChartChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/chart/chart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/chart/chart.component.ts ***!
    \************************************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppSharedComponentsChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent() {
        _classCallCheck(this, ChartComponent);
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartComponent;
    }();

    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart.component.scss */
      "./src/app/shared/components/chart/chart.component.scss")).default]
    })], ChartComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/dot-loader/dot-loader.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/dot-loader/dot-loader.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDotLoaderDotLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".multi-spinner-container {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  margin: 30px auto;\n  overflow: hidden;\n}\n\n.multi-spinner {\n  position: absolute;\n  width: calc(100% - 9.9px);\n  height: calc(100% - 9.9px);\n  border: 6px solid transparent;\n  border-top-color: #ff5722;\n  border-radius: 50%;\n  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.dot-content {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZG90LWxvYWRlci9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRvdC1sb2FkZXJcXGRvdC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RvdC1sb2FkZXIvZG90LWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUNBLGdFQUFBO0FDQUo7O0FESUU7RUFDSTtJQUNJLCtCQUFBO0lBQ0MsdUJBQUE7RUNEVDtFREdJO0lBQ0ksaUNBQUE7SUFDQSx5QkFBQTtFQ0RSO0FBQ0Y7O0FES0U7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsdUJBQUE7RUNIUjtFREtJO0lBQ0ksaUNBQUE7SUFDQSx5QkFBQTtFQ0hSO0FBQ0Y7O0FET0E7RUFDSSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZG90LWxvYWRlci9kb3QtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgXHJcbi5tdWx0aS1zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubXVsdGktc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOS45cHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5LjlweCk7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZjU3MjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA1cyBjdWJpYy1iZXppZXIoMC4xNywgMC40OSwgMC45NiwgMC43NikgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNDksIDAuOTYsIDAuNzYpIGluZmluaXRlO1xyXG4gIH0gICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICB0byB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRvIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4uZG90LWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iLCIubXVsdGktc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tdWx0aS1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gOS45cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkuOXB4KTtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZjU3MjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNDksIDAuOTYsIDAuNzYpIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNDksIDAuOTYsIDAuNzYpIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmRvdC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/dot-loader/dot-loader.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/dot-loader/dot-loader.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DotLoaderComponent */

  /***/
  function srcAppSharedComponentsDotLoaderDotLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DotLoaderComponent", function () {
      return DotLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DotLoaderComponent =
    /*#__PURE__*/
    function () {
      function DotLoaderComponent() {
        _classCallCheck(this, DotLoaderComponent);
      }

      _createClass(DotLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DotLoaderComponent;
    }();

    DotLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dot-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dot-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dot-loader/dot-loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dot-loader.component.scss */
      "./src/app/shared/components/dot-loader/dot-loader.component.scss")).default]
    })], DotLoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/file-upload/file-upload.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/file-upload/file-upload.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFileUploadFileUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploadfilecontainer {\n  background-image: url('cloud_icon.png');\n  background-repeat: no-repeat;\n  background-size: 40px;\n  background-position: center;\n  min-height: 40px;\n  width: 100%;\n  /*margin: 20px auto;*/\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer:hover {\n  cursor: pointer;\n  background-color: #9ecbec !important;\n  opacity: 0.8;\n}\n\n.files-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  margin: 10px auto;\n  background: #ffffff;\n  border: 1px dashed;\n  border-radius: 12px;\n  padding: 5px;\n  color: #1c8adb;\n}\n\n.files-list .delete-file {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.files-list .delete-file img {\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmaWxlLXVwbG9hZFxcZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkZmlsZWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzX2Rlc2lnbi9jbG91ZF9pY29uLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKm1hcmdpbjogMjBweCBhdXRvOyovXHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICMxQzhBREI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVwbG9hZGZpbGVjb250YWluZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjYmVjICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogIzFjOGFkYjtcclxufVxyXG5cclxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5maWxlcy1saXN0IC5kZWxldGUtZmlsZSBpbWd7XHJcbiAgd2lkdGg6MzBweDtcclxufSIsIi51cGxvYWRmaWxlY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlc19kZXNpZ24vY2xvdWRfaWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyptYXJnaW46IDIwcHggYXV0bzsqL1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzFDOEFEQjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnVwbG9hZGZpbGVjb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWNiZWMgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZmlsZXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzFjOGFkYjtcbn1cblxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/file-upload/file-upload.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/file-upload/file-upload.component.ts ***!
    \************************************************************************/

  /*! exports provided: FileUploadComponent */

  /***/
  function srcAppSharedComponentsFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FileUploadComponent =
    /*#__PURE__*/
    function () {
      function FileUploadComponent() {
        _classCallCheck(this, FileUploadComponent);

        this.fileInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideIt = false;
        this.files = [];
      }

      _createClass(FileUploadComponent, [{
        key: "uploadFile",
        value: function uploadFile(files) {
          this.files.push(files.item(0));
          this.fileInserted.emit(files.item(0));
        }
      }, {
        key: "deleteAttachment",
        value: function deleteAttachment(index) {
          this.files.splice(index, 1);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this.files.length === 0;
        }
      }]);

      return FileUploadComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FileUploadComponent.prototype, "fileInserted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FileUploadComponent.prototype, "uploaderHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FileUploadComponent.prototype, "requiredUpload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FileUploadComponent.prototype, "hideIt", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-file-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./file-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-upload/file-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./file-upload.component.scss */
      "./src/app/shared/components/file-upload/file-upload.component.scss")).default]
    })], FileUploadComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n#headerBackground {\n  height: 40px;\n  position: relative;\n  background-color: #F3F3F4;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n#headerContainer {\n  float: right;\n  width: calc(100% - 85px);\n  height: 40px;\n  position: relative;\n}\n#headerTitle {\n  float: left;\n  margin-left: 10px;\n  margin-top: 6px;\n  font-size: 20px;\n}\n#headerLogout {\n  float: right;\n  margin-right: 25px;\n  margin-top: 6px;\n}\n.userIcon {\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n  margin-top: -5px;\n}\n.example_f span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.example_f span:after {\n  content: \"»\";\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.example_f:hover span {\n  padding-right: 25px;\n}\n.example_f:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcRWR1YXJkXFxEZXNrdG9wXFxwcm9qZWt0eVxcU2ltcGxlZGVza1xcU2ltcGxlZGVza18yXFxDbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEQ0o7QUNDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNFRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRENKO0FDQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FERUo7QUNBRTtFQUNFLG1CQUFBO0FER0o7QUNERTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FESUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2hlYWRlckJhY2tncm91bmQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGNDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jaGVhZGVyQ29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jaGVhZGVyVGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jaGVhZGVyTG9nb3V0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnVzZXJJY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5leGFtcGxlX2Ygc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5leGFtcGxlX2Ygc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiwrtcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmV4YW1wbGVfZjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmV4YW1wbGVfZjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59IiwiXHJcbiNoZWFkZXJCYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGNDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNoZWFkZXJDb250YWluZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNoZWFkZXJUaXRsZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jaGVhZGVyTG9nb3V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbn1cclxuXHJcbi51c2VySWNvbntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5leGFtcGxlX2Ygc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIH1cclxuICAuZXhhbXBsZV9mIHNwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmV4YW1wbGVfZjpob3ZlciBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlX2Y6aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/core/services/request-modification.service */
    "./src/app/core/services/request-modification.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService, router, userService, requestService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.requestService = requestService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.userService.removeUserFromLocalStorage();
          this.requestService.removeRequestDetails();
          this.router.navigateByUrl("/login");
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: app_core_services_request_modification_service__WEBPACK_IMPORTED_MODULE_5__["RequestModificationService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/navigation/navigation.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/navigation/navigation.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#navigationBackground {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n  width: 80px;\n  position: fixed;\n  height: 100%;\n  /* min-height: 90%;\n   height:auto;*/\n}\n\n.navigationIconContainer {\n  margin-left: 6px;\n  margin-bottom: 60px;\n  cursor: pointer;\n  width: 70px;\n  padding: 3px 8px;\n  border-radius: 20px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n#navigationContainer {\n  display: inline-grid;\n}\n\n/* navigaiton icons */\n\n.navigationIcon {\n  -webkit-transition: All 0.55s ease-out;\n  transition: All 0.55s ease-out;\n  position: fixed;\n}\n\n.navigationIcon:hover {\n  -webkit-transform: scale(1.35);\n          transform: scale(1.35);\n}\n\n#dashboardIcon {\n  width: 40px;\n  height: 40px;\n  margin-left: 2px;\n}\n\n#requestNewIcon {\n  width: 45px;\n  height: 45px;\n  margin-left: 0px;\n}\n\n#requestClosedIcon {\n  width: 40px;\n  height: 40px;\n  margin-left: 5px;\n}\n\n#userProfileIcon {\n  width: 45px;\n  height: 45px;\n  margin-left: 2px;\n}\n\n#appManagementIcon {\n  width: 45px;\n  height: 45px;\n  margin-left: 2px;\n}\n\n::ng-deep .custom-tooltip {\n  background-color: #818181;\n  font-size: 16px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0Q7Z0JBQUE7QUNESDs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDRko7O0FETUE7RUFDSSxvQkFBQTtBQ0hKOztBRE9BLHFCQUFBOztBQUVBO0VBQ0ksc0NBQUE7RUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNMSjs7QURNRztFQUNLLDhCQUFBO1VBQUEsc0JBQUE7QUNKUjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI25hdmlnYXRpb25CYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgLyogbWluLWhlaWdodDogOTAlO1xyXG4gICAgaGVpZ2h0OmF1dG87Ki9cclxufVxyXG5cclxuLm5hdmlnYXRpb25JY29uQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHBhZGRpbmc6IDNweCA4cHggO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG59XHJcblxyXG4jbmF2aWdhdGlvbkNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG5cclxufVxyXG5cclxuLyogbmF2aWdhaXRvbiBpY29ucyAqLyBcclxuXHJcbi5uYXZpZ2F0aW9uSWNvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBBbGwgMC41NXMgZWFzZS1vdXQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI2Rhc2hib2FyZEljb257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjJweDtcclxufVxyXG5cclxuI3JlcXVlc3ROZXdJY29ue1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4jcmVxdWVzdENsb3NlZEljb257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiN1c2VyUHJvZmlsZUljb257XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbiNhcHBNYW5hZ2VtZW50SWNvbntcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS10b29sdGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfSIsIiNuYXZpZ2F0aW9uQmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogbWluLWhlaWdodDogOTAlO1xuICAgaGVpZ2h0OmF1dG87Ki9cbn1cblxuLm5hdmlnYXRpb25JY29uQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbiNuYXZpZ2F0aW9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG59XG5cbi8qIG5hdmlnYWl0b24gaWNvbnMgKi9cbi5uYXZpZ2F0aW9uSWNvbiB7XG4gIHRyYW5zaXRpb246IEFsbCAwLjU1cyBlYXNlLW91dDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLm5hdmlnYXRpb25JY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcbn1cblxuI2Rhc2hib2FyZEljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4jcmVxdWVzdE5ld0ljb24ge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4jcmVxdWVzdENsb3NlZEljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jdXNlclByb2ZpbGVJY29uIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuI2FwcE1hbmFnZW1lbnRJY29uIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuOjpuZy1kZWVwIC5jdXN0b20tdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/navigation/navigation.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/navigation/navigation.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent(authService) {
        _classCallCheck(this, NavigationComponent);

        this.authService = authService;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
          this.isAdmin$ = this.authService.isAdmin();
          this.isGhost$ = this.authService.isGhost();
          this.hasFinanceModuleAccess$ = this.authService.hasFinanceModuleAccess();
          this.hasTicketModuleAccess$ = this.authService.hasTicketModuleAccess();
          this.hasReportModuleAccess$ = this.authService.hasReportModuleAccess();
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/shared/components/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/request-filter/request-filter.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/request-filter/request-filter.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsRequestFilterRequestFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.fontChange {\n  color: #606060;\n  font-weight: lighter;\n}\n.filterContainer {\n  position: relative;\n  display: inline-grid;\n  margin-right: 20px;\n}\n.filterOptions {\n  margin-left: 15px;\n}\nform {\n  display: contents;\n}\n.formdeleteButton {\n  height: 16px;\n  width: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVxdWVzdC1maWx0ZXIvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9ub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVxdWVzdC1maWx0ZXIvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxyZXF1ZXN0LWZpbHRlclxccmVxdWVzdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlcXVlc3QtZmlsdGVyL3JlcXVlc3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTAxQ0Esa0NBQUE7QUE2aURBLDJDQUFBO0FBd0NBLHFCQUFBO0FDNzZGQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0UsaUJBQUE7QUNFRjtBRENBO0VBQ0ksaUJBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yZXF1ZXN0LWZpbHRlci9yZXF1ZXN0LWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vXG4vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG4vLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZXMgaGVyZSBjb21lIGZyb21cbi8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogICAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAkZGlzcGxheS00OiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTEycHgsIDExMnB4LCAzMDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDVlbSksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDJlbSksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW0pLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjgzKSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC42NyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAubWF0LWRpc3BsYXktNCwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS00IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS00KTtcbiAgICBtYXJnaW46IDAgMCA1NnB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTMsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0yLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTIpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbiAgLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAvLyBTZXQgdGhlIGZvbnQgc2l6ZSB0byA3NSUgb2YgdGhlIG9yaWdpbmFsLlxuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAwLjc1O1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAyO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAwLjIpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjEyKTtcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjcpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0ICd+c2F0dXJuLWRhdGVwaWNrZXIvdGhlbWluZyc7XHJcblxyXG4uZm9udENoYW5nZXtcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuLmZpbHRlckNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyT3B0aW9uc3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbi5mb3JtZGVsZXRlQnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIvKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi5mb250Q2hhbmdlIHtcbiAgY29sb3I6ICM2MDYwNjA7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uZmlsdGVyQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZmlsdGVyT3B0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5mb3JtZGVsZXRlQnV0dG9uIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/request-filter/request-filter.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/request-filter/request-filter.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RequestFilterComponent */

  /***/
  function srcAppSharedComponentsRequestFilterRequestFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestFilterComponent", function () {
      return RequestFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RequestFilterComponent =
    /*#__PURE__*/
    function () {
      function RequestFilterComponent(datepipe, formBuilder, userService, authService) {
        _classCallCheck(this, RequestFilterComponent);

        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.changedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changedFormFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RequestFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.initDateFilter();
          this.isMoreThanNormalUser$ = this.authService.isMoreThanNormalUser();
          this.allUsers$ = this.userService.getAllActiveUsers();
          this.filterForm = this.formBuilder.group({
            type: '',
            creator: '',
            closed: '',
            name: '',
            priority: ''
          });
          this.filterForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (form) {
            _this44.changedFormFilter.emit(form);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "saveDateAndFilter",
        value: function saveDateAndFilter(event) {
          this.dateFrom = this.datepipe.transform(new Date(event.begin), 'dd.MM.yyyy');
          this.dateTo = this.datepipe.transform(new Date(event.end), 'dd.MM.yyyy');
          this.changedDate.emit();
        }
      }, {
        key: "deleteFilterOption",
        value: function deleteFilterOption(option) {
          if (option === 'type') {
            this.filterForm.patchValue({
              'type': ''
            });
          } else if (option === 'creator') {
            this.filterForm.patchValue({
              'creator': ''
            });
          } else if (option === 'closed') {
            this.filterForm.patchValue({
              'closed': ''
            });
          } else if (option === 'name') {
            this.filterForm.patchValue({
              'name': ''
            });
          } else if (option === 'priority') {
            this.filterForm.patchValue({
              'priority': ''
            });
          }

          this.changedFormFilter.emit(this.filterForm.value);
        }
      }, {
        key: "initDateFilter",
        value: function initDateFilter() {
          var today = new Date();
          this.dateTo = this.datepipe.transform(today, 'dd.MM.yyyy');
          today.setDate(today.getDate() - 30);
          this.dateFrom = this.datepipe.transform(today, 'dd.MM.yyyy');
        }
      }, {
        key: "type",
        get: function get() {
          return this.filterForm.get("type");
        }
      }, {
        key: "creator",
        get: function get() {
          return this.filterForm.get("creator");
        }
      }, {
        key: "closed",
        get: function get() {
          return this.filterForm.get("closed");
        }
      }, {
        key: "name",
        get: function get() {
          return this.filterForm.get("name");
        }
      }, {
        key: "priority",
        get: function get() {
          return this.filterForm.get("priority");
        }
      }]);

      return RequestFilterComponent;
    }();

    RequestFilterComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RequestFilterComponent.prototype, "changedDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RequestFilterComponent.prototype, "changedFormFilter", void 0);
    RequestFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-filter/request-filter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-filter.component.scss */
      "./src/app/shared/components/request-filter/request-filter.component.scss")).default]
    })], RequestFilterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/request-table/request-table.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/request-table/request-table.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsRequestTableRequestTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-header-row {\n  min-height: 28px;\n  border-bottom: 0;\n}\n\n.tableRequest {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 95%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.mat-table {\n  overflow: hidden;\n}\n\n.header {\n  width: 95%;\n  margin: auto;\n  position: relative;\n}\n\n.headerTitle {\n  float: right;\n  color: #15691e;\n  margin-right: 15px;\n  font-weight: 700;\n}\n\n.userIcon {\n  width: 22px;\n  height: 22px;\n  margin-right: 5px;\n}\n\n.requestIcon {\n  margin-left: 5px;\n}\n\n.fontWeight {\n  font-weight: 500;\n}\n\n.detailButton {\n  border: none;\n  line-height: 30px;\n  padding: 0 12px;\n  border-radius: 6px;\n  display: inline-block;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n  color: #515151;\n  font-weight: 500 !important;\n}\n\n.detailButton:hover {\n  font-weight: 700 !important;\n  background-color: #404040 !important;\n  color: #ffffff !important;\n  letter-spacing: 2px;\n  box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n\n.assignOnMe {\n  color: #3b73f3;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.removeFromMe {\n  color: #f94646;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: bold;\n}\n\nmat-header-cell {\n  color: black;\n}\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 0 !important;\n}\n\nmat-cell {\n  font-size: 11px;\n  color: #515151;\n}\n\nmat-footer-row, mat-row {\n  min-height: 20px;\n}\n\nmat-paginator {\n  font-size: 11px;\n  min-height: 30px;\n  max-height: 30px;\n}\n\nmat-row:nth-child(even) {\n  background-color: white;\n}\n\n.mat-row:nth-child(odd) {\n  background-color: #f6f6f6;\n}\n\n.mat-row:hover {\n  background-color: #cecece;\n}\n\n:host ::ng-deep.mat-paginator .mat-paginator-container {\n  min-height: 40px !important;\n  max-height: 40px !important;\n}\n\n@media (min-width: 1360px) {\n  .headerTitle {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVxdWVzdC10YWJsZS9DOlxcVXNlcnNcXEVkdWFyZFxcRGVza3RvcFxccHJvamVrdHlcXFNpbXBsZWRlc2tcXFNpbXBsZWRlc2tfMlxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHJlcXVlc3QtdGFibGVcXHJlcXVlc3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlcXVlc3QtdGFibGUvcmVxdWVzdC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0FGOztBREdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDRSwyQkFBQTtBQ0RGOztBRElBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QUNGRjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0UsdUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUU7RUFDRSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRE1BO0VBQ0k7SUFDRSxlQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlcXVlc3QtdGFibGUvcmVxdWVzdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1oZWFkZXItcm93e1xyXG4gIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRhYmxlUmVxdWVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzE1NjkxZTsgLy8jNjA2MDYwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnVzZXJJY29ue1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnJlcXVlc3RJY29ue1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mb250V2VpZ2h0e1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgO1xyXG59XHJcblxyXG4uZGV0YWlsQnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuICBjb2xvcjogIzUxNTE1MTtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLmRldGFpbEJ1dHRvbjpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA0MHB4IC0xMHB4IHJnYmEoMCwwLDAsMC41Nyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuICB9XHJcblxyXG4gIC5hc3NpZ25Pbk1le1xyXG4gICAgY29sb3I6ICMzYjczZjM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmVGcm9tTWV7XHJcbiAgICBjb2xvcjogI2Y5NDY0NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcblxyXG5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxubWF0LWNlbGw6bGFzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBle1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1jZWxse1xyXG4gXHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNTE1MTUxO1xyXG59XHJcbm1hdC1mb290ZXItcm93LCBtYXQtcm93e1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxubWF0LXBhZ2luYXRvcntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5cclxubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Y2ZjZmNjtcclxuICB9XHJcblxyXG4gIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAubWF0LXBhZ2luYXRvciAubWF0LXBhZ2luYXRvci1jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEzNjBweCkge1xyXG4gICAgLmhlYWRlclRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnRhYmxlUmVxdWVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlclRpdGxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzE1NjkxZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udXNlckljb24ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJlcXVlc3RJY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZvbnRXZWlnaHQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGV0YWlsQnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgY29sb3I6ICM1MTUxNTE7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmRldGFpbEJ1dHRvbjpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDQwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjU3KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cblxuLmFzc2lnbk9uTWUge1xuICBjb2xvcjogIzNiNzNmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVtb3ZlRnJvbU1lIHtcbiAgY29sb3I6ICNmOTQ2NDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzUxNTE1MTtcbn1cblxubWF0LWZvb3Rlci1yb3csIG1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuXG5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLm1hdC1wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMzYwcHgpIHtcbiAgLmhlYWRlclRpdGxlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/request-table/request-table.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/request-table/request-table.component.ts ***!
    \****************************************************************************/

  /*! exports provided: RequestTableComponent */

  /***/
  function srcAppSharedComponentsRequestTableRequestTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestTableComponent", function () {
      return RequestTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var RequestTableComponent =
    /*#__PURE__*/
    function () {
      function RequestTableComponent(userService, router, sanitizer) {
        _classCallCheck(this, RequestTableComponent);

        this.userService = userService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.displayedColumns = []; // table columns to diplay

        this.displayAssignToMe = false;
        this.assignOnMeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFromMeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(RequestTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "assignOnMe",
        value: function assignOnMe(request) {
          this.assignOnMeEmitter.emit(request);
        }
      }, {
        key: "removeFromMe",
        value: function removeFromMe(request) {
          this.removeFromMeEmitter.emit(request);
        }
      }, {
        key: "navigateToDetails",
        value: function navigateToDetails(id) {
          this.router.navigateByUrl("request_details/".concat(id));
        }
      }, {
        key: "getImage",
        value: function getImage(bytes) {
          var objectURL = 'data:image/png;base64,' + bytes;
          return this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }
      }]);

      return RequestTableComponent;
    }();

    RequestTableComponent.ctorParameters = function () {
      return [{
        type: app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestTableComponent.prototype, "displayedColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestTableComponent.prototype, "headerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestTableComponent.prototype, "displayAssignToMe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestTableComponent.prototype, "tableTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RequestTableComponent.prototype, "assignOnMeEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RequestTableComponent.prototype, "removeFromMeEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], RequestTableComponent.prototype, "paginator", void 0);
    RequestTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/request-table/request-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-table.component.scss */
      "./src/app/shared/components/request-table/request-table.component.scss")).default]
    })], RequestTableComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/serdbuttons/serdbuttons.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/serdbuttons/serdbuttons.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSerdbuttonsSerdbuttonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VyZGJ1dHRvbnMvQzpcXFVzZXJzXFxFZHVhcmRcXERlc2t0b3BcXHByb2pla3R5XFxTaW1wbGVkZXNrXFxTaW1wbGVkZXNrXzJcXENsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzZXJkYnV0dG9uc1xcc2VyZGJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlcmRidXR0b25zL3NlcmRidXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VyZGJ1dHRvbnMvc2VyZGJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICB6LWluZGV4OiAxO1xyXG59IiwiYnV0dG9uIHtcbiAgei1pbmRleDogMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/serdbuttons/serdbuttons.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/serdbuttons/serdbuttons.component.ts ***!
    \************************************************************************/

  /*! exports provided: SERDButtonsComponent */

  /***/
  function srcAppSharedComponentsSerdbuttonsSerdbuttonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERDButtonsComponent", function () {
      return SERDButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SERDButtonsComponent =
    /*#__PURE__*/
    function () {
      function SERDButtonsComponent() {
        _classCallCheck(this, SERDButtonsComponent);

        this.deleteEmittter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveEmittter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetEmittter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEmittter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editActivated = false;
      }

      _createClass(SERDButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.saveEmittter.emit();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.editActivated = false;
          this.resetEmittter.emit();
        }
      }, {
        key: "edit",
        value: function edit() {
          this.editActivated = true;
          this.editEmittter.emit();
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.deleteEmittter.emit();
        }
      }]);

      return SERDButtonsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SERDButtonsComponent.prototype, "deleteEmittter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SERDButtonsComponent.prototype, "saveEmittter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SERDButtonsComponent.prototype, "resetEmittter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SERDButtonsComponent.prototype, "editEmittter", void 0);
    SERDButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-serdbuttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./serdbuttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/serdbuttons/serdbuttons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./serdbuttons.component.scss */
      "./src/app/shared/components/serdbuttons/serdbuttons.component.scss")).default]
    })], SERDButtonsComponent);
    /***/
  },

  /***/
  "./src/app/shared/directives/navigation-icon-hover.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/directives/navigation-icon-hover.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: NavigationIconHoverDirective */

  /***/
  function srcAppSharedDirectivesNavigationIconHoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationIconHoverDirective", function () {
      return NavigationIconHoverDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var NavigationIconHoverDirective =
    /*#__PURE__*/
    function () {
      function NavigationIconHoverDirective(el, renderer, builder) {
        _classCallCheck(this, NavigationIconHoverDirective);

        this.el = el;
        this.renderer = renderer;
        this.builder = builder;
        this.navigationBackground = this.el.nativeElement.parentElement.parentElement.querySelector("#navigationBackground");
        this.contentContainer = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.querySelector("#contentContainer");
      }

      _createClass(NavigationIconHoverDirective, [{
        key: "onMouseOver",
        value: function onMouseOver() {
          this.ishovering = true; // this.renderer.setStyle(this.el.nativeElement.parentElement, 'background', 'skyblue');

          this.applyAnimation();
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.ishovering = false;
          this.applyAnimation();
        }
      }, {
        key: "applyAnimation",
        value: function applyAnimation() {
          //  const metadataPlayer = this.ishovering ? this.fade(55,55) : this.fade(40, 40);
          var metadataPlayerParent = this.ishovering ? this.fadeNavigationContainer(85) : this.fadeNavigationContainer(75); // const metadataPlayerContent = this.ishovering ? this.fadeOutContent() : this.fadeInContent();
          //const playerParentContent  = this.builder.build(metadataPlayerContent).create(this.contentContainer);

          var playerParent = this.builder.build(metadataPlayerParent).create(this.navigationBackground); // const player = this.builder.build(metadataPlayer).create(this.el.nativeElement);
          //  player.play();

          playerParent.play(); // playerParentContent.play();
        }
      }, {
        key: "fadeNavigationContainer",
        value: function fadeNavigationContainer(newWidth) {
          return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            width: newWidth
          }))];
        }
      }, {
        key: "fade",
        value: function fade(newHeight, newWidth) {
          return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: newHeight,
            width: newWidth
          }))];
        }
      }, {
        key: "fadeOutContent",
        value: function fadeOutContent() {
          return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0.15
          })];
        }
      }, {
        key: "fadeInContent",
        value: function fadeInContent() {
          return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })];
        }
      }]);

      return NavigationIconHoverDirective;
    }();

    NavigationIconHoverDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.navigationIcon')], NavigationIconHoverDirective.prototype, "ishovering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover')], NavigationIconHoverDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout')], NavigationIconHoverDirective.prototype, "onMouseOut", null);
    NavigationIconHoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appNavigationIconHover]'
    })], NavigationIconHoverDirective);
    /***/
  },

  /***/
  "./src/app/shared/enums/request-position.enum.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/enums/request-position.enum.ts ***!
    \*******************************************************/

  /*! exports provided: RequestPosition */

  /***/
  function srcAppSharedEnumsRequestPositionEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestPosition", function () {
      return RequestPosition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RequestPosition;

    (function (RequestPosition) {
      RequestPosition["Created"] = "Vytvoren\xE9";
      RequestPosition["Assigned"] = "Priraden\xE9";
      RequestPosition["Closed"] = "Uzatvoren\xE9";
      RequestPosition["UnAssigned"] = "Nepriraden\xE9";
      RequestPosition["Solved"] = "Vyrie\u0161en\xE9";
    })(RequestPosition || (RequestPosition = {}));
    /***/

  },

  /***/
  "./src/app/shared/validators/reportAccessValidator.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/validators/reportAccessValidator.ts ***!
    \************************************************************/

  /*! exports provided: accessValidator */

  /***/
  function srcAppSharedValidatorsReportAccessValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "accessValidator", function () {
      return accessValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function accessValidator(accessPeople) {
      return function (control) {
        if (accessPeople === undefined || accessPeople.length === 0) {
          return {
            accessValid: true
          };
        }

        return null;
      };
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      loginUrl: 'http://10.134.216.210:8081/',
      apiUrl: 'http://10.134.216.210:8081/api/',
      dashboard: 'http://10.134.216.210:8081/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Eduard\Desktop\projekty\Simpledesk\Simpledesk_2\Client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map