package rc.bootsecurity.requestModule.ticketModule.dto;

import lombok.Data;

@Data
public class TicketExtendedInformationDTO {
    private String ticketSubtypeName;

    private String problem;

    private String ticketType;
}
