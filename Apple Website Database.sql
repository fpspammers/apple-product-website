CREATE TABLE `users` 
(
	`user_id` int,
	`username` varchar(255),
	`city` varchar(255),
	`password` int,
	`full_name` varchar(255)
);

CREATE TABLE `cities` 
(
	`city_id` int,
	`city_name` varchar(255),
	`rate` int,
	`postal_code` int
);

CREATE TABLE `product_type` 
(
	`type_id` int,
	`city_id` int,
	`type_name` varchar(255),
	`base_shipping` int
);

CREATE TABLE `specifications` 
(
	`spec_id` int,
	`spec_name` varchar(255),
	`price` int,
	`type_id` int
);

ALTER TABLE `specifications` ADD FOREIGN KEY (`type_id`) REFERENCES `product_type` (`type_id`);

ALTER TABLE `product_type` ADD FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`);
