CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(20) NOT NULL,
  `productType` varchar(9) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `Furniture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `height` int NOT NULL,
  `width` int NOT NULL,
  `length` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sku` (`sku`),
  CONSTRAINT `Furniture_ibfk_1` FOREIGN KEY (`sku`) REFERENCES `product` (`sku`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `DVD` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `size` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sku` (`sku`),
  CONSTRAINT `DVD_ibfk_1` FOREIGN KEY (`sku`) REFERENCES `product` (`sku`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `Book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `weight` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_ibfk_1` (`sku`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`sku`) REFERENCES `product` (`sku`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci