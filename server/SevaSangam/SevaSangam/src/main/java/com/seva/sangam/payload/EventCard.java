package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EventCard {
    private String photoLink;
    private String eventName;
    private String ngoName;
    private String location;
    private Long raisedFund=(long) 0;
    private Long requiredFund=(long) 0;
    private Long eventId;
    private Long ngoId;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private String type;
    private String public_key;
}

