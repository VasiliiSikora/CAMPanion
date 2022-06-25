-- This file is to initialise mock-up data in the tables


INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('kenni', 'kenni@ga.com', 'hfdvub7867cfy', '3000', 'false');
INSERT INTO users (name, email, password_hash, postcode, admin) VALUES ('katie', 'katie@ga.com', '875dsjbduh#hbh', '2000', 'false');

INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Cosy inner city beachside camp', 'Lygon Street', 'VIC', 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', null);
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('CBD farm camp', 'Bourke Street', 'NSW', 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', null);
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Cabin in the Park', 'Fairfax Street, Canberra', 'ACT', 'https://res.cloudinary.com/campanion/image/upload/v1655985966/clnn2wtm2vwavbozowng.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-35.25863115,149.1102025/16?mapSize=500,500&pp=-35.25863115,149.1102025&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Lake Glamping', 'Vanitys Crossing Rd, ACT', 'ACT', 'https://res.cloudinary.com/campanion/image/upload/v1656078435/zgymwiigzfdsy7w3b3o7.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-35.32766782,148.88665902/16?mapSize=500,500&pp=-35.32766782,148.88665902&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Waterside Camping in a National Park', 'Korsmans Trail, Bombah Point', 'NSW', 'https://res.cloudinary.com/campanion/image/upload/v1656078535/lzhxzskzus5gp9lgwy4o.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-32.48568516,152.27893104/16?mapSize=500,500&pp=-32.48568516,152.27893104&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Tent Camping on the Farm', 'Bo Bo Creek Rd, Burrell Creek', 'NSW', 'https://res.cloudinary.com/campanion/image/upload/v1656078744/hwhdwvxku5hyrkqe6utz.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-31.94774181,152.31867737/16?mapSize=500,500&pp=-31.94774181,152.31867737&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Farm Glamping', 'Lasseter Highway, Petermann', 'NT', 'https://res.cloudinary.com/campanion/image/upload/v1656078911/ozzunwfl5kuolxqrcsgj.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-25.3164133,131.7538147/16?mapSize=500,500&pp=-25.3164133,131.7538147&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Camping by the Water', 'Namatjira Drive, NT', 'NT', 'https://res.cloudinary.com/campanion/image/upload/v1656079333/hd2t2gujxygse9a98iih.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-23.68059565,132.6731685/16?mapSize=500,500&pp=-23.68059565,132.6731685&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Kayak Adventure at Lake', 'Hetherington Way, Lake King', 'WA', 'https://res.cloudinary.com/campanion/image/upload/v1656081847/wqmq7k7gqxljtmzx8ywb.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-33.08452529,119.68900936/16?mapSize=500,500&pp=-33.08452529,119.68900936&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Treetop Cabin', 'Nerang Murwillumbah Rd, Natural Bridge', 'QLD', 'https://res.cloudinary.com/campanion/image/upload/v1656080484/q1nsk6gu5zw5ufgzxqjn.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-28.2111118,153.23400238/16?mapSize=500,500&pp=-28.2111118,153.23400238&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Cabin in the Woods', 'Upper Sturt Road, Bel Air', 'SA','https://res.cloudinary.com/campanion/image/upload/v1656081206/cfly97e70n0momly8izc.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-35.00567985,138.6330101/16?mapSize=500,500&pp=-35.00567985,138.6330101&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Rooftop Glamping in Melbourne', 'Elizabeth St, Melbourne', 'VIC',' https://res.cloudinary.com/campanion/image/upload/v1656082037/oaljanfuridrfauhpkx1.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-37.80350415,144.95815095/16?mapSize=500,500&pp=-37.80350415,144.95815095&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Caravan by the Beach', 'Park Drive, Moore Park Beach', 'QLD', 'https://res.cloudinary.com/campanion/image/upload/v1656082131/cfguavta20sov8od7ftw.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-24.71647921,152.27749928/16?mapSize=500,500&pp=-24.71647921,152.27749928&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Cute Caravan Park', 'Bell St, Torquay', 'VIC', 'https://res.cloudinary.com/campanion/image/upload/v1656081677/xgudipgyywytngtwjqyc.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-38.33764178,144.32033337/16?mapSize=500,500&pp=-38.33764178,144.32033337&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');
INSERT INTO campsites (title, street, state, img, mapimg) VALUES ('Glamping on the Beach', 'Tasman Highway, Chain of Lagoons', 'TAS', 'https://res.cloudinary.com/campanion/image/upload/v1656083097/qhqkjxzadgaebjskk7vx.jpg', 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/-41.66443056,148.28375437/16?mapSize=500,500&pp=-41.66443056,148.28375437&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1');

-- not 100% on inserting foreign keys. check before pushing
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (1, 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (2, 'true', 'false', 'true', 'false', 'true', 'true', 'false', 'true');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (3, 'false', 'false', 'true', 'false', 'true', 'false', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (4, 'true', 'false', 'false', 'false', 'false', 'false', 'true', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (5, 'false', 'true', 'true', 'false', 'false', 'false', 'true', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (6, 'false', 'true', 'false', 'false', 'false', 'true', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (7, 'true', 'false', 'false', 'false', 'false', 'true', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (8, 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (9, 'false', 'false', 'true', 'false', 'true', 'false', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (10, 'false', 'true', 'false', 'false', 'true', 'false', 'true', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (11, 'false', 'false', 'true', 'false', 'true', 'false', 'false', 'true');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (12, 'true', 'false', 'false', 'false', 'true', 'false', 'false', 'false');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (13, 'false', 'false', 'false', 'true', 'false', 'false', 'false', 'true');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (14, 'false', 'false', 'false', 'true', 'false', 'false', 'false', 'true');
INSERT INTO types (campsiteId, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES (15, 'true', 'false', 'false', 'true', 'false', 'false', 'false', 'true');

INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (1, 'false', 'true', 'false', 'true', 'true', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (2, 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (3, 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (4, 'true', 'true', 'false', 'true', 'false', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (5, 'true', 'false', 'false', 'false', 'false', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (6, 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (7, 'false', 'true', 'false', 'true', 'true', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (8, 'false', 'false', 'false', 'false', 'false', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (9, 'false', 'false', 'false', 'false', 'false', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (10, 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (11, 'true', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (12, 'false', 'true', 'true', 'true', 'true', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (13, 'true', 'true', 'true', 'true', 'false', 'false');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (14, 'true', 'true', 'true', 'true', 'true', 'true');
INSERT INTO amenities (campsiteId, showers, toilets, bbq, water, electricity, kayak) VALUES (15, 'false', 'false', 'false', 'false', 'false', 'true');

-- check entering sql for dates, numbers before pushing
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (1, 2, 'amazing, beachside camping in the middle of Carlton', 4, '2022-06-13');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (2, 1, 'expensive yet uninspired glamping in the cbd', 2, '2022-06-10');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (1, 2, 'amazing, beachside camping in the middle of Carlton', 4, '2022-06-13');
INSERT INTO reviews (campsiteId, userId, description, rating, date) VALUES (2, 1, 'expensive yet uninspired glamping in the cbd', 2, '2022-06-10');

