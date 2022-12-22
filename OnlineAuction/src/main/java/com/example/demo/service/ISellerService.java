package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import com.example.demo.model.Seller;

public interface ISellerService {
	Integer saveSeller(Seller s);
	void updateSeller(Seller s);
	void deleteSeller(Integer id);
	Optional<Seller> getOneSeller(Integer id);
	List<Seller> getAllSeller();
	boolean isSellerExist(Integer id);

}
