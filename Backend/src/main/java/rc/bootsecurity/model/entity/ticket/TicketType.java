package rc.bootsecurity.model.entity.ticket;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

// -> HW , SW , Users, Servers , other
@Entity
@Table(name = "tbl_ticket_types")
@Data
public class TicketType{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "sequence")
    private Integer sequence;

    @Column(name = "active")
    private Boolean active;

    /**
     * specific task type appears in what groups - may be required for statistics
     * if I want to see whether software is contained in which groups
     */
  //  @OneToMany(fetch = FetchType.LAZY, mappedBy = "ticketType")
  //  private List<TicketPrivileges> taskTypeList;

    /**
     * what tickets exists on specific ticket type - hw, sw, etc.
     */
   // @OneToMany(fetch = FetchType.LAZY, mappedBy = "ticketType")
   // private List<Ticket> tickets;


    /*
     *  what subtype I am a child of - software, hardware, server - probably not needed
     *
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ticketType")
    private List<TicketSubtype> ticketSubtypes;*/



}
