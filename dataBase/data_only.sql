-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: vidaorganica_db
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Buenos Aires','Villa Celina','La quiaca 2728','1772','2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'Córdoba','Córdoba','Avenida feliz 123','1500','2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'Jujuy','jujuy','Avenida siempreviva 123','1700','2023-11-10 22:33:38','2023-11-10 22:33:38'),(4,'Entre Rios','entre rios','La famosa 2223','1100','2023-11-10 22:33:38','2023-11-10 22:33:38');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Bonafide','Estados Unidos','2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'God Bless You','Estados Unidos','2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'Chia','China','2023-11-10 22:33:38','2023-11-10 22:33:38'),(4,'FuzeTea','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(5,'Coconut','Corea del Sur','2023-11-10 22:33:38','2023-11-10 22:33:38'),(6,'Cabrales','China','2023-11-10 22:33:38','2023-11-10 22:33:38'),(7,'Granix','Alemania','2023-11-10 22:33:38','2023-11-10 22:33:38'),(8,'Stevia Kony','Filipinas','2023-11-10 22:33:38','2023-11-10 22:33:38'),(9,'Silk','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(10,'Activia','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(11,'Bienva','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(12,'Happy Food','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(13,'Ceral','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(14,'Ajdur Kosher','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(15,'Chocoleit','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(16,'Crelech','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(17,'Ades','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(18,'Vrink','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38'),(19,'Sin Culpa','Argentina','2023-11-10 22:33:38','2023-11-10 22:33:38');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Bebidas e Infusiones','2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'Cosmetica','2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'Alimentos Naturales','2023-11-10 22:33:38','2023-11-10 22:33:38'),(4,'Despensa','2023-11-10 22:33:38','2023-11-10 22:33:38'),(5,'Suplementos Naturales','2023-11-10 22:33:38','2023-11-10 22:33:38');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1695081779851_products_.jpg',1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'1695081690765_products_.png',2,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'1695081856705_products_.png',3,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(4,'1695081889180_products_.jpg',4,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(5,'1695081889180_products_.jpg',5,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(6,'1695081950836_products_.jpg',6,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(7,'1695081975717_products_.jpg',7,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(8,'1695082011009_products_.png',1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(9,'1695082148077_products_.jpg',9,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(10,'1699655777978_products_.jpg',10,'2023-11-10 22:36:18','2023-11-10 22:36:18');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Alfajor bienva',450,0,'Alfajor blanco Bienva 40gr',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'Pack Bienva x5',600,0,'Pack de alfajor bienva x5',NULL,2,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'Alfajor Happy Food',450,0,'Alfajor de chocolate',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(4,'Alfajor Ceral',550,0,'Alfajor Ceral 100kcal por unidad',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(5,'Alfajor Ceral',550,0,'Alfajor Ceral 100kcal por unidad',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(6,'Alfajor Bienva',500,10,'Alfajor blanco Bienva',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(7,'Alfajor Chocoleit',450,0,'Alfajor Chocoleit 50gr',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(8,'Alfajor Chocoleit',650,0,'Alfajor Chocoleit con extra dulce de leche',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(9,'Ades',750,0,'Ades de almendra sabor vainilla',NULL,1,1,1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(10,'Ades',700,10,'Ades de almendra sabor vainilla',NULL,10,3,1,'2023-11-10 22:36:17','2023-11-10 22:36:28');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'user','2023-11-10 22:33:38','2023-11-10 22:33:38');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'visitas','2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'ofertas','2023-11-10 22:33:38','2023-11-10 22:33:38');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231013001341-create-brand.js'),('20231017223019-create-category.js'),('20231017223311-create-section.js'),('20231017223627-create-product.js'),('20231017223629-create-image.js'),('20231017223919-create-role.js'),('20231017224004-create-address.js'),('20231017224228-create-user.js'),('20231017224342-create-order.js'),('20231017224425-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tomas','Soliz','tomassoliz07@gmail.com','$2a$10$RcxF0s8rns7CSKuJ8As6yukoliGdFoUHI8EmhSDbHeXScZxt6Fh5q','2023-11-10 22:33:38','',1141716540,'img-default.jpg','',1,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(2,'Gaston','Cane','gastoncane@gmail.com','$2a$10$NKA2vjYjqzeXRC58hKtcR.kKByuRDMiMrv2A5hvrN8LecivnvO4XC','2023-11-10 22:33:38','',0,'img-default.jpg','',2,'2023-11-10 22:33:38','2023-11-10 22:33:38'),(3,'ezequiel','paredes','ezequiel@gmail.com','$2a$10$nIjezcNgKBd.0rHVrn.Zs.KmokTZirCql2eA2B2dhNkz.9B9cI9Oa',NULL,NULL,NULL,NULL,NULL,2,'2023-11-10 22:34:59','2023-11-10 22:34:59');
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

-- Dump completed on 2023-11-10 19:46:52
