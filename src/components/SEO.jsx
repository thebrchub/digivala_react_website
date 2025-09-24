import { useEffect } from "react";

const SEO = ({ title, description, keywords, author, canonical, ogImage, ogTitle, ogDescription }) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, property = false) => {
      if (!content) return;
      const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", author);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", ogImage, true);

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, keywords, author, canonical, ogImage, ogTitle, ogDescription]);

  return null;
};

export default SEO;
