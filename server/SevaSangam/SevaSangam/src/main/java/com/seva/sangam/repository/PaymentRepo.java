package com.seva.sangam.repository;

import com.seva.sangam.entity.Donor;
import com.seva.sangam.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

    Page<Payment> findPaymentByDonor(Donor d1, Pageable page);
}
