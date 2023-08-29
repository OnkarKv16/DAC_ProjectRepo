package com.woodworks.project.service;

import com.woodworks.project.entities.Address;

public interface AddressService {
	
	Address saveAddress(Address address);
	
	Address findAddress(int id);
}
