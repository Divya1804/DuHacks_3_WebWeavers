package com.seva.sangam.service.impl;

import com.seva.sangam.entity.Event;
import com.seva.sangam.entity.NgoAdmin;
import com.seva.sangam.entity.Payment;
import com.seva.sangam.exception.ResourceNotFound;
import com.seva.sangam.payload.*;
import com.seva.sangam.paging.NgoListPage;
import com.seva.sangam.repository.EventRepo;
import com.seva.sangam.repository.NgoRepo;
import com.seva.sangam.service.NgoServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class NgoServiceImpl implements NgoServices {

    @Autowired
    private NgoRepo ngoRepo;
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private ModelMapper model;

    @Override
    public NgoAdminDto createNgo(NgoAdminDto ngoAdminDto) {
        NgoAdmin ngo = model.map(ngoAdminDto, NgoAdmin.class);
        NgoAdmin ngo1 = ngoRepo.save(ngo);
        return model.map(ngo1, NgoAdminDto.class);
    }

    @Override
    public NgoAdminDto updateNgo(NgoAdminDto ngoAdminDto, Long ngoId) {
        NgoAdmin admin = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo", "Id", ngoId));

        admin.setNgoId(ngoId);
        admin.setNgoName(ngoAdminDto.getNgoName());
        admin.setSlogan(ngoAdminDto.getSlogan());
        admin.setAbout(ngoAdminDto.getAbout());
        admin.setCertiLink(ngoAdminDto.getCertiLink());
        admin.setLogoLink(ngoAdminDto.getLogoLink());
        admin.setLocation(ngoAdminDto.getLocation());
        admin.setMerchantId(ngoAdminDto.getMerchantId());
        admin.setSecretKey(ngoAdminDto.getSecretKey());
        admin.setPayEmail(ngoAdminDto.getPayEmail());
        admin.setPayPhoneNo(ngoAdminDto.getPayPhoneNo());
        admin.setNgoPhoneNo(ngoAdminDto.getNgoPhoneNo());

        NgoAdmin ngoAdmin = ngoRepo.save(admin);
        return model.map(ngoAdmin, NgoAdminDto.class);
    }

    @Override
    public NgoById ngoById(Long ngoId) {
        NgoAdmin ngo = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo", "Id", ngoId));

        NgoById ngo1 = new NgoById();

        ngo1.setNgoEmail(ngo.getNgoEmail());
        ngo1.setNgoLocation(ngo.getLocation());
        ngo1.setNgoPhoneNo(ngo.getNgoPhoneNo());
        ngo1.setAbout(ngo.getAbout());
        ngo1.setNgoName(ngo.getNgoName());
        ngo1.setLogoLink(ngo.getLogoLink());
        ngo1.setCertiLink(ngo.getCertiLink());
        ngo1.setSlogan(ngo.getSlogan());
        ngo1.setNgoId(ngoId);

        List<Event> current = eventRepo.findByNgoAdminAndEndDateGreaterThanEqualOrderByStartDateAsc(ngo, LocalDate.now());
        List<Event> previous = eventRepo.findByNgoAdminAndEndDateLessThanOrderByEndDateDesc(ngo, LocalDate.now());

        List<EventCard> cur = new ArrayList<>();
        List<EventCard> pre = new ArrayList<>();

        for(Event i : current){
            EventCard ec = getCard(i);

            cur.add(ec);
        }

        for(Event i : previous){
            EventCard ec = getCard(i);

            pre.add(ec);
        }

        ngo1.setUpcomingEvents(cur);
        ngo1.setPreviousEvents(pre);

        return ngo1;
    }
    private List<EventCard> EventToCard(List<Event> e)
    {
        List<EventCard> list = new ArrayList<>();

        for(Event i : e)
        {
            EventCard ec = new EventCard();

            ec.setEventId(i.getEventId());
            ec.setEventName(i.getEventName());
            ec.setLocation(i.getLocation());
            ec.setDescription(i.getDetails());
            ec.setNgoId(i.getNgoAdmin().getNgoId());
            ec.setNgoName(i.getNgoAdmin().getNgoName());
            ec.setPhotoLink(i.getPhoto());
            ec.setStartDate(i.getStartDate());
            ec.setEndDate(i.getEndDate());
            ec.setRaisedFund(i.getGainedAmount());
            ec.setRequiredFund(i.getRequiredAmount());
            ec.setType(i.getType());
            ec.setPublic_key(i.getNgoAdmin().getMerchantId());

            list.add(ec);
        }
        return list;
    }

    @Override
    public HomeNgo homeNgo(Long ngoId) {
        HomeNgo ngo = new HomeNgo();
        NgoAdmin n1 = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo", "Id", ngoId));

        List<Event> eve = eventRepo.findByNgoAdminAndEndDateGreaterThanEqualOrderByStartDateAsc(n1, LocalDate.now());
        List<EventCard> eventCards = EventToCard(eve);

        List<Event> preve = eventRepo.findByNgoAdminAndEndDateLessThanEqualOrderByStartDateDesc(n1, LocalDate.now());
        List<EventCard> preventCards = EventToCard(preve);

        List<Payment> pay = new ArrayList<>();
        List<DonorListDto> dld = new ArrayList<>();
        List<Event> events = n1.getEventList();
        for (Event i : events){
            pay = i.getPayments();
            for (Payment p : pay){
                DonorListDto donor = new DonorListDto();

                donor.setEventId(i.getEventId());
                donor.setNgoId(ngoId);
                donor.setEmail(p.getDonor().getEmail());
                donor.setPhone(p.getDonor().getPhoneNo());
                donor.setAmount(p.getAmount());
                donor.setPhotoLink(p.getDonor().getPhotoLink());
                donor.setDonorName(p.getDonor().getDonorName());
                donor.setDate(p.getDate());
                donor.setEventName(i.getEventName());

                dld.add(donor);
            }
        }

        Collections.sort(dld, new Comparator<DonorListDto>() {
            @Override
            public int compare(DonorListDto donor1, DonorListDto donor2) {
                // Compare the amounts in descending order
                return donor2.getAmount().compareTo(donor1.getAmount());
            }
        });

        ngo.setDonors(dld);
        ngo.setEvCard(eventCards);
        ngo.setPrEventCard(preventCards);
        return ngo;
    }

    @Override
    public List<EventCard> getAllEventByNgoId(Long ngoId) {
        NgoAdmin ngoAdmin = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo", "Id", ngoId));
        List<Event> eve = eventRepo.findByNgoAdminOrderByStartDateDesc(ngoAdmin);
        return EventToCard(eve);
    }

    @Override
    public NgoAdminDto loginNgoAdmin(String username, String password) {
        NgoAdmin ngoAdmin = ngoRepo.findNgoAdminByNgoUserNameAndNgoPassword(username, password);

        if(ngoAdmin == null)
        {
            throw  new ResourceNotFound("username and password not found for ngo", "", Long.parseLong("-1"));
        }
        return model.map(ngoAdmin, NgoAdminDto.class);
    }

    @Override
    public NgoListPage getAllNgo(Integer pageNumber, Integer pageSize) {
        Pageable page = PageRequest.of(pageNumber, pageSize);
        Page<NgoAdmin> ngoAdmins = ngoRepo.findAll(page);
        NgoListPage ngoListPage = new NgoListPage();
        List<AllNgoInDonor> allList= new ArrayList<>();
        for(NgoAdmin i: ngoAdmins)
        {
            AllNgoInDonor ngo=new AllNgoInDonor();
            ngo.setNgoName(i.getNgoName());
            ngo.setNgoId(i.getNgoId());
            ngo.setSlogan(i.getSlogan());
            ngo.setLocation(i.getLocation());
            ngo.setPhoneNo(i.getNgoPhoneNo());
            ngo.setLogo(i.getLogoLink());

            List<Event> e = eventRepo.findByNgoAdminAndEndDateLessThanEqualOrderByStartDateDesc(i, LocalDate.now());
            int p =  e.size();
            ngo.setTotalPreEvent((long) p);

            allList.add(ngo);
        }
        ngoListPage.setPageNumber(pageNumber);
        ngoListPage.setTotalPages(ngoAdmins.getTotalPages());
        ngoListPage.setTotalElements(ngoAdmins.getTotalElements());
        ngoListPage.setPageSize(pageSize);
        ngoListPage.setIsLast(ngoAdmins.isLast());
        ngoListPage.setNgoList(allList);

        return ngoListPage;
    }

    private static EventCard getCard(Event i) {
        EventCard ec = new EventCard();

        ec.setEventId(i.getEventId());
        ec.setEventName(i.getEventName());
        ec.setLocation(i.getLocation());
        ec.setDescription(i.getDetails());
        ec.setNgoId(i.getNgoAdmin().getNgoId());
        ec.setNgoName(i.getNgoAdmin().getNgoName());
        ec.setPhotoLink(i.getPhoto());
        ec.setStartDate(i.getStartDate());
        ec.setEndDate(i.getEndDate());
        ec.setRaisedFund(i.getGainedAmount());
        ec.setRequiredFund(i.getRequiredAmount());
        ec.setType(i.getType());
        ec.setPublic_key(i.getNgoAdmin().getMerchantId());
        return ec;
    }

    @Override
    public List<AllNgoInDonor> getAllNgo() {
        //Sort sort = Sort.by("date").descending();
//        Pageable page = PageRequest.of(pageNumber, pageSize);
//        List<Payment> p=d1.getPayments();
//        Page<NgoAdmin> ngoAdmins = ngoRepo.findAll(page);
//        NgoListPage ngoListPage = new NgoListPage();
        List<NgoAdmin> list = ngoRepo.findAll();

        List<AllNgoInDonor> allList= new ArrayList<>();

        for(NgoAdmin i: list)
        {
            AllNgoInDonor ngo=new AllNgoInDonor();

            ngo.setNgoName(i.getNgoName());
            ngo.setNgoId(i.getNgoId());
            ngo.setSlogan(i.getSlogan());
            ngo.setLocation(i.getLocation());
            ngo.setPhoneNo(i.getNgoPhoneNo());

            ngo.setLogo(i.getLogoLink());

            List<Event> e = eventRepo.findByNgoAdminAndEndDateLessThanEqualOrderByStartDateDesc(i, LocalDate.now());
            int p =  e.size();
            ngo.setTotalPreEvent((long) p);

            allList.add(ngo);
        }
        return allList;
    }

    @Override
    public NgoAdminDto getNgoById(Long ngoId) {
        NgoAdmin admin = ngoRepo.findById(ngoId).orElseThrow(() -> new ResourceNotFound("Ngo" , "Id", ngoId));

        return model.map(admin, NgoAdminDto.class);
    }
}
