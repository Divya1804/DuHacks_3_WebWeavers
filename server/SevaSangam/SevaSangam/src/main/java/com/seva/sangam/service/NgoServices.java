package com.seva.sangam.service;
import com.seva.sangam.payload.*;
import com.seva.sangam.paging.NgoListPage;

import java.util.List;

public interface NgoServices {
    NgoAdminDto createNgo(NgoAdminDto ngoAdminDto);
    NgoAdminDto updateNgo(NgoAdminDto ngoAdminDto, Long ngoId);
    NgoListPage getAllNgo(Integer pageNumber, Integer pageSize);
    NgoById ngoById(Long ngoId);

    HomeNgo homeNgo(Long ngoId);

    List<EventCard> getAllEventByNgoId(Long ngoId);

    NgoAdminDto loginNgoAdmin(String userName, String password);

    List<AllNgoInDonor> getAllNgo();

    NgoAdminDto getNgoById(Long ngoId);
}
