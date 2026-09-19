/**
 * Site-wide constants. Edit here rather than in individual pages.
 */

export const SITE = {
  name: 'BabelStacks',
  tagline: 'Tools for digital humanities',
  description:
    'BabelStacks builds open tools for digital humanities research — for archives, texts, and the structures that make them navigable.',
  url: 'https://www.babelstacks.com',
} as const;

/**
 * TODO: replace with the real address before announcing the site.
 * Referenced by the contact page, the footer, and the home page, so changing
 * it here updates every mention.
 */
export const CONTACT_EMAIL = 'hello@babelstacks.com';

export const GITHUB_ORG = 'https://github.com/BabelStacks';

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/tools/', label: 'Tools' },
  { href: '/blog/', label: 'Writing' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

/** Presentation for each tool status. */
export const TOOL_STATUS = {
  planned: { label: 'Planned', tone: 'neutral' },
  building: { label: 'In development', tone: 'active' },
  beta: { label: 'Beta', tone: 'active' },
  released: { label: 'Released', tone: 'done' },
} as const;

export type ToolStatus = keyof typeof TOOL_STATUS;
