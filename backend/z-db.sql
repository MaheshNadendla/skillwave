-- || USERS ||

CREATE TABLE IF NOT EXISTS users (
  _id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_id text UNIQUE NOT NULL,
  name text,
  email text UNIQUE,
  picture text,
  created_at timestamp DEFAULT now()
);
