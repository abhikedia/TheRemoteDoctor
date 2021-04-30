CREATE TABLE `Patients` (
	`patientid` INT NOT NULL,
	`email` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`gender` varchar(1) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`avatar` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	PRIMARY KEY (`patientid`)
);

