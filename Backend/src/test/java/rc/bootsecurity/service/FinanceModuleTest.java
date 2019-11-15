package rc.bootsecurity.service;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
public class FinanceModuleTest {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String firstName, String lastName, String username, String email, String password){
        User user = new User();
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);

        return user;
    }


    @Test
    public void financeModuleTest(){
        User user1 = this.createUser("Eduard" , "krivanek", "user1" , "fakemail@gmail.com" , "123456");
        this.userRepository.save(user1);
    }
}
