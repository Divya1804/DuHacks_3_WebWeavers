package com.seva.sangam.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    @Column(name = "event_name")
    private String eventName;

    @Column(name="event_description", length = 10000)
    private String details;

    @Column(name="event_photo", length = 2048)
    private String photo;

    @Column(name = "event_type")
    private String type;

    @Column(name = "event_location")
    private String location;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name="gained_amount")
    private Long gainedAmount= 0L;

    @Column(name="required_amount")
    private Long requiredAmount=0L;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private NgoAdmin ngoAdmin;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private List<Payment> payments;


}

