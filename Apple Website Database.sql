CREATE TABLE `users` 
(
	`user_id` int,
	`name` varchar(255),
	`city` varchar(255),
	`password` int,
	`email` varchar(255)
);

CREATE TABLE `cities` 
(
	`city_id` int,
	`city_name` varchar(255),
	`rate` int,
	`postal_code` int
);

CREATE TABLE `products` 
(
	`product_id` int,
	`product_name` varchar(255),
	`base_shipping` int
);

CREATE TABLE `product_type` 
(
	`type_id` int,
	`type_name` varchar(255),
	`product_id` int
);

CREATE TABLE `variants` 
(
	`variant_id` int,
	`model_year` int,
	`price` int,
	`type_id` int
);

ALTER TABLE `variants` ADD FOREIGN KEY (`type_id`) REFERENCES `product_type` (`type_id`);

ALTER TABLE `product_type` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
