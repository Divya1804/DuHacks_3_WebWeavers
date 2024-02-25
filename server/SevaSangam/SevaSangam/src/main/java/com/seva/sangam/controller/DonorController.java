package com.seva.sangam.controller;

import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.DonorDto;
import com.seva.sangam.payload.UpdateDonorDto;
import com.seva.sangam.payload.UserById;
import com.seva.sangam.service.DonorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/donor")
@CrossOrigin
public class DonorController {

    @Autowired
    private DonorServices donorServices;

    @GetMapping("/{donorId}")
    private ResponseEntity<DonorDto> getDonorById(@PathVariable("donorId") Long dId){
        DonorDto dto = donorServices.getDonorById(dId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("/")
    private ResponseEntity<DonorDto> createDonor(@RequestBody DonorDto dto){

        DonorDto donorDto = donorServices.createDonor(dto);
        return new ResponseEntity<>(donorDto, HttpStatus.OK);
    }

    @PutMapping("/{dId}")
    private ResponseEntity<DonorDto> updateDonor(@RequestBody UpdateDonorDto donorDto, @PathVariable("dId") Long dId){
        DonorDto dto = donorServices.updateDonor(donorDto, dId);

        return new ResponseEntity<> (dto, HttpStatus.OK);
    }

    //donator profile by id
    @GetMapping("/profile/{dId}/{pagenumber}/{pagesize}")
    private ResponseEntity<UserById> getDonatorProfileById(@PathVariable("dId") Long dId, @PathVariable("pagenumber") Integer pageNumber, @PathVariable("pagesize") Integer pageSize){
        UserById u = donorServices.getDonatorProfileById(dId, pageNumber, pageSize);
        return new ResponseEntity<UserById> (u, HttpStatus.OK);
    }

    @GetMapping("/{username}/{password}")
    private ResponseEntity<?> loginDonor(@PathVariable("username") String userName, @PathVariable("password") String password)
    {
        DonorDto donorDto = donorServices.loginDonor(userName, password);

        if(donorDto != null)
        {
            System.out.println(donorDto.getUsername());
            return new ResponseEntity<Long>(donorDto.getDonorId(), HttpStatus.ACCEPTED);
        }
        System.out.println("exception");
        throw  new ResourceNotFound("username and password not found for donor", "", Long.parseLong("-1"));
    }
}
