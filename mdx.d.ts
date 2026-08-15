declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const meta: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified?: string;
    excerpt: string;
  };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
