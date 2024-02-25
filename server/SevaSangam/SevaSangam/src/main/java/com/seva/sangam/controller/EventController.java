package com.seva.sangam.controller;

import com.seva.sangam.payload.EventCard;
import com.seva.sangam.payload.EventDto;
import com.seva.sangam.payload.EventNgoId;
import com.seva.sangam.service.EventServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/home/")
    public ResponseEntity<List<EventCard>> getAllUpComing()
    {
        return new ResponseEntity<List<EventCard>>(eventServices.getAllUpComingEventCard(), HttpStatus.ACCEPTED);
    }

    //eventdetails by id
    @GetMapping("/home/{eId}/")
    public ResponseEntity<EventCard> getEventByID(@PathVariable("eId") Long eid)
    {
        return new ResponseEntity<EventCard>(eventServices.getEventById(eid), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{eId}/")
    public ResponseEntity<?> ngoEvent(@PathVariable("eId") Long eId){
        EventNgoId eni = eventServices.ngoEvent(eId);
        return new ResponseEntity<EventNgoId>(eni, HttpStatus.OK);
    }

    @GetMapping("/ngo/{ngoId}/event/{eventId}")
    private ResponseEntity<?> getEventById(@PathVariable("eventId") Long eventId, @PathVariable("ngoId") Long ngoId){
        EventDto dto = eventServices.getEventById(eventId, ngoId);
        return new ResponseEntity<EventDto>(dto, HttpStatus.ACCEPTED);
    }
}
