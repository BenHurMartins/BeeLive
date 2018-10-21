package com.beelive.beelive.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beelive.beelive.domain.HiveAndBee;
import com.beelive.beelive.repository.HiveAndBeeRepository;

@Service
public class HiveAndBeeService {

	@Autowired
	private HiveAndBeeRepository hiveRepository;

	public List<HiveAndBee> findAllHives() {
		return hiveRepository.findAll();
	}

	public HiveAndBee save(HiveAndBee hive) {
		hive.setDateCreation(new Date());
		hive.setDateFinal(new Date());
		return hiveRepository.save(hive);
	}

	public HiveAndBee put(HiveAndBee hive) {
		hive.setDateFinal(new Date());
		return hiveRepository.save(hive);
	}

}
