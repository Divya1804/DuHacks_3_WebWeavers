package com.seva.sangam.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donorId;

    @Column(name = "donor_name")
    private String donorName;

    @Column(name = "user_name",  unique = true, nullable = false)
    private String username;

    @Column(name = "user_password",  nullable = false)
    private String password;

    @Column(name = "user_email")
    private String email;

    @Column(name = "phone_no")
    private Long phoneNo;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "address")
    private String address;

    @Column(name = "paid_amount")
    private Long amount= 0L;

    @Column(name = "photo_link")
    private String photoLink;

    @OneToMany(mappedBy = "donor", cascade = CascadeType.ALL)
    private List<Payment> payments;
}
