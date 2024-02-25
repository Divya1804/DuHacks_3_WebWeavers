package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventNgoId {
    private Long eId;
    private String EventName;
    private String photo;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long requiredAmount=(long) 0;
    private Long gainedAmount = (long) 0;
    private List<DonorListDto> donors;
}
