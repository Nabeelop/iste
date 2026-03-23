import {
  type Project,
  getProjectBySlug,
  getProjectsBySig,
  getSigBySlug,
  projects as localProjects,
  sigs as localSigs,
} from "@/components/data";

export type Sig = (typeof localSigs)[number];

type StrapiEntry = Record<string, unknown> & {
  attributes?: Record<string, unknown>;
};

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ||
  process.env.STRAPI_URL?.replace(/\/$/, "");
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const normalizeSigSlug = (slug: string) =>
  slug === "chronical" ? "chronicle" : slug;

const toRecord = (value: unknown): Record<string, unknown> =>
  typeof value === "object" && value !== null ? (value as Record<string, unknown>) : {};

const flatten = (entry: unknown): Record<string, unknown> => {
  const row = toRecord(entry);
  const attributes = toRecord(row.attributes);
  return Object.keys(attributes).length > 0 ? { ...row, ...attributes } : row;
};

const listFromPayload = (payload: unknown): Record<string, unknown>[] => {
  const data = toRecord(payload).data;
  if (Array.isArray(data)) {
    return data.map((entry) => flatten(entry));
  }
  return [];
};

const oneFromPayload = (payload: unknown): Record<string, unknown> | null => {
  const data = toRecord(payload).data;
  if (Array.isArray(data)) {
    return data.length > 0 ? flatten(data[0]) : null;
  }
  if (data) {
    return flatten(data);
  }
  return null;
};

const mediaUrlFromField = (field: unknown): string | undefined => {
  if (!field) return undefined;
  if (typeof field === "string") return field;

  const flatField = flatten(field);
  const candidate = flatField.url;
  if (typeof candidate === "string") {
    if (candidate.startsWith("http")) return candidate;
    if (candidate.startsWith("/") && STRAPI_URL) return `${STRAPI_URL}${candidate}`;
    return candidate;
  }

  const nestedData = toRecord(field).data;
  if (!nestedData) return undefined;
  if (Array.isArray(nestedData) && nestedData[0]) {
    return mediaUrlFromField(nestedData[0]);
  }
  return mediaUrlFromField(nestedData);
};

const stringList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string" && value.trim().length > 0) {
    return value
      .split(",")
      .map((token) => token.trim())
      .filter(Boolean);
  }
  return [];
};

const relationToSigSlug = (value: unknown): string | null => {
  const flat = flatten(value);
  const slug = flat.slug;
  if (typeof slug === "string") return normalizeSigSlug(slug);

  const nestedData = toRecord(value).data;
  if (Array.isArray(nestedData) && nestedData[0]) {
    return relationToSigSlug(nestedData[0]);
  }
  if (nestedData) {
    return relationToSigSlug(nestedData);
  }
  return null;
};

const mapSig = (row: Record<string, unknown>): Sig | null => {
  const slugRaw = row.slug;
  if (typeof slugRaw !== "string") return null;
  const slug = normalizeSigSlug(slugRaw);

  const title =
    typeof row.title === "string"
      ? row.title
      : typeof row.name === "string"
      ? row.name
      : slug.charAt(0).toUpperCase() + slug.slice(1);

  const image =
    mediaUrlFromField(row.image) ||
    mediaUrlFromField(row.logo) ||
    `/${
      slug === "chronicle" ? "chronicle" : slug
    }.jpg`;

  const description =
    typeof row.description === "string" ? row.description : "No description yet.";

  return {
    title,
    slug,
    image,
    description,
    link: `/sigs/${slug}`,
  };
};

const mapProject = (row: Record<string, unknown>): Project | null => {
  const slug = typeof row.slug === "string" ? row.slug : null;
  const title =
    typeof row.title === "string"
      ? row.title
      : typeof row.name === "string"
      ? row.name
      : null;
  if (!slug || !title) return null;

  const sigSlug = relationToSigSlug(row.sig) || relationToSigSlug(row.SIG);
  if (!sigSlug) return null;

  const shortDescription =
    typeof row.shortDescription === "string"
      ? row.shortDescription
      : typeof row.summary === "string"
      ? row.summary
      : "No summary provided.";

  const description =
    typeof row.description === "string" ? row.description : shortDescription;

  const statusRaw =
    typeof row.status === "string" ? row.status : "In Progress";
  const status = statusRaw === "Live" ? "Live" : "In Progress";

  const year =
    typeof row.year === "string"
      ? row.year
      : typeof row.publishedAt === "string"
      ? row.publishedAt.slice(0, 4)
      : "2026";

  return {
    title,
    slug,
    sig: sigSlug as Project["sig"],
    shortDescription,
    description,
    techStack: stringList(row.techStack),
    status,
    year,
    coverImage:
      mediaUrlFromField(row.coverImage) ||
      mediaUrlFromField(row.image) ||
      "/galaxy1.jpg",
    githubUrl: typeof row.githubUrl === "string" ? row.githubUrl : undefined,
    demoUrl: typeof row.demoUrl === "string" ? row.demoUrl : undefined,
    leads: stringList(row.leads),
  };
};

const fetchStrapi = async (path: string): Promise<unknown | null> => {
  if (!STRAPI_URL) return null;
  try {
    const response = await fetch(`${STRAPI_URL}${path}`, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: 30 },
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
};

export const getAllSigs = async (): Promise<Sig[]> => {
  const payload = await fetchStrapi("/api/sigs?sort=title:asc&populate=image,logo");
  if (!payload) return localSigs;

  const cmsSigs = listFromPayload(payload).map(mapSig).filter((sig): sig is Sig => Boolean(sig));
  return cmsSigs.length > 0 ? cmsSigs : [];
};

export const getAllProjects = async (): Promise<Project[]> => {
  const payload = await fetchStrapi(
    "/api/projects?sort=year:desc&pagination[pageSize]=200&populate=sig,SIG,coverImage,image"
  );
  if (!payload) return localProjects;

  return listFromPayload(payload)
    .map(mapProject)
    .filter((project): project is Project => Boolean(project));
};

export const getProjectsForSig = async (sigSlug: string): Promise<Project[]> => {
  const normalized = normalizeSigSlug(sigSlug);
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.sig === normalized);
};

export const getSingleProject = async (slug: string): Promise<Project | undefined> => {
  const payload = await fetchStrapi(
    `/api/projects?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=sig,SIG,coverImage,image`
  );

  if (!payload) return getProjectBySlug(slug);

  const record = oneFromPayload(payload);
  if (!record) return undefined;
  return mapProject(record) ?? undefined;
};

export const getSingleSig = async (slug: string): Promise<Sig | undefined> => {
  const normalized = normalizeSigSlug(slug);
  const payload = await fetchStrapi(
    `/api/sigs?filters[slug][$eq]=${encodeURIComponent(normalized)}&populate=image,logo`
  );

  if (!payload) return getSigBySlug(normalized);

  const record = oneFromPayload(payload);
  if (!record) return undefined;
  return mapSig(record) ?? undefined;
};

export const isUsingStrapi = () => Boolean(STRAPI_URL);
