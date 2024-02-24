package com.seva.sangam.controller;

import com.seva.sangam.payload.DonorDto;
import com.seva.sangam.payload.UpdateDonorDto;
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
}
