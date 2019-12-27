export interface TicketSubtype{
    id: number,
    name: string,
    sequence: number,
    active: boolean,

    ticketType: TicketType,
}

export interface TicketType{
    id: number,
    name: string,
    sequence: number,
    active: boolean,
}