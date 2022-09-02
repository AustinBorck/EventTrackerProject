package com.skilldistillery.hiketracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hiketracker.entities.Hike;

public interface HikeRepository extends JpaRepository<Hike, Integer>{

}
