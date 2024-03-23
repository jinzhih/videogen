CREATE DATABASE env;

use env;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
INSERT INTO `user` (`id`, `email`, `password`, `first_name`, `last_name`, `refresh_token`, `creation_date`, `update_date`) VALUES (1, 'qma2@utas.edu.au', '$2a$10$TbrHQGVXIGYSVpU3z9QHYeZ5sVBjZMqd9ngg7A7JytP0ZUs3X0..2', 'Martin', 'Ma', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxbWEyQHV0YXMuZWR1LmF1IiwiZW1haWwiOiJxbWEyQHV0YXMuZWR1LmF1IiwiaWF0IjoxNzEwNTQ2NDA2LCJleHAiOjE3MTA2MzI4MDZ9.Xhb8SiSgyeSarpC-T-8REjCNJcVVHKA0ai37fUBTgFs', '2024-03-16 10:46:06.331610', '2024-03-16 10:46:46.186434');

