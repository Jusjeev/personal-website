import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";
const NAV_LINKS = [
  { to: "/", label: "About" },
  { to: "/experiences", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/personal", label: "Personal" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [theme, setTheme] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }
  return /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors",
          style: { fontFamily: "var(--font-sans)" },
          children: "Jusjeev Singh"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-7", children: [
        NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:font-medium",
            children: link.label
          },
          link.to
        )),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground",
            "aria-label": "Toggle theme",
            children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 15 }) : /* @__PURE__ */ jsx(Sun, { size: 15 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground",
            "aria-label": "Toggle theme",
            children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 15 }) : /* @__PURE__ */ jsx(Sun, { size: 15 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileOpen(!mobileOpen),
            className: "p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground",
            "aria-label": "Toggle menu",
            children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 17 }) : /* @__PURE__ */ jsx(Menu, { size: 17 })
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background px-6 py-4 space-y-1", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
      Link,
      {
        to: link.to,
        className: "block text-sm text-muted-foreground hover:text-foreground transition-colors py-2",
        onClick: () => setMobileOpen(false),
        children: link.label
      },
      link.to
    )) })
  ] });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jusjeev" },
      { name: "description", content: "Portfolio of Jusjeev Singh — software engineer focused on AI/ML, robotics, and full-stack development." }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=DM+Sans:opsz,wght@9..40,300..700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootDocument,
  component: RootLayout
});
function RootLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border mt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "var(--font-sans)" }, children: "Jusjeev Singh" }),
      /* @__PURE__ */ jsx("span", { children: "Built with Claude Code · TanStack Start · Deployed on Netlify" })
    ] }) })
  ] });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$5 = () => import("./projects-CHWFUAli.js");
const Route$5 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./personal-77HFSFT7.js");
const Route$4 = createFileRoute("/personal")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./experiences-BvkbnsVI.js");
const Route$3 = createFileRoute("/experiences")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CTPIevPJ.js");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-C3pFvq58.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-DAJR6d3S.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$6
});
const PersonalRoute = Route$4.update({
  id: "/personal",
  path: "/personal",
  getParentRoute: () => Route$6
});
const ExperiencesRoute = Route$3.update({
  id: "/experiences",
  path: "/experiences",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ExperiencesRoute,
  PersonalRoute,
  ProjectsRoute,
  BlogSlugRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
