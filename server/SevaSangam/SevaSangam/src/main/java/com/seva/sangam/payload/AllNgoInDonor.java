package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AllNgoInDonor {

    private String ngoName;
    private String location;
    private Long phoneNo;
    private Long totalPreEvent;
    private String slogan;
    private Long ngoId;
    private String logo;
}
