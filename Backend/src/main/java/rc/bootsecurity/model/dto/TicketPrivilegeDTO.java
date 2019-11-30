package rc.bootsecurity.model.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@EqualsAndHashCode
@ToString
public class TicketPrivilegeDTO {
    private Integer id;
    /**
     * software, hardware, user, server, other
     */
    private String ticketType;

    /**
     * May contains name of software from Software.class, but also be null if TicketType is "user" or "other"
     */
    private String applicationName;
}
