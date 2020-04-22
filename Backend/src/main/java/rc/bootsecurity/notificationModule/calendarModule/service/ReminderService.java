package rc.bootsecurity.notificationModule.calendarModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.notificationModule.calendarModule.DTO.ReminderDTO;
import rc.bootsecurity.notificationModule.calendarModule.Exception.ReminderImpersonatingException;
import rc.bootsecurity.notificationModule.calendarModule.Exception.ReminderNotFoundException;
import rc.bootsecurity.notificationModule.calendarModule.entity.Reminder;
import rc.bootsecurity.notificationModule.calendarModule.repository.ReminderRepository;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.userModule.service.UserService;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReminderService {
    @Autowired
    private ReminderRepository  reminderRepository;
    @Autowired
    private UserService userService;

    private Reminder loadReminderForPrincipal(Integer id){
        Reminder reminder = this.reminderRepository.findById(id).orElseThrow(() -> new ReminderNotFoundException("Reminder not fount"));
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        if(!reminder.getUser().getUsername().equalsIgnoreCase(user.getUsername())){
            throw new ReminderImpersonatingException("User " + user.getUsername() + " tried to delete reminder for user " + reminder.getUser().getUsername());
        }
        return reminder;
    }

    private ReminderDTO convertReminderIntoDTO(Reminder reminder){
        ReminderDTO reminderDTO = new ReminderDTO();
        reminderDTO.setId(reminder.getId());
        reminderDTO.setTitle(reminder.getTitle());
        reminderDTO.setDescription(reminder.getDescription());
        reminderDTO.setStart(new Date(reminder.getTimestampStart().getTime()));
        reminderDTO.setEnd(new Date(reminder.getTimestampEnd().getTime()));
        return reminderDTO;
    }

    public ReminderDTO createReminder(ReminderDTO reminderDTO){
        Reminder reminder = new Reminder();
        reminder.setTimestampCreation(new Timestamp(System.currentTimeMillis()));
        reminder.setTimestampStart( new Timestamp(reminderDTO.getStart().getTime()));
        reminder.setTimestampEnd( new Timestamp(reminderDTO.getEnd().getTime()));
        reminder.setTitle(reminderDTO.getTitle());
        reminder.setDescription(reminderDTO.getDescription());
        reminder.setUser(this.userService.loadUserByUsername(this.userService.getPrincipalUsername()));

        this.reminderRepository.save(reminder);

        return this.convertReminderIntoDTO(reminder);
    }

    public List<ReminderDTO> getReminders(){
        List<ReminderDTO> reminderDTOS = new ArrayList<>();
        List<Reminder> loaded = this.reminderRepository.getAllByUser(this.userService.loadUserByUsername(this.userService.getPrincipalUsername()));
        if(loaded == null){
            return reminderDTOS;
        }
        loaded.forEach(reminder -> reminderDTOS.add(this.convertReminderIntoDTO(reminder)));
        return reminderDTOS;

    }

    @Transactional
    public void deleteReminder(Integer id){
        this.reminderRepository.delete(this.loadReminderForPrincipal(id));
    }

    public void editReminder(ReminderDTO reminderDTO){
        Reminder reminder = this.loadReminderForPrincipal(reminderDTO.getId());
        reminder.setTimestampStart( new Timestamp(reminderDTO.getStart().getTime()));
        reminder.setTimestampEnd( new Timestamp(reminderDTO.getEnd().getTime()));
        reminder.setTitle(reminderDTO.getTitle());
        reminder.setDescription(reminderDTO.getDescription());
        this.reminderRepository.save(reminder);
    }

}
