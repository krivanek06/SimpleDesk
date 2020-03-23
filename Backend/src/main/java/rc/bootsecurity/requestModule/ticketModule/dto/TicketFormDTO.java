package rc.bootsecurity.requestModule.ticketModule.dto;

import lombok.Data;

@Data
public class TicketFormDTO {
    private String ticketType;
    private String ticketSubtypeName;
    private String requestPriority;
    private String name;
    private String problem;
}
