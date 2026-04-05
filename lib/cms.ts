import {
  type Project,
  getProjectBySlug,
  getProjectsBySig,
  getSigBySlug,
  projects,
  sigs,
} from "@/components/data";
import {
  type ProjectStructuredDetail,
  getProjectDetailBySlug,
} from "@/components/project-details";

export type Sig = (typeof sigs)[number];

const normalizeSigSlug = (slug: string) =>
  slug === "chronical" ? "chronicle" : slug;

export const getAllSigs = async (): Promise<Sig[]> => sigs;

export const getAllProjects = async (): Promise<Project[]> => projects;

export const getProjectsForSig = async (sigSlug: string): Promise<Project[]> => {
  const normalized = normalizeSigSlug(sigSlug);
  return getProjectsBySig(normalized);
};

export const getSingleProject = async (slug: string): Promise<Project | undefined> =>
  getProjectBySlug(slug);

export const getProjectDetail = async (
  slug: string
): Promise<ProjectStructuredDetail | undefined> => getProjectDetailBySlug(slug);

export const getSingleSig = async (slug: string): Promise<Sig | undefined> => {
  const normalized = normalizeSigSlug(slug);
  return getSigBySlug(normalized);
};

export const isUsingStrapi = () => false;

