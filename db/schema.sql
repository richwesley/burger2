CREATE DATABASE beaners
USE beaners
CREATE TABLE flavors
(
  id INT NOT NULL AUTO_INCREMENT,
  flavor VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
    