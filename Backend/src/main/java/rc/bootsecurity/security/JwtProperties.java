package rc.bootsecurity.security;

public class JwtProperties {
    public static final String SECRET = "SomeSecretForJWTGeneration";
    public static final int EXPIRATION_TIME = 18000000; // 3600000 = 1 hour in miliseconds , 259200000 = 3days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";

}
