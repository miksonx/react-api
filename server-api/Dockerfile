FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD target/api-1.0-SNAPSHOT.jar /app/api-1.0-SNAPSHOT.jar
CMD java -jar /app/api-1.0-SNAPSHOT.jar -Dspring.profiles.active=container

#FROM tomcat:9.0.24
#VOLUME /tmp
#COPY target/api-1.0-SNAPSHOT.jar /usr/local/tomcat/webapps/api-1.0-SNAPSHOT.jar
#ENTRYPOINT [ "sh", "-c", "java -Djava.security.egd=file:/dev/./urandom -jar /usr/local/tomcat/webapps/api-1.0-SNAPSHOT.jar" ]

EXPOSE 5050
