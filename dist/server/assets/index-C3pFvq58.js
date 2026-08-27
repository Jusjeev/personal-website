import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
function About() {
  return /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6", children: /* @__PURE__ */ jsx("section", { className: "pt-16 pb-14 md:pt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[auto_1fr] gap-12 items-start", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-56 h-80 rounded-xl overflow-hidden border border-border shadow-sm", children: /* @__PURE__ */ jsx("img", { src: "/headshot.jpeg", alt: "Jusjeev Singh", className: "w-full h-full object-cover" }) }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-accent uppercase tracking-widest mb-4", style: {
        fontFamily: "var(--font-mono)"
      }, children: "About" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-3xl font-bold text-foreground mb-6 leading-[1.1]", style: {
        fontFamily: "var(--font-sans)"
      }, children: "Hi! I'm Jusjeev Singh." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl", children: [
        /* @__PURE__ */ jsx("p", { children: "I completed my B.S. in Computer Science at the University of Illinois Urbana-Champaign and will be pursuing my M.S. in Computer Science from UC Davis, starting in Fall 2026." }),
        /* @__PURE__ */ jsx("p", { children: "I'm passionate about leveraging software and AI for real world scientific and engineering applications. " }),
        /* @__PURE__ */ jsx("p", { children: " Currently, I am interested in robotics/AI for agriculture, agentic automation for enterprises and developers and the growing space industry. " }),
        /* @__PURE__ */ jsx("p", { children: "Outside of work and study, I enjoy reading science fiction and playing outdoor sports such as tennis and soccer.              " })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(MapPin, { size: 13, className: "text-accent" }),
        "San Francisco, CA"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/experiences", className: "inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity", children: [
          "View Experience ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 13 })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors", children: "Contact Me" })
      ] })
    ] })
  ] }) }) });
}
export {
  About as component
};
