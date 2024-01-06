import type { MDXComponents } from "mdx/types";

export function useMDXCmponents(components: MDXComponents): MDXComponents {
    return {
        ...components
    }
}