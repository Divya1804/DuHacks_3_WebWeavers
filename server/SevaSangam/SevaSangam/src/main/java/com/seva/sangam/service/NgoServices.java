package com.seva.sangam.service;
import com.seva.sangam.payload.HomeNgo;
import com.seva.sangam.payload.NgoAdminDto;
import com.seva.sangam.payload.NgoById;
import com.seva.sangam.payload.paging.NgoListPage;

public interface NgoServices {
    NgoAdminDto createNgo(NgoAdminDto ngoAdminDto);
    NgoAdminDto updateNgo(NgoAdminDto ngoAdminDto, Long ngoId);
    NgoListPage getAllNgo(Integer pageNumber, Integer pageSize);
    NgoById ngoById(Long ngoId);

    HomeNgo homeNgo(Long ngoId);
}
