package rc.bootsecurity.model.entity.finance;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.model.entity.Group;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tbl_finance_types")
@Data
public class FinanceType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active;

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "financeTypes")
    private Set<Group> groupsToSubmitSpecificFinanceType;
}




