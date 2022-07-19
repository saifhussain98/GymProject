DROP TABLE IF EXISTS `gym_workout` CASCADE;
create table `gym_workout` (
	`id` INTEGER UNIQUE PRIMARY KEY AUTO_INCREMENT,
	`muscle_group` VARCHAR(50) NOT NULL,
	`exercise` VARCHAR(50) NOT NULL,
	`weight` INTEGER,
	`sets` INTEGER, 
	`reps` INTEGER
);