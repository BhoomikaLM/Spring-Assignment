package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.service.ICustomerService;

@Service
public class CustomerServiceImpl implements ICustomerService 
{
	@Autowired
	private ICustomerRepository repo;
	
	@Override
	public Integer saveCustomer(Customer c) {
		c = repo.save(c);
		return c.getCustomer_id();
	}

	@Override
	public void updateCustomer(Customer c) {
		repo.save(c);
	}

	@Override
	public void deleteCustomer(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public Optional<Customer> getOneCustomer(Integer id) {
		return repo.findById(id);
	}

	@Override
	public List<Customer> getAllCustomer() {
		return repo.findAll();
	}

	@Override
	public boolean isCustomerExist(Integer id) {
		return repo.existsById(id);
	}

}
