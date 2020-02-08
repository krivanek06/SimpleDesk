package rc.bootsecurity.requestModule.ticketModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class TicketDTO extends RequestDTO {
    private String ticketSubtypeName;

    private String problem;

    private String ticketType;
}
