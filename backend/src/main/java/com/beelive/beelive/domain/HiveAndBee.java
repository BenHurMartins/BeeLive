package com.beelive.beelive.domain;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class HiveAndBee {

	@Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

	private Date dateCreation;
	private Date dateFinal;
	private int size;
	private String beeSpecies;
	private Boolean hive;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Coordinates coordinates;

}
