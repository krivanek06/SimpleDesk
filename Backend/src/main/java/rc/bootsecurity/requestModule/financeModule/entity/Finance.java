package rc.bootsecurity.requestModule.financeModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_finances")
@Data
@PrimaryKeyJoinColumn(name="request_id")
public class Finance  extends Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "finance_type_id")
    private FinanceType financeType;

}
