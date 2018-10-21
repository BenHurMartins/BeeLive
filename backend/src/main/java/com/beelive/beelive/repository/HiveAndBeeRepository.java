package com.beelive.beelive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beelive.beelive.domain.HiveAndBee;

@Repository
public interface HiveAndBeeRepository extends JpaRepository<HiveAndBee, Long>{

}
