export type ProjectStatus = 'live' | 'github' | 'case'

export interface CaseStudy {
  /** Short context line shown at top of the panel */
  context: string
  /** Anonymized scope facts (scale, role, etc.) */
  facts: { label: string; value: string }[]
  /** Bullet highlights of what was done / delivered */
  highlights: string[]
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
}

export interface Chapter {
  id: string
  index: string
  label: string
}
