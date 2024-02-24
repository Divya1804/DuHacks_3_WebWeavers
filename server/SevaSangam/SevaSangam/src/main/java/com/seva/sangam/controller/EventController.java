package com.seva.sangam.controller;

import com.seva.sangam.payload.EventDto;
import com.seva.sangam.service.EventServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class EventController {

    @Autowired
    private EventServices eventServices;

    @PostMapping("/ngo/{ngoId}/event")
    private ResponseEntity<?> createEvent(@RequestBody EventDto eventDto, @PathVariable("ngoId") Long ngoId){
        EventDto event = eventServices.createEvent(eventDto, ngoId);
        return new ResponseEntity<EventDto>(event, HttpStatus.CREATED);
    }

    @PutMapping("/ngo/{ngoId}/event/{eventId}")
    private ResponseEntity<?> updateEvent(@RequestBody EventDto dto, @PathVariable("eventId") Long eventId, @PathVariable("ngoId") Long ngoId){
        EventDto eventDto = eventServices.updateEvent(dto, eventId, ngoId);
        return new ResponseEntity<EventDto>(eventDto, HttpStatus.ACCEPTED);
    }
}