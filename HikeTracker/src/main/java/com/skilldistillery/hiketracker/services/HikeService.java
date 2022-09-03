package com.skilldistillery.hiketracker.services;

import java.util.List;

import com.skilldistillery.hiketracker.entities.Hike;

public interface HikeService {

	List<Hike> index();

	Hike singleHike(Integer id);

	List<Hike> findByKeyword(String keyword);

	Hike makeHike(Hike hike);

	Hike updateHike(Integer id, Hike hike);

	boolean deleteHike(Integer id);

	List<Hike> findByLength(double low, double high);

	List<Hike> findByDifficulty(Integer num);
}
