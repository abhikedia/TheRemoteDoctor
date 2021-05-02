CREATE DATABASE theremotedoctor;
use theremotedoctor;

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
	`name` varchar(255) NOT NULL,
	`hospital` INT,
	`fees` INT,
	`degree` varchar(255) NOT NULL,
	`timings` varchar(255) NOT NULL,
	`specialization` varchar(255) NOT NULL,
	`state` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
	`upi` varchar(255),
	`phone` varchar(255),
	`dept` INT NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`doctorid`)
);

CREATE TABLE `Department` (
	`deptid` INT NOT NULL,
	`name` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`deptid`)
);

CREATE TABLE `Hospitals` (
	`hospitalid` INT NOT NULL,
	`name` varchar(255) NOT NULL UNIQUE,
	`state` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
	PRIMARY KEY (`hospitalid`)
);

ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_fk0` FOREIGN KEY (`patient_id`) REFERENCES `Patients`(`patientid`);

ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_fk1` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`doctorid`);

ALTER TABLE `Doctors` ADD CONSTRAINT `Doctors_fk0` FOREIGN KEY (`hospital`) REFERENCES `Hospitals`(`hospitalid`);

ALTER TABLE `Doctors` ADD CONSTRAINT `Doctors_fk1` FOREIGN KEY (`dept`) REFERENCES `Department`(`deptid`);


INSERT INTO Department VALUES (1, "Anesthesiology & Perioperative Care");
INSERT INTO Department VALUES (2, "Dermatology");
INSERT INTO Department VALUES (3, "Emergency Medicine");
INSERT INTO Department VALUES (4, "Family Medicine");
INSERT INTO Department VALUES (5, "Cardiology");
INSERT INTO Department VALUES (6, "Neurological Surgery");
INSERT INTO Department VALUES (7, "Neurology");
INSERT INTO Department VALUES (8, "Obstetrics & Gynecology");
INSERT INTO Department VALUES (9, "Endocrinology");


INSERT INTO Hospitals VALUES (1,"Bombay Hospital Institute of Medical Centre", "Maharastra", "Mumbai");
INSERT INTO Hospitals VALUES (2,"Breach Candy Hospital and Research Centre", "Tamil Nadu", "Chennai");
INSERT INTO Hospitals VALUES (3,"Apollo Hospital", "Karnataka", "Bengaluru");
INSERT INTO Hospitals VALUES (4, "Command Hospital", "Uttar Pradesh", "Lucknow");
INSERT INTO Hospitals VALUES (5,"Billroth Hospitals", "Maharastra", "Mumbai");
INSERT INTO Hospitals VALUES (6,"Fortis Healthcare", "Uttar Pradesh", "Lucknow");
INSERT INTO Hospitals VALUES (7,"Council of Christian Hospitals", "Karnataka", "Bengaluru");
INSERT INTO Hospitals VALUES (8,"Bapists Hospital", "Karnataka", "Bengaluru");
INSERT INTO Hospitals VALUES (9,"Base Hospital", "Maharastra", "Mumbai");


INSERT INTO Doctors VALUES (1,"Dr.Ramesh Kumar", 1,950, "MD", "09:00-12:00;16:00-18:00", "Anaesthesiology" ," Maharastra" , "Mumbai", "9452634947@ybl", "9452634947",1, "123@gmail.com");
INSERT INTO Doctors VALUES (2,"Dr.Avinash Singh", 2,800,"MD","09:00-12:00;16:00-18:01","Physiology" ,"Maharastra","Mumbai","9452634947@ybl", "9452634947",2, "1233@gmail.com");
INSERT INTO Doctors VALUES (3,"Dr. Taher Abbas Mithi", 3,1600,"MS","09:00-12:00;16:00-18:02","General Surgery" ,"Tamil Nadu","Chennai" ,"9452634947@ybl", "9452634947",3, "123w@gmail.com");
INSERT INTO Doctors VALUES (4,"Dr. Saurabh Bhargava" , 4,900,"MD","09:00-12:00;16:00-18:03","Anaesthesiology","Karnataka","Bengaluru","9452634947@ybl", "9452634947",4, "1423@gmail.com");
INSERT INTO Doctors VALUES (5,"Dr. A. K. Patel", 5,1500,"MS","09:00-12:00;16:00-18:04","General Surgery" , "Delhi","Gurgaon","9452634947@ybl", "9452634947",5, "1243@gmail.com");
INSERT INTO Doctors VALUES (6,"Dr. Abhishek", 8,1500,"MS","09:00-12:00;16:00-18:04","General Surgery" , "Karnataka","Bengaluru","9452634947@ybl", "9452634947",5, "12s43@gmail.com");