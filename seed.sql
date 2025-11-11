-- ==========================================================
-- 🚀 SUPABASE SEED SCRIPT (SAFE FOR AUTH OR MOCK MODE)
-- ==========================================================
-- This script:
-- 1️⃣ Detects if auth.users has entries (for real auth integration)
-- 2️⃣ Uses real UUIDs if found, or mock UUIDs otherwise
-- 3️⃣ Seeds sample data for categories, users, courses, lessons, enrollments, etc.
-- ==========================================================

-- =====================
-- 0️⃣ Prep (clean tables)
-- =====================
TRUNCATE TABLE reviews, payments, progress, enrollments, lessons, courses, users, categories RESTART IDENTITY CASCADE;

-- =====================
-- 1️⃣ Categories
-- =====================
INSERT INTO categories (name, slug, description)
VALUES
  ('Web Development', 'web-development', 'Learn how to build websites using HTML, CSS, JavaScript, and modern frameworks.'),
  ('Data Science', 'data-science', 'Master data analysis, visualization, and machine learning techniques.'),
  ('UI/UX Design', 'ui-ux-design', 'Create intuitive, user-friendly designs and prototypes.');

-- =====================
-- 2️⃣ Users (with Auth check)
-- =====================

-- Try fetching existing auth user IDs
DO $$
DECLARE
  instructor_id uuid;
  student1_id uuid;
  student2_id uuid;
BEGIN
  -- If auth.users table has entries, use them
  SELECT id INTO instructor_id FROM auth.users LIMIT 1;
  SELECT id INTO student1_id FROM auth.users OFFSET 1 LIMIT 1;
  SELECT id INTO student2_id FROM auth.users OFFSET 2 LIMIT 1;

  -- If not found, fallback to mock UUIDs
  IF instructor_id IS NULL THEN
    instructor_id := '11111111-1111-1111-1111-111111111111';
  END IF;
  IF student1_id IS NULL THEN
    student1_id := '22222222-2222-2222-2222-222222222222';
  END IF;
  IF student2_id IS NULL THEN
    student2_id := '33333333-3333-3333-3333-333333333333';
  END IF;

  -- Temporarily disable FK if mock IDs are used
  IF (SELECT COUNT(*) FROM auth.users) = 0 THEN
    ALTER TABLE users DROP CONSTRAINT IF EXISTS users_id_fkey;
  END IF;

  -- Insert users
  INSERT INTO users (id, email, full_name, avatar_url, bio, is_instructor)
  VALUES
    (instructor_id, 'instructor1@example.com', 'Alice Johnson', 'https://randomuser.me/api/portraits/women/45.jpg', 'Full-stack web instructor', TRUE),
    (student1_id, 'student1@example.com', 'Bob Williams', 'https://randomuser.me/api/portraits/men/32.jpg', 'Passionate React learner', FALSE),
    (student2_id, 'student2@example.com', 'Charlie Brown', 'https://randomuser.me/api/portraits/men/44.jpg', 'Aspiring data scientist', FALSE);

  RAISE NOTICE '✅ Users seeded: %', json_build_object(
    'instructor', instructor_id,
    'student1', student1_id,
    'student2', student2_id
  );

END $$;

-- =====================
-- 3️⃣ Courses
-- =====================
INSERT INTO courses (instructor_id, category_id, title, slug, description, thumbnail_url, price, discount_price, is_published, level, duration_hours, total_students, rating)
VALUES
  (
    (SELECT id FROM users WHERE is_instructor = TRUE),
    (SELECT id FROM categories WHERE slug = 'web-development'),
    'Complete React Developer Bootcamp',
    'react-developer-bootcamp',
    'Master React, Hooks, and modern app development.',
    'https://img.youtube.com/vi/Dorf8i6lCuk/maxresdefault.jpg',
    99.99,
    49.99,
    TRUE,
    'intermediate',
    40,
    250,
    4.7
  ),
  (
    (SELECT id FROM users WHERE is_instructor = TRUE),
    (SELECT id FROM categories WHERE slug = 'data-science'),
    'Python for Data Science & ML',
    'python-data-science',
    'Learn Python for analytics, ML, and AI fundamentals.',
    'https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg',
    89.99,
    59.99,
    TRUE,
    'beginner',
    30,
    180,
    4.6
  );

-- =====================
-- 4️⃣ Lessons
-- =====================
INSERT INTO lessons (course_id, title, slug, description, content, video_url, video_duration_seconds, order_index, is_free)
VALUES
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'Introduction to React',
    'intro-to-react',
    'Overview of React and component-based architecture.',
    'React makes UI building simple and declarative.',
    'https://videos.example.com/intro-react.mp4',
    600,
    1,
    TRUE
  ),
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'React Hooks Deep Dive',
    'react-hooks-deep-dive',
    'Understand useState, useEffect, and custom hooks.',
    'Detailed walkthrough of React hooks with live coding.',
    'https://videos.example.com/hooks.mp4',
    900,
    2,
    FALSE
  ),
  (
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    'Getting Started with Python',
    'getting-started-python',
    'Basics of Python and setup for data projects.',
    'Understand syntax, loops, and functions.',
    'https://videos.example.com/python-intro.mp4',
    720,
    1,
    TRUE
  );

-- =====================
-- 5️⃣ Enrollments
-- =====================
INSERT INTO enrollments (user_id, course_id, status, progress_percentage)
VALUES
  (
    (SELECT id FROM users WHERE email = 'student1@example.com'),
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'active',
    40
  ),
  (
    (SELECT id FROM users WHERE email = 'student2@example.com'),
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    'completed',
    100
  );

-- =====================
-- 6️⃣ Progress
-- =====================
INSERT INTO progress (enrollment_id, lesson_id, is_completed, watched_duration_seconds)
VALUES
  (
    (SELECT id FROM enrollments WHERE progress_percentage = 40),
    (SELECT id FROM lessons WHERE slug = 'intro-to-react'),
    TRUE,
    600
  ),
  (
    (SELECT id FROM enrollments WHERE progress_percentage = 100),
    (SELECT id FROM lessons WHERE slug = 'getting-started-python'),
    TRUE,
    720
  );

-- =====================
-- 7️⃣ Payments
-- =====================
INSERT INTO payments (user_id, course_id, amount, currency, status, payment_method, transaction_id, notes, paid_at)
VALUES
  (
    (SELECT id FROM users WHERE email = 'student1@example.com'),
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    49.99,
    'USD',
    'success',
    'credit_card',
    'txn_123abc',
    'First course purchase',
    now()
  ),
  (
    (SELECT id FROM users WHERE email = 'student2@example.com'),
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    59.99,
    'USD',
    'success',
    'stripe',
    'txn_789xyz',
    'Completed course payment',
    now()
  );

-- =====================
-- 8️⃣ Reviews
-- =====================
INSERT INTO reviews (course_id, user_id, rating, title, comment, helpful_count)
VALUES
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    (SELECT id FROM users WHERE email = 'student1@example.com'),
    5,
    'Excellent React Course!',
    'Very detailed and easy to follow. The instructor explains concepts clearly.',
    10
  ),
  (
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    (SELECT id FROM users WHERE email = 'student2@example.com'),
    4,
    'Great content, but needs updates',
    'Good course overall but could use more recent libraries.',
    6
  );

-- =====================
-- ✅ Confirmation
-- =====================
SELECT
  (SELECT COUNT(*) FROM categories) AS categories_count,
  (SELECT COUNT(*) FROM users) AS users_count,
  (SELECT COUNT(*) FROM courses) AS courses_count,
  (SELECT COUNT(*) FROM lessons) AS lessons_count,
  (SELECT COUNT(*) FROM enrollments) AS enrollments_count,
  (SELECT COUNT(*) FROM payments) AS payments_count,
  (SELECT COUNT(*) FROM reviews) AS reviews_count;
