import { jsxs, jsx } from "react/jsx-runtime";
import { BookOpen, Download } from "lucide-react";
const PHOTOS = [{
  file: "IMG_1950.jpeg"
}, {
  file: "IMG_20190704_093721.jpg"
}, {
  file: "IMG_1978.jpeg"
}, {
  file: "IMG_20190710_160113.jpg"
}, {
  file: "IMG_20190705_130929.jpg"
}, {
  file: "IMG_1874.jpeg"
}];
function Personal() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 pt-16 pb-20", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-accent uppercase tracking-widest mb-8", style: {
      fontFamily: "var(--font-mono)"
    }, children: "Personal" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-6 max-w-sm mb-16", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "https://www.goodreads.com/user/show/195711192-jusjeev", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-5 p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors", children: [
      /* @__PURE__ */ jsx("span", { className: "shrink-0 w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors", children: /* @__PURE__ */ jsx(BookOpen, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-foreground", children: "Goodreads" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "@jusjeev" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/70 mt-1", children: "See what I am reading" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6", style: {
      fontFamily: "var(--font-mono)"
    }, children: "Photos" }),
    /* @__PURE__ */ jsx("div", { className: "columns-2 gap-3", children: PHOTOS.map(({
      file
    }) => {
      const src = `/.netlify/images?url=${encodeURIComponent(`/gallery/${file}`)}&q=90`;
      return /* @__PURE__ */ jsxs("div", { className: "relative group mb-3 break-inside-avoid rounded-xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsx("img", { src, alt: "", className: "w-full h-auto block", loading: "lazy" }),
        /* @__PURE__ */ jsx("a", { href: `/gallery/${file}`, download: file, className: "absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent", title: "Download original", children: /* @__PURE__ */ jsx(Download, { size: 14 }) })
      ] }, file);
    }) })
  ] });
}
export {
  Personal as component
};
