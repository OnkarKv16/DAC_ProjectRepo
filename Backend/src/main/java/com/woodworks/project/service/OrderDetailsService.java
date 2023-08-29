package com.woodworks.project.service;

import java.util.List;
import java.util.Optional;

import com.woodworks.project.entities.OrderDetails;
import com.woodworks.project.entities.Orders;


public interface OrderDetailsService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Orders order);
	
}
