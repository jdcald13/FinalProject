package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Vehicle;

public class VehicleTest {
	private EntityManagerFactory emf;
	private EntityManager em;
	private Vehicle vehicle;
	
	@Before
	  public void setUp() throws Exception {
		this.emf = Persistence.createEntityManagerFactory("AutoDB");
		this.em = emf.createEntityManager();
		vehicle = em.find(Vehicle.class, 1);
	}
	
	@After
	  public void tearDown() throws Exception { 
		this.em.close();
		this.emf.close();
		vehicle = null;
	}
	
	@Test
	public void test_quote() {
		assertEquals(1, vehicle.getId());
	}
	
	
	@Test
	public void test_quote_mapping() {
	}
	
}
