CREATE TABLE `Patients` (
	`patientid` INT NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`gender` varchar(1) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`avatar` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`height` INT,
	`weight` INT,
	`blood` varchar(3),
	PRIMARY KEY (`patientid`)
);

CREATE TABLE `Appointments` (
	`appointment_number` INT NOT NULL,
	`patient_id` INT NOT NULL,
	`date` DATE NOT NULL,
	`time` TIME NOT NULL,
	`doctor_id` INT NOT NULL,
	PRIMARY KEY (`appointment_number`)
);

CREATE TABLE `Doctors` (
	`doctorid` INT NOT NULL,
	`name` varchar(255) NOT NULL DEFAULT '1',
	`hospital` varchar(255) DEFAULT '1',
	`fees` INT,
	`degree` varchar(255) NOT NULL,
	`timings` varchar(255) NOT NULL,
	`specialization` varchar(255) NOT NULL,
	`state` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
	`upi` varchar(255),
	`phone` varchar(255),
	`dept` INT NOT NULL,
	PRIMARY KEY (`doctorid`)
);

CREATE TABLE `Department` (
	`deptid` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`deptid`)
);

ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_fk0` FOREIGN KEY (`patient_id`) REFERENCES `Patients`(`patientid`);

ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_fk1` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`doctorid`);

ALTER TABLE `Doctors` ADD CONSTRAINT `Doctors_fk0` FOREIGN KEY (`dept`) REFERENCES `Department`(`deptid`);

