-- 🌱 SAMPLE DATA SEED SCRIPT

-- 1️⃣ CATEGORIES
INSERT INTO categories (name, slug, description)
VALUES
  ('Web Development', 'web-development', 'Learn how to build websites using HTML, CSS, JavaScript, and modern frameworks.'),
  ('Data Science', 'data-science', 'Master data analysis, visualization, and machine learning techniques.'),
  ('UI/UX Design', 'ui-ux-design', 'Create intuitive, user-friendly designs and prototypes.');

-- 2️⃣ USERS
-- Assume these user IDs already exist in auth.users
INSERT INTO users (id, email, full_name, avatar_url, bio, is_instructor)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'instructor1@example.com', 'Alice Johnson', 'https://randomuser.me/api/portraits/women/45.jpg', 'Full-stack web instructor', TRUE),
  ('22222222-2222-2222-2222-222222222222', 'student1@example.com', 'Bob Williams', 'https://randomuser.me/api/portraits/men/32.jpg', 'Passionate learner exploring React.js', FALSE),
  ('33333333-3333-3333-3333-333333333333', 'student2@example.com', 'Charlie Brown', 'https://randomuser.me/api/portraits/men/44.jpg', 'Aspiring data analyst', FALSE);

-- 3️⃣ COURSES
INSERT INTO courses (instructor_id, category_id, title, slug, description, thumbnail_url, price, discount_price, is_published, level, duration_hours, total_students, rating)
VALUES
  (
    '11111111-1111-1111-1111-111111111111',
    (SELECT id FROM categories WHERE slug = 'web-development'),
    'Complete React Developer Bootcamp',
    'react-developer-bootcamp',
    'Master React, Hooks, Context API, and modern state management in this comprehensive course.',
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
    '11111111-1111-1111-1111-111111111111',
    (SELECT id FROM categories WHERE slug = 'data-science'),
    'Python for Data Science & Machine Learning',
    'python-data-science',
    'Learn Python for analyzing data, building models, and creating visualizations.',
    'https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg',
    89.99,
    59.99,
    TRUE,
    'beginner',
    30,
    180,
    4.6
  );

-- 4️⃣ LESSONS
INSERT INTO lessons (course_id, title, slug, description, content, video_url, video_duration_seconds, order_index, is_free)
VALUES
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'Introduction to React',
    'intro-to-react',
    'Overview of React and component-based architecture.',
    'React makes building UIs simple and declarative.',
    'https://videos.example.com/intro-react.mp4',
    600,
    1,
    TRUE
  ),
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'React Hooks Deep Dive',
    'react-hooks-deep-dive',
    'Learn useState, useEffect, and custom hooks.',
    'Detailed walkthrough of React hooks with examples.',
    'https://videos.example.com/hooks.mp4',
    900,
    2,
    FALSE
  ),
  (
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    'Getting Started with Python',
    'getting-started-python',
    'Introduction to Python basics and environment setup.',
    'Understand syntax, data types, and functions.',
    'https://videos.example.com/python-intro.mp4',
    720,
    1,
    TRUE
  );

-- 5️⃣ ENROLLMENTS
INSERT INTO enrollments (user_id, course_id, status, progress_percentage)
VALUES
  (
    '22222222-2222-2222-2222-222222222222',
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    'active',
    40
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    'completed',
    100
  );

-- 6️⃣ PROGRESS
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

-- 7️⃣ PAYMENTS
INSERT INTO payments (user_id, course_id, amount, currency, status, payment_method, transaction_id, notes, paid_at)
VALUES
  (
    '22222222-2222-2222-2222-222222222222',
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    49.99,
    'USD',
    'success',
    'credit_card',
    'txn_123abc',
    'First purchase',
    now()
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    59.99,
    'USD',
    'success',
    'stripe',
    'txn_789xyz',
    'Completed course payment',
    now()
  );

-- 8️⃣ REVIEWS
INSERT INTO reviews (course_id, user_id, rating, title, comment, helpful_count)
VALUES
  (
    (SELECT id FROM courses WHERE slug = 'react-developer-bootcamp'),
    '22222222-2222-2222-2222-222222222222',
    5,
    'Excellent React Course!',
    'Very detailed and easy to follow. The instructor explains concepts clearly.',
    10
  ),
  (
    (SELECT id FROM courses WHERE slug = 'python-data-science'),
    '33333333-3333-3333-3333-333333333333',
    4,
    'Great content, but needs updates',
    'Good course overall but could use more recent libraries.',
    6
  );
