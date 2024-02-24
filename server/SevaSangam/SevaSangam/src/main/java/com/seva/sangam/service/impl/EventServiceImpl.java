package com.seva.sangam.service.impl;


import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.NgoAdmin;
import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.EventDto;
import com.seva.sangam.repository.EventRepo;
import com.seva.sangam.repository.NgoRepo;
import com.seva.sangam.service.EventServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class EventServiceImpl implements EventServices {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private NgoRepo ngoRepo;

    @Autowired
    private ModelMapper model;
    @Override
    public EventDto createEvent(EventDto e, Long ngoId) {

        Event event = model.map(e, Event.class);
        NgoAdmin ngoAdmin = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo", "Id", ngoId));
        event.setNgoAdmin(ngoAdmin);
        Event event1 = eventRepo.save(event);

        return model.map(event1, EventDto.class);
    }
}

