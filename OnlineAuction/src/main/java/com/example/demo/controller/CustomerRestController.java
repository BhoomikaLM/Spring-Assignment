package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.Seller;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.service.ICustomerService;
import com.example.demo.util.CustomerUtil;

@RestController
@RequestMapping("/rest/customer")
@CrossOrigin("*")
public class CustomerRestController {
	private Logger log = LoggerFactory.getLogger(SellerRestController.class);

	@Autowired
	private ICustomerService service;
	@Autowired
	private CustomerUtil util;
	@Autowired
	private ICustomerRepository feed;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveCustomer(
			@RequestBody Customer customer)
	{
		log.info("Entered into method with Customer data to save");

		ResponseEntity<String> resp = null;
		try {

			log.info("About to call save Operation");

			Integer id = service.saveCustomer(customer);
			log.debug("Customer saved with id "+id);

			String body = "Customer '"+id+"' created";

			resp =  new ResponseEntity<String>(body,	HttpStatus.CREATED); //201

			log.info("Sucess response constructed");
		} catch (Exception e) {
			log.error("Unable to save Customer : problem is :"+e.getMessage());
			resp =  new ResponseEntity<String>(
					"Unable to Create Customer", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}

		log.info("About to Exist save method with Response");
		return resp;
	}
	
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllCustomer() {
		log.info("Entered into method to fetch Customer data");
		ResponseEntity<?> resp = null ;
		try {

			log.info("About to call fetch Customer service");
			List<Customer> list = service.getAllCustomer();
			if(list!=null && !list.isEmpty()) {
				log.info("Data is not empty=>"+list.size());
				list.sort((s1,s2)->s1.getCustomer_name().compareTo(s2.getCustomer_name()));
				/* JDK 1.8
				list = list.stream()
						.sorted((s1,s2)->s1.getName().compareTo(s2.getName()))
						.collect(Collectors.toList());
				 */
				resp = new ResponseEntity<List<Customer>>(list, HttpStatus.OK);
			} else {
				log.info("No Customer exist: size "+list.size());

				//resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
				resp = new ResponseEntity<String>(
						"No Customer Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {
			log.error("Unable to fetch Customer : problem is :"+e.getMessage());

			resp =  new ResponseEntity<String>(
					"Unable to Fetch Customer", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		log.info("About to Exist fetch all method with Response");
		return resp;
	}
	
	
	@GetMapping("/one/{id}")
	public ResponseEntity<?> getOneCustomer(
			@PathVariable Integer id
			) 
	{
		log.info("Entered into Get one Customer method");
		ResponseEntity<?> resp = null;
		try {
			log.info("About to make service call to fetch one record");
			Optional<Customer> opt =  service.getOneCustomer(id);
			if(opt.isPresent()) {
				log.info("Customer exist=>"+id);
				resp = new ResponseEntity<Customer>(opt.get(), HttpStatus.OK);
				//resp = ResponseEntity.ok(opt.get());
			} else {
				log.warn("Given Customer id not exist=>"+id);
				resp = new ResponseEntity<String>(
						"Customer '"+id+"' not exist", 
						HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Unable to process request fetch " + e.getMessage());
			resp = new ResponseEntity<String>(
					"Unable to process Customer fetch", 
					HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}

		return resp;
	}
	
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<String> removeCustomer(
			@PathVariable Integer id
			)
	{

		log.info("Entered into delete method");
		ResponseEntity<String> resp = null;

		try {

			log.info("About to make service call for data check");
			boolean exist = service.isCustomerExist(id);
			if(exist) {
				service.deleteCustomer(id);
				log.info("Customer exist with given id and deleted=>"+id);
				resp = new ResponseEntity<String>(
						"Customer '"+id+"' deleted",
						HttpStatus.OK);
			} else {
				log.warn("Given Customer id not exist =>"+id);
				resp = new ResponseEntity<String>(
						"Customer '"+id+"' not exist",
						HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Unable to perform Delete Operation =>" + e.getMessage());
			resp = new ResponseEntity<String>(
					"Unable to delete", 
					HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}

		return resp;
	}
	
	@PutMapping("/modify/{id}")
	public ResponseEntity<String> updateCustomer(
			@PathVariable Integer id,
			@RequestBody Customer customer
			)
	{
		log.info("Entered into Update method");

		ResponseEntity<String> resp =null;

		try {
			log.info("About to check given id exist or not db");
			Optional<Customer> opt =  service.getOneCustomer(id);
			if(opt.isPresent()) {
				log.info("Customer present in database");
				Customer actual = opt.get();
				util.mapToActualObject(actual,customer);
				service.updateCustomer(actual);
				resp = new ResponseEntity<String>(
						"Customer '"+id+"' Updated", 
						//HttpStatus.RESET_CONTENT
						HttpStatus.OK
						);
				log.info("Customer update done successfully");
			} else {
				log.info("Customer not exist=>"+id);
				resp = new ResponseEntity<String>(
						"Customer '"+id+"' not found", 
						//HttpStatus.RESET_CONTENT
						HttpStatus.BAD_REQUEST
						);
			}

		} catch (Exception e) {
			log.error("Unable to perform Update Operation=>" + e.getMessage() );
			resp = new ResponseEntity<String>(
					"Unable to process Update",
					HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}

		return resp;
	}
}
