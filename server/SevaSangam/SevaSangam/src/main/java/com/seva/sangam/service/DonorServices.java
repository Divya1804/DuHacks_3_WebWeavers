package com.seva.sangam.service;

import com.seva.sangam.payload.DonorDto;
import com.seva.sangam.payload.UpdateDonorDto;

import java.util.List;

public interface DonorServices {

    DonorDto getDonorById(Long dId);
    DonorDto createDonor(DonorDto donorDto);

    DonorDto updateDonor(UpdateDonorDto donorDto, Long dId);

}
