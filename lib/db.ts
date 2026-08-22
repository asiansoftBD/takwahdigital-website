import { getCloudflareContext } from "@opennextjs/cloudflare";

export type Service = {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  icon: string | null;
  sort_order: number;
  is_featured: number;
  is_published: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  client_name: string | null;
  short_description: string | null;
  description: string | null;
  challenge: string | null;
  strategy: string | null;
  execution: string | null;
  results: string | null;
  featured_media_id: number | null;
  project_url: string | null;
  project_date: string | null;
  is_featured: number;
  is_published: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
    updated_at: string;
  featured_media_file_name: string | null;
  featured_media_storage_key: string | null;
  featured_media_alt_text: string | null;
  featured_media_caption: string | null;
};


export type ProjectMedia = {
  id: number;
  file_name: string;
  storage_key: string;
  file_url: string | null;
  file_type: string | null;
  mime_type: string | null;
  alt_text: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  sort_order: number;
};

export type CaseStudy = {
  id: number;
  title: string;
  slug: string;
  client_name: string | null;
  industry: string | null;
  summary: string | null;
  challenge: string | null;
  objectives: string | null;
  strategy: string | null;
  execution: string | null;
  results: string | null;
  metrics: string | null;
  featured_media_id: number | null;
  is_featured: number;
  is_published: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  featured_media_file_name: string | null;
  featured_media_storage_key: string | null;
  featured_media_alt_text: string | null;
  featured_media_caption: string | null;
};

export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        cs.id,
        cs.title,
        cs.slug,
        cs.client_name,
        cs.industry,
        cs.summary,
        cs.challenge,
        cs.objectives,
        cs.strategy,
        cs.execution,
        cs.results,
        cs.metrics,
        cs.featured_media_id,
        cs.is_featured,
        cs.is_published,
        cs.seo_title,
        cs.seo_description,
        cs.created_at,
        cs.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM case_studies cs
      LEFT JOIN media fm
        ON fm.id = cs.featured_media_id
      WHERE cs.is_published = 1
      ORDER BY cs.is_featured DESC, cs.id DESC
      `
    )
    .all<CaseStudy>();

  return result.results;
}

export async function getPublishedCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        cs.id,
        cs.title,
        cs.slug,
        cs.client_name,
        cs.industry,
        cs.summary,
        cs.challenge,
        cs.objectives,
        cs.strategy,
        cs.execution,
        cs.results,
        cs.metrics,
        cs.featured_media_id,
        cs.is_featured,
        cs.is_published,
        cs.seo_title,
        cs.seo_description,
        cs.created_at,
        cs.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM case_studies cs
      LEFT JOIN media fm
        ON fm.id = cs.featured_media_id
      WHERE cs.slug = ?
        AND cs.is_published = 1
      LIMIT 1
      `
    )
    .bind(slug)
    .first<CaseStudy>();

  return result ?? null;
}

export async function getPublishedServices(): Promise<Service[]> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        id,
        title,
        slug,
        short_description,
        description,
        icon,
        sort_order,
        is_featured,
        is_published,
        seo_title,
        seo_description,
        created_at,
        updated_at
      FROM services
      WHERE is_published = 1
      ORDER BY sort_order ASC, id ASC
      `
    )
    .all<Service>();

  return result.results;
}

export async function getPublishedProjects(): Promise<Project[]> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
  .prepare(
    `
    SELECT
      p.id,
      p.title,
      p.slug,
      p.category,
      p.client_name,
      p.short_description,
      p.description,
      p.challenge,
      p.strategy,
      p.execution,
      p.results,
      p.featured_media_id,
      p.project_url,
      p.project_date,
      p.is_featured,
      p.is_published,
      p.seo_title,
      p.seo_description,
      p.created_at,
      p.updated_at,
      fm.file_name AS featured_media_file_name,
      fm.storage_key AS featured_media_storage_key,
      fm.alt_text AS featured_media_alt_text,
      fm.caption AS featured_media_caption
    FROM projects p
    LEFT JOIN media fm ON fm.id = p.featured_media_id
    WHERE p.is_published = 1
    ORDER BY p.is_featured DESC, p.project_date DESC, p.id ASC
    `
  )
  .all<Project>();

  return result.results;
}

export async function getPublishedProjectBySlug(
  slug: string
): Promise<Project | null> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        id,
        title,
        slug,
        category,
        client_name,
        short_description,
        description,
        challenge,
        strategy,
        execution,
        results,
        featured_media_id,
        project_url,
        project_date,
        is_featured,
        is_published,
        seo_title,
        seo_description,
        created_at,
        updated_at
      FROM projects
      WHERE slug = ? AND is_published = 1
      LIMIT 1
      `
    )
    .bind(slug)
    .first<Project>();

  return result ?? null;
}

export async function getProjectMedia(
  projectId: number
): Promise<ProjectMedia[]> {
  const { env } = await getCloudflareContext({ async: true });
  const result = await env.DB
    .prepare(
      `
      SELECT
        m.id,
        m.file_name,
        m.storage_key,
        m.file_url,
        m.file_type,
        m.mime_type,
        m.alt_text,
        m.caption,
        m.width,
        m.height,
        pm.sort_order
      FROM project_media pm
      INNER JOIN media m ON m.id = pm.media_id
      WHERE pm.project_id = ?
      ORDER BY pm.sort_order ASC, m.id ASC
      `
    )
    .bind(projectId)
    .all<ProjectMedia>();

  return result.results;
}

export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_media_id: number | null;
  category: string | null;
  author: string | null;
  published_at: string | null;
  is_published: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  featured_media_file_name: string | null;
  featured_media_storage_key: string | null;
  featured_media_alt_text: string | null;
  featured_media_caption: string | null;
};

export async function getPublishedArticles(): Promise<Article[]> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        a.id,
        a.title,
        a.slug,
        a.excerpt,
        a.content,
        a.featured_media_id,
        a.category,
        a.author,
        a.published_at,
        a.is_published,
        a.seo_title,
        a.seo_description,
        a.created_at,
        a.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM articles a
      LEFT JOIN media fm
        ON fm.id = a.featured_media_id
      WHERE a.is_published = 1
      ORDER BY a.published_at DESC, a.id DESC
      `
    )
    .all<Article>();

  return result.results;
}

export async function getPublishedArticleBySlug(
  slug: string
): Promise<Article | null> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        a.id,
        a.title,
        a.slug,
        a.excerpt,
        a.content,
        a.featured_media_id,
        a.category,
        a.author,
        a.published_at,
        a.is_published,
        a.seo_title,
        a.seo_description,
        a.created_at,
        a.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM articles a
      LEFT JOIN media fm
        ON fm.id = a.featured_media_id
      WHERE a.slug = ?
        AND a.is_published = 1
      LIMIT 1
      `
    )
    .bind(slug)
    .first<Article>();

  return result ?? null;
}

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  description: string | null;
  issue_date: string | null;
  credential_id: string | null;
  credential_url: string | null;
  media_id: number | null;
  is_featured: number;
  is_published: number;
  created_at: string;
  updated_at: string;

  media_file_name: string | null;
  media_storage_key: string | null;
  media_alt_text: string | null;
  media_caption: string | null;
};

export async function getPublishedCertificates(): Promise<Certificate[]> {
  const { env } = await getCloudflareContext({ async: true });

  const result = await env.DB
    .prepare(
      `
      SELECT
        c.id,
        c.title,
        c.issuer,
        c.description,
        c.issue_date,
        c.credential_id,
        c.credential_url,
        c.media_id,
        c.is_featured,
        c.is_published,
        c.created_at,
        c.updated_at,

        m.file_name AS media_file_name,
        m.storage_key AS media_storage_key,
        m.alt_text AS media_alt_text,
        m.caption AS media_caption

      FROM certificates c

      LEFT JOIN media m
        ON m.id = c.media_id

      WHERE c.is_published = 1

      ORDER BY
        c.is_featured DESC,
        c.issue_date DESC,
        c.id DESC
      `
    )
    .all<Certificate>();

  return result.results;
}