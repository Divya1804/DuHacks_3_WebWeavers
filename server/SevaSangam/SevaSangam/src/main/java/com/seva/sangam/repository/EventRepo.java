package com.seva.sangam.repository;

import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.NgoAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface EventRepo extends JpaRepository<Event, Long> {
    List<Event> findByNgoAdminAndEndDateLessThanEqualOrderByStartDateDesc(NgoAdmin i, LocalDate now);
    List<Event> findByNgoAdminAndEndDateGreaterThanEqualOrderByStartDateAsc(NgoAdmin ngo, LocalDate now);
    List<Event> findByNgoAdminAndEndDateLessThanOrderByEndDateDesc(NgoAdmin ngo, LocalDate now);
    List<Event> findByNgoAdminOrderByStartDateDesc(NgoAdmin ngoAdmin);

    List<Event> findByEndDateGreaterThanOrderByStartDateAsc(LocalDate now);
}
