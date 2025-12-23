export type Project = {
  title: string;
  description: string;
  highlights: string[]; // 2–4 bullets, impact-focused
  tags: string[];
  links: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
};

export const content = {
  person: {
    name: "Namrata Ajmeri",
    locationLine: "Toronto, ON • Full-Stack Engineer",
    headline: "Full-stack software engineer focused on reliable backend systems, reusable UI and AI enhanced user experience",
    summary:
      "I build production-grade web applications with strong engineering fundamentals—performance, observability, maintainability—and I’m proficient in UI component craft using React + JavaScript/TypeScript. In addition to that I'm actiely integrating AI-powered features into modern web application ",
    primaryRole: "Full-Stack • Backend-leaning",
    techFocus: "React + JavaScript/TypeScript • Node/Java/Python • Cloud  • Agentic AI",
  },

  about: {
    subtitle: "Backend depth, UI curiosity, and a bias for simple, scalable architecture.",
    body:
      "I’m a full-stack engineer with strong backend experience (APIs, data modeling, reliability, and debugging in production). Recently, I’ve been intentionally investing in building reusable UI components—clean design systems, accessible interactions, and maintainable front-end architecture. I prefer simple solutions, thoughtful tradeoffs, and codebases that stay pleasant to work in as they grow.",
  },

  skills: {
    groups: [
      {
        title: "Frontend",
        items: ["React", "TypeScript", "Javascript", "HTML" , "CSS", "Component APIs", "WCAG 2.1/AODA Accessibility", "Performance"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Java", "Python", "Ruby on Rails", "REST APIs", "SQL", "Caching", "Observability"],
      },
      {
        title: "DevOps / Delivery",
        items: ["Docker", "Kubernetes", "CI/CD", "Azure", "Monitoring/Logging", "AKS", "Azure functions"],
      },
      {
        title: "AI / ML",
        items: ["Github copilot", "Agentic AI workflows", "MCP", "RAG", "FastAPI", "Langchain", "Azure OpenAI", "LLM"],
      },
      {
        title: "Architecture and systems",
        items: ["Microservice architecture", "event-driven architecture", "Domain driven design"],
      },
      {
        title: "Engineering Practices",
        items: ["Testing mindset", "Code reviews", "System design", "Documentation", "Ownership"],
      },
    ],
  },

  projects: {
    items: [
      {
        title: "Activity feed dashboard",
        description:
          "A production-style app showcasing secure APIs, structured logging, and a clean UI for status-driven workflows.",
        highlights: [
          "Built a scalable activity feed dashboard enabling efficient browsing of large event streams",
          "Implemented multi-layer caching with TanStack query (client) and redis (server) to reduce database load and improve feed response times",
          "Designed scalability hooks using BullMQ and Redis to support asynchronous event processing, fan-out and future horizintal scaling",
        ],
        tags: ["React", "Node.js", "SQL", "React", "Observability"],
        links: {
          repo: "https://github.com/your-username/claims-app",
        },
      },
      {
        title: "Reusable Modal System (React + TS)",
        description:
          "A small, professional UI system: composable modal primitives, focus management, escape handling, and clean APIs suitable for real product work.",
        highlights: [
          "Designed a composable API (Modal, Trigger, Content) to keep calling code minimal and consistent.",
          "Implemented accessible focus behavior (focus trap + restore) and keyboard interactions.",
          "Added story-like demo pages to showcase real usage patterns (confirm, form, stacked modals).",
        ],
        tags: ["React", "TypeScript", "Accessibility", "Reusable Components"],
        links: {
          repo: "https://github.com/your-username/reusable-modal-system",
          live: "https://your-live-demo-link.com",
        },
      },
      {
        title: "Real-time Updates (WebSockets)",
        description:
          "A focused project demonstrating real-time UX: live status updates, resilient reconnect logic, and simple server-side fanout.",
        highlights: [
          "Implemented reconnect + backoff for stability in real network conditions.",
          "Designed event payloads that are forward-compatible and easy to version.",
          "Kept UI state predictable using a small event reducer pattern.",
        ],
        tags: ["WebSockets", "React", "Node.js", "Resilience"],
        links: {
          repo: "https://github.com/your-username/realtime-status",
        },
      },
    ] satisfies Project[],
  },

  contact: {
    email: "namrataajmeri1695@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/namrata-ajmeri",
    githubUrl: "https://github.com/namrataajmeri16",
    resumeUrl: "", // optional: add your hosted resume link
  },
};
