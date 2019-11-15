package rc.bootsecurity.model.entity.finance;

import lombok.Data;
import rc.bootsecurity.model.entity.Group;

import javax.persistence.*;
import java.util.List;
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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "financeType")
    private List<Finance> financeList;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_finance_type_privileges",
            joinColumns = { @JoinColumn(name = "finance_type_id")},
            inverseJoinColumns = { @JoinColumn(name = "group_id")})
    private Set<Group> groupsToSubmitSpecificFinanceType;
}




