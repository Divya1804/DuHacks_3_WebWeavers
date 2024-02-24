package com.seva.sangam.service;

import com.seva.sangam.payload.DonorDto;
import com.seva.sangam.payload.EventCard;
import com.seva.sangam.payload.UpdateDonorDto;
import com.seva.sangam.payload.UserById;

import java.util.List;

public interface DonorServices {

    DonorDto getDonorById(Long dId);
    DonorDto createDonor(DonorDto donorDto);

    DonorDto updateDonor(UpdateDonorDto donorDto, Long dId);
    UserById getDonatorProfileById(Long did, Integer pageNumber, Integer pageSize);

    DonorDto loginDonor(String username, String password);

}
