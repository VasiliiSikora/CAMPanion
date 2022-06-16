-- This file is to initialise mock-up data in the tables


INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('kenni', 'kenni@ga.com', 'hfdvub7867cfy', '3000', 'false');
INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('katie', 'katie@ga.com', '875dsjbduh#hbh', '2000', 'false');

INSERT INTO campsites (street, state, img) VALUES ('Lygon Street', 'VIC', '../client/images/campphoto1.jpg');
INSERT INTO campsites (street, state, img) VALUES ('Bourke Street', 'NSW', '../client/images/campphoto2.jpg');

-- not 100% on inserting foreign keys. check before pushing
INSERT INTO types (campsiteId, glamping, beachside) VALUES (1, 'false', 'true');
INSERT INTO types (campsiteId, glamping, beachside) VALUES (2, 'true', 'false');

INSERT INTO amenities (campsiteId, shower, toilet) VALUES (1, 'false', 'true');
INSERT INTO amenities (campsiteId, shower, toilet) VALUES (2, 'true', 'true');

-- check entering sql for dates, numbers before pushing
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (1, 2, 'amazing, beachside camping in the middle of Carlton', 4, '2022-06-13');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (2, 1, 'expensive yet uninspired glamping in the cbd', 2, '2022-06-10');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (1, 2, 'amazing, beachside camping in the middle of Carlton', 4, '2022-06-13');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (2, 1, 'expensive yet uninspired glamping in the cbd', 2, '2022-06-10');
