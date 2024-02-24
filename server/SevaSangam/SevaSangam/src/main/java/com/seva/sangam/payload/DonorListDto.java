package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DonorListDto {
    private String photoLink;
    private String donorName;
    private String eventName;
    private Long amount=(long) 0;
    private String email;
    private Long phone;
    private Long eventId;
    private Long ngoId;
    private LocalDate date;
}
