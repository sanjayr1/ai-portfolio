import { allBlogs, allCaseStudies, Blog, CaseStudy } from "contentlayer/generated";
import { compareDesc } from "date-fns";

/**
 * Return Blog posts sorted by date (newest first). Draft posts are filtered out.
 */
export function getSortedPosts(): Blog[] {
  return allBlogs
    .filter((post) => !(post as Partial<Blog>).draft) // if you later add `draft` field
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

/**
 * Return Case studies sorted by date (newest first).
 */
export function getSortedCaseStudies(): CaseStudy[] {
  return allCaseStudies.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}
