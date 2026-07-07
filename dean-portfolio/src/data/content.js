// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit anything here and it flows through the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Emmanuel Bwos',
  brand: 'Dean',
  headline: 'Full-Stack Developer & AI Automation Expert',
  // Roles that rotate in the hero
  roles: [
    'Full-Stack Developer',
    'AI Automation Expert',
    'Community Leader',
    'Solutions-Driven Thinker',
    'Educator & Mentor',
  ],
  tagline:
    "I don't see problems — I see solutions. I help people, teams and communities uncover what they can't yet see, then build the tools and systems that move them forward.",
  location: 'Kaduna, Nigeria',
  email: 'heavensaint707@gmail.com',
  phone: '08162428610',
  phoneIntl: '+2348162428610',
  // Drop your CV at public/assets/cv.pdf and this button lights up.
  cvUrl: '/assets/cv.pdf',
  // Swap this for your real photo at public/assets/profile.jpg
  photo: '/assets/profile.jpg',
  socials: {
    github: 'https://github.com/Deanthestallion',
    linkedin: 'https://linkedin.com/in/emmanuel-bwos-237590203/',
  },
}

export const stats = [
  { value: '5+', label: 'Years building & shipping' },
  { value: '3', label: 'Community roles led' },
  { value: '10+', label: 'Apps & automations built' },
  { value: '100%', label: 'Solution-first mindset' },
]

export const about = {
  paragraphs: [
    "I'm Emmanuel — most people know me as Dean. I'm a Full-Stack Developer and AI Automation Expert who lives at the intersection of technology, people and problem-solving.",
    "My superpower is perspective: people bring me their hardest problems because I see the angles they miss. I don't get stuck on what's broken — I get obsessed with what's possible, then build the systems, apps and automations to get there.",
    "Beyond code, I lead and grow communities, teach and mentor, and manage people with empathy and clarity. Whether I'm shipping a web app, wiring up an AI workflow, or rallying a room of builders, my goal is the same: turn ideas into working, impactful solutions.",
  ],
  highlights: [
    'Full-stack web & app development, end to end',
    'AI & workflow automation that saves real hours',
    'Community leadership, engagement & mobilization',
    'Teaching, mentorship & people management',
    'Critical thinking that reframes problems into solutions',
  ],
}

export const expertise = [
  {
    icon: 'Code2',
    title: 'Full-Stack Development',
    desc: 'Modern, responsive web apps from database to interface — React, Node.js, REST APIs and clean, maintainable code.',
    tags: ['React', 'Node.js', 'JavaScript', 'REST APIs', 'MongoDB'],
    featured: true,
  },
  {
    icon: 'Bot',
    title: 'AI & Automation',
    desc: 'AI-powered chatbots, OCR pipelines and workflow automations that remove repetitive work and scale operations.',
    tags: ['AI Agents', 'Automation', 'OCR', 'Integrations', 'n8n'],
    featured: true,
  },
  {
    icon: 'Users',
    title: 'Community Leadership',
    desc: 'Building, engaging and mobilizing tech communities — from monthly founder meetups to nationwide talent programs.',
    tags: ['Engagement', 'Events', 'Growth', 'Partnerships'],
  },
  {
    icon: 'Lightbulb',
    title: 'Problem Solving',
    desc: 'A solution-first thinker people rely on to reframe hard problems and reveal the path they could not see.',
    tags: ['Critical Thinking', 'Strategy', 'Systems'],
  },
  {
    icon: 'GraduationCap',
    title: 'Teaching & Mentorship',
    desc: 'Years of classroom and one-on-one teaching — breaking down complex ideas into clear, confident understanding.',
    tags: ['Curriculum', 'Mentoring', 'Coaching'],
  },
  {
    icon: 'Handshake',
    title: 'People Management',
    desc: 'Leading teams and groups with empathy and structure — proven from NYSC CDS leadership to community management.',
    tags: ['Leadership', 'Coordination', 'Team Building'],
  },
]

export const experience = [
  {
    role: 'City Lead',
    org: 'Founders Friday, Kaduna',
    period: 'Present',
    type: 'Leadership',
    points: [
      'Lead and grow the Kaduna chapter of the Founders Friday builder & founder community.',
      'Organize gatherings that connect entrepreneurs, developers and creatives across the city.',
      'Drive local momentum, partnerships and a culture of building in public.',
    ],
  },
  {
    role: 'Community Engagement Manager',
    org: '3MTT (3 Million Technical Talent)',
    period: 'Present',
    type: 'Community',
    points: [
      'Drive engagement and support for learners across Nigeria’s flagship tech-talent program.',
      'Mobilize, activate and retain community members through consistent communication.',
      'Bridge learners, mentors and program goals to keep the community thriving.',
    ],
  },
  {
    role: 'President — Environmental CDS',
    org: 'NYSC (National Youth Service Corps)',
    period: 'Service Year',
    type: 'Leadership',
    points: [
      'Elected President of the Environmental Community Development Service group.',
      'Led and coordinated members to execute impactful environmental projects.',
      'Recognized for excellent performance, organization and people management.',
    ],
  },
  {
    role: 'Educator',
    org: 'Excellence International School, Jalingo · St. Noble Academy',
    period: 'Prior',
    type: 'Education',
    points: [
      'Taught and mentored students across multiple subjects and levels.',
      'Simplified complex topics into clear, engaging lessons that built confidence.',
      'Strengthened classroom management, communication and leadership skills.',
    ],
  },
]

export const projects = [
  {
    name: 'StudyBuddy',
    subtitle: 'AI-assisted study companion',
    description:
      'A study companion web app that helps learners stay organized and study smarter — secure authentication, a focused dashboard, and a clean study-first experience.',
    image: '/assets/studybuddy.png',
    tags: ['React', 'Node.js', 'Authentication', 'Full-Stack'],
    live: 'https://studybuddy-vttp.onrender.com/login',
    accent: 'brand',
  },
  {
    name: 'Excell Translator',
    subtitle: 'Excell Translator',
    description:
      'An end-to-end school result management system with an admin portal and student results search. Uploads results via OCR extraction and lets students securely preview and download academic reports using admission numbers.',
    image: '',
    tags: ['React', 'OCR', 'Automation', 'Dashboard'],
    live: 'https://excel-translator-ui.onrender.com/',
    accent: 'accent',
  },
  {
    name: 'School Result Management',
    subtitle: 'Science Secondary School, Kafin Hausa',
    description:
      'An end-to-end school result management system with an admin portal and student results search. Uploads results via OCR extraction and lets students securely preview and download academic reports using admission numbers.',
    image: '/assets/schoolapp.png',
    tags: ['React', 'OCR', 'Automation', 'Dashboard'],
    live: 'https://schoolapp-three-eta.vercel.app/',
    accent: 'accent',
  },
]

export const services = [
  {
    icon: 'Rocket',
    title: 'Web & App Development',
    desc: 'Custom, responsive web applications and platforms built for performance and scale.',
  },
  {
    icon: 'Workflow',
    title: 'AI & Workflow Automation',
    desc: 'Automate repetitive work with AI agents, integrations and smart pipelines.',
  },
  {
    icon: 'Megaphone',
    title: 'Community Strategy',
    desc: 'Design, launch and grow engaged communities that create real momentum.',
  },
  {
    icon: 'BookOpen',
    title: 'Training & Mentorship',
    desc: 'Hands-on technical training and mentorship for individuals and teams.',
  },
]

export const testimonials = [
  {
    quote:
      "Dean has a rare gift for seeing the solution hidden inside a problem. He turned our idea into a working product faster than we imagined.",
    author: 'Community Partner',
    role: 'Founders Friday, Kaduna',
  },
  {
    quote:
      "As a Community Engagement Manager he keeps everyone moving and motivated. People genuinely rely on him to make things happen.",
    author: 'Program Colleague',
    role: '3MTT',
  },
  {
    quote:
      "A brilliant teacher and a natural leader. He explains hard things simply and always brings a solution-first energy.",
    author: 'Former Colleague',
    role: 'Excellence International School',
  },
]

// Marquee tech/skills strip
export const marquee = [
  'React', 'Node.js', 'JavaScript', 'AI Automation', 'OCR', 'n8n',
  'REST APIs', 'MongoDB', 'Community Building', 'Leadership',
  'Problem Solving', 'Teaching', 'Python', 'Workflow Design',
]
