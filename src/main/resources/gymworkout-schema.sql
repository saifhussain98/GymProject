DROP TABLE IF EXISTS `gymworkout` CASCADE;
create table `gymworkout` (
	`id` INTEGER UNIQUE PRIMARY KEY AUTO_INCREMENT,
	`musclegroup` VARCHAR(50) NOT NULL,
	`exercise` VARCHAR(50) NOT NULL,
	`weight` INTEGER,
	`sets` INTEGER, 
	`reps` INTEGER
);