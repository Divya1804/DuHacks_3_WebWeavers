package com.seva.sangam.payload;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private Long eventId;
    private String eventName;  //change

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;  //change

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;  //change

    private String details;  //change
    private Long gainedAmount=0L;
    private Long requiredAmount=0L;  //change
    private String photo;  //change
    private String type;  //change
    private String location;  //change
    @JsonIgnore
    private NgoAdminDto ngoAdmin;
    @JsonIgnore
    private List<PaymentDto> payments;
}

