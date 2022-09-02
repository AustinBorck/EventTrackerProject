package com.skilldistillery.hiketracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hike {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String latitude;
	
	private String longitude;
	
	private int difficulty;
	
	private int elevation;
	
	@Column(name="trail_length")
	private double trailLength;
	
	private String description;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "dogs_allowed")
	private boolean dogsAllowed;

	public Hike() {
		super();
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public int getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}

	public int getElevation() {
		return elevation;
	}

	public void setElevation(int elevation) {
		this.elevation = elevation;
	}

	public double getTrailLength() {
		return trailLength;
	}

	public void setTrailLength(double trailLength) {
		this.trailLength = trailLength;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public boolean isDogsAllowed() {
		return dogsAllowed;
	}

	public void setDogsAllowed(boolean dogsAllowed) {
		this.dogsAllowed = dogsAllowed;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Hike [id=" + id + ", name=" + name + ", latitude=" + latitude + ", longitude=" + longitude
				+ ", difficulty=" + difficulty + ", elevation=" + elevation + ", trailLength=" + trailLength
				+ ", description=" + description + ", imageUrl=" + imageUrl + ", dogsAllowed=" + dogsAllowed + "]";
	}

	
	
	
}
