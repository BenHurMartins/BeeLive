package com.beelive.beelive.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Coordinates {
	
	private @Id @GeneratedValue Long id;
	private String latitude;
	private String longitude;
	
	@OneToOne
	private HiveAndBee hiveAndBee;
	
}
