package com.skilldistillery.hiketracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<Hike> index() {
		return hikeServ.index();
	}

	@GetMapping("hikes/{id}")
	public Hike singleHike(@PathVariable Integer id, HttpServletResponse res) {
		Hike hike = null;
		hike = hikeServ.singleHike(id);
		if(hike == null) {
			res.setStatus(404);
		}
		return hike;
	}

	@GetMapping("hikes/search/{keyword}")
	public List<Hike> findByKeyword(@PathVariable String keyword, HttpServletResponse res) {
		List<Hike> hikes = null;
		hikes = hikeServ.findByKeyword(keyword);
		if(hikes == null) {
			res.setStatus(404);
		}
		return hikes;
	}

	@PostMapping("/hikes")
	public Hike makeHike(@RequestBody Hike hike, HttpServletResponse res, HttpServletRequest req) {
		try {
			hikeServ.makeHike(hike);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(hike.getId());
			res.setHeader("Location", url.toString());
			res.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			hike = null;
		}
		return hike;
	}

	@PutMapping("hikes/{id}")
	public Hike updateHike(@PathVariable Integer id, @RequestBody Hike hike, HttpServletResponse res) {
		try {
			hike = hikeServ.updateHike(id, hike);
			if(hike == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			hike = null;
		}
		return hike;
	}

	@DeleteMapping("hikes/{id}")
	public void deleteHike(@PathVariable Integer id, HttpServletResponse res) {
		try {
			boolean worked = hikeServ.deleteHike(id);
			if (worked) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);

		}
	}
	@GetMapping("hikes/search/length/{low}/{high}")
	public List<Hike> getByLength(@PathVariable double low, @PathVariable double high, HttpServletResponse res){
		List<Hike> hikes = null;
		hikes = hikeServ.findByLength(low, high);
		if(hikes == null) {
			res.setStatus(404);
		}
		return hikes;
	}
	
	@GetMapping("hikes/search/difficulty/{num}")
	public List<Hike> getByDifficulty(@PathVariable Integer num, HttpServletResponse res){
		List<Hike> hikes = null;
		hikes = hikeServ.findByDifficulty(num);
		if(hikes == null) {
			res.setStatus(404);
		}
		return hikes;
	}

}
