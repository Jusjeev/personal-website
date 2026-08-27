import { jsxs, jsx } from "react/jsx-runtime";
import { marked } from "marked";
import { Download, MapPin, Calendar } from "lucide-react";
const allJobs = [
  {
    "jobTitle": "Course Assistant, Computer Architecture",
    "summary": "Supported 250+ students across weekly discussion sections and office hours for a core Computer Architecture course.",
    "startDate": "2023-08-01",
    "endDate": "2025-05-31",
    "company": "University of Illinois Urbana-Champaign",
    "location": "Champaign, IL",
    "tags": [
      "Teaching",
      "Computer Architecture",
      "Assembly",
      "Digital Logic"
    ],
    "content": "- Led weekly discussion sections for 250+ students covering topics including digital logic design, processor implementation, caching, parallelism, and low-level assembly programming.\n- Held 1:1 and group office hours, supporting 20+ students weekly with longer programming lab assignments.",
    "_meta": {
      "filePath": "course-assistant.md",
      "fileName": "course-assistant.md",
      "directory": ".",
      "extension": "md",
      "path": "course-assistant"
    }
  },
  {
    "jobTitle": "Generative AI/ML Intern",
    "summary": "Implemented supervised LLM fine-tuning on open-source SLMs and developed evaluation pipelines achieving 90%+ accuracy on relevant benchmarks.",
    "startDate": "2025-06-01",
    "endDate": "2025-08-31",
    "company": "Persistent Systems",
    "location": "Santa Clara, CA",
    "tags": [
      "PyTorch",
      "LoRA",
      "QLoRA",
      "Hugging Face",
      "Unsloth",
      "Python",
      "LLMs"
    ],
    "content": "- Implemented supervised LLM fine-tuning (LoRA, QLoRA) on open-source SLMs for downstream tasks such as answering developer-style questions and file-path predictions, using PyTorch, Unsloth AI and Hugging Face Transformers library.\n- Created fine-tuning/evaluation scripts and datasets, conducted experiments for different hyper-parameters and model combinations, and achieved 90%+ accuracy with relevant LLM benchmarks and metrics (ROUGE, F1).",
    "_meta": {
      "filePath": "persistent-systems.md",
      "fileName": "persistent-systems.md",
      "directory": ".",
      "extension": "md",
      "path": "persistent-systems"
    }
  },
  {
    "jobTitle": "Agentic AI/ML Intern",
    "summary": "Building a scalable full-stack platform combining agentic orchestration, knowledge graphs, and backend systems to automate complex workflows.",
    "startDate": "2026-01-01",
    "company": "RocketFrog.ai",
    "location": "San Ramon, CA",
    "tags": [
      "LangGraph",
      "RAG",
      "Neo4j",
      "Postgres",
      "Kafka",
      "FastAPI",
      "Python"
    ],
    "content": "- Building a scalable full-stack platform combining agentic orchestration (LangGraph-based deep agents and RAG), relational databases (Postgres), knowledge graphs (Neo4j), and backend systems (Kafka, FastAPI, asyncio) to automate complex workflows.\n- Collaborating with a principal scientist and CTO to refine system design and guide development based on industry use cases for businesses, developers, and research workflows.",
    "_meta": {
      "filePath": "rocketfrog.md",
      "fileName": "rocketfrog.md",
      "directory": ".",
      "extension": "md",
      "path": "rocketfrog"
    }
  }
];
const allEducations = [
  {
    "school": "University of California, Davis",
    "summary": "M.S. Computer Science",
    "startDate": "2026-08-01",
    "endDate": "2028-05-31",
    "tags": [
      "Computer Science",
      "AI/ML"
    ],
    "content": "Seeking internships, co-op, and early-career roles in software engineering and AI/ML.",
    "_meta": {
      "filePath": "uc-davis.md",
      "fileName": "uc-davis.md",
      "directory": ".",
      "extension": "md",
      "path": "uc-davis"
    }
  },
  {
    "school": "University of Illinois Urbana-Champaign",
    "summary": "B.S. Computer Science",
    "startDate": "2021-08-01",
    "endDate": "2025-05-31",
    "tags": [
      "Machine Learning",
      "Computer Vision",
      "IoT",
      "Numerical Methods",
      "Computational Photography",
      "Data Structures",
      "Algorithms",
      "System Programming"
    ],
    "content": "Coursework: Machine Learning, Computer Vision, System Programming, IoT, Numerical Methods, Computational Photography, Data Structures, Algorithms.",
    "_meta": {
      "filePath": "uiuc.md",
      "fileName": "uiuc.md",
      "directory": ".",
      "extension": "md",
      "path": "uiuc"
    }
  }
];
function Experiences() {
  const jobs = [...allJobs].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 pt-16 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-14", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-accent uppercase tracking-widest", style: {
        fontFamily: "var(--font-mono)"
      }, children: "Experience" }),
      /* @__PURE__ */ jsxs("a", { href: "/resume.pdf", download: true, className: "hidden sm:inline-flex shrink-0 items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors", children: [
        /* @__PURE__ */ jsx(Download, { size: 13 }),
        " Download Resume"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border", style: {
        fontFamily: "var(--font-mono)"
      }, children: "Work Experience" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: jobs.map((job) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", style: {
              fontFamily: "var(--font-sans)"
            }, children: job.jobTitle }),
            /* @__PURE__ */ jsxs("p", { className: "text-base text-muted-foreground mt-0.5 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { children: job.company }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { size: 11 }),
                job.location
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", style: {
            fontFamily: "var(--font-mono)"
          }, children: [
            /* @__PURE__ */ jsx(Calendar, { size: 11 }),
            new Date(job.startDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric"
            }),
            " — ",
            job.endDate ? new Date(job.endDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric"
            }) : "Present"
          ] })
        ] }),
        job.content && /* @__PURE__ */ jsx("div", { className: "text-base text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_li]:text-muted-foreground", dangerouslySetInnerHTML: {
          __html: marked(job.content)
        } })
      ] }, `${job.jobTitle}-${job.company}`)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border", style: {
        fontFamily: "var(--font-mono)"
      }, children: "Education" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: allEducations.map((edu) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", style: {
              fontFamily: "var(--font-sans)"
            }, children: edu.school }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground mt-0.5", children: edu.summary })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", style: {
            fontFamily: "var(--font-mono)"
          }, children: [
            /* @__PURE__ */ jsx(Calendar, { size: 11 }),
            new Date(edu.startDate).getFullYear(),
            " — ",
            edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"
          ] })
        ] }),
        edu.content && /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed mt-2", children: edu.content })
      ] }, edu.school)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border", style: {
        fontFamily: "var(--font-mono)"
      }, children: "Technical Skills" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: [{
        category: "Languages",
        skills: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "OCaml", "Verilog", "MIPS Assembly"]
      }, {
        category: "Frameworks & Libraries",
        skills: ["FastAPI", "React.js", "REST APIs", "SQLAlchemy", "Pydantic", "TanStack Query", "Scikit-learn", "Pandas"]
      }, {
        category: "Machine Learning / AI",
        skills: ["PyTorch", "Hugging Face Transformers", "LoRA/QLoRA", "YOLO", "OpenCV", "MediaPipe"]
      }, {
        category: "Tools & Platforms",
        skills: ["Git", "GitHub", "Linux", "Jupyter", "Google Earth Engine", "ROS", "VS Code", "Claude Code"]
      }, {
        category: "CS Concepts",
        skills: ["Object-oriented programming", "Functional programming", "Dynamic programming", "TCP/UDP networking", "Supervised learning", "Deep learning", "Databases"]
      }].map(({
        category,
        skills
      }) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2", style: {
          fontFamily: "var(--font-mono)"
        }, children: category }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: skills.map((skill) => /* @__PURE__ */ jsx("span", { className: "text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md", style: {
          fontFamily: "var(--font-mono)"
        }, children: skill }, skill)) })
      ] }, category)) })
    ] })
  ] });
}
export {
  Experiences as component
};
