package rc.bootsecurity.notificationModule.emailModule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

@Service
public class EmailService {
    private final String HELPDESK = "supportdesk@cofidis.sk";

    private final String ASSIGN_EMAIL = " ,bola pridelena na uzivatelom : ";
    private final String CLOSE_EMAIL = " ,bola zatvorena uzivatelom : ";
    private final String SOLUTION_EMAIL = " ,bola vyriesena uzivatelom : ";
    private final String REOPEN_EMAIL = " ,bola znovu otvorena uzivatelom : ";

    @Autowired
    private JavaMailSender javaMailSender;

    private String getEmailFooter(User whoInitiated){
        return "\n\n" + "Email bol zaslany od uzivatela : " + whoInitiated.getFullName();
    }

    private SimpleMailMessage composeEmail(String ...sendToEmails) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(sendToEmails);
        message.setFrom(HELPDESK);
        return message;
    }

    private SimpleMailMessage composeRequestEmail(Request request, User whoInitiated, String action,   String ...sendToEmails) {
        SimpleMailMessage message = this.composeEmail(sendToEmails);
        message.setSubject("Poziadavka " + request.getId());
        message.setText(getRequestEmail(request,action , whoInitiated));
        return message;
    }

    private String getRequestEmail(Request request,String action ,User whoInitiated){
        return "Poziadavka: " + request.getName() + action +  request.getAssigned().getFullName() + this.getEmailFooter(whoInitiated);
    }

    public void sendAssignRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
      //  javaMailSender.send(this.composeRequestEmail(request, whoInitiated, ASSIGN_EMAIL, sendToEmails));
    }

    public void sendClosedRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
      //  javaMailSender.send(this.composeRequestEmail(request, whoInitiated, CLOSE_EMAIL, sendToEmails));
    }

    public void sendReopenRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
      //  javaMailSender.send(this.composeRequestEmail(request, whoInitiated, REOPEN_EMAIL, sendToEmails));
    }

    public void sendRequestCommentEmail(Request request, User whoInitiated, String comment,String ...sendToEmails ){
        SimpleMailMessage message = this.composeEmail(sendToEmails);
        message.setSubject("Poziadavka " + request.getId());
        message.setText("Komentar bol pridany na poziadavku: " + request.getName() + "\n\n" + comment  + this.getEmailFooter(whoInitiated));

      //  javaMailSender.send(message);
    }

    public void sendUserRegistrationEmail(User whoInitiated, User newUser){
        SimpleMailMessage message = this.composeEmail(newUser.getEmail());
        message.setSubject("Konto na helpdesk");
        message.setText("Mozete vstupit do systemu helpdesk. \n" +
                "prihlasovanie udaje sú nasledovne \n" +
                "prihlasovacie meno : " + newUser.getUsername() + "\n" +
                "prihlasovacie heslo : " + newUser.getPassword() + "\n" +
                "adresa stranky : http://10.134.216.210:8081" +
                this.getEmailFooter(whoInitiated) );

     //   javaMailSender.send(message);
    }


}
