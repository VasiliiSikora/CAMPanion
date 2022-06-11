-- This file is to initialise tables

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS campsites;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS amenities;
DROP TABLE IF EXISTS types;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_hash TEXT,
    postcode NUMBER,
    admin BOOLEAN
);

CREATE TABLE campsites (
    campsiteId SERIAL PRIMARY KEY,
    street VARCHAR(100),
    state VARCHAR(3),
    -- dont need foreign key for users since use cookies
);

-- These tables used for filtering attributes
CREATE TABLE types (
    FOREIGN KEY(campsiteId) 
        REFERENCES capsites(campsiteId),
    glamping BOOLEAN,
    beachside BOOLEAN,
);

CREATE TABLE amenities (
    FOREIGN KEY(campsiteId) 
        REFERENCES capsites(campsiteId),
    shower BOOLEAN,
    toilet BOOLEAN,
);

CREATE TABLE reviews (
    reviewId SERIAL PRIMARY KEY,
    FOREIGN KEY(userId) 
        REFERENCES users(userId),
    FOREIGN KEY(campsiteId) 
        REFERENCES capsites(campsiteId),
    description TEXT,
    rating NUMBER,
    date DATE
);