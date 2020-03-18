package rc.bootsecurity.requestModule.ticketModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.ticketModule.entity.Ticket;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class TicketDTO extends RequestDTO {
    protected TicketExtendedInformationDTO extendedInformation;
}
