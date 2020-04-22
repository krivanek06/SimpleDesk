package rc.bootsecurity.notificationModule.calendarModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.notificationModule.calendarModule.DTO.ReminderDTO;
import rc.bootsecurity.notificationModule.calendarModule.Exception.ReminderImpersonatingException;
import rc.bootsecurity.notificationModule.calendarModule.Exception.ReminderNotFoundException;
import rc.bootsecurity.notificationModule.calendarModule.entity.Reminder;
import rc.bootsecurity.notificationModule.calendarModule.service.ReminderService;

import java.util.List;

@RestController
@RequestMapping("api/reminder")
public class ReminderController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(ReminderController.class);

    @Autowired
    private ReminderService reminderService;

    @PostMapping
    public ResponseEntity<?> createReminder(@RequestBody ReminderDTO reminderDTO){
        try{
            reminderDTO = this.reminderService.createReminder(reminderDTO);
            return new ResponseEntity<>(reminderDTO, HttpStatus.OK);
        }catch (Exception e){
            LOGGER.error("Failed to createReminder, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o vytvorenie pripomienky", HttpStatus.BAD_REQUEST);
    }

    @GetMapping
    public ResponseEntity<?> getReminders(){
        try {
            List<ReminderDTO> reminderDTOS = this.reminderService.getReminders();
            return new ResponseEntity<>(reminderDTOS, HttpStatus.OK);
        }catch (Exception e){
            LOGGER.error("Failed to getReminders, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri získavaní pripominok na kalendár", HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<?> editReminder(@RequestBody ReminderDTO reminderDTO){
        try {
            this.reminderService.editReminder(reminderDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (ReminderNotFoundException e){
            LOGGER.error("Failed to editReminder, remidner not found, error : " + e.getMessage());
            return new ResponseEntity<>("Došlo ku chybe na strane servera, reminder sa nenašiel", HttpStatus.BAD_REQUEST);
        }catch (ReminderImpersonatingException e){
            LOGGER.error("Failed to editReminder, impersonating reminder, error : " + e.getMessage());
            return new ResponseEntity<>("Snaha o editovanie pripomineky iného uživateľa, požiadavka nevykonaná", HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            LOGGER.error("Failed to editReminder, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri editovaní pripominky", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteReminder(@RequestParam("reminderId") Integer reminderId){
        try {
            this.reminderService.deleteReminder(reminderId);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (ReminderNotFoundException e){
            LOGGER.error("Failed to deleteReminder, remidner not found, error : " + e.getMessage());
            return new ResponseEntity<>("Došlo ku chybe na strane servera, reminder sa nenašiel", HttpStatus.BAD_REQUEST);
        }catch (ReminderImpersonatingException e){
            LOGGER.error("Failed to deleteReminder, impersonating reminder, error : " + e.getMessage());
            return new ResponseEntity<>("Snaha o zmazanie pripomineky iného uživateľa, požiadavka nevykonaná", HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            LOGGER.error("Failed to deleteReminder, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zmazaní pripominky", HttpStatus.BAD_REQUEST);
    }

}
