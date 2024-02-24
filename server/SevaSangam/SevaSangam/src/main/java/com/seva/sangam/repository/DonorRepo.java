package com.seva.sangam.repository;

import com.seva.sangam.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepo extends JpaRepository<Donor, Long> {

    Donor findDonorByUsernameAndPassword(String username, String password);
}
