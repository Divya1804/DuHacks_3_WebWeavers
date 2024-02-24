package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDonorDto {
    private Long donorId;
    private String donorName;
    private Long phoneNo;
    private String photoLink;
    private String occupation;
    private String address;
    private String password;
}
