package com.skilldistillery.hiketracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hiketracker.entities.Hike;

public interface HikeRepository extends JpaRepository<Hike, Integer>{

	List<Hike> findByNameContainingOrDescriptionContaining(String keyword, String keyword1);
	
	List<Hike> findByTrailLengthBetween(Double low, Double high);
	
	List<Hike> findByDifficulty(Integer num);
}
