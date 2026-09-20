export const site = {
  name: "Arjun Bhandari",
  initials: "AB",
  role: "Software Engineer",
  firstName: "Arjun",
  location: "Hyderabad / Gwalior, India",
  timezone: "IST",
  email: "arjunmbhandari16@gmail.com",
  phone: "+91-7670941661",
  availability: "Open to SDE / SWE intern & full-time roles",
  notice: "Integrated B.Tech + M.Tech IT student · Graduating May 2027",
  portrait: "src/assets/portrait.jpeg",
  intro:
    "I build intelligent full-stack applications and AI-driven systems — from Agentic Text-to-SQL pipelines to scalable microservices. Currently a final year Integrated B.Tech + M.Tech IT student at IIITM Gwalior passionate about software engineering and generative AI.",
  aboutBig:
    "I write software that bridges the gap between scalable systems and AI — clean architecture from MERN stack backends to LLM workflows.",
  about:
    "I'm a final year IT student at IIITM Gwalior (Integrated B.Tech + M.Tech '27). I've built a human-in-the-loop AI chat assistant at Flickmatch, a production-ready Agentic Text-to-SQL pipeline, and a microservices-inspired online code judge. I'm a LeetCode Knight and Codeforces Specialist with a strong foundation in Data Structures, Algorithms, and System Design.",
}

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
]

export const lookingFor = [
  "SDE / SWE internships",
  "New-grad / full-time SWE",
  "Backend & distributed systems",
  "AI / Generative AI integrations",
]

export const snapshotFacts = [
  { k: "Role", v: "Software Engineer" },
  { k: "Degree", v: "Integrated B.Tech + M.Tech IT · 2027" },
  { k: "Focus", v: "Full-Stack · AI · Backend" },
  { k: "Base", v: "Hyderabad / Gwalior · IST" },
]

export const focusAreas = [
  {
    title: "AI & LLM Workflows",
    copy: "LangGraph, FastAPI, ChromaDB, RAG pipelines with fallback mechanisms and human-in-the-loop systems.",
    tags: ["Python", "LangGraph", "ChromaDB", "LLMs"],
  },
  {
    title: "Full-Stack & Backend",
    copy: "MERN stack microservices, asynchronous message queues with Redis, and Dockerized environments.",
    tags: ["Node.js", "React", "Redis", "BullMQ"],
  },
  {
    title: "Cloud & DevOps",
    copy: "Deploying on AWS (EC2, S3, Elastic Beanstalk), CI/CD with GitHub Actions, and containerized executions.",
    tags: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Algorithms & Competitive Programming",
    copy: "LeetCode Knight, Codeforces Specialist. Deep expertise in DSA, search algorithms, and game trees.",
    tags: ["C++", "Python", "DSA"],
  },
]

export const csTopics = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Database Management",
  "Generative AI",
  "System Design",
]

export const proofLinks = [
  {
    label: "GitHub",
    handle: "bhandari16arjun",
    detail: "Projects & open source",
    href: "https://github.com/bhandari16arjun",
    cta: "View repos",
  },
  {
    label: "LeetCode",
    handle: "versatileco",
    detail: "Knight (1922) · Global Rank 1957 in Biweekly 167",
    href: "https://leetcode.com/u/versatileco/",
    cta: "View profile",
  },
  {
    label: "LinkedIn",
    handle: "arjun-bhandari-329507258",
    detail: "Experience & recommendations",
    href: "https://www.linkedin.com/in/arjun-bhandari-329507258/",
    cta: "Connect",
  },
  {
    label: "Email",
    handle: "arjunmbhandari16@gmail.com",
    detail: "Screens or a quick intro",
    href: "mailto:arjunmbhandari16@gmail.com",
    cta: "Write",
  },
]

export const marquee = [
  "C/C++",
  "Python",
  "JavaScript",
  "HTML/CSS",
  "SQL",
  "Node.js",
  "React.js",
  "Express.js",
  "Flask",
  "FastAPI",
  "LangGraph",
  "Streamlit",
  "SQLGlot",
  "GraphQL",
  "MongoDB",
  "ChromaDB",
  "AWS",
  "Docker",
  "Redis",
]

export const skills = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Node.js", "React.js", "Express.js", "Flask", "FastAPI", "LangGraph", "Streamlit", "SQLGlot", "GraphQL"],
  },
  {
    title: "Databases & Cloud",
    items: ["MongoDB", "ChromaDB", "SQLite", "AWS (EC2, S3, Elastic Beanstalk, SES, DynamoDB)", "Render"],
  },
  {
    title: "Tools & Concepts",
    items: ["Docker", "Redis", "BullMQ", "Git", "CI/CD", "System Design", "Generative AI"],
  },
]

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Flickmatch",
    period: "Dec 2025 — Sep 2026",
    summary:
      "Developed a human-in-the-loop AI chat assistant with asynchronous processing to generate context-aware suggestions, engineered calendar invite systems, and architected multi-region AWS infrastructure.",
    highlights: [
      "Cut chat response time by ~30% with an AI chat assistant featuring asynchronous processing.",
      "Engineered an ICS file generation system and automated event dispatch, saving 10+ hours per month.",
      "Integrated Amazon SES for transactional emails and architected an AWS Elastic Beanstalk infrastructure with GitHub Actions.",
      "Automated an end-to-end Playwright testing suite for Razorpay payment flows.",
    ],
    stack: ["AWS", "GitHub Actions", "Amazon SES", "Playwright", "Generative AI"],
  },
]

export const education = {
  degree: "Integrated B.Tech + M.Tech in Information Technology",
  school: "IIITM Gwalior",
  period: "Nov 2022 — May 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Database Management",
    "Generative AI",
  ],
}

export const projects = [
  {
    index: "01",
    title: "SQLPilot — Agentic Text-to-SQL Pipeline",
    description:
      "A production-ready Text-to-SQL pipeline using LangGraph and FastAPI, implementing a ChromaDB RAG schema retriever with an introspection fallback for cloud memory limits.",
    stack: ["Python", "LangGraph", "FastAPI", "Streamlit", "SQLGlot", "ChromaDB"],
    metric: "100%",
    metricLabel: "blocked mutations",
    link: "https://github.com/bhandari16arjun/SqlPilot",
    problem:
      "Underspecified queries caused LLM hallucinations, and allowing LLMs to directly execute SQL introduced security risks with destructive database mutations.",
    approach: [
      "Architected a production-ready Agentic Text-to-SQL pipeline with ChromaDB RAG schema retrieval.",
      "Engineered an ambiguity detection system that flags underspecified queries and triggers a Human-in-the-Loop clarification workflow.",
      "Developed a zero-trust SQL validation sandbox with SQLGlot that blocks 100% of destructive mutations.",
    ],
    architecture: `[User]──►[FastAPI / LangGraph]──►[ChromaDB RAG]
                    │ Human-in-the-Loop
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   [Ambiguity Check]     [SQLGlot Sandbox]
        └─────► [Database Execution]`,
    tradeoffs:
      "Integrating Human-in-the-Loop clarification adds a step to the user experience but is essential for eliminating hallucinations in underspecified queries.",
    results: [
      { value: "100%", label: "destructive queries blocked" },
      { value: "0", label: "LLM hallucinations" },
      { value: "15,000", label: "rows validated" },
    ],
  },
  {
    index: "02",
    title: "CodeCraft — Online Code Judge",
    description:
      "A microservices-inspired online code judge on the MERN stack, featuring a React.js & Monaco Editor UI with an asynchronous pipeline utilizing Redis (BullMQ) and AWS S3/EC2.",
    stack: ["MERN Stack", "Redis (BullMQ)", "Docker", "AWS S3/EC2"],
    metric: "2–3s",
    metricLabel: "isolated execution",
    link: "https://github.com/bhandari16arjun/CodeJudge",
    problem:
      "Synchronous code execution blocks the main thread, and running untrusted code on a shared server poses security and performance risks.",
    approach: [
      "Constructed a React.js & Monaco Editor UI with JWT Role-Based Access Control.",
      "Designed an asynchronous pipeline where Node.js fetches test cases from AWS S3 and offloads execution to a Redis queue.",
      "Programmed a Dockerized compiler deployed on AWS EC2 to execute submissions in isolated containers.",
    ],
    architecture: `[React UI]──►[Node.js API]──►[Redis BullMQ]
                        │ fetch tests
                 [AWS S3]◄──┘
                        ▼
               [AWS EC2 / Docker Sandbox]`,
    tradeoffs:
      "Using an asynchronous queue adds architectural complexity but prevents main-thread blocking and enables scalable execution.",
    results: [
      { value: "2-3s", label: "execution time" },
      { value: "<100ms", label: "verdict queries" },
      { value: "Isolated", label: "Docker sandbox" },
    ],
  },
  {
    index: "03",
    title: "AI Chess Engine",
    description:
      "A custom chess rule engine deployed via a Flask REST API with session-isolated game states and a depth-4 NegaMax search algorithm for optimal moves.",
    stack: ["Python", "Flask", "JavaScript", "Pygame"],
    metric: "<2s",
    metricLabel: "move evaluation",
    link: "https://github.com/bhandari16arjun/ChessEngine",
    problem:
      "Evaluating tactical game trees requires immense computational power; doing so inefficiently leads to slow response times for AI moves.",
    approach: [
      "Built a custom chess rule engine supporting pin/check detection, en passant, and promotion.",
      "Implemented a depth-4 NegaMax search algorithm with Alpha-Beta pruning.",
      "Devised a board-evaluation heuristic combining material weights, piece-tables, and capture-first move ordering to maximize pruning.",
    ],
    architecture: `[Web / Pygame UI]──►[Flask REST API]
                            │ session-isolated state
                     [Chess Rule Engine]
                            ▼
               [NegaMax + Alpha-Beta Pruning]`,
    tradeoffs:
      "Capture-first move ordering adds initial overhead to sort moves, but drastically improves Alpha-Beta pruning efficiency, resulting in faster overall evaluation.",
    results: [
      { value: "<2s", label: "move selection time" },
      { value: "Depth-4", label: "search tree" },
      { value: "Optimized", label: "Alpha-Beta pruning" },
    ],
  },
]

export const stats = [
  { value: 1922, suffix: "", label: "LeetCode Knight Rating" },
  { value: 1503, suffix: "", label: "Codeforces Specialist" },
  { value: 30, suffix: "%", label: "Chat response time reduced" },
  { value: 10, suffix: "h+", label: "Scheduling saved/month" },
]

export const socials = [
  { label: "GitHub", href: "https://github.com/bhandari16arjun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-bhandari-329507258/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/_Hemlock_" },
  { label: "LeetCode", href: "https://leetcode.com/u/versatileco/" },
]

export const profiles = [
  {
    label: "GitHub",
    handle: "bhandari16arjun",
    stat: "Open source & projects",
    href: "https://github.com/bhandari16arjun",
    icon: "github",
  },
  {
    label: "LeetCode",
    handle: "versatileco",
    stat: "Knight (1922) · Global Rank 1957",
    href: "https://leetcode.com/u/versatileco/",
    icon: "braces",
  },
  {
    label: "LinkedIn",
    handle: "Arjun Bhandari",
    stat: "Software Engineer · Let's connect",
    href: "https://www.linkedin.com/in/arjun-bhandari-329507258/",
    icon: "link",
  },
]
