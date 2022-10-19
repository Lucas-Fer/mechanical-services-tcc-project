DROP DATABASE IF EXISTS Mechanical_Services;

CREATE DATABASE Mechanical_Services;

USE Mechanical_Services;

CREATE TABLE
    users (
        user_id INT NOT NULL auto_increment,
        PRIMARY KEY(user_id),
        name VARCHAR(30) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(14) NOT NULL,
        endereco VARCHAR(150) NOT NULL
    ) ENGINE = INNODB;

CREATE TABLE
    mechanical (
        mechanical_id INT NOT NULL auto_increment,
        PRIMARY KEY(mechanical_id),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        autonomous BOOLEAN NOT NULL,
        mechanical_workshop VARCHAR(100)
    ) ENGINE = INNODB;

CREATE TABLE
    services (
        service_id INT NOT NULL auto_increment,
        PRIMARY KEY(service_id),
        user_id INT NOT NULL,
        description TEXT NOT NULL,
        car_model VARCHAR(20) NOT NULL,
        car_brand VARCHAR(20) NOT NULL,
        car_year VARCHAR(20) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
    ) ENGINE = INNODB;

CREATE TABLE
    mechanical_service (
        service_id INT NOT NULL,
        PRIMARY KEY(service_id),
        mechanical_id INT NOT NULL,
        status_service ENUM('PROGRESS', 'DONE', 'CANCELED'),
        FOREIGN KEY (service_id) REFERENCES services (service_id) ON DELETE CASCADE,
        FOREIGN KEY (mechanical_id) REFERENCES mechanical (mechanical_id) ON DELETE CASCADE
    ) ENGINE = INNODB;

SET SQL_SAFE_UPDATES = 0;