package com.woodworks.project.models;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.woodworks.project.entities.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {

	private int productId;
	
	private String pname;
	
	private String categoryName;
	
	private int quantity;
	
	private double price;
	
	private int sellerId;
	
	private String brand;
	
	//used while updating the product
	private String photo;
	
	//used while uploading the product
	private MultipartFile pic;
	
	@Override
	public String toString() {
		return "ProductDto [productId=" + productId + ", pname=" + pname + ", categoryName=" + categoryName
				+ ", quantity=" + quantity + ", price=" + price + ", sellerId=" + sellerId + ", brand=" + brand
				+ ", photo=" + photo + ", pic=" + pic + "]";
	}
	
	public static Product toEntity(ProductDto dto) {
		Product product=new Product();
		// source to destination copied excluding pic parameter
		BeanUtils.copyProperties(dto, product, "pic");		
		return product;
	}
}
