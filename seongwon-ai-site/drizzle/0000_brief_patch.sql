CREATE TABLE `applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`age` text NOT NULL,
	`occupation` text NOT NULL,
	`experience` text NOT NULL,
	`wish` text NOT NULL,
	`consented_at` text NOT NULL,
	`created_at` integer NOT NULL
);
