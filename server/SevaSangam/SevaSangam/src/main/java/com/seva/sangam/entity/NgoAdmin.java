package com.seva.sangam.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class NgoAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ngoId;

    @Column(name = "ngo_name")
    private String ngoName;

    @Column(name = "ngo_slogan")
    private String slogan;

    @Column(name = "ngo_location")
    private String location;

    @Column(name = "ngo_certi", length = 2000)
    private String certiLink;

    @Column(name = "ngo_logo", length = 2000)
    private String logoLink;

    @Column(name = "ngo_about", length = 4000)
    private String about;

    @Column(name = "ngo_username", unique = true, nullable = false)
    private String ngoUserName;

    @Column(name = "ngo_password", nullable = false)
    private String ngoPassword;

    @Column(name = "ngo_email")
    private String ngoEmail;

    @Column(name = "ngo_phoneno")
    private Long ngoPhoneNo;

    @OneToMany(mappedBy = "ngoAdmin", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Event> eventList;

    private String merchantId;
    private String secretKey;
    private String payEmail;
    private Long payPhoneNo;

}
