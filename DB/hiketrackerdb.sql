-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hiketrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hiketrackerdb` ;

-- -----------------------------------------------------
-- Schema hiketrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hiketrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `hiketrackerdb` ;

-- -----------------------------------------------------
-- Table `hike`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hike` ;

CREATE TABLE IF NOT EXISTS `hike` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `difficulty` INT NULL,
  `elevation` INT NULL,
  `trail_length` DECIMAL(5,2) NULL,
  `description` VARCHAR(1000) NULL,
  `image_url` VARCHAR(2000) NULL,
  `dogs_allowed` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS hikeuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'hikeuser'@'localhost' IDENTIFIED BY 'hikeuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'hikeuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `hike`
-- -----------------------------------------------------
START TRANSACTION;
USE `hiketrackerdb`;
INSERT INTO `hike` (`id`, `name`, `latitude`, `longitude`, `difficulty`, `elevation`, `trail_length`, `description`, `image_url`, `dogs_allowed`) VALUES (1, 'Bonneville Shoreline', '40.744530', '-111.809000', 3, 1466, 8.2, 'Experience this 9.1-mile point-to-point trail near Salt Lake City, Utah. Generally considered an easy route, it takes an average of 4 h 16 min to complete. This is a very popular area for mountain biking, running, and walking, so you\'ll likely encounter other people while exploring. The best times to visit this trail are April through November. Dogs are welcome and may be off-leash in some areas.', 'https://intermountainhealthcare.org/-/media/images/enterpriseserviceslines/live-well/healthy-hikes/2017-hikes/bst-this-is-the-place-loop/bst-thisistheplace-md-1.jpg?w=850', 1);
INSERT INTO `hike` (`id`, `name`, `latitude`, `longitude`, `difficulty`, `elevation`, `trail_length`, `description`, `image_url`, `dogs_allowed`) VALUES (2, 'Dry Canyon Trail', '40.347162', '-111.645259', 4, 2903, 5.4, 'Explore this 5.4-mile out-and-back trail near Lindon, Utah. Generally considered a challenging route, it takes an average of 4 h 37 min to complete. This is a popular trail for backpacking, camping, and hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through October. Dogs are welcome and may be off-leash in some areas.', 'https://www.outdoorproject.com/sites/default/files/styles/hero_image_desktop/public/1563829104/drycreek-002.jpg?itok=DgieDU-_', 1);
INSERT INTO `hike` (`id`, `name`, `latitude`, `longitude`, `difficulty`, `elevation`, `trail_length`, `description`, `image_url`, `dogs_allowed`) VALUES (3, 'Big Baldy Summit ', '40.311738', '-111.607018', 3, 3326, 6.9, 'Enjoy this 6.9-mile out-and-back trail near Pleasant Grove, Utah. Generally considered a challenging route, it takes an average of 5 h 30 min to complete. This is a very popular area for hiking, so you\'ll likely encounter other people while exploring. The best times to visit this trail are April through October. Dogs are welcome, but must be on a leash.', 'https://cdn2.apstatic.com/photos/hike/7047609_medium_1555537459.jpg', 1);
INSERT INTO `hike` (`id`, `name`, `latitude`, `longitude`, `difficulty`, `elevation`, `trail_length`, `description`, `image_url`, `dogs_allowed`) VALUES (4, 'Murdock Canal Trail', '40.318674', '-111.655254', 4, 321, 18.2, 'Explore this 18.2-mile point-to-point trail near Orem, Utah. Generally considered an easy route, it takes an average of 5 h 38 min to complete. This is a popular trail for hiking, horseback riding, and mountain biking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.', 'https://www.utahmountainbiking.com/trails/images/pics-trails/Murdock03.jpg', 1);

COMMIT;

