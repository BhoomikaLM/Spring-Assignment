package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Registration;
import com.example.demo.repository.IRegisterRepository;
import com.example.demo.service.IRegistrationService;
import com.example.demo.util.RegistrationUtil;


@RestController
@RequestMapping("/rest/register")
@CrossOrigin("*")
public class RegistrationRestController {
	private Logger log = LoggerFactory.getLogger(SellerRestController.class);

	@Autowired
	private IRegistrationService service;
	@Autowired
	private RegistrationUtil util;
	@Autowired
	private IRegisterRepository feed;

	@PostMapping("/save")
	public ResponseEntity<String> saveRegistration(
			@RequestBody Registration registration)
	{
		log.info("Entered into method with Registration data to save");

		ResponseEntity<String> resp = null;
		try {

			log.info("About to call save Operation");

			Integer id = service.saveRegistration(registration);
			log.debug("Registration saved with id "+id);

			String body = "Registration '"+id+"' created";

			resp =  new ResponseEntity<String>(body,	HttpStatus.CREATED); //201

			log.info("Sucess response constructed");
		} catch (Exception e) {
			log.error("Unable to save Registration : problem is :"+e.getMessage());
			resp =  new ResponseEntity<String>(
					"Unable to Create Registration", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}

		log.info("About to Exist save method with Response");
		return resp;
	}
}
