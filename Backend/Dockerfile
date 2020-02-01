FROM openjdk:12-alpine
COPY ./target/spring-boot-security-jwt-0.0.1-SNAPSHOT.jar /spring-boot-SNAPSHOT.jar
#WORKDIR /user/app
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "spring-boot-SNAPSHOT.jar"]