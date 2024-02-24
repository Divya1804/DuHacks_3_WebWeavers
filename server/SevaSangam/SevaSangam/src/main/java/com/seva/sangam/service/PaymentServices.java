package com.seva.sangam.service;

import com.seva.sangam.payload.PaymentDto;

public interface PaymentServices {
    PaymentDto createPayment(PaymentDto paymentDto, Long donorId, Long eventId);
}
