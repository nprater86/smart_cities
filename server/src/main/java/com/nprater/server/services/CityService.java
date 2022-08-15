package com.nprater.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nprater.server.models.City;
import com.nprater.server.repositories.CityRepository;

@Service
public class CityService {
	private final CityRepository cityRepo;
	
	public CityService(CityRepository c) {
		this.cityRepo = c;
	}
	
	public List<City> allCities(){
		return cityRepo.findAll();
	}
	
	public City findById(Long id) {
		Optional<City> optionalCity = cityRepo.findById(id);
		if(optionalCity.isPresent()) {
			return optionalCity.get();
		} else {
			return null;
		}
	}
}
