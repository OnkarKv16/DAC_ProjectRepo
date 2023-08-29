package com.woodworks.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woodworks.project.entities.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

}
