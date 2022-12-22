package com.example.demo.util;

import org.springframework.stereotype.Component;

import com.example.demo.model.Customer;

@Component
public class CustomerUtil {
public void mapToActualObject(Customer actual, Customer CustomerService) {
		
		actual.setCustomer_name(CustomerService.getCustomer_name());
		actual.setCustomer_id(CustomerService.getCustomer_id());
		actual.setCategory(CustomerService.getCategory());
		actual.setProduct_id(CustomerService.getProduct_id());
		actual.setBidding_price(CustomerService.getBidding_price());
		
	}

}
