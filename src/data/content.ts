import type {
  Chapter,
  ExperienceEntry,
  Metric,
  ProjectGroup,
} from './types'

/* ------------------------------------------------------------------ */
/*  Deployed app URLs (filled in once the apps are live on Render)      */
/* ------------------------------------------------------------------ */
export const DEPLOY_URLS = {
  // Updated after the XRG simulation is deployed to Render.
  xrg: 'https://xrg-ai-usecases.onrender.com/',
  // Updated after AccountingPrep is deployed to Render.
  accountingPrep: 'https://accounting-prep.onrender.com/',
}

/* ------------------------------------------------------------------ */
/*  Identity & contact                                                 */
/* ------------------------------------------------------------------ */
export const PROFILE = {
  name: 'Artem Potlog',
  kicker: 'Energy & O&G · Strategy · M&A · AI',
  roleLine: 'Energy executive leading AI transformation in oil & gas.',
  heroSub:
    'Capital allocation, M&A and petroleum economics — augmented with machine learning that earns its place in the decision.',
  location: 'UAE based · EU citizen',
}

export const CONTACT = {
  cv: '/Artem_Potlog_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/artem-potlog/',
  github: 'https://github.com/artem-potlog',
  email: 'apotlog@protonmail.com',
  phone: '+971552146953',
  phoneDisplay: '+971 55 214 69 53',
  whatsapp: 'https://wa.me/79251124725',
  whatsappDisplay: '+7 925 112 47 25',
  telegram: 'https://t.me/artempotlog',
  telegramDisplay: '@artempotlog',
}

/* ------------------------------------------------------------------ */
/*  Chapters (for the nav rail)                                        */
/* ------------------------------------------------------------------ */
export const CHAPTERS: Chapter[] = [
  { id: 'hero', index: '00', label: 'Intro' },
  { id: 'thesis', index: '01', label: 'Thesis' },
  { id: 'impact', index: '02', label: 'Impact' },
  { id: 'work', index: '03', label: 'Work' },
  { id: 'experience', index: '04', label: 'Path' },
  { id: 'about', index: '05', label: 'About' },
  { id: 'contact', index: '06', label: 'Contact' },
]

/* ------------------------------------------------------------------ */
/*  01 — Thesis / positioning                                          */
/* ------------------------------------------------------------------ */
export const THESIS = {
  eyebrow: 'The thesis',
  headline: 'I lead AI transformation from the business side of energy.',
  body: 'Twelve years in petroleum economics, capital allocation and cross-border M&A — now paired with hands-on machine learning. I don\u2019t sell models. I bring judgment about where AI actually moves NPV in oil, gas and the wider energy transition, and the credibility to drive it through engineers, geoscientists and an investment committee.',
  pillars: [
    {
      title: 'Domain first',
      text: 'FDP economics, fiscal design, reserves-to-value. I speak the language of the asset, not just the model.',
    },
    {
      title: 'Capital discipline',
      text: 'NPV / IRR / EMV, scenario planning and investment governance behind $3B+ of programs.',
    },
    {
      title: 'AI that earns its place',
      text: 'Selective, decision-grade ML and agentic systems — deployed where they change a real call.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  02 — Impact metrics                                                */
/* ------------------------------------------------------------------ */
export const METRICS: Metric[] = [
  { value: 12, suffix: '+', label: 'Years across strategy, economics & operations' },
  { value: 3, prefix: '$', suffix: 'B+', label: 'Capital programs shaped' },
  { value: 500, prefix: '$', suffix: 'M+', label: 'Cross-border M&A executed' },
  { value: 70, prefix: '+', suffix: '%', label: 'NPV uplift on a flagship asset' },
  { value: 200, prefix: '+', suffix: ' bps', label: 'IRR improvement via deal structuring' },
  { value: 20, suffix: '+', label: 'Board / IC-grade investment cases' },
]

/* ------------------------------------------------------------------ */
/*  03 — Work                                                          */
/* ------------------------------------------------------------------ */
export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'industrial-ai',
    label: 'Industrial AI',
    kicker: 'AI inside the operating reality of energy',
    items: [
      {
        id: 'xrg',
        title: 'AI Workflow Simulations',
        blurb:
          'Agentic AI use-cases for a large international O&G operator — each stress-tested against adversarial scenarios across screening, trading, operations and risk.',
        tags: ['Agentic AI', 'O&G operations', 'Scenario design'],
        status: 'live',
        url: DEPLOY_URLS.xrg,
        preview: '/previews/xrg.mp4',
        detail: {
          context:
            'An interactive catalogue of AI agent use-cases for an international oil & gas operator, built to show not just the happy path but how each workflow behaves under adversarial conditions.',
          facts: [
            { label: 'Client', value: 'Large international O&G operator' },
            { label: 'Scope', value: '9 end-to-end agent use-cases' },
            { label: 'My role', value: 'Use-case framing, scenario & value design' },
          ],
          highlights: [
            'Mapped nine decision-grade workflows where agents add value: counterparty screening, market reads, document handling, operations and risk.',
            'For each, designed an adversarial scenario set — what breaks, what to guard against — so leadership sees the controls, not just the demo.',
            'Translated each use-case into business value, time saved and a deployment / risk posture.',
          ],
        },
      },
      {
        id: 'rag',
        title: 'Reserves-Report RAG',
        blurb:
          'A system that lets you talk to dense PRMS reserve reports and get exact, cited numbers — hybrid retrieval with an agentic, self-verifying answer layer. Built for a Tier-1 O&G consultancy in the CIS.',
        tags: ['RAG', 'Agentic tools', 'Anti-hallucination'],
        status: 'case',
        detail: {
          context:
            'Reserve-assessment reports are dense PDFs full of tables. This system answers natural-language questions (RU/EN) about a major listed gas producer\u2019s reserves with exact figures and source citations — not summaries.',
          facts: [
            { label: 'Client', value: 'Tier-1 O&G consultancy (CIS)' },
            { label: 'Corpus', value: '10 reports · 54k+ reserve records' },
            { label: 'My role', value: 'Concept, architecture, evaluation design' },
          ],
          highlights: [
            'Four retrieval channels in parallel — dense vectors, BM25 keywords, a SQL store of parsed table cells, and a knowledge graph — fused with reciprocal-rank fusion and a re-ranker.',
            'Tables are parsed into a real database at ingestion, so numbers come from exact queries instead of the LLM reading cells — the key anti-hallucination decision.',
            'A ReAct agent calls 7 tools (lookup, SQL, graph, calculate\u2026), then an answer verifier checks every number in the response against the database.',
            'Self-hostable LLM (Qwen-72B) so client data never leaves their infrastructure.',
          ],
        },
      },
    ],
  },
  {
    id: 'productivity',
    label: 'Productivity tools',
    kicker: 'Tools that make decisions faster',
    items: [
      {
        id: 'xyz-dashboard',
        title: 'Investment Dashboard',
        blurb:
          'Interactive NPV / IRR scenario, sensitivity and peer-comparison dashboard for a large industrial holding\u2019s retail pilot.',
        tags: ['Dashboard', 'NPV / IRR', 'Sensitivity'],
        status: 'live',
        url: 'https://xyz-store-b0gk.onrender.com/',
        preview: '/previews/xyz-dashboard.mp4',
      },
      {
        id: 'treedraft',
        title: 'TreeDraft',
        blurb:
          'A fast, clean, web-based decision-tree builder — Decision / Chance / EMV — built after free tools moved behind paywalls.',
        tags: ['Decision trees', 'EMV', 'Web app'],
        status: 'live',
        url: 'https://treedraft.onrender.com/',
        preview: '/previews/treedraft.mp4',
      },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI-enhanced tools',
    kicker: 'Small, sharp tools built with LLMs',
    items: [
      {
        id: 'wellwellwell',
        title: 'wellwellwell.finance',
        blurb:
          'An O&G corporate-finance drill — valuation, NAV, deferred tax, M&A modeling — with LLM-generated questions to keep skills sharp.',
        tags: ['O&G finance', 'Education', 'LLM'],
        status: 'live',
        url: 'https://wellwellwell-finance.onrender.com/',
        preview: '/previews/wellwellwell.mp4',
      },
      {
        id: 'accounting-prep',
        title: 'IFRS Accounting Trainer',
        blurb:
          'A hand-authored IFRS accounting & FP&A trainer across four industries, with AI-graded open answers grounded in the standards.',
        tags: ['IFRS', 'FP&A', 'AI grading'],
        status: 'live',
        url: DEPLOY_URLS.accountingPrep,
        preview: '/previews/accounting-prep.mp4',
      },
      {
        id: 'aurum-astra',
        title: 'Aurum Astra',
        blurb:
          'A cinematic financial-astrology engine: a real geocentric ephemeris drives a playful, fully-computed market-timing reading.',
        tags: ['Generative', 'Ephemeris engine', 'Playful'],
        status: 'live',
        url: 'https://aurum-astra.onrender.com/',
        preview: '/previews/aurum-astra.mp4',
      },
      {
        id: 'resume-tailor',
        title: 'Resume Tailor',
        blurb:
          'Paste a CV and a vacancy link \u2192 get an ATS-ready one-pager checked for keyword coverage and semantic fit.',
        tags: ['ATS', 'NLP', 'Productivity'],
        status: 'live',
        url: 'https://resume-tailor-ycyp.onrender.com/',
        preview: '/previews/resume-tailor.mp4',
      },
    ],
  },
  {
    id: 'ml-research',
    label: 'ML research',
    kicker: 'Where geology meets valuation',
    items: [
      {
        id: 'facies',
        title: 'Well-Log Facies Prediction',
        blurb:
          'Probabilistic facies classification with uncertainty quantification, generating alternative well-conditioning scenarios for geomodeling. Accepted at IAMG 2026.',
        tags: ['Machine learning', 'Uncertainty', 'Geoscience'],
        status: 'github',
        url: 'https://github.com/artem-potlog/well-log-facies-prediction',
        detail: {
          context:
            'A full workflow that predicts depositional facies from well logs and produces scenario realizations to condition 3D geomodels — because facies condition geomodels, geomodels condition volumes, and volumes condition economics.',
          facts: [
            { label: 'Affiliation', value: 'Heriot-Watt University' },
            { label: 'Data', value: 'Equinor Volve · 19 wells' },
            { label: 'Output', value: 'IAMG 2026 (Montreal) paper' },
          ],
          highlights: [
            'Leakage-safe, leave-one-well-out evaluation with ~117 engineered features from 12 wireline curves.',
            '12-model soft-voting ensemble with per-sample uncertainty (entropy, agreement, margin).',
            'P1 / P2 / P3 scenario realizations for stochastic geomodel conditioning.',
            '~0.96 pay-vs-seal accuracy; ~0.99 reservoir recall on pooled blind wells.',
          ],
        },
      },
    ],
  },
  {
    id: 'mna',
    label: 'M&A',
    kicker: 'Cross-border deals, buy-side',
    items: [
      {
        id: 'mna-egypt',
        title: 'Supermajor\u2019s Egypt Portfolio',
        blurb:
          'Buy-side valuation of a producing onshore gas-weighted portfolio (~95 kboed, ~200 MMboe) across multiple PSCs and JVs.',
        tags: ['Farm-in / Asset deal', '~$600\u2013750M', 'Buy-side'],
        status: 'case',
        detail: {
          context:
            'A supermajor\u2019s Western-Desert (Egypt) onshore portfolio with current production — 15 PSCs, 55 fields across 22 licences. Bought on the buy-side in coordination with a regional partner.',
          facts: [
            { label: 'Type', value: 'Farm-in / Asset deal' },
            { label: 'Indicative value', value: '~$600\u2013750M' },
            { label: 'My role', value: 'Lead commercial / economic modeling' },
          ],
          highlights: [
            'Built a detailed per-asset operating & fiscal model from the PSC terms, Shell\u2019s historicals and the technical team\u2019s reserves / CAPEX.',
            'Coordinated daily valuation exchange with the partner\u2019s evaluators and the seller\u2019s advisor; ran the Q&A and data room.',
            'Prepared screening-committee, project and investment-committee materials; presented to Head of M&A and Head of International Business.',
          ],
        },
      },
      {
        id: 'mna-corporate',
        title: 'Listed CIS/MENA Producer',
        blurb:
          'Corporate acquisition of a listed E&P with assets across Iraq, Egypt, Oman and Yemen (2P ~600\u2013800 MMbbl).',
        tags: ['Corporate acquisition', '~$700M\u20131B', 'Buy-side'],
        status: 'case',
        detail: {
          context:
            'A publicly-listed producer with a multi-country footprint and ~30 kbopd of production. Full corporate acquisition on the buy-side, including pre-deal due diligence.',
          facts: [
            { label: 'Type', value: 'Corporate acquisition' },
            { label: 'Indicative value', value: '~$700M\u20131B' },
            { label: 'My role', value: 'Modeling, synergies, pre-DD' },
          ],
          highlights: [
            'Reviewed the seller\u2019s independent expert model; ran the management-presentation Q&A and contractual-terms analysis (PSCs and Iraqi service contracts).',
            'Valued operational synergies with existing in-country assets, including a gas-processing tie-in — modeled and presented.',
            'Ran preliminary corporate DD: liquidity, corporate loans, convertibles and bonds.',
          ],
        },
      },
      {
        id: 'mna-newcountry',
        title: 'New-Country Entry & JV',
        blurb:
          'Entry into a new jurisdiction with several JVs and service companies — three early-development assets, ~$2B program.',
        tags: ['JV creation', '~$2B CAPEX', 'End-to-end'],
        status: 'case',
        detail: {
          context:
            'Greenfield market entry: building the ownership, financing and partnership structure for three assets reaching ~300 kbopd at peak, while leading the entire commercial / investment workstream.',
          facts: [
            { label: 'Type', value: 'Farm-in / Asset deal · JV creation' },
            { label: 'Program', value: '~$2B CAPEX · ~300 kbopd peak' },
            { label: 'My role', value: 'Owner of the commercial workstream' },
          ],
          highlights: [
            'Designed the presence structure (ownership, legal forms, cross-border holding) and the funding / repatriation scheme with tax advisors.',
            'Ran financial & commercial DD on partners; built per-asset operating models from the technical evaluation.',
            'Co-led host-government negotiations and proposed contract amendments; prepared and presented IC materials.',
          ],
        },
      },
      {
        id: 'mna-jv-cfo',
        title: 'JV Reshaping (as CFO)',
        blurb:
          'As CFO / interim CEO, connected two back-to-back transactions and a tax unlock into a new JV — preserving asset upside through the shareholder transition.',
        tags: ['Corporate deal', 'CFO seat', 'Restructuring'],
        status: 'case',
        detail: {
          context:
            'A $500M-scale exploration JV: the partner exited, the stake was on-sold to a major Russian oil company, and a new JV was stood up — all while keeping the asset investable.',
          facts: [
            { label: 'Type', value: 'Corporate acquisition / JV' },
            { label: 'Scale', value: '$500M JV · 50 FTE' },
            { label: 'My role', value: 'CFO (interim CEO)' },
          ],
          highlights: [
            'Reviewed and corrected the asset valuation; presented strategy options (new JV / buy-in / full sale) up to the parent CEO.',
            'Led financial-DD coordination, the accounting balance-sheet clean-up for the deal, and authored the operational chapters of the new SHA; reviewed the SPA.',
            'Ran the JV\u2019s day-to-day (field, HR, budgeting, financing) in parallel with the live transaction.',
          ],
        },
      },
    ],
  },
  {
    id: 'cfo-gm',
    label: 'CFO / GM',
    kicker: 'Running the asset, not just modeling it',
    items: [
      {
        id: 'turnaround',
        title: 'Asset Turnaround',
        blurb:
          'Took a $500M-scale asset from \u201Ctechnically feasible but uneconomic\u201D to Board-approved investment — +70% NPV.',
        tags: ['Value creation', 'Fiscal design', '+70% NPV'],
        status: 'case',
        detail: {
          context:
            'A field with complex drilling, a heterogeneous reservoir and negative economics. The unlock came from the right development concept plus a special tax regime and partner synergies.',
          facts: [
            { label: 'Asset', value: '300 MMbbl recoverable' },
            { label: 'Result', value: 'Board-approved · +70% NPV' },
            { label: 'My role', value: 'CFO (interim CEO)' },
          ],
          highlights: [
            'Re-based the asset onto a special profit-based tax regime — a multi-billion-RUB full-cycle EMV uplift.',
            'Cleared the investment committee: project taken off \u201Csmart-pause\u201D and advanced from Appraise to Select with an approved work program.',
            'Combined technical redesign, fiscal unlock and adjacent-partner synergies into one Board-grade case.',
          ],
        },
      },
      {
        id: 'gm-operations',
        title: 'Finance & Ops Standup',
        blurb:
          'After the partner exited, rebuilt the JV\u2019s finance and IT backbone and held operations together through the transition.',
        tags: ['Interim CEO', 'Cost-out', 'Continuity'],
        status: 'case',
        detail: {
          context:
            'During the shareholder transition the asset had to keep running and become self-sufficient — migrating off the departing partner\u2019s systems without losing the execution window.',
          facts: [
            { label: 'Org', value: '50 FTE · multi-site' },
            { label: 'Focus', value: 'Systems, cost, continuity' },
            { label: 'My role', value: 'CFO / interim CEO' },
          ],
          highlights: [
            'Migrated reporting from SAP ERP to 1C and IT off the partner\u2019s infrastructure; brought statutory & tax accounting in-house from a Big-Four provider.',
            'Stacked recurring cost-outs: in-house accounting, office optimization and remote-work infrastructure (tens of millions of RUB / year combined).',
            'Ran the first-ever asset inventory, transfer-pricing documentation, and FEED contracting ahead of schedule — while retaining the team and protecting the winter drilling window.',
          ],
        },
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  04 — Experience                                                    */
/* ------------------------------------------------------------------ */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '2025 — Present',
    org: 'Heriot-Watt University',
    role: 'Research affiliate · Geo Data Science',
    location: 'Edinburgh / remote',
    points: [
      'ML for petrophysics and geostatistical modeling.',
      'Paper at IAMG 2026 (Montreal): rock-type classification with uncertainty quantification.',
    ],
  },
  {
    period: '2024 — Present',
    org: 'CIS Family Office ($500M)',
    role: 'Advisor (part-time)',
    location: 'CIS / remote',
    points: [
      'Central Asia upstream deals (KZ, UZ, TM, KG).',
      'Asset evaluation, data rooms, investment memos.',
    ],
  },
  {
    period: '2022 — 2024',
    org: 'Gazprom Neft',
    role: 'Program Manager · MENA & Caspian Strategy',
    location: 'Dubai, UAE',
    points: [
      'Framing, concept selection & CAPEX phasing for 3 assets (>$2B) in a new jurisdiction.',
      'Host-government negotiations; +200 bps IRR via JV/PSC structure.',
      'Interim limited-liability period that avoided ~$500M of unplanned CAPEX.',
    ],
  },
  {
    period: '2020 — 2022',
    org: 'Repsol',
    role: 'CFO (interim CEO) · $500M Exploration JV',
    location: 'Moscow, Russia',
    points: [
      'Turned a $500M-scale asset from unviable to Board-approved (+70% NPV).',
      'Orchestrated two back-to-back M&A transactions and stood up the new JV.',
      'Kept field, drilling and finance running without interruption.',
    ],
  },
  {
    period: '2017 — 2020',
    org: 'Gazprom Neft',
    role: 'Manager · Middle East & Caspian (Strategy & Investment)',
    location: 'Dubai, UAE',
    points: [
      'Built the analytical foundation for the Board-approved MENA strategy.',
      '20+ decision-grade investment cases (licensing rounds, $1B+ A&D evaluations).',
    ],
  },
  {
    period: '2013 — 2017',
    org: 'Gazprom Neft',
    role: 'Chief Economist / Investment Manager · Iraq',
    location: 'Erbil, Iraq',
    points: [
      'Built a $200M+ investment case for three exploration assets in two months; secured Group-CEO approval.',
      'Developed the 20-year development plan for the core field from ~100 reservoir scenarios.',
    ],
  },
  {
    period: '2011 — 2013',
    org: 'Gazprom Neft',
    role: 'Senior Specialist · Business Development',
    location: 'St. Petersburg, Russia',
    points: [
      'Closed a $2M energy-transition (Kyoto ERU) deal in a collapsing market.',
      'Helped structure risk-service projects unlocking a 1 Bn toe (2P) resource base.',
    ],
  },
  {
    period: '2010 — 2011',
    org: 'PwC',
    role: 'Audit Associate',
    location: '',
    points: ['Audit foundations across financial reporting and controls.'],
  },
]

/* ------------------------------------------------------------------ */
/*  05 — About                                                         */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  eyebrow: 'About',
  headline: 'Between the boardroom and the model.',
  paragraphs: [
    'Twelve-plus years across strategy, corporate development and operations in the Caspian, MENA and CIS — concept selection and value optimization for multi-billion-dollar field development plans, cross-border M&A and JV structuring, and value-creation in tight oil.',
    'A CFO and interim-CEO tenure taught me what survives contact with reality: governance, cash, and a team that stays. An MSc in Petroleum Engineering and applied ML research taught me where models genuinely help.',
    'I work best sitting between geology, reservoir engineering and valuation — turning subsurface uncertainty into decisions an investment committee can stand behind.',
  ],
  education: [
    {
      school: 'Heriot-Watt University',
      detail: 'MSc, Petroleum Engineering (Merit) · Data Science research',
      year: '2024 — 2026',
    },
    {
      school: 'St. Petersburg State University of Economics',
      detail: 'Double Diploma — Finance & Law',
      year: '2007 — 2012',
    },
  ],
  languages: ['English — full professional', 'Russian — native', 'German — working'],
}
