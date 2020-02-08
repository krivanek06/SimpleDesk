package rc.bootsecurity.workingModule;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_working_day_types")
@Data
public class WorkingDayType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "workingDayType")
    private List<WorkingDay> workingDays;
}
