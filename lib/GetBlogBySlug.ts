interface BlogBySlugResult {
  data?: any;
  error?: string;
}

const extractBlogFromPayload = (payload: any) => {
  if (!payload) return undefined;
  if (Array.isArray(payload?.data)) return payload.data[0];
  if (payload?.data && typeof payload.data === "object") return payload.data;
  if (Array.isArray(payload)) return payload[0];
  if (typeof payload === "object" && payload?.slug) return payload;
  return undefined;
};

export default async function GetBlogBySlug(slug: string): Promise<BlogBySlugResult> {
  const apiUrl =
    process.env.NEXT_PUBLIC_BLOG_API_URL || "https://backend-bayshore.vercel.app";
  const safeSlug = encodeURIComponent(slug);
  const endpoint = `${apiUrl}/site/blog/${safeSlug}`;

  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return { error: `Failed to fetch blog: ${response.statusText}` };
    }

    const payload = await response.json();
    const blog = extractBlogFromPayload(payload);
    if (blog?.slug === slug) {
      return { data: blog };
    }

    return { error: "Blog not found." };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
