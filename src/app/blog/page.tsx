import type { Metadata } from "next";

import { getBlogPosts } from "@/services/content.service";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Akkaş Group",
  description:
    "Akkaş Group uzmanlarından yatırım, teşvik, KVKK, marka-patent ve iş dünyasına dair güncel içerikler.",
};

export default async function BlogPage() {
  const articles = await getBlogPosts();

  return (
    <>
      <BlogHero />
      <BlogGrid articles={articles} />
    </>
  );
}