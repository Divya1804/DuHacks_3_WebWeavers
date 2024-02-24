package com.seva.sangam.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payId;

    @Column(name = "paid_amount")
    private Long amount;

    @Column(name = "paid_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @ManyToOne
    private Event event;

    @ManyToOne
    private Donor donor;


}
