package com.example.backend.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
public class ErrorResponse {
    private HttpStatus error;
    private Integer status;
    private String message;
    private LocalDateTime timestamp;
}
