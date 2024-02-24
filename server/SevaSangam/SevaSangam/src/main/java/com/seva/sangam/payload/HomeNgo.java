package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HomeNgo {
    private List<EventCard> evCard;
    private List<EventCard> prEventCard;
    private List<DonorListDto> donors;
}
