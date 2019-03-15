-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 15, 2019 at 11:57 PM
-- Server version: 5.7.25-0ubuntu0.18.10.2
-- PHP Version: 7.2.15-0ubuntu0.18.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apple_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `type_id` int(11) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  `base_shipping` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`type_id`, `city_id`, `type_name`, `base_shipping`) VALUES
(1000, NULL, 'iMac5k', NULL),
(1001, NULL, 'Macprobutton', NULL),
(1002, NULL, 'iMacPro', NULL),
(1003, NULL, 'iPadAir', NULL),
(1004, NULL, 'iPadPro', NULL),
(1005, NULL, 'iPhone7', NULL),
(1006, NULL, 'iPhone8', NULL),
(1007, NULL, 'iPhoneX', NULL),
(1008, NULL, 'iPadMini', NULL),
(1009, NULL, 'MacbookairButton', NULL),
(1010, NULL, 'Macbookpro13', NULL),
(1011, NULL, 'Macbookpro15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `specifications`
--

CREATE TABLE `specifications` (
  `spec_id` int(11) NOT NULL,
  `spec_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `specifications`
--

INSERT INTO `specifications` (`spec_id`, `spec_name`, `price`, `type_id`) VALUES
(2000, 'i7', NULL, 1000),
(2001, 'i7 AMD RX 580', NULL, 1000),
(2002, 'i7 AMD VEGA 56', NULL, 1000),
(2100, '6', NULL, 1001),
(2101, '8', NULL, 1001),
(2102, '10', NULL, 1001),
(2200, '10', 33, 1002),
(2201, '14', 33, 1002),
(2202, '18', 33, 1002),
(2300, '32', NULL, 1003),
(2301, '64', NULL, 1003),
(2302, '128', NULL, 1003),
(2400, '9.7', NULL, 1004),
(2401, '10.5', NULL, 1004),
(2402, '12.9', NULL, 1004),
(2500, '64', NULL, 1005),
(2501, '128', NULL, 1005),
(2502, '256', NULL, 1005),
(2600, '64', NULL, 1006),
(2601, '128', NULL, 1006),
(2602, '256', NULL, 1006),
(2700, '64', NULL, 1007),
(2701, '256', NULL, 1007),
(2800, '32', NULL, 1008),
(2801, '64', NULL, 1008),
(2802, '128', NULL, 1008),
(2900, '2017', NULL, 1009),
(2901, '2018', NULL, 1009),
(21000, 'Touch Bar', NULL, 1010),
(21001, 'No Touch Bar', NULL, 1010),
(21100, 'Touch Bar', NULL, 1011),
(21101, 'No Touch Bar', NULL, 1011);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `password` int(11) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`type_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `specifications`
--
ALTER TABLE `specifications`
  ADD PRIMARY KEY (`spec_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_type`
--
ALTER TABLE `product_type`
  ADD CONSTRAINT `product_type_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`);

--
-- Constraints for table `specifications`
--
ALTER TABLE `specifications`
  ADD CONSTRAINT `specifications_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `product_type` (`type_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
