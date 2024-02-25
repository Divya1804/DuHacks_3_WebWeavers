package com.seva.sangam.controller;

import com.seva.sangam.payload.PaymentDto;
import com.seva.sangam.service.PaymentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentServices paymentServices;

    @PostMapping("/event/{eventId}/donor/{donorId}")
    private ResponseEntity<?> createPayment(@RequestBody PaymentDto paymentDto, @PathVariable("donorId") Long donorId, @PathVariable("eventId") Long eventId){
        PaymentDto dto = paymentServices.createPayment(paymentDto, donorId, eventId);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @GetMapping("/donor/{donorId}")
    private ResponseEntity<?> getDonorPaymentHistory(@PathVariable("donorId") Long donorId){
        List<PaymentDto> dtos = paymentServices.getDonorPaymentHistory(donorId);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/event/{eventId}")
    private ResponseEntity<?> getEventPaymentHistory(@PathVariable("eventId") Long eventId){
        List<PaymentDto> dtos = paymentServices.getEventPaymentHistory(eventId);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

}
