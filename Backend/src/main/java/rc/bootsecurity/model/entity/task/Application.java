package rc.bootsecurity.model.entity.task;

import lombok.Data;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
abstract class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "sequence")
    private Integer sequence;

    @Column(name = "active")
    private Boolean active;
}
