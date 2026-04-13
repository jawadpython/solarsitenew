export const SERVICE_PILLAR_SLUGS = ['etude', 'installation', 'maintenance'] as const;
export type ServicePillarSlug = (typeof SERVICE_PILLAR_SLUGS)[number];
