-- This file is to initialise tables

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS campsites CASCADE;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS amenities;
DROP TABLE IF EXISTS types;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_hash TEXT,
    postcode INTEGER,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE campsites (
    campsiteId SERIAL PRIMARY KEY,
    title VARCHAR(50),
    street VARCHAR(100),
    state VARCHAR(3),
    img TEXT
    -- dont need foreign key for users since use cookies
);

-- These tables used for filtering attributes
CREATE TABLE types (
    campsiteId INTEGER REFERENCES campsites(campsiteId) UNIQUE,
    -- FOREIGN KEY (campsiteId) 
    --     REFERENCES campsites(campsiteId),
    glamping BOOLEAN DEFAULT FALSE,
    beachside BOOLEAN DEFAULT FALSE
);

CREATE TABLE amenities (
    -- FOREIGN KEY (campsiteId) 
    --     REFERENCES campsites(campsiteId),
    campsiteId INTEGER REFERENCES campsites(campsiteId) UNIQUE,
    shower BOOLEAN DEFAULT FALSE,
    toilet BOOLEAN DEFAULT FALSE
);

CREATE TABLE reviews (
    reviewId SERIAL PRIMARY KEY,
    -- FOREIGN KEY (userId) 
    --     REFERENCES users(userId),
    -- FOREIGN KEY (campsiteId) 
    --     REFERENCES campsites(campsiteId),
    userId INTEGER REFERENCES users(userId),
    campsiteId INTEGER REFERENCES campsites(campsiteId),
    description TEXT,
    rating INTEGER,
    date DATE
);