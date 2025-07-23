-- No \c needed — default DB is 'postgres'
CREATE DATABASE postapp;

-- Create table directly in 'postgres' DB for now
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL
);