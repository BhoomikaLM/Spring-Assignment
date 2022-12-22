package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Registration;
import com.example.demo.repository.IRegisterRepository;
import com.example.demo.service.IRegistrationService;
import com.example.demo.service.ISellerService;

@Service
public class RegistrationServiceImpl implements IRegistrationService
{
	@Autowired
	private IRegisterRepository repo;
	
	@Override
	public Integer saveRegistration(Registration r) {
		r = repo.save(r);
		return r.getPhone();
	}
	
}
