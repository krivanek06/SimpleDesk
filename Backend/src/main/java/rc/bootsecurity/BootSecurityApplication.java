package rc.bootsecurity;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;

@SpringBootApplication
public class BootSecurityApplication {

    public static void main(String[] args) {
        SpringApplication.run(BootSecurityApplication.class, args);
    }
}

/*
@SpringBootApplication
public class BootSecurityApplication implements CommandLineRunner {

    @Autowired
    private InserterRequestsSimulation inserterRequestsSimulation;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(BootSecurityApplication.class, args);
    }

    @Override
    public void run(String... args) {
        //this.inserterRequestsSimulation.mainInserter();
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setId(2);
        userSimpleDTO.setFirstName("user2");
        userSimpleDTO.setLastName("user2");
        this.userService.getPrivilegesForUser(userSimpleDTO);
    }
}
*/