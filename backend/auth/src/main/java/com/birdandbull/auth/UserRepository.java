package com.birdandbull.auth;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    // extends Spring Data Commons' CrudRepository and plugs in the type of the
    // domain object and it's primary key
}
