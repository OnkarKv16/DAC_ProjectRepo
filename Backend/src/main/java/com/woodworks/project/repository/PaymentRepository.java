package com.woodworks.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.woodworks.project.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
