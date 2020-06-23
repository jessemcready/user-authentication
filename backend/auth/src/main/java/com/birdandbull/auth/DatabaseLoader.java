package com.birdandbull.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// @Component annotation automatically allows this to be picked up by SpringBootApplication
@Component
// CommandLineRunner gets run after all the beans are created and registered
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository repository;

    @Autowired
    public DatabaseLoader(UserRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception{
        this.repository.save(new User(
                "Jesse",
                "McReady",
                "jessemcready@gmail.com",
                "jesse12345"
        ));
    }
}
