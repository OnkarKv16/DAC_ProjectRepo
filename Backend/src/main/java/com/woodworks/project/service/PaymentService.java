package com.woodworks.project.service;

import com.woodworks.project.entities.Payment;

public interface PaymentService {

	Payment savePayment(Payment payment);
	
	Payment findPaymentById(int id);
}
