package rc.bootsecurity.controller;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;

import java.util.Arrays;
import java.util.List;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        /*List<User> users=  this.userRepository.findAll();
        users.stream().forEach(user -> user.setPassword(this.passwordEncoder.encode(user.getPassword())));
        this.userRepository.saveAll(users);*/

       // User user = userRepository.getOne(2);
       // System.out.println(user);

    }
}