package com.woodworks.project.models;

import org.springframework.beans.BeanUtils;

import com.woodworks.project.entities.OrderDetails;
import com.woodworks.project.entities.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDetailsDTO {

	private int id;
	
	private Product product;
	
	private int qty;
	
	public static OrderDetailsDTO fromEntity(OrderDetails entity) {
		OrderDetailsDTO dto = new OrderDetailsDTO();
		BeanUtils.copyProperties(entity, dto);		
		return dto;
	}
}
