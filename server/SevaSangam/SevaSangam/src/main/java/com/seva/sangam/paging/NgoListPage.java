package com.seva.sangam.paging;


import com.seva.sangam.payload.AllNgoInDonor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class NgoListPage {
    List<AllNgoInDonor> ngoList;
    private Integer pageNumber, pageSize, totalPages;
    private Long totalElements;

    Boolean isLast;
}

