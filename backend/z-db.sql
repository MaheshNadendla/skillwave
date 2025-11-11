-- || USERS ||

CREATE TABLE IF NOT EXISTS users (
  _id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_id text UNIQUE NOT NULL,
  name text,
  email text UNIQUE,
  picture text,
  created_at timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  _id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_id text UNIQUE NOT NULL,
  name text,
  email text UNIQUE,
  picture text,
  bio text,
  is_instructor boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

