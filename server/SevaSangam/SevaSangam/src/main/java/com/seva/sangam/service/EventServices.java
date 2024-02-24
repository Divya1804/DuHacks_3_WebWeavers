package com.seva.sangam.service;

import com.seva.sangam.payload.EventCard;
import com.seva.sangam.payload.EventDto;

import java.util.List;

public interface EventServices {
    EventDto createEvent(EventDto eventDto, Long ngoId);
    EventDto updateEvent(EventDto eventDto, Long eventId, Long ngoId);

    public List<EventCard> getAllUpComingEventCard();
    EventCard getEventById(Long eid);
}