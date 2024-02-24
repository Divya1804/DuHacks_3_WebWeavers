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
public class PaymentDto {

    private Long payId;
    private Long amount;
    private LocalDate date;
    private Long eventId;
    private Long donorId;
//    private EventDto eventDto;
//    private DonorDto donorDto;

}
