package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Seller;
import com.example.demo.repository.SellerRepository;
import com.example.demo.service.ISellerService;

@Service
public class SellerServiceImpl implements ISellerService
{
	@Autowired
	private SellerRepository repo;
	
	@Override
	public Integer saveSeller(Seller s) {
		s = repo.save(s);
		return s.getId();
	}

	@Override
	public void updateSeller(Seller s) {
		repo.save(s);
	}

	@Override
	public void deleteSeller(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public Optional<Seller> getOneSeller(Integer id) {
		return repo.findById(id);
	}

	@Override
	public List<Seller> getAllSeller() {
		return repo.findAll();
	}

	@Override
	public boolean isSellerExist(Integer id) {
		return repo.existsById(id);
	}
}
