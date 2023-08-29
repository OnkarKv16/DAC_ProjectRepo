package com.woodworks.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woodworks.project.entities.Customer;
import com.woodworks.project.entities.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer>{
	
	List<Orders> findByCustomer(Customer customer);
	
}
