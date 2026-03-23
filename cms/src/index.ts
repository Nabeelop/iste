import type { Core } from '@strapi/strapi';

const SIG_SEED = [
  { title: 'Crypt', slug: 'crypt', description: 'Cybersecurity and cryptography SIG.' },
  { title: 'Clutch', slug: 'clutch', description: 'Competitive programming and problem-solving SIG.' },
  { title: 'Concrete', slug: 'concrete', description: 'Development and software engineering SIG.' },
  { title: 'Chronicle', slug: 'chronicle', description: 'Content, media, and documentation SIG.' },
  { title: 'Catalyst', slug: 'catalyst', description: 'Innovation and research SIG.' },
];

const PROJECT_SEED = {
  title: 'Cipher Campus',
  slug: 'cipher-campus',
  shortDescription: 'A campus-first encryption demo tool to teach practical cryptography.',
  description:
    'Cipher Campus is a beginner-friendly cryptography learning project with practical encryption demos and secure-by-design workflows.',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Crypto API'],
  status: 'In Progress',
  year: '2026',
  githubUrl: 'https://github.com/istenitk/cipher-campus',
  leads: ['Crypt SIG Team'],
};

const ensurePublicReadPermissions = async (strapi: Core.Strapi) => {
  try {
    const publicRole = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole?.id) return;

    const readActions = [
      'api::sig.sig.find',
      'api::sig.sig.findOne',
      'api::project.project.find',
      'api::project.project.findOne',
    ];

    for (const action of readActions) {
      const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: { role: publicRole.id, action },
      });

      if (!existing) {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action,
            role: publicRole.id,
            enabled: true,
            policy: '',
            conditions: [],
          },
        });
      } else if (!existing.enabled) {
        await strapi.db.query('plugin::users-permissions.permission').update({
          where: { id: existing.id },
          data: { enabled: true },
        });
      }
    }
  } catch (error) {
    strapi.log.warn(`Could not auto-configure public read permissions: ${String(error)}`);
  }
};

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const existingSigs = await strapi.db.query('api::sig.sig').findMany({
      select: ['id', 'slug'],
    });

    if (existingSigs.length === 0) {
      for (const sig of SIG_SEED) {
        await strapi.db.query('api::sig.sig').create({
          data: {
            ...sig,
            publishedAt: new Date(),
          },
        });
      }
    }

    const cryptSig = await strapi.db.query('api::sig.sig').findOne({
      where: { slug: 'crypt' },
      select: ['id'],
    });

    const existingProject = await strapi.db.query('api::project.project').findOne({
      where: { slug: PROJECT_SEED.slug },
      select: ['id'],
    });

    if (!existingProject && cryptSig?.id) {
      await strapi.db.query('api::project.project').create({
        data: {
          ...PROJECT_SEED,
          sig: cryptSig.id,
          publishedAt: new Date(),
        },
      });
    }

    await ensurePublicReadPermissions(strapi);
  },
};
