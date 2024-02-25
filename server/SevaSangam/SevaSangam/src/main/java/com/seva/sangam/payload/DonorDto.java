package com.seva.sangam.payload;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DonorDto {
    private Long donorId;
    private String donorName;
    private String username;
    private String password;
    private String email;
    private Long phoneNo;
    private String occupation;
    private String address;
    private Long amount= 0L;
    private String photoLink;
    //    private List<EventDto> events;
    @JsonIgnore
    private List<PaymentDto> payments;

}
