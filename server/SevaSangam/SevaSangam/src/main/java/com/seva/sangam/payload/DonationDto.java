package com.seva.sangam.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DonationDto {
    private String eventName;
    private String ngoName;
    private Long Amount=(long) 0;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
}
