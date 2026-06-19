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
  // AI workflow simulations (client anonymized as "Company ABC").
  // Public link points to the LOCKED preview (abc2). Swap to the full version
  // (abc-ai-usecases.onrender.com) here when you want to show everything.
  xrg: 'https://abc2-ai-usecases.onrender.com/',
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
    'Capital allocation, M&A and petroleum economics, augmented with machine learning that earns its place in the decision.',
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
/*  01 - Thesis / positioning                                          */
/* ------------------------------------------------------------------ */
export const THESIS = {
  eyebrow: 'The thesis',
  headline: 'I lead AI transformation from the business side of energy.',
  body: 'Twelve years in petroleum economics, capital allocation and cross-border M&A, plus a lot of recent hands-on machine learning. I know where AI actually earns its keep in oil, gas and energy, and I can carry it through the engineers, geoscientists and investment committees who have to sign off.',
  pillars: [
    {
      title: 'Domain first',
      text: 'Petroleum engineering, Field Development economics, fiscal design, M&A deals. I understand the asset, not just the model.',
    },
    {
      title: 'Capital discipline',
      text: 'NPV / IRR / EMV, scenario planning and investment governance behind $3B+ of programs.',
    },
    {
      title: 'AI that earns its place',
      text: 'Selective, decision-grade ML and agentic systems, deployed where they change a real call.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  02 - Impact metrics                                                */
/* ------------------------------------------------------------------ */
export const METRICS: Metric[] = [
  { value: 12, suffix: '+', label: 'Years across strategy, economics & operations' },
  { value: 3, prefix: '$', suffix: 'B+', label: 'Capital programs shaped' },
  { value: 500, prefix: '$', suffix: 'M+', label: 'Cross-border M&A executed' },
  { value: 70, prefix: '+', suffix: '%', label: 'NPV uplift on a flagship asset' },
  { value: 20, suffix: '+', label: 'Board / IC-grade investment cases' },
]

/* ------------------------------------------------------------------ */
/*  03 - Work                                                          */
/* ------------------------------------------------------------------ */
const GROUPS_RAW: ProjectGroup[] = [
  {
    id: 'industrial-ai',
    label: 'Industrial AI',
    kicker: 'AI inside the operating reality of energy',
    items: [
      {
        id: 'xrg',
        title: 'AI Workflow Simulations',
        blurb:
          'Agentic AI use-cases for a large international O&G operator, each stress-tested against adversarial scenarios across screening, trading, operations and risk.',
        tags: ['Agentic AI', 'O&G operations', 'Scenario design'],
        status: 'live',
        url: DEPLOY_URLS.xrg,
        preview: '/previews/xrg.mp4',
      },
      {
        id: 'rag',
        title: 'Reserves-Report RAG',
        blurb:
          'A system that lets you talk to dense PRMS reserve reports and get exact, cited numbers, using hybrid retrieval with an agentic, self-verifying answer layer. Built for a Tier-1 O&G consultancy in the CIS.',
        tags: ['RAG', 'Agentic tools', 'Anti-hallucination'],
        status: 'case',
        image: '/previews/rag/rag-architecture.png',
        detail: {
          context:
            'Reserve-assessment reports are dense PDFs full of tables. This system answers natural-language questions (RU/EN) about a major listed gas producer\u2019s reserves with exact figures and source citations, not summaries.',
          facts: [
            { label: 'Client', value: 'Tier-1 O&G consultancy (CIS)' },
            { label: 'Corpus', value: '10 reports · 54k+ reserve records' },
            { label: 'My role', value: 'Concept, architecture, evaluation design' },
          ],
          highlights: [
            'Four retrieval channels in parallel (dense vectors, BM25 keywords, a SQL store of parsed table cells, and a knowledge graph), fused with reciprocal-rank fusion and a re-ranker.',
            'Tables are parsed into a real database at ingestion, so numbers come from exact queries instead of the LLM reading cells. That is the key anti-hallucination decision.',
            'A ReAct agent calls 7 tools (lookup, SQL, graph, calculate\u2026), then an answer verifier checks every number in the response against the database.',
            'Self-hostable LLM (Qwen-72B) so client data never leaves their infrastructure.',
          ],
          diagrams: [
            { src: '/previews/rag/rag-architecture.png', caption: 'System architecture' },
            { src: '/previews/rag/rag-ingestion.png', caption: 'Ingestion pipeline' },
            { src: '/previews/rag/rag-query.png', caption: 'Query-time workflow' },
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
          'A fast, clean, web-based decision-tree builder (Decision / Chance / EMV) built after free tools moved behind paywalls.',
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
          'An O&G corporate-finance drill (valuation, NAV, deferred tax, M&A modeling) with LLM-generated questions to keep skills sharp.',
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
        pdf: '/papers/well-log-facies-prediction.pdf',
        image: '/previews/facies/facies-scenarios.png',
        detail: {
          context:
            'A full workflow that predicts depositional facies from well logs and produces scenario realizations to condition 3D geomodels, because facies condition geomodels, geomodels condition volumes, and volumes condition economics.',
          facts: [
            {
              label: 'Affiliation',
              value: 'Heriot-Watt GeoDataScience',
              href: 'https://geodatascience.hw.ac.uk/',
            },
            { label: 'Data', value: 'Equinor Volve · Hugin Fm.' },
            { label: 'Output', value: 'IAMG 2026 (Montreal) paper' },
          ],
          techStack: [
            'Python',
            'scikit-learn',
            'RandomForest',
            'GroupKFold / LOWO',
            'SciPy (savgol, find_peaks)',
            'pandas / NumPy',
            'Matplotlib',
            'joblib',
          ],
          diagrams: [
            {
              src: '/previews/facies/facies-feature-engineering.png',
              caption: 'Feature engineering: multi-scale context',
              description:
                'Geologists read sequences, not single readings, so I engineered multi-scale vertical context for every log: bed (~1.4 m), sand-body (~7 m) and formation (~23 m) windows, with the sizes chosen from measured bed thickness and vertical variogram ranges rather than arbitrary smoothing. This multi-scale GR context became the single most important feature family in the model: a concrete example of encoding O&G domain knowledge directly into ML features instead of leaving the model to find it alone.',
            },
            {
              src: '/previews/facies/facies-pipeline-result.png',
              caption: 'Blind-well result: 15/9-F-4 (~70%)',
              description:
                'Inputs (rank-normalized GR and VSH) on the left; the ensemble\u2019s predicted facies proportions, per-depth uncertainty, and true-vs-predicted columns on the right. On this fully blind well (never seen during training under leave-one-well-out) the workflow reaches ~70% facies accuracy (and ~0.96 pay-vs-seal, ~0.99 reservoir recall pooled across wells). That comes from soft-voting across 12 model views plus the robust, geoscience-informed feature set, not from tuning on the test well.',
            },
            {
              src: '/previews/facies/facies-scenarios.png',
              caption: 'Probabilistic alternatives: P1 / P2 / P3',
              description:
                'Instead of a single deterministic facies log, the model emits ranked alternative realizations: P1 (most probable), then P2 and P3 (progressively more divergent). This gives downstream teams genuine alternative depositional architectures to feed into geostatistical models and, in turn, into economic and volumetric scenarios. Uncertainty is carried all the way through to the value decision rather than collapsed to one answer.',
            },
            {
              src: '/previews/facies/facies-discrimination.png',
              caption: 'Discrimination experts on confused pairs',
              description:
                'Some facies pairs (e.g. Tidal Bar vs Mouthbar) stay confusable even for a strong ensemble. I added pair-aware \u201Cdiscrimination experts\u201D that find the most-confused pairs and re-weight the ensemble views that best separate each specific pair, lifting accuracy exactly where the base model struggles, without disturbing everything else.',
            },
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
            'A supermajor\u2019s Western-Desert (Egypt) onshore portfolio with current production: 15 PSCs, 55 fields across 22 licences. Bought on the buy-side in coordination with a regional partner.',
          facts: [
            { label: 'Type', value: 'Farm-in / Asset deal' },
            { label: 'Indicative value', value: '~$600\u2013750M' },
            { label: 'My role', value: 'Lead commercial / economic modeling' },
          ],
          highlights: [
            'Built a detailed per-asset operating & fiscal model from the PSC terms, the seller\u2019s historicals and the technical team\u2019s reserves / CAPEX.',
            'Coordinated daily valuation exchange with the partner\u2019s evaluators and the seller\u2019s advisor; ran the Q&A and data room.',
            'Prepared screening-committee, project and investment-committee materials; presented to Head of M&A and Head of International Business.',
          ],
          techStack: ['DCF', 'NAV', 'PSC', 'Tax', 'Monte Carlo', 'GR', 'Term Sheet', 'Negotiations', 'Strategy'],
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
            'Valued operational synergies with existing in-country assets, including a gas-processing tie-in, modeled and presented.',
            'Ran preliminary corporate DD: liquidity, corporate loans, convertibles and bonds.',
          ],
          techStack: ['DCF', 'NAV', 'EMV', 'Tax', 'SPA', 'Monte Carlo', 'Negotiations', 'Strategy'],
        },
      },
      {
        id: 'mna-newcountry',
        title: 'New-Country Entry & JV',
        blurb:
          'Entry into a new jurisdiction with several JVs and service companies: three early-development assets, ~$2B program.',
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
          techStack: ['DCF', 'EMV', 'Decision Trees', 'PSC', 'Tax', 'GR', 'SHA', 'Term Sheet', 'MoU', 'HoA', 'Negotiations', 'Strategy'],
        },
      },
      {
        id: 'mna-jv-cfo',
        title: 'JV Reshaping (as CFO)',
        blurb:
          'As CFO / interim CEO, connected two back-to-back transactions and a tax unlock into a new JV, preserving asset upside through the shareholder transition.',
        tags: ['Corporate deal', 'CFO seat', 'Restructuring'],
        status: 'case',
        detail: {
          context:
            'A $500M-scale exploration JV: the partner exited, the stake was on-sold to a major Russian oil company, and a new JV was stood up, all while keeping the asset investable.',
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
          techStack: ['NAV', 'DCF', 'SHA', 'SPA', 'Tax', 'Negotiations', 'Strategy'],
        },
      },
      {
        id: 'mna-more',
        title: 'Further Deals & Rounds',
        blurb:
          'A run of additional buy-side mandates across the Caspian, MENA and North Africa: bilateral A&D, licensing rounds and a corporate JV.',
        tags: ['A&D', 'Licensing rounds', 'Buy-side'],
        status: 'case',
        detail: {
          context:
            'Beyond the headline transactions, a series of additional buy-side evaluations and negotiations across the region (all anonymized).',
          facts: [
            { label: 'Scope', value: 'Five more mandates' },
            { label: 'Range', value: '~$50M-500M each' },
            { label: 'My role', value: 'Economics, DD, negotiation support' },
          ],
          highlights: [
            'Early-development Algerian gas field (~$300M, ~22 Tcf P50): buy-side asset evaluation.',
            'Corporate JV with a state nuclear corporation: SHA drafting and partner alignment.',
            'Iraq and UAE licensing rounds: bid economics built from internal technical re-estimates.',
            'Kurdistan bilateral A&D across several operators: farm-in screening and valuation.',
            'Oman bilateral A&D with national operators: asset screening and valuation.',
          ],
          techStack: ['DCF', 'NAV', 'EMV', 'PSC', 'Tax', 'Term Sheet', 'MoU', 'Negotiations', 'Strategy'],
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
          'Took a $500M-scale asset from \u201Ctechnically feasible but uneconomic\u201D to Board-approved investment (+70% NPV).',
        tags: ['Value creation', 'Fiscal design', '+70% NPV'],
        status: 'case',
        image: '/previews/turnaround/fishbone-well.png',
        detail: {
          context:
            'A tight, heterogeneous reservoir with complex drilling and negative standalone economics. The turnaround stacked three independent levers: fiscal, surface CAPEX and subsurface technology.',
          facts: [
            { label: 'Asset', value: '300 MMbbl recoverable' },
            { label: 'Result', value: 'Board-approved · +70% NPV' },
            { label: 'My role', value: 'CFO (interim CEO)' },
          ],
          highlights: [
            'Fiscal: re-based the asset onto a special profit-based tax regime through government-relations work, a multi-billion-RUB full-cycle EMV uplift.',
            'Surface CAPEX: negotiated shared-infrastructure synergies with an adjacent field, cutting standalone facilities spend.',
            'Subsurface: cracked the tight reservoir with a multilateral \u201Cfishbone\u201D completion (9.4+ km total length, ~120 t/d initial rate, roughly 6x prior wells; among the most complex wells in Russian drilling practice), designed into the FDP.',
            'Cleared the investment committee: taken off \u201Csmart-pause\u201D and advanced from Appraise to Select with an approved work program.',
          ],
          techStack: ['Tax', 'GR', 'EMV', 'FDP', 'Negotiations', 'Strategy'],
          diagrams: [
            {
              src: '/previews/turnaround/fishbone-well.png',
              caption: 'Multilateral \u201Cfishbone\u201D well through a thin reservoir',
            },
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
            'During the shareholder transition the asset had to keep running and become self-sufficient, migrating off the departing partner\u2019s systems without losing the execution window.',
          facts: [
            { label: 'Org', value: '50 FTE · multi-site' },
            { label: 'Recurring cost-out', value: '~RUB 45M / year' },
            { label: 'My role', value: 'CFO / interim CEO' },
          ],
          highlights: [
            'Migrated reporting from SAP ERP to 1C and IT off the partner\u2019s infrastructure, and brought statutory & tax accounting in-house from a Big-Four provider (~RUB 7.3M/year saved).',
            'Stacked recurring cost-outs: office optimization (~RUB 18M/year), remote-work infrastructure (~RUB 20M/year) and the SAP-to-1C migration (~EUR 20-50k/year).',
            'Contracted two FEED lots ahead of schedule for ~RUB 54M of savings (2-2.8% below the starting price), and ran the first-ever asset inventory (~RUB 105M correctly capitalized) while retaining the team and protecting the winter drilling window.',
          ],
        },
      },
    ],
  },
]

// Display order: Industrial AI and ML research lead, then the rest.
export const PROJECT_GROUPS: ProjectGroup[] = [
  'industrial-ai',
  'ml-research',
  'productivity',
  'ai-tools',
  'mna',
  'cfo-gm',
].map((id) => GROUPS_RAW.find((g) => g.id === id)!)

/* ------------------------------------------------------------------ */
/*  04 - Experience                                                    */
/* ------------------------------------------------------------------ */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '2025 - Present',
    org: 'Heriot-Watt University',
    role: 'Research affiliate · Geo Data Science',
    location: 'Edinburgh / remote',
    href: 'https://geodatascience.hw.ac.uk/',
    points: [
      'ML for petrophysics and geostatistical modeling.',
      'Paper at IAMG 2026 (Montreal): rock-type classification with uncertainty quantification.',
    ],
  },
  {
    period: '2024 - Present',
    org: 'CIS Family Office ($500M)',
    role: 'Advisor (part-time)',
    location: 'CIS / remote',
    points: [
      'Central Asia upstream deals (KZ, UZ, TM, KG).',
      'Asset evaluation, data rooms, investment memos.',
    ],
  },
  {
    period: '2022 - 2024',
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
    period: '2020 - 2022',
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
    period: '2017 - 2020',
    org: 'Gazprom Neft',
    role: 'Manager · Middle East & Caspian (Strategy & Investment)',
    location: 'Dubai, UAE',
    points: [
      'Built the analytical foundation for the Board-approved MENA strategy.',
      '20+ decision-grade investment cases (licensing rounds, $1B+ A&D evaluations).',
    ],
  },
  {
    period: '2013 - 2017',
    org: 'Gazprom Neft',
    role: 'Chief Economist / Investment Manager · Iraq',
    location: 'Erbil, Iraq',
    points: [
      'Built a $200M+ investment case for three exploration assets in two months; secured Group-CEO approval.',
      'Developed the 20-year development plan for the core field from ~100 reservoir scenarios.',
    ],
  },
  {
    period: '2011 - 2013',
    org: 'Gazprom Neft',
    role: 'Senior Specialist · Business Development',
    location: 'St. Petersburg, Russia',
    points: [
      'Closed a $2M energy-transition (Kyoto ERU) deal in a collapsing market.',
      'Helped structure risk-service projects unlocking a 1 Bn toe (2P) resource base.',
    ],
  },
  {
    period: '2010 - 2011',
    org: 'PwC',
    role: 'Audit Associate',
    location: '',
    points: ['Audit foundations across financial reporting and controls.'],
  },
]

/* ------------------------------------------------------------------ */
/*  05 - About                                                         */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  eyebrow: 'About',
  headline: '',
  paragraphs: [
    'Twelve-plus years across strategy, corporate development and operations in the Caspian, MENA and CIS: concept selection and value optimization for multi-billion-dollar field development plans, cross-border M&A and JV structuring, and value-creation in tight oil.',
    'An MSc in Petroleum Engineering and hands-on ML research taught me where models genuinely help, and where they just add noise.',
    'I work best sitting between geology, reservoir engineering and valuation, turning subsurface uncertainty into decisions an investment committee can stand behind.',
  ],
  education: [
    {
      school: 'Heriot-Watt University',
      detail: 'MSc, Petroleum Engineering (Merit) · Data Science research',
      year: '2024 - 2026',
      href: 'https://geodatascience.hw.ac.uk/',
    },
    {
      school: 'St. Petersburg State University of Economics',
      detail: 'Double Diploma, Finance & Law',
      year: '2007 - 2012',
    },
  ],
  languages: ['English: full professional', 'Russian: native', 'German: working'],
}
