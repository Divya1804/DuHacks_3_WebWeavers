package com.seva.sangam.repository;

import com.seva.sangam.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event, Long> {

}
