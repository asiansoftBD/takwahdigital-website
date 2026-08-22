PRAGMA foreign_keys = ON;

-- =========================================================
-- TAKWAH DIGITAL CMS DATABASE SCHEMA
-- Cloudflare D1 / SQLite
-- =========================================================
-- =========================================================
-- MEDIA LIBRARY
-- =========================================================

CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  file_name TEXT NOT NULL,
  storage_key TEXT NOT NULL UNIQUE,

  file_url TEXT,

  file_type TEXT,
  mime_type TEXT,

  file_size INTEGER,

  alt_text TEXT,
  caption TEXT,

  width INTEGER,
  height INTEGER,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- SERVICES
-- =========================================================

CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  short_description TEXT,
  description TEXT,

  icon TEXT,

  sort_order INTEGER NOT NULL DEFAULT 0,
  is_featured INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,

  seo_title TEXT,
  seo_description TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- PORTFOLIO PROJECTS
-- =========================================================

CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  category TEXT,
  client_name TEXT,

  short_description TEXT,
  description TEXT,

  challenge TEXT,
  strategy TEXT,
  execution TEXT,
  results TEXT,

  featured_media_id INTEGER,

  project_url TEXT,
  project_date TEXT,

  is_featured INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,

  seo_title TEXT,
  seo_description TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (featured_media_id)
    REFERENCES media(id)
    ON DELETE SET NULL
);


-- =========================================================
-- CASE STUDIES
-- =========================================================

CREATE TABLE IF NOT EXISTS case_studies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  client_name TEXT,
  industry TEXT,

  summary TEXT,

  challenge TEXT,
  objectives TEXT,
  strategy TEXT,
  execution TEXT,
  results TEXT,
  metrics TEXT,

  featured_media_id INTEGER,

  is_featured INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,

  seo_title TEXT,
  seo_description TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (featured_media_id)
    REFERENCES media(id)
    ON DELETE SET NULL
);


-- =========================================================
-- ARTICLES
-- =========================================================

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,

  excerpt TEXT,
  content TEXT,

  featured_media_id INTEGER,

  category TEXT,
  author TEXT,

  published_at TEXT,

  is_published INTEGER NOT NULL DEFAULT 0,

  seo_title TEXT,
  seo_description TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (featured_media_id)
    REFERENCES media(id)
    ON DELETE SET NULL
);


-- =========================================================
-- CERTIFICATES
-- =========================================================

CREATE TABLE IF NOT EXISTS certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  title TEXT NOT NULL,
  issuer TEXT NOT NULL,

  description TEXT,

  issue_date TEXT,

  credential_id TEXT,
  credential_url TEXT,

  media_id INTEGER,

  is_featured INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (media_id)
    REFERENCES media(id)
    ON DELETE SET NULL
);

-- =========================================================
-- PROJECT ↔ MEDIA RELATIONSHIP
-- =========================================================

CREATE TABLE IF NOT EXISTS project_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  project_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,

  sort_order INTEGER NOT NULL DEFAULT 0,

  UNIQUE(project_id, media_id),

  FOREIGN KEY (project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE,

  FOREIGN KEY (media_id)
    REFERENCES media(id)
    ON DELETE CASCADE
);


-- =========================================================
-- CONTACT INQUIRIES
-- =========================================================

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT NOT NULL,
  email TEXT NOT NULL,

  company TEXT,

  service TEXT,
  budget TEXT,

  message TEXT NOT NULL,

  status TEXT NOT NULL DEFAULT 'new',

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- SITE SETTINGS
-- =========================================================

CREATE TABLE IF NOT EXISTS site_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT,

  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- INDEXES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_services_published
  ON services(is_published);

CREATE INDEX IF NOT EXISTS idx_services_featured
  ON services(is_featured);

CREATE INDEX IF NOT EXISTS idx_projects_published
  ON projects(is_published);

CREATE INDEX IF NOT EXISTS idx_projects_featured
  ON projects(is_featured);

CREATE INDEX IF NOT EXISTS idx_case_studies_published
  ON case_studies(is_published);

CREATE INDEX IF NOT EXISTS idx_case_studies_featured
  ON case_studies(is_featured);

CREATE INDEX IF NOT EXISTS idx_articles_published
  ON articles(is_published);

CREATE INDEX IF NOT EXISTS idx_articles_published_at
  ON articles(published_at);

CREATE INDEX IF NOT EXISTS idx_certificates_published
  ON certificates(is_published);

CREATE INDEX IF NOT EXISTS idx_project_media_project
  ON project_media(project_id);

CREATE INDEX IF NOT EXISTS idx_project_media_media
  ON project_media(media_id);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status
  ON contact_inquiries(status);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created
  ON contact_inquiries(created_at);

-- =========================================================
-- ADMIN USERS
-- =========================================================

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  email TEXT NOT NULL UNIQUE,

  password_hash TEXT NOT NULL,

  is_active INTEGER NOT NULL DEFAULT 1,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- ADMIN SESSIONS
-- =========================================================

CREATE TABLE IF NOT EXISTS admin_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  user_id INTEGER NOT NULL,

  session_token_hash TEXT NOT NULL UNIQUE,

  expires_at TEXT NOT NULL,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id)
    REFERENCES admin_users(id)
    ON DELETE CASCADE
);


-- =========================================================
-- PASSWORD RESET TOKENS
-- =========================================================

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  user_id INTEGER NOT NULL,

  token_hash TEXT NOT NULL UNIQUE,

  expires_at TEXT NOT NULL,

  used_at TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id)
    REFERENCES admin_users(id)
    ON DELETE CASCADE
);


-- =========================================================
-- ADMIN AUTH INDEXES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_admin_sessions_user
  ON admin_sessions(user_id);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires
  ON admin_sessions(expires_at);

CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_user
  ON password_reset_tokens(user_id);

CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_expires
  ON password_reset_tokens(expires_at);
