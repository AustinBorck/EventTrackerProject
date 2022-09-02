package com.skilldistillery.hiketracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hiketracker.entities.Hike;
import com.skilldistillery.hiketracker.services.HikeService;

@RestController
@RequestMapping("api")
public class HikeController {

	@Autowired
	private HikeService hikeServ;
	
	@GetMapping("hikes")
	public List<Hike> index(){
		return hikeServ.index();
	}
	
	@GetMapping("hikes/{id}")
	public Hike singleHike(@PathVariable Integer id) {
		Hike hike = null;
		hike = hikeServ.singleHike(id);
		return hike;
	}
	
	
}
