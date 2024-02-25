package com.seva.sangam.service;

import com.seva.sangam.payload.PaymentDto;

import java.util.List;

public interface PaymentServices {
    PaymentDto createPayment(PaymentDto paymentDto, Long donorId, Long eventId);
    List<PaymentDto> getDonorPaymentHistory(Long donorId);
    List<PaymentDto> getEventPaymentHistory(Long eventId);
}
