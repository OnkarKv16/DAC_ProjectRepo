package com.woodworks.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woodworks.project.entities.Category;
import com.woodworks.project.entities.Product;
import com.woodworks.project.entities.Seller;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findBySeller(Seller seller);

	List<Product> findByCategory(Category category);
	
}
