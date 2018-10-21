package com.beelive.beelive.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.beelive.beelive.domain.HiveAndBee;
import com.beelive.beelive.service.HiveAndBeeService;

@RestController
public class HiveAndBeeResource {
	
	@Autowired
	private HiveAndBeeService hiveService;

	@RequestMapping(method = RequestMethod.GET, path = "/hive", value = "/hive", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<HiveAndBee>> findAll() {
		return new ResponseEntity<List<HiveAndBee>>(hiveService.findAllHives(), HttpStatus.OK); 
    }
	
	@RequestMapping(method = RequestMethod.POST, value = "/hive", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HiveAndBee> save(@RequestBody HiveAndBee hive) {
		return new ResponseEntity<HiveAndBee>(hiveService.save(hive), HttpStatus.OK); 
    }
	
	@RequestMapping(method = RequestMethod.PUT, value = "/hive", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HiveAndBee> put(@RequestBody HiveAndBee hive) {
		return new ResponseEntity<HiveAndBee>(hiveService.put(hive), HttpStatus.OK); 
    }

}
