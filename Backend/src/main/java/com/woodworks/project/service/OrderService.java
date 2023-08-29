package com.woodworks.project.service;

import java.util.List;

import com.woodworks.project.entities.Customer;
import com.woodworks.project.entities.Orders;

public interface OrderService {

	Orders saveOrder(Orders order);
	List<Orders> getAllOrders();
	List<Orders> getCustomerOrders(Customer customer);
	Orders findById(int id);
}


