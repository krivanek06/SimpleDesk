package rc.bootsecurity.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import rc.bootsecurity.repository.UserRepository;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private UserPrincipalDetailsService userPrincipalDetailsService;
    private UserRepository userRepository;
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private Http401UnauthorizedEntryPoint authenticationEntryPoint;
    private AuthenticationFailureHandler authenticationFailureHandler;
    private CustomSuccessHandler authenticationSuccessHandler;

    public SecurityConfiguration(UserPrincipalDetailsService userPrincipalDetailsService,
                                 UserRepository userRepository,
                                 JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                                 Http401UnauthorizedEntryPoint authenticationEntryPoint,
                                 AuthenticationFailureHandler authenticationFailureHandler,
                                 CustomSuccessHandler authenticationSuccessHandler) {
        this.userPrincipalDetailsService = userPrincipalDetailsService;
        this.userRepository = userRepository;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.authenticationFailureHandler = authenticationFailureHandler;
        this.authenticationSuccessHandler = authenticationSuccessHandler;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authenticationProvider());
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // remove csrf and state in session because in jwt we do not need them
                    .csrf().disable()
                    .addFilterBefore(new CORSFilter(), CsrfFilter.class)
                    .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
                .and()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                //.and()
                // handle an authorized attempts
                //.exceptionHandling().authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
                /*.exceptionHandling()
                .accessDeniedHandler(accessDeniedHandler)*/
                  //  .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .and()
                    .formLogin()
                    .loginProcessingUrl("/login")
                    .successHandler(authenticationSuccessHandler)
                    .failureHandler(authenticationFailureHandler)
                   // .usernameParameter("j_username")
                   // .passwordParameter("j_password")
                    .permitAll()

                .and().requiresChannel().anyRequest().requiresSecure() // i do not know

                .and()
                    // add jwt filters (1. authentication, 2. authorization)
                    .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager()))

                    // configure access rules
                    .authorizeRequests()
                    .antMatchers( "/login").permitAll() // HttpMethod.POST,
                    .antMatchers("/api/public/management/*").hasRole("MANAGER")
                    .antMatchers("/api/public/admin/*").hasRole("ADMIN")
                    .anyRequest().authenticated();
    }

    @Bean
    DaoAuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(this.userPrincipalDetailsService);

        return daoAuthenticationProvider;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
