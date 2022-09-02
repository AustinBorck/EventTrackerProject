package com.skilldistillery.hiketracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class HikeTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Hike hike;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	emf = Persistence.createEntityManagerFactory("HikeTrackerJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		hike = em.find(Hike.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		hike = null;
	}

	@Test
	void test_hike_entity_mapping() {
		assertNotNull(hike);
		assertEquals("Bonneville Shoreline", hike.getName());
	}

}
