package rc.bootsecurity.model.entity.task;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

// -> HW , SW , Users, Servers , other
@Entity
@Table(name = "tbl_task_types")
@Data
@EqualsAndHashCode(callSuper = false)
public class TaskType extends  Application{
    // unidirectional
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_type_id")
    private Set<Hardware> hardwareList;

    // unidirectional
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_type_id")
    private Set<Software> softwareList;

    // unidirectional
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_type_id")
    private Set<Server> serverList;

    // specific task type appears in what groups
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "taskType")
    private List<TaskPrivileges> taskTypeList;

}
