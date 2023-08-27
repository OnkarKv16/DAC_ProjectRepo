package com.woodworks.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@SpringBootApplication
@EnableConfigurationProperties({
    com.woodworks.project.utils.FileUploadProperties.class
})
public class FinalProjectWoodworksApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectWoodworksApplication.class, args);
	}

}
