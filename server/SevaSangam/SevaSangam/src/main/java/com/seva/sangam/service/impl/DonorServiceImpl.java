package com.seva.sangam.service.impl;


import com.seva.sangam.entity.Donor;
import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.DonorDto;
import com.seva.sangam.payload.UpdateDonorDto;
import com.seva.sangam.repository.DonorRepo;
import com.seva.sangam.service.DonorServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonorServiceImpl implements DonorServices {

    @Autowired
    private DonorRepo donorRepo;

    @Autowired
    private ModelMapper model;
    @Override
    public DonorDto getDonorById(Long dId) {
        Donor donor = donorRepo.findById(dId).orElseThrow(() -> new ResourceNotFound("Donor", "Id", dId));
        return model.map(donor, DonorDto.class);
    }

    @Override
    public DonorDto createDonor(DonorDto donorDto) {
        Donor donor = model.map(donorDto, Donor.class);
        Donor donor1 = donorRepo.save(donor);
        return model.map(donor1, DonorDto.class);
    }

    @Override
    public DonorDto updateDonor(UpdateDonorDto donorDto, Long dId) {
        Donor donor = donorRepo.findById(dId).orElseThrow(() -> new ResourceNotFound("Donor", "Id", dId));

        donor.setDonorId(dId);
        donor.setDonorName(donorDto.getDonorName());  //Donor can change his/her name.
        donor.setPhotoLink(donorDto.getPhotoLink());  //Donor can change his/her photo.
//        donor.setPassword(donorDto.getPassword());  //Donor can change their password.
        donor.setPhoneNo(donorDto.getPhoneNo());    //donor can change its phone no.
        donor.setAddress(donorDto.getAddress());  //donor can change the address.
        donor.setOccupation(donorDto.getOccupation());  //donor can change the occupation.

        Donor donor1 = donorRepo.save(donor);
        return model.map(donor1, DonorDto.class);
    }

}
