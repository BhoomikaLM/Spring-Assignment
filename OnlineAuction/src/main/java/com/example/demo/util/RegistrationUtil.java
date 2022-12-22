package com.example.demo.util;

import org.springframework.stereotype.Component;
import com.example.demo.model.Registration;

@Component
public class RegistrationUtil {
public void mapToActualObject(Registration actual, Registration RegistrationService) {
		
		actual.setFirst_name(RegistrationService.getFirst_name());
		actual.setLast_name(RegistrationService.getLast_name());
		actual.setAge(RegistrationService.getAge());
		actual.setRole(RegistrationService.getRole());
		actual.setPhone(RegistrationService.getPhone());
		actual.setEmail(RegistrationService.getEmail());
		actual.setPassword(RegistrationService.getPassword());
		actual.setConfirm_password(RegistrationService.getConfirm_password());
		
	}

}
