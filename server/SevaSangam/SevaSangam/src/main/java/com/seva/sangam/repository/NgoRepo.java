package com.seva.sangam.repository;

import com.seva.sangam.entity.NgoAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NgoRepo extends JpaRepository<NgoAdmin, Long> {
    NgoAdmin findNgoAdminByNgoUserNameAndNgoPassword(String username, String password);
}
