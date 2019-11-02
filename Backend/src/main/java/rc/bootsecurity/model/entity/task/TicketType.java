package rc.bootsecurity.model.entity.task;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

// -> HW , SW , Users, Servers , other
@Entity
@Table(name = "tbl_task_types")
@Data
@EqualsAndHashCode(callSuper = false)
public class TicketType extends  Application{

    // specific task type appears in what groups
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "taskType")
    private List<TicketPrivileges> taskTypeList;

}
