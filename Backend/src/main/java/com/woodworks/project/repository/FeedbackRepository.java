package com.woodworks.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.woodworks.project.entities.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
