package com.seva.sangam.exception;

import com.seva.sangam.payload.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFound.class)
    public ResponseEntity<ApiResponse> resourceNotFoundException(ResourceNotFound ex){
        String msg = ex.getMessage();
        ApiResponse api = new ApiResponse(msg, false);
        return new ResponseEntity<>(api, HttpStatus.NOT_FOUND);
    }
}
