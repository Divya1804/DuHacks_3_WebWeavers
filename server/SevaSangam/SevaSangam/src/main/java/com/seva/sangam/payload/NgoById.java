package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NgoById {
    private String logoLink;
    private String ngoName;
    private String slogan;
    private String about;
    private String ngoEmail;
    private Long ngoId;
    //    private List<EventCard> eventId; //All events
    private Long ngoPhoneNo;
    private String ngoLocation;
    private String certiLink;

    private List<EventCard> previousEvents;
    private List<EventCard> upcomingEvents;
}
