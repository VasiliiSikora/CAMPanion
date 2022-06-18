-- This file is to initialise mock-up data in the tables


INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('kenni', 'kenni@ga.com', 'hfdvub7867cfy', '3000', 'false');
INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('katie', 'katie@ga.com', '875dsjbduh#hbh', '2000', 'false');

INSERT INTO campsites (title, street, state, img) VALUES ('Cosy inner city beachside camp', 'Lygon Street', 'VIC', 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
INSERT INTO campsites (title, street, state, img) VALUES ('CBD farm camp', 'Bourke Street', 'NSW', 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');

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
