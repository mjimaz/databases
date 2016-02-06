DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userid int AUTO_INCREMENT,
  username varchar(16),
  primary key(userid)
);

CREATE TABLE messages (
  messageid int AUTO_INCREMENT,
  userid int,
  message varchar(255),
  roomname varchar(255),
  primary key(messageid),
  foreign key (userid) REFERENCES users(userid)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

