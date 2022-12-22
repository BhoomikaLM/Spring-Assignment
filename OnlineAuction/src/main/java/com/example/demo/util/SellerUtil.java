package com.example.demo.util;
import org.springframework.stereotype.Component;
import com.example.demo.model.Seller;

@Component
public class SellerUtil {
	public void mapToActualObject(Seller actual, Seller SellerService) {
		
		actual.setName(SellerService.getName());
		actual.setId(SellerService.getId());
		actual.setCategory(SellerService.getCategory());
		actual.setPrice(SellerService.getPrice());
		
	}


}
