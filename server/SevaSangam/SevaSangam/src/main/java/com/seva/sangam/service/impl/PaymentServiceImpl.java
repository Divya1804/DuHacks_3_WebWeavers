package com.seva.sangam.service.impl;

import com.seva.sangam.entity.Donor;
import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.Payment;
import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.PaymentDto;
import com.seva.sangam.repository.DonorRepo;
import com.seva.sangam.repository.EventRepo;
import com.seva.sangam.repository.PaymentRepo;
import com.seva.sangam.service.PaymentServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentServiceImpl implements PaymentServices {

    @Autowired
    private PaymentRepo paymentRepo;

    @Autowired
    private DonorRepo donorRepo;

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private ModelMapper model;

    private final Object lock = new Object();

    @Override
    public PaymentDto createPayment(PaymentDto pay, Long donorId, Long eventId) {
        Payment pay2 = model.map(pay, Payment.class);
        pay2.setDate(LocalDate.now());

        Payment pay1;

        synchronized (lock) {
            Donor donor = donorRepo.findById(donorId).orElseThrow(() -> new ResourceNotFound("Donor", "Id", donorId));
            Event event = eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFound("Event", "Id", eventId));

            event.setGainedAmount(event.getGainedAmount()+pay.getAmount());
            donor.setAmount(donor.getAmount() + pay.getAmount());

            donorRepo.save(donor);
            eventRepo.save(event);


            pay2.setEvent(event);
            pay2.setDonor(donor);

            pay1 = paymentRepo.save(pay2);
        }


        return model.map(pay1, PaymentDto.class);
    }

    @Override
    public List<PaymentDto> getDonorPaymentHistory(Long donorId) {

        Donor donor = donorRepo.findById(donorId).orElseThrow(() -> new ResourceNotFound("Donor", "Id", donorId));
        List<Payment> list = paymentRepo.findPaymentByDonor(donor);

        return list.stream().map(pay -> model.map(pay, PaymentDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<PaymentDto> getEventPaymentHistory(Long eventId) {

        Event event = eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFound("Event" , "Id" , eventId));
        List<Payment> list = paymentRepo.findPaymentByEvent(event);

        return list.stream().map(pay -> model.map(pay, PaymentDto.class)).collect(Collectors.toList());
    }
}
