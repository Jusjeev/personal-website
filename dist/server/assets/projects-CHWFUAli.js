import { jsxs, jsx } from "react/jsx-runtime";
import { Github, ExternalLink, Video, FileText } from "lucide-react";
const allProjects = [
  {
    "title": "Agri Market Advisor",
    "description": "Multi-agent AI system that analyzes agricultural commodity shipments, combining live market prices, weather forecasts, logistics data, and trade compliance checks into a single decision report.",
    "tags": [
      "FastAPI",
      "LangGraph",
      "Next.js",
      "React",
      "Python",
      "Supabase",
      "GPT-4o",
      "Docker"
    ],
    "github": "https://github.com/Jusjeev/agri-market-advisor",
    "liveUrl": "https://frontend-294225411892.us-central1.run.app",
    "content": "A multi-agent AI system for analyzing agricultural commodity shipments. Users submit natural-language queries about a shipment, and a pipeline of seven specialized agents — Orchestrator, Market, Risk, Compliance, Logistics, Critic, and Report — gathers live market pricing, weather forecasts, freight logistics, and trade compliance data before synthesizing a structured decision report. Built with a FastAPI/LangGraph backend and Next.js frontend, backed by Supabase (PostgreSQL with pgvector) and GPT-4o, pulling live data from USDA NASS, Open-Meteo, and Tavily. Deployed on GCP Cloud Run with Docker, and instrumented with LangSmith for observability.",
    "_meta": {
      "filePath": "agri-market-advisor.md",
      "fileName": "agri-market-advisor.md",
      "directory": ".",
      "extension": "md",
      "path": "agri-market-advisor"
    }
  },
  {
    "title": "Farm Robotics Challenge 2025",
    "description": "Built a navigation system for autonomous robot navigation in crop rows, with YOLO models achieving 90%+ accuracy for plant and weed classification.",
    "tags": [
      "ROS",
      "OpenCV",
      "PyTorch",
      "Roboflow",
      "YOLO",
      "Python"
    ],
    "github": "https://github.com/Jusjeev",
    "videoUrl": "https://www.farmroboticschallenge.ai/2025results/v/universityillinois",
    "reportUrl": "https://drive.google.com/file/d/1QHAiont1MFbhKoJ5cRm76X0uD-ouSZ-H/view",
    "content": "UIUC team project for the Farm Robotics Challenge 2025. Built a navigation system using model predictive control and row detection for autonomous navigation of a 4-wheeled robot in straight and curved crop rows. Trained YOLO classification models with 90%+ accuracy for horseradish and weeds. Contributed to system development using ROS, OpenCV, PyTorch, and Roboflow, and assisted with hardware setup including Oak-D stereo camera integration and Nvidia Jetson Nano deployment.",
    "_meta": {
      "filePath": "farm-robotics.md",
      "fileName": "farm-robotics.md",
      "directory": ".",
      "extension": "md",
      "path": "farm-robotics"
    }
  }
];
function Projects() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 pt-16 pb-20", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-accent uppercase tracking-widest mb-14", style: {
      fontFamily: "var(--font-mono)"
    }, children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5", children: allProjects.map((project) => /* @__PURE__ */ jsx("div", { className: "group border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", style: {
        fontFamily: "var(--font-sans)"
      }, children: project.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 flex-1", children: project.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: project.tags.slice(0, 4).map((tag) => /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded", style: {
        fontFamily: "var(--font-mono)"
      }, children: tag }, tag)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        project.github && /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsx(Github, { size: 13 }),
          " GitHub"
        ] }),
        project.liveUrl && /* @__PURE__ */ jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity", children: [
          /* @__PURE__ */ jsx(ExternalLink, { size: 13 }),
          " Live Demo"
        ] }),
        project.videoUrl && /* @__PURE__ */ jsxs("a", { href: project.videoUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity", children: [
          /* @__PURE__ */ jsx(Video, { size: 13 }),
          " Final Video"
        ] }),
        project.reportUrl && /* @__PURE__ */ jsxs("a", { href: project.reportUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity", children: [
          /* @__PURE__ */ jsx(FileText, { size: 13 }),
          " Project Report"
        ] })
      ] })
    ] }) }, project._meta.path)) })
  ] });
}
export {
  Projects as component
};
