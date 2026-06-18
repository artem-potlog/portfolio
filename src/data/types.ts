export type ProjectStatus = 'live' | 'github' | 'case'

export interface Diagram {
  src: string
  caption: string
  /** Expanded explanation; when present, the figure renders with its text */
  description?: string
}

export interface CaseStudy {
  /** Short context line shown at top of the panel */
  context: string
  /** Anonymized scope facts (scale, role, etc.) */
  facts: { label: string; value: string; href?: string }[]
  /** Bullet highlights of what was done / delivered */
  highlights?: string[]
  /** Technology stack chips */
  techStack?: string[]
  /** Clickable diagrams shown in the panel (open in a lightbox) */
  diagrams?: Diagram[]
}

export interface ProjectItem {
  id: string
  title: string
  /** One or two tight lines */
  blurb: string
  tags: string[]
  status: ProjectStatus
  /** External link (live demo / GitHub) when available */
  url?: string
  /** Looping preview clip of the live site (path under /previews) */
  preview?: string
  /** Static visual for the card when there is no video preview */
  image?: string
  /** Downloadable paper / document (path under public) */
  pdf?: string
  /** Long-form anonymized detail, opens in a panel */
  detail?: CaseStudy
}

export interface ProjectGroup {
  id: string
  label: string
  kicker: string
  items: ProjectItem[]
}

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export interface ExperienceEntry {
  period: string
  org: string
  role: string
  location?: string
  points: string[]
  /** External link for the org (e.g. research group page) */
  href?: string
}

export interface Chapter {
  id: string
  index: string
  label: string
}
