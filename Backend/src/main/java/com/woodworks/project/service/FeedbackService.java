package com.woodworks.project.service;

import java.util.List;

import com.woodworks.project.entities.Feedback;

public interface FeedbackService {

	void saveFeedback(Feedback feedback);

	List<Feedback> findAllFeedbacks();

}
