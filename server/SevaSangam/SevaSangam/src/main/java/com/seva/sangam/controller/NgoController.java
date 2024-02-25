package com.seva.sangam.controller;

import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.*;
import com.seva.sangam.paging.NgoListPage;
import com.seva.sangam.service.NgoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ngo")
@CrossOrigin
public class NgoController {

    @Autowired
    private NgoServices ngoServices;

    @PostMapping("/")
    private ResponseEntity<NgoAdminDto> createNgo(@RequestBody NgoAdminDto ngoAdminDto){
        NgoAdminDto dto = ngoServices.createNgo(ngoAdminDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @GetMapping("/ngoId/{ngoId}")
    private ResponseEntity<?> ngoById(@PathVariable("ngoId") Long ngoId){
        NgoById nbi = ngoServices.ngoById(ngoId);
        return new ResponseEntity<NgoById>(nbi, HttpStatus.OK);
    }

    @PutMapping("/{ngoId}")
    private ResponseEntity<NgoAdminDto> updateNgo(@RequestBody NgoAdminDto ngo, @PathVariable("ngoId") Long ngoId){
        NgoAdminDto dto = ngoServices.updateNgo(ngo, ngoId);
        return new ResponseEntity<>(dto, HttpStatus.ACCEPTED);
    }

    @GetMapping("/all/{pagenumber}/{pagesize}")
    private ResponseEntity<NgoListPage> getAllNgo(@PathVariable("pagenumber") Integer pageNumber, @PathVariable("pagesize") Integer pageSize){
        NgoListPage ngoListPage = ngoServices.getAllNgo(pageNumber, pageSize);
        return new ResponseEntity<NgoListPage>(ngoListPage, HttpStatus.OK);
    }

    @GetMapping("/home/{ngoId}/")
    private ResponseEntity<?> homeNgo(@PathVariable("ngoId") Long ngoId){
        return new ResponseEntity<HomeNgo>(ngoServices.homeNgo(ngoId), HttpStatus.OK);
    }

    @GetMapping("/{ngoId}")
    private ResponseEntity<NgoAdminDto> getNgoById(@PathVariable("ngoId") Long ngoId){
        NgoAdminDto dto = ngoServices.getNgoById(ngoId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/event/{ngoId}")
    private ResponseEntity<?> getAllEventByNgoId(@PathVariable("ngoId") Long ngoId)
    {
        return new ResponseEntity<List<EventCard>>(ngoServices.getAllEventByNgoId(ngoId), HttpStatus.OK);
    }

    @GetMapping("/{username}/{password}")
    private ResponseEntity<?> loginNgo(@PathVariable("username") String userName, @PathVariable("password") String password)
    {
        NgoAdminDto ngoAdminDto= ngoServices.loginNgoAdmin(userName, password);

        if(ngoAdminDto != null)
        {
            return new ResponseEntity<Long>(ngoAdminDto.getNgoId(), HttpStatus.ACCEPTED);
        }
        throw  new ResourceNotFound("username and password not found for ngo", "", Long.parseLong("-1"));
    }

    @GetMapping("/all")
    private ResponseEntity<List<AllNgoInDonor>> getAllNgo(){
        System.out.println("getallngo");
        List<AllNgoInDonor> allNgoInDonors = ngoServices.getAllNgo();
        return new ResponseEntity<List<AllNgoInDonor>>(allNgoInDonors, HttpStatus.OK);
    }

}
