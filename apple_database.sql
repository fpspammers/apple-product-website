-- MySQL dump 10.16  Distrib 10.1.37-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: apple_database
-- ------------------------------------------------------
-- Server version	10.1.37-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_type` (
  `type_id` int(11) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  `base_shipping` int(11) DEFAULT NULL,
  PRIMARY KEY (`type_id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `product_type_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1000,NULL,'iMac5k',NULL),(1001,NULL,'Macprobutton',NULL),(1002,NULL,'iMacPro',NULL),(1003,NULL,'iPadAir',NULL),(1004,NULL,'iPadPro',NULL),(1005,NULL,'iPhone7',NULL),(1006,NULL,'iPhone8',NULL),(1007,NULL,'iPhoneX',NULL),(1008,NULL,'iPadMini',NULL),(1009,NULL,'MacbookairButton',NULL),(1010,NULL,'Macbookpro13',NULL),(1011,NULL,'Macbookpro15',NULL);
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specifications`
--

DROP TABLE IF EXISTS `specifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specifications` (
  `spec_id` int(11) NOT NULL,
  `spec_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`spec_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `specifications_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `product_type` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specifications`
--

LOCK TABLES `specifications` WRITE;
/*!40000 ALTER TABLE `specifications` DISABLE KEYS */;
INSERT INTO `specifications` VALUES (2000,'i7',189000,1000),(2001,'i7 AMD RX 580',438000,1000),(2002,'i7 AMD VEGA 56',275000,1000),(2100,'6',413000,1001),(2101,'8',620000,1001),(2102,'10',720000,1001),(2200,'10',720000,1002),(2201,'14',930000,1002),(2202,'18',1020000,1002),(2300,'32',28500,1003),(2301,'64',33900,1003),(2302,'128',36000,1003),(2400,'9.7',52000,1004),(2401,'10.5',54000,1004),(2402,'12.9',69000,1004),(2500,'64',49000,1005),(2501,'128',60000,1005),(2502,'256',65000,1005),(2600,'64',57000,1006),(2601,'128',65000,1006),(2602,'256',78000,1006),(2700,'64',80000,1007),(2701,'256',93500,1007),(2800,'32',32000,1008),(2801,'64',40000,1008),(2802,'128',48000,1008),(2900,'2017',48000,1009),(2901,'2016',61000,1009),(21000,'Touch Bar',133000,1010),(21001,'No Touch Bar',110000,1010),(21100,'Touch Bar',168000,1011),(21101,'No Touch Bar',150000,1011);
/*!40000 ALTER TABLE `specifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `password` int(11) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-16 11:17:18
