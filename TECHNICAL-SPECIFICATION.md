# Takwah Digital — Technical Specification

## 1. Project

**Website:** Takwah Digital  
**Domain:** takwahdigital.com

**Professional positioning:**

> AI-Powered Social Media Strategist, Content Creator & Digital Marketing Analytics Specialist

The website will be a practical professional portfolio CMS. It should be dynamic, mobile-responsive, secure, maintainable, and easy to manage without unnecessary enterprise-level complexity.

---

## 2. Public Website

Visitors should be able to view:

- Home
- About / Professional Profile
- Services
- Portfolio / Projects
- Case Studies
- Certificates
- Articles / Blog
- Media / Resources
- Contact
- Social/profile links

---

## 3. Portfolio

Each project may contain:

- Project title
- Category
- Client/business
- Description
- Objectives
- Strategy
- Execution
- Results
- Images
- Videos
- External links
- Featured status

---

## 4. Case Studies

Each case study should support:

- Challenge
- Objectives
- Strategy
- Implementation
- Results / KPIs
- Visual evidence
- Related project
- Related service

---

## 5. Articles

Articles should support:

- Title
- Slug
- Featured image
- Content
- Excerpt
- Category
- Tags
- Publication date
- SEO title
- SEO description
- Draft / Published status

---

## 6. Certificates

Each certificate should support:

- Certificate title
- Issuing organization
- Issue date
- Credential ID where applicable
- Credential URL where applicable
- Certificate image or PDF
- Description
- Featured status

---

## 7. Media Management

Supported media:

- Images
- Videos
- PDF documents

Media files should be stored in Cloudflare R2.

D1 should store media metadata rather than the actual binary files.

Example metadata:

- File name
- R2 object key
- File type
- MIME type
- File size
- Alt text
- Title
- Created date

---

## 8. Admin Dashboard

The administrator should be able to manage:

### Content

- Profile
- Services
- Projects
- Case studies
- Articles
- Certificates
- Categories
- Tags

### Media

- Upload files
- View files
- Delete files
- Associate files with content

### Site Settings

- Website title
- Website description
- Contact information
- Social links
- SEO defaults
- Homepage settings

### Contact Submissions

- View submissions
- Mark as read / unread
- Delete submissions

---

## 9. Authentication

The admin area must be protected.

Required:

- Secure administrator authentication
- Password hashing
- Protected admin routes
- Server-side authorization
- Secure logout
- Environment secrets
- Input validation
- File-upload validation

Authentication should remain simple and secure rather than unnecessarily complex.

---

## 10. Database

Database platform:

**Cloudflare D1**

Initial core tables:

- users
- profiles
- services
- projects
- case_studies
- articles
- certificates
- categories
- tags
- media
- contact_submissions
- site_settings

Relationship tables may be added where required.

---

## 11. File Storage

File storage platform:

**Cloudflare R2**

Suggested object structure:

```text
images/
videos/
certificates/
documents/
portfolio/