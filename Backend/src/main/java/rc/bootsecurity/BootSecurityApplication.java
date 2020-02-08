package rc.bootsecurity;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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