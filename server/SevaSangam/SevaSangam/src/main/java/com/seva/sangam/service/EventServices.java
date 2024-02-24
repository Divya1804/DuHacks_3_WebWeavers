package com.seva.sangam.service;

import com.seva.sangam.payload.EventDto;

import java.util.List;

public interface EventServices {
    EventDto createEvent(EventDto eventDto, Long ngoId);
}