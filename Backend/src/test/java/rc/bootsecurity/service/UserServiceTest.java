package rc.bootsecurity.service;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.test.inserter.Inserter;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
public class UserServiceTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private Inserter inserter;


    @Test
    public void testUsersInGroups(){
        inserter.insertUsersWithGroups();

        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");
        Group group6 = this.groupRepository.findByGroupName("TESTGROUP6");
        Group group7 = this.groupRepository.findByGroupName("TESTGROUP7");

        assertThat(this.groupRepository.findAllByUsersInGroup(user1)).containsExactlyInAnyOrder(group1,group2,group3,group4,group5,group6,group7);
        assertThat(this.groupRepository.findAllByUsersInGroup(user3)).containsExactlyInAnyOrder(group1,group2,group3,group5,group6);

        assertThat(this.groupRepository.findAllByGroupManager(user3)).isEmpty();
        assertThat(this.groupRepository.findAllByGroupManager(user1).get()).containsOnly(group1,group2,group3,group4);
        assertThat(this.groupRepository.findAllByGroupManager(user2).get()).containsOnly(group5,group6,group7);

        assertThat(this.userRepository.findAllByGroupsInvolved(group4)).containsOnly(user1,user2);
        assertThat(this.userRepository.findAllByGroupsInvolved(group6)).containsOnly(user1,user2,user3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3,user4);

        // remove from group
        group3.getUsersInGroup().remove(user4);
        this.groupRepository.save(group3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3);

        // add to group
        group3.getUsersInGroup().add(user4);
        this.groupRepository.save(group3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3,user4);

    }



}