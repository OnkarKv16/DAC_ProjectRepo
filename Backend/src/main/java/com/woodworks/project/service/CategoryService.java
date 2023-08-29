package com.woodworks.project.service;


import java.util.List;

import com.woodworks.project.entities.Category;


public interface CategoryService {


	
	Category findByName(String categoryName);

	Category addCategory(Category category);

	List<Category> findAllCategory();

}
