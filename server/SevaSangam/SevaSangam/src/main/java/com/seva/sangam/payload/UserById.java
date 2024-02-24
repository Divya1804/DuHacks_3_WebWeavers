package com.seva.sangam.payload;

import com.seva.sangam.paging.DonationDtoPage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserById {

    private String address;
    private String donorName;
    private String email;
    private Long phoneNo;
    private String occupation;
    private String photoLink;
    private Long amount=(long) 0; //disable
    //    private List<DonationDto> donations = new ArrayList<>();
    private DonationDtoPage donations;
}
