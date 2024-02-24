package com.seva.sangam.payload;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NgoAdminDto {
    private Long ngoId;
    private String ngoName;  //change
    private String slogan;  //change
    private String location;  //change
    private String certiLink;  //change
    private String logoLink;  //change
    private String about;  //change
    private String ngoUserName;
    private String ngoPassword;  //changes
    private String ngoEmail;
    private Long ngoPhoneNo;
    private String merchantId;
    private String secretKey;
    private String payEmail;
    private Long payPhoneNo;
    @JsonIgnore
    private List<EventCardDto> eventList;
}
