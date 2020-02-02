package rc.bootsecurity.utils.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;

@Service
public class EmailService {
    private final String HELPDESK = "supportdesk@cofidis.sk";

    private final String ASSIGN_EMAIL = " ,bola pridelená na uživateľa : ";
    private final String CLOSE_EMAIL = " ,bola zatvorená uživateľom : ";
    private final String SOLUTION_EMAIL = " ,bola vyriešená uživateľom : ";
    private final String REOPEN_EMAIL = " ,bola znovu otvorená uživateľom : ";

    @Autowired
    private JavaMailSender javaMailSender;

    private String getEmailFooter(User whoInitiated){
        return "\n\n" + "Email bol zaslaný od uživateľa : " + whoInitiated.getFullName();
    }

    private SimpleMailMessage composeEmail(String ...sendToEmails) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(sendToEmails);
        message.setFrom(HELPDESK);
        return message;
    }

    private SimpleMailMessage composeRequestEmail(Request request, User whoInitiated, String action,   String ...sendToEmails) {
        SimpleMailMessage message = this.composeEmail(sendToEmails);
        message.setSubject("Požiadavka " + request.getId());
        message.setText(getRequestEmail(request,action , whoInitiated.getFullName() ));
        return message;
    }

    private String getRequestEmail(Request request,String action ,String whoInitiated){
        return "Požiadavka: " + request.getName() + action +  request.getAssigned().getFullName() + "\n\n" + "Email bol zaslaný od uživateľa : " + whoInitiated;
    }

    public void sendAssignRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
      //  javaMailSender.send(this.composeRequestEmail(request, whoInitiated, ASSIGN_EMAIL, sendToEmails));
    }

    public void sendClosedRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
     //   javaMailSender.send(this.composeRequestEmail(request, whoInitiated, CLOSE_EMAIL, sendToEmails));
    }

    public void sendReopenRequestEmail(Request request, User whoInitiated, String ...sendToEmails){
     //   javaMailSender.send(this.composeRequestEmail(request, whoInitiated, REOPEN_EMAIL, sendToEmails));
    }

    public void sendRequestCommentEmail(Request request, User whoInitiated, String comment,String ...sendToEmails ){
        SimpleMailMessage message = this.composeEmail(sendToEmails);
        message.setSubject("Požiadavka " + request.getId());
        message.setText("Komentár bol pridaný na požiadavku: " + request.getName() + "\n\n" + comment  + this.getEmailFooter(whoInitiated));

      //  javaMailSender.send(message);
    }

    public void sendUserRegistrationEmail(User whoInitiated, User newUser){
        SimpleMailMessage message = this.composeEmail(newUser.getEmail());
        message.setSubject("Konto na helpdesk");
        message.setText("Môžete vstúpiť do systemu helpdesk. \n" +
                "prihlasovanie údaje sú nasledovné \n" +
                "prihlasovacie meno : " + newUser.getUsername() + "\n" +
                "prihlasovacie heslo : " + newUser.getPassword() +
                 this.getEmailFooter(whoInitiated) );

      //  javaMailSender.send(message);
    }


}
