
export interface JWToken{
    sub: string, // username
    IS_ADMIN: boolean,
    IS_GHOST: boolean,

    exp: number,

    MODULE_TYPES_TO_USE: string[],
    FINANCE_TYPE_TO_SUBMIT: string[],
    REQUEST_TYPE_TO_SOLVE: string[]
    TICKET_SOFTWARE_PRIVILEGES: string[],
    TICKET_HARDWARE_PRIVILEGES: string[]
    TICKET_SERVER_PRIVILEGES: string[],
    TICKET_USER_PRIVILEGES: string[],
    TICKET_OTHER_PRIVILEGES: string[],
    
      
      
}