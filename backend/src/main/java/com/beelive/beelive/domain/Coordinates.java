package com.beelive.beelive.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import lombok.Data;

@Data
@Entity
public class Coordinates {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String latitude;
	private String longitude;
	
	@OneToOne
	@PrimaryKeyJoinColumn
	private HiveAndBee hiveAndBee;
	
}
