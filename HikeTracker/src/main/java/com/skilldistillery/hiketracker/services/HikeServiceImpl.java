package com.skilldistillery.hiketracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hiketracker.entities.Hike;
import com.skilldistillery.hiketracker.repositories.HikeRepository;

@Service
public class HikeServiceImpl implements HikeService {

	@Autowired
	private HikeRepository hikeRepo;
	
	@Override
	public List<Hike> index() {
		return hikeRepo.findAll();
	}

	@Override
	public Hike singleHike(Integer id) {
		Hike hike = null;
		Optional<Hike> hikeOpt = hikeRepo.findById(id);
		hike = hikeOpt.get();
		return hike;
	}
}
