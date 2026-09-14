import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  tags: string[];
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

function getMarkdownFilenames(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((filename) => filename.endsWith(".md"));
}

function parseFrontmatter(filename: string): ArticleMeta {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    author: String(data.author ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
}

export function getAllArticles(): ArticleMeta[] {
  return getMarkdownFilenames()
    .map(parseFrontmatter)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filename = `${slug}.md`;
  const fullPath = path.join(contentDirectory, filename);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    author: String(data.author ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    contentHtml,
  };
}
