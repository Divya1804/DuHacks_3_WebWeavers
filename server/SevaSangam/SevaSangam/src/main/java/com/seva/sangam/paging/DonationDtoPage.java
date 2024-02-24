package com.seva.sangam.paging;

import com.seva.sangam.payload.DonationDto;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@RequiredArgsConstructor
public class DonationDtoPage {
    private List<DonationDto> donations = new ArrayList<>();
    private Integer pageNumber, pageSize, totalPages;
    private Long totalElements;

    Boolean isLast;
}
