CREATE TABLE apps (
  app_id SERIAL PRIMARY KEY,
  app_name VARCHAR,
  user_id INT REFERENCES users(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  firebase_user_id VARCHAR,
);

CREATE TABLE todos (
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  author VARCHAR(255),
  app_id INT REFERENCES apps(app_id)
);

