/**
 * Central portfolio data for Sateesh Kumar.
 * Update this file to update the portfolio content throughout the site.
 * Facts are based on details shared by Sateesh in prior conversations.
 * Unknown metrics, certification names, and URLs are intentionally not fabricated.
 */

export type Palette = { from: string; via: string; to: string; accent: string };
export type Metric = { value: string; label: string };

export const profile = {
  fullName: "Sateesh Kumar",
  displayName: "Sateesh Kumar",
  firstName: "SATEESH",
  seriesTag: "THE SERIES",
  originalLabel: "A SATEESH ORIGINAL",
  role: "Software Engineer",
  tagline: ["MERN Stack Developer", "AI Integrations", "Cloud Deployments"],
  intro:
    "Results-driven Full-Stack MERN Developer with hands-on experience building scalable web applications, REST APIs, AI-powered systems, and cloud-native deployments. Skilled in React.js, Node.js, MongoDB, AWS, Docker, CI/CD, authentication systems, and AI integrations using LangChain and Gemini API.",
  location: "Dehradun, India",
  email: "sateeshkumarbth1@gmail.com",
  phone: "+91 7250348807",
  resumeFileName: "Sateesh_Kumar_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/sateesh-yadav-5a69a6308/",
    github: "https://github.com/sateeshyadav70",
  },
  resumePdf: "/assets/Sateesh_Kumar_Resume.pdf",
  portrait: {
    src: "/assets/portrait-720.webp",
    srcSet:
      "/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w",
    alt: "Portrait of Sateesh Kumar",
  },
  interests: ["MERN Stack", "Cloud & DevOps", "AI / RAG Systems"],
};

export const education = [
  {
    school: "Tula's Institute",
    place: "Dehradun, Uttarakhand",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "2022 – 2026",
    score: "",
    coursework: ["Data Structures and Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    finalProject: "AI-powered document assistant using RAG and LangChain, deployed on AWS",
  },
];

export const experience = [
  {
    company: "Kartsho Solutions Pvt. Ltd.",
    role: "Software Engineer",
    place: "Remote",
    period: "Feb 2026 – Present",
    points: [
      "Containerized MERN applications using Docker and Docker Compose and deployed them on AWS EC2 with an Nginx reverse proxy and SSL setup.",
      "Built automated CI/CD pipelines with GitHub Actions to reduce deployment time and improve development workflows.",
      "Implemented JWT authentication with role-based access control and refresh-token management.",
      "Designed scalable REST APIs with optimized backend architecture and efficient database queries.",
      "Worked in Agile workflows using Git branching strategies and collaborative code reviews.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: "shield" | "flow" | "tenants";
};

const crimson: Palette = {
  from: "#24060b",
  via: "#6e0d1d",
  to: "#09070a",
  accent: "#ff3d5a",
};
const amber: Palette = {
  from: "#1c1003",
  via: "#6b3c06",
  to: "#0a0806",
  accent: "#ffb547",
};
const ocean: Palette = {
  from: "#04121f",
  via: "#0f4c6e",
  to: "#05080d",
  accent: "#4cc9ff",
};
const violet: Palette = {
  from: "#120822",
  via: "#3d1a6e",
  to: "#07060c",
  accent: "#b98bff",
};
const jade: Palette = {
  from: "#03150f",
  via: "#0d5a40",
  to: "#050a08",
  accent: "#46e3a8",
};

export const projects: Project[] = [
  {
    id: "uber-clone",
    title: "Uber Clone — Full Ride Booking System",
    year: "Not listed",
    genre: "Real-Time • Full-Stack • Payments",
    logline:
      "A real-time ride booking platform with live GPS tracking, online payments, and a scalable cloud deployment.",
    stack: ["React.js", "Node.js", "MongoDB", "Socket.io", "Razorpay", "Docker", "AWS EC2"],
    build: [
      "Developed a real-time ride booking platform with live GPS tracking and Socket.io communication.",
      "Integrated Razorpay payments and deployed the Dockerized application to AWS EC2.",
      "Optimized MongoDB indexing and designed a scalable backend architecture.",
    ],
    features: [
      "Live GPS ride tracking",
      "Real-time Socket.io communication",
      "Razorpay payment integration",
      "Docker deployment on AWS EC2",
      "MongoDB indexing and scalable backend",
    ],
    metrics: [],
    palette: { ...ocean },
    motif: "flow",
  },
  {
    id: "sop-agent",
    title: "SOP Agent — AI Refund Policy Assistant",
    year: "Not listed",
    genre: "AI • RAG • Document Search",
    logline:
      "A retrieval-augmented assistant that ingests policy PDFs, searches their content semantically, and answers refund-policy questions.",
    stack: ["Node.js", "LangChain", "Google Gemini API", "MongoDB Atlas", "Vector Embeddings"],
    build: [
      "Built PDF ingestion, semantic search, and question answering with a RAG pipeline and vector embeddings.",
      "Integrated the Google Gemini API and MongoDB Atlas for AI-assisted policy answers.",
      "Automated document indexing with a GitHub Actions workflow.",
    ],
    features: [
      "PDF ingestion",
      "Semantic search with vector embeddings",
      "AI-powered refund-policy answers",
      "Gemini API and MongoDB Atlas integration",
      "Automated document indexing",
    ],
    metrics: [],
    palette: { ...crimson },
    motif: "shield",
  },
  {
    id: "yojnawatch",
    title: "YojnaWatch — Government Fund Tracking Platform",
    year: "Not listed",
    genre: "Civic Tech • Analytics • Cloud",
    logline:
      "A transparency dashboard for tracking government schemes, fund utilization, and analytics.",
    stack: ["React", "Node.js", "MongoDB", "AWS S3", "CloudFront", "Chart.js", "PM2"],
    build: [
      "Designed a dashboard for government schemes, fund utilization, and analytics visualization.",
      "Deployed frontend assets through AWS S3 and CloudFront.",
      "Managed the backend process with PM2.",
    ],
    features: ["Government scheme tracking", "Fund utilization analytics", "AWS S3 and CloudFront deployment", "PM2 backend process management"],
    metrics: [],
    palette: { ...jade },
    motif: "tenants",
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "production-apps",
    title: "Production-Level Applications",
    org: "Full-Stack Development",
    detail:
      "Built and deployed multiple production-ready MERN stack applications using cloud-native deployment practices.",
    laurel: "Product Engineering",
  },
  {
    id: "ai-integration",
    title: "AI Integration Projects",
    org: "LangChain • RAG • Gemini API",
    detail:
      "Developed AI-powered systems using LangChain, retrieval-augmented generation pipelines, and Google Gemini API integrations.",
    laurel: "Applied AI",
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    org: "Scalable Applications",
    detail:
      "Built REST APIs, authentication workflows, and deployment pipelines with attention to scalability and efficient database queries.",
    laurel: "Backend & DevOps",
  },
  {
    id: "greenex-member",
    title: "Active Member",
    org: "GREENEX Club • Tula's Institute",
    detail: "Active member of the GREENEX Club at Tula's Institute.",
    laurel: "Campus Involvement",
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: "IIT Bombay Spoken Tutorial", name: "Certified in LaTeX (2023)" },
  { issuer: "AWS", name: "Cloud Practitioner Essentials (In Progress)" },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Programming languages & query syntax",
    skills: [
      { name: "JavaScript (ES6+)", mono: "Js" },
      { name: "Java", mono: "Jv" },
      { name: "SQL", mono: "Sq" },
      { name: "TypeScript", mono: "Ts", note: "Basic" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Interfaces & web platform",
    skills: [
      { name: "React", mono: "Re" },
      { name: "Next.js", mono: "Nx" },
      { name: "React Native", mono: "Rn" },
      { name: "HTML5", mono: "Ht" },
      { name: "CSS3", mono: "Cs" },
      { name: "Tailwind CSS", mono: "Tw" },
      { name: "Redux", mono: "Rx" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server-side development",
    skills: [
      { name: "Node.js", mono: "No" },
      { name: "Express.js", mono: "Ex" },
      { name: "REST APIs", mono: "Ap" },
      { name: "JWT Authentication", mono: "Jw" },
      { name: "Socket.io", mono: "So" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Data storage & querying",
    skills: [
      { name: "MongoDB", mono: "Mg" },
      { name: "Mongoose", mono: "Mo" },
      { name: "MySQL", mono: "My" },
      { name: "Redis", mono: "Rd", note: "Basic" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Deployment and delivery",
    skills: [
      { name: "AWS EC2", mono: "Ec" },
      { name: "AWS S3", mono: "S3" },
      { name: "AWS IAM", mono: "Ia" },
      { name: "Docker", mono: "Dk" },
      { name: "Docker Compose", mono: "Dc" },
      { name: "GitHub Actions", mono: "Gh" },
      { name: "Nginx", mono: "Ng" },
      { name: "Linux CLI", mono: "Lx" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "AI integrations and retrieval",
    skills: [
      { name: "LangChain", mono: "Lc" },
      { name: "Google Gemini API", mono: "Ge" },
      { name: "OpenAI API", mono: "Oi" },
      { name: "RAG Architecture", mono: "Rg" },
      { name: "Vector Embeddings", mono: "Ve" },
    ],
  },
  {
    id: "tools-concepts",
    title: "Tools & Concepts",
    subtitle: "Engineering workflow and practices",
    skills: [
      { name: "Git", mono: "Gt" },
      { name: "GitHub", mono: "Gh" },
      { name: "Postman", mono: "Pm" },
      { name: "VS Code", mono: "Vs" },
      { name: "CI/CD", mono: "Ci" },
      { name: "MVC Architecture", mono: "Mv" },
      { name: "Load Balancing", mono: "Lb" },
      { name: "Caching", mono: "Ca" },
    ],
  },
  {
    id: "soft-skills",
    title: "Professional Skills",
    subtitle: "Collaboration and problem solving",
    skills: [
      { name: "Leadership", mono: "Le" },
      { name: "Communication", mono: "Co" },
      { name: "Problem Solving", mono: "Ps" },
      { name: "Team Collaboration", mono: "Tc" },
      { name: "Adaptability", mono: "Ad" },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  "JavaScript (ES6+)": ["MERN applications", "Uber Clone", "YojnaWatch"],
  React: ["Uber Clone", "YojnaWatch", "Kartsho LawAdalat"],
  "React Native": ["Listed in resume skills"],
  "Next.js": ["Listed in resume skills"],
  "Node.js": ["Uber Clone", "SOP Agent", "YojnaWatch", "Kartsho LawAdalat"],
  "Express.js": ["MERN applications", "REST API development"],
  "MongoDB": ["Uber Clone", "SOP Agent", "YojnaWatch"],
  "Google Gemini API": ["SOP Agent"],
  "OpenAI API": ["AI integrations listed in resume"],
  "LangChain": ["SOP Agent", "Final-year project"],
  "RAG Architecture": ["SOP Agent", "Final-year project"],
  "Vector Embeddings": ["SOP Agent"],
  "AWS EC2": ["Kartsho deployments", "Uber Clone"],
  "AWS S3": ["YojnaWatch"],
  "Docker": ["Kartsho deployments", "Uber Clone"],
  "Docker Compose": ["Kartsho deployments"],
  "GitHub Actions": ["CI/CD automation", "SOP Agent document indexing"],
  "JWT Authentication": ["Role-based authentication with refresh tokens"],
  "Socket.io": ["Uber Clone live ride booking"],
  "MySQL": ["Listed in resume skills"],
  "Redis": ["Listed in resume skills (Basic)"],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: "The Foundation",
    period: "2022 – 2026",
    synopsis:
      "The academic journey in Computer Science Engineering at Tula's Institute, Dehradun.",
    episodes: [
      {
        code: "S01 E01",
        title: "The Engineer",
        description:
          "Pursuing a Bachelor of Technology in Computer Science and Engineering at Tula's Institute, Dehradun.",
        tags: ["B.Tech", "CSE", "Dehradun"],
        runtime: "2022 – 2026",
        palette: violet,
      },
      {
        code: "S01 E02",
        title: "The Final-Year Project",
        description:
          "Built an AI-powered document assistant using RAG and LangChain and deployed it on AWS, alongside coursework in DSA, DBMS, operating systems, networks, and software engineering.",
        tags: ["RAG", "LangChain", "AWS"],
        runtime: "Final-year project",
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: "Learning to Build",
    period: "Full-Stack Development",
    synopsis:
      "Growing from frontend development into complete web application development.",
    episodes: [
      {
        code: "S02 E01",
        title: "The Frontend Developer",
        description:
          "Creating responsive user interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS.",
        tags: ["React", "JavaScript", "CSS"],
        runtime: "Web development",
        palette: jade,
      },
      {
        code: "S02 E02",
        title: "The Backend Developer",
        description:
          "Building server-side applications and APIs using Node.js, Express.js, and databases.",
        tags: ["Node.js", "Express.js", "MongoDB", "SQL"],
        runtime: "Backend development",
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: "Professional Engineering",
    period: "Feb 2026 – Present",
    synopsis:
      "Building and deploying MERN applications at Kartsho Solutions Pvt. Ltd.",
    episodes: [
      {
        code: "S03 E01",
        title: "The Software Engineer",
        description:
          "Software Engineer at Kartsho Solutions Pvt. Ltd. (Remote), working on cloud deployment, CI/CD, authentication, REST APIs, and database performance.",
        tags: ["MERN", "AWS", "CI/CD"],
        runtime: "Feb 2026 – Present",
        palette: ocean,
      },
      {
        code: "S03 E02",
        title: "The Secure API Builder",
        description:
          "Implemented JWT authentication with role-based access control and refresh-token management, and designed scalable REST APIs.",
        tags: ["JWT", "RBAC", "REST APIs"],
        runtime: "Kartsho Solutions",
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: "AI-Powered Products",
    period: "Projects",
    synopsis:
      "Building AI-assisted document workflows and real-time full-stack products.",
    episodes: [
      {
        code: "S04 E01",
        title: "The SOP Agent",
        description:
          "Created a RAG-based refund policy assistant with PDF ingestion, semantic search, Gemini API, vector embeddings, and automated indexing.",
        tags: ["LangChain", "Gemini", "RAG"],
        runtime: "SOP Agent",
        palette: jade,
      },
      {
        code: "S04 E02",
        title: "The Real-Time Builder",
        description:
          "Built an Uber-style ride booking application with live GPS, Socket.io, Razorpay, Docker, and AWS EC2.",
        tags: ["Socket.io", "Razorpay", "AWS EC2"],
        runtime: "Uber Clone",
        palette: amber,
      },
      {
        code: "S04 E03",
        title: "The Civic Dashboard",
        description:
          "Designed YojnaWatch to track government schemes, fund utilization, and analytics, deployed with AWS S3 and CloudFront.",
        tags: ["Analytics", "AWS S3", "CloudFront"],
        runtime: "YojnaWatch",
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: "Now in progress",
    synopsis:
      "Continuing to strengthen full-stack engineering skills and build production-oriented applications.",
    episodes: [
      {
        code: "S05 E01",
        title: "The Next Chapter",
        description:
      "Continuing to build scalable MERN applications, cloud deployments, and AI-powered systems.",
        tags: ["MERN", "AWS", "AI / RAG"],
        runtime: "In progress",
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: "Current role",
    title: "Software Engineer",
    detail: "Kartsho Solutions Pvt. Ltd.",
    palette: ocean,
  },
  {
    label: "Featured project",
    title: "Uber Clone",
    detail: "Live GPS • Socket.io • Razorpay",
    palette: crimson,
  },
  {
    label: "AI project",
    title: "SOP Agent",
    detail: "RAG • LangChain • Gemini API",
    palette: jade,
  },
  {
    label: "Civic technology",
    title: "YojnaWatch",
    detail: "Government funds & scheme analytics",
    palette: amber,
  },
  {
    label: "Cloud deployment",
    title: "AWS + Docker",
    detail: "EC2 • S3 • CloudFront • CI/CD",
    palette: violet,
  },
  {
    label: "Education",
    title: "B.Tech CSE",
    detail: "Tula's Institute • Dehradun",
    palette: ocean,
  },
  {
    label: "Certification",
    title: "AWS Cloud Practitioner Essentials",
    detail: "In progress",
    palette: jade,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: "Education",
    title: "B.Tech · CSE",
    lines: ["Tula's Institute, Dehradun", "2022 – 2026"],
    chips: ["Computer Science"],
  },
  {
    kicker: "Skills",
    title: "Full-Stack Developer",
    lines: [
      "JavaScript · Java · SQL · TypeScript (Basic)",
      "React · Next.js · React Native · Node.js · MongoDB",
      "AWS · Docker · CI/CD · LangChain · RAG",
    ],
    chips: ["React", "Node.js", "MongoDB", "SQL"],
  },
  {
    kicker: "Experience",
    title: "The Software Engineer",
    lines: [
      "Kartsho Solutions Pvt. Ltd.",
      "Remote · Feb 2026 – Present",
      "Cloud deployments · CI/CD · JWT auth · REST APIs",
    ],
    chips: ["MERN", "AWS", "Docker"],
  },
  {
    kicker: "Projects",
    title: "Featured Projects",
    lines: [
      "Uber Clone — live GPS, Socket.io, Razorpay",
      "SOP Agent — RAG refund-policy assistant",
      "YojnaWatch — government fund tracking dashboard",
    ],
  },
  {
    kicker: "Achievements",
    title: "Engineering in Production",
    lines: [
      "Production-ready MERN applications",
      "AI systems with LangChain, RAG, and Gemini API",
      "LaTeX certified · IIT Bombay Spoken Tutorial · 2023",
    ],
  },
  {
    kicker: "Current mission",
    title: "The Next Chapter",
    lines: ["MERN Stack · Cloud Deployments · AI-Powered Systems"],
  },
];

export type ProfileId = "sateesh" | "recruiter" | "developer" | "creative";
export type SectionId =
  | "about"
  | "journey"
  | "originals"
  | "picks"
  | "skills"
  | "moments"
  | "story";

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: "sateesh",
    name: "Sateesh",
    blurb: "The full series, in order",
    color: "#e5132b",
    order: ["about", "journey", "originals", "picks", "skills", "moments", "story"],
  },
  {
    id: "recruiter",
    name: "Recruiter",
    blurb: "Experience, projects & skills first",
    color: "#4cc9ff",
    order: ["story", "moments", "skills", "originals", "about", "journey", "picks"],
  },
  {
    id: "developer",
    name: "Developer",
    blurb: "Projects, stack & GitHub first",
    color: "#46e3a8",
    order: ["originals", "skills", "journey", "moments", "about", "picks", "story"],
  },
  {
    id: "creative",
    name: "Creative",
    blurb: "The story arc & highlights first",
    color: "#ffb547",
    order: ["journey", "picks", "originals", "moments", "about", "skills", "story"],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: "About",
    card: "About Me",
    meta: "The Pilot • Profile & education",
    palette: violet,
  },
  journey: {
    nav: "Journey",
    card: "My Journey",
    meta: `${seasons.length} Seasons • ${seasons.reduce(
      (n, s) => n + s.episodes.length,
      0
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: "Originals",
    card: "My Projects",
    meta: `${projects.length} Projects`,
    palette: crimson,
  },
  picks: {
    nav: "Top Picks",
    card: "Top Picks",
    meta: "Portfolio highlights",
    palette: jade,
  },
  skills: {
    nav: "Skills",
    card: "My Skills",
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: "Moments",
    card: "Achievements",
    meta: `${achievements.length} Highlights • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: "Resume",
    card: "The Full Story",
    meta: "Resume • View & download",
    palette: violet,
  },
};
