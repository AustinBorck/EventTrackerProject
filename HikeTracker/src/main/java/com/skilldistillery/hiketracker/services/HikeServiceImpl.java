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
		if(hikeOpt.isPresent()) {
		hike = hikeOpt.get();
		}else if(!hikeOpt.isPresent()) {
			hike = null;
		}
		return hike;
	}
	
	@Override 
	public List<Hike> findByKeyword(String keyword){
		List<Hike> hikes = null;
		String keyword1 = keyword;
		hikes = hikeRepo.findByNameContainingOrDescriptionContaining(keyword, keyword1);
		return hikes;
	}
	
	@Override 
	public Hike makeHike(Hike hike) {
		hikeRepo.saveAndFlush(hike);
		return hike;
	}
	
	@Override
	public Hike updateHike(Integer id, Hike hike) {
	Optional<Hike> opHike = hikeRepo.findById(id);
	Hike updateMe = opHike.get();
	updateMe.setName(hike.getName());
	updateMe.setDescription(hike.getDescription());
	updateMe.setDifficulty(hike.getDifficulty());
	updateMe.setDogsAllowed(hike.getDogsAllowed());
	updateMe.setElevation(hike.getElevation());
	updateMe.setImageUrl(hike.getImageUrl());
	updateMe.setLatitude(hike.getLatitude());
	updateMe.setLongitude(hike.getLongitude());
	updateMe.setTrailLength(hike.getTrailLength());
	hikeRepo.save(updateMe);
		return updateMe;
	}
	
	@Override
	public boolean deleteHike(Integer id) {
		boolean worked = false;
		hikeRepo.deleteById(id);
		Optional<Hike> deleteMe = hikeRepo.findById(id);
		if(!deleteMe.isPresent()) {
			worked = true;
		}
		return worked;
	}
	@Override
	public List<Hike> findByLength(double low, double high){
		List<Hike> hikes = null;
		hikes = hikeRepo.findByTrailLengthBetween(low, high);
		return hikes;
	}
	
	@Override
	public List<Hike> findByDifficulty(Integer num){
		List<Hike> hikes = null;
		hikes = hikeRepo.findByDifficulty(num);
		return hikes;
	}
}
