package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import com.example.demo.model.Customer;

public interface ICustomerService {
	Integer saveCustomer(Customer s);
	void updateCustomer(Customer s);
	void deleteCustomer(Integer id);
	Optional<Customer> getOneCustomer(Integer id);
	List<Customer> getAllCustomer();
	boolean isCustomerExist(Integer id);

}
