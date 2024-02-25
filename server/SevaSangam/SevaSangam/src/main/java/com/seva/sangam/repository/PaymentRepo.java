package com.seva.sangam.repository;

import com.seva.sangam.entity.Donor;
import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

    List<Payment> findPaymentByDonor(Donor donor);
    List<Payment> findPaymentByEvent(Event event);

    Page<Payment> findPaymentByDonor(Donor donor, Pageable pageable);
}
