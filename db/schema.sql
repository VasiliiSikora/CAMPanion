-- This file is to initialise tables

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS campsites CASCADE;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS amenities;
DROP TABLE IF EXISTS types;

CREATE TABLE users (
    userid SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_hash TEXT,
    postcode INTEGER,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE campsites (
    campsiteid SERIAL PRIMARY KEY,
    title VARCHAR(50),
    street VARCHAR(100),
    state VARCHAR(3),
    img TEXT,
    mapimg TEXT
    -- dont need foreign key for users since use cookies
);

-- These tables used for filtering attributes
CREATE TABLE types (
    campsiteid INTEGER REFERENCES campsites(campsiteid) UNIQUE,
    glamping BOOLEAN DEFAULT FALSE,
    tent BOOLEAN DEFAULT FALSE,
    park BOOLEAN DEFAULT FALSE,
    caravan BOOLEAN DEFAULT FALSE,
    cabin BOOLEAN DEFAULT FALSE,
    farm BOOLEAN DEFAULT FALSE,
    lake BOOLEAN DEFAULT FALSE,
    beach BOOLEAN DEFAULT FALSE
);

CREATE TABLE amenities (
    campsiteid INTEGER REFERENCES campsites(campsiteid) UNIQUE,
    showers BOOLEAN DEFAULT FALSE,
    toilets BOOLEAN DEFAULT FALSE,
    bbq BOOLEAN DEFAULT FALSE,
    water BOOLEAN DEFAULT FALSE,
    electricity BOOLEAN DEFAULT FALSE,
    kayak BOOLEAN DEFAULT FALSE
);

CREATE TABLE reviews (
    reviewid SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(userid),
    campsiteid INTEGER REFERENCES campsites(campsiteid),
    description TEXT,
    rating INTEGER,
    date DATE
);