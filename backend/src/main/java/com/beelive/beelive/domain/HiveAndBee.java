package com.beelive.beelive.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class HiveAndBee {

	private @Id @GeneratedValue Long id;

	private Date dateCreation;
	private Date dateFinal;
	private int size;
	private String beeSpecies;
	private Boolean hive;
	
	@OneToOne
	private Coordinates coordinates;

}
