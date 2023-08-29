package com.woodworks.project.models;

import org.springframework.beans.BeanUtils;

import com.woodworks.project.entities.Product;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter
public class ProductResponseDto {

	private String brand;
	
	private int productId;
	
	private String pname;
	
	private String categoryName;
	
	private int quantity;
	
	private double price;
	
	private int sellerId;
	
	private String sellerName;
	
	private String photo;
	
	public static ProductResponseDto fromEntity(Product entity) {
		ProductResponseDto dto = new ProductResponseDto();
		dto.setSellerId(entity.getSeller().getId());
		dto.setSellerName(entity.getSeller().getName());
		dto.setCategoryName(entity.getCategory().getCategoryName());
		BeanUtils.copyProperties(entity, dto);	
		return dto;
	}
}
