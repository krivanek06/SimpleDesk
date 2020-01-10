package rc.bootsecurity.security;

import com.auth0.jwt.JWT;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import rc.bootsecurity.model.dto.LoginViewModel;
import rc.bootsecurity.model.enums.TICKET_TYPE;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;


public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    /* Trigger when we issue POST request to /login
    We also need to pass in {"username":"dan", "password":"dan123"} in the request body
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        // Grab credentials and map them to login viewmodel
            LoginViewModel credentials = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE, true);
            credentials = objectMapper.readValue(request.getInputStream(), LoginViewModel.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Create login token
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                credentials.getUsername(),
                credentials.getPassword(),
                new ArrayList<>());

        // Authenticate user
        Authentication auth = authenticationManager.authenticate(authenticationToken);

        return auth;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        UserPrincipal principal = (UserPrincipal) authResult.getPrincipal();
        String[] authorities = principal.getAuthorities().stream().map(GrantedAuthority::getAuthority).toArray(String[]::new);

        // Create JWT Token
        String token = JWT.create()
                .withSubject(principal.getUsername())
                .withClaim("IS_ADMIN" , principal.isAdmin())
                .withClaim("IS_GHOST" , principal.isGhost())
                .withArrayClaim("AUTHORITIES", authorities)
                .withArrayClaim("MODULE_TYPES_TO_USE" , principal.getModuleTypesToUse())
                .withArrayClaim("REQUEST_TYPE_TO_SOLVE" , principal.getRequestTypesToSolve())
                .withArrayClaim("FINANCE_TYPE_TO_SUBMIT" , principal.getFinanceTypeToSubmit())
                .withArrayClaim("TICKET_SOFTWARE_PRIVILEGES" , principal.getSolveTicketsTypeSoftware())
                .withArrayClaim("TICKET_HARDWARE_PRIVILEGES" , principal.getSolveTicketsTypeHardware())
                .withArrayClaim("TICKET_SERVER_PRIVILEGES" , principal.getSolveTicketsTypeServer())
                .withArrayClaim("TICKET_USER_PRIVILEGES" , principal.getSolveTicketsTypeUser() )
                .withArrayClaim("TICKET_OTHER_PRIVILEGES" , principal.getSolveTicketsTypeOther() )
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(HMAC512(JwtProperties.SECRET.getBytes()));

        // Add token in response
        response.addHeader(JwtProperties.HEADER_STRING, token);

    }






}
