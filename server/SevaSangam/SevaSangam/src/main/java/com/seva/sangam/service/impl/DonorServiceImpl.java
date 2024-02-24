package com.seva.sangam.service.impl;


import com.seva.sangam.entity.Donor;
import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.Payment;
import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.paging.DonationDtoPage;
import com.seva.sangam.payload.*;
import com.seva.sangam.repository.DonorRepo;
import com.seva.sangam.repository.EventRepo;
import com.seva.sangam.repository.PaymentRepo;
import com.seva.sangam.service.DonorServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class DonorServiceImpl implements DonorServices {

    @Autowired
    private EventRepo eventRepo;
    @Autowired
    private DonorRepo donorRepo;

    @Autowired
    private PaymentRepo paymentRepo;

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

    @Override
    public UserById getDonatorProfileById(Long did, Integer pageNumber, Integer pageSize) {

        Donor d1 = donorRepo.findById(did).orElseThrow(() -> new ResourceNotFound("User", "Id", did));

        UserById u = new UserById();

        u.setAddress(d1.getAddress());
        u.setEmail(d1.getEmail());
        u.setAmount(d1.getAmount());
        u.setOccupation(u.getOccupation());
        u.setPhoneNo(d1.getPhoneNo());
        u.setPhotoLink(d1.getPhotoLink());
        u.setDonorName(d1.getDonorName());



        Sort sort = Sort.by("date").descending();
        Pageable page = PageRequest.of(pageNumber, pageSize, sort);
//        List<Payment> p=d1.getPayments();
        Page<Payment> p = paymentRepo.findPaymentByDonor(d1, page);
        DonationDtoPage donationDtoPage = new DonationDtoPage();

        donationDtoPage.setPageNumber(p.getNumber());
        donationDtoPage.setPageSize(p.getSize());
        donationDtoPage.setTotalPages(p.getTotalPages());
        donationDtoPage.setTotalElements(p.getTotalElements());

        donationDtoPage.setIsLast(p.isLast());


        List<DonationDto> don = new ArrayList<>();

        for(Payment i:p)
        {
            DonationDto d = new DonationDto();

            d.setAmount(i.getAmount());
            d.setDate(i.getDate());


            d.setEventName(i.getEvent().getEventName());
            d.setNgoName(i.getEvent().getNgoAdmin().getNgoName());

            don.add(d);
        }
        donationDtoPage.setDonations(don);
        u.setDonations(donationDtoPage);
        return u;
    }

    @Override
    public DonorDto loginDonor(String username, String password) {

//        System.out.println("donor finding start");
        Donor donorDto = donorRepo.findDonorByUsernameAndPassword(username,password);

//        System.out.println("donor not find");

        if(donorDto == null)
        {
            throw  new ResourceNotFound("username and password not found", "", Long.parseLong("-1"));

        }


        return model.map(donorDto,DonorDto.class);
    }



}
