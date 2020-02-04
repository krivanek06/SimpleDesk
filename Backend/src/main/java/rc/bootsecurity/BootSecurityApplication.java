package rc.bootsecurity;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;

import java.util.List;

//@EnableJpaRepositories("rc.bootsecurity.repository.*")
//@EntityScan("rc.bootsecurity.*")

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
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(BootSecurityApplication.class, args);
    }

    @Override
    public void run(String... args) {
        List<User> users =  this.userRepository.findAll();
        for(User user : users){
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            user.setPassword(encoder.encode(user.getPassword()));

        }
        this.userRepository.saveAll(users);
    }
}
*/