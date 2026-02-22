interface BlogDataParams {
  page?: number;
  limit?: number;
}

interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface BlogData {
  data?: any[];
  pagination?: PaginationMetadata;
  error?: string;
}

export default async function GetAllBlogData(params?: BlogDataParams): Promise<BlogData> {
  const { page, limit } = params || {};
  const apiUrl = process.env.NEXT_PUBLIC_BLOG_API_URL || 'https://backend-bayshore.vercel.app';
  
  let endpoint = `${apiUrl}/site/blog`;
  const queryParams = [];
  if (typeof page === "number") queryParams.push(`page=${page}`);
  if (typeof limit === "number") queryParams.push(`limit=${limit}`);
  
  if (queryParams.length > 0) {
    endpoint += `?${queryParams.join('&')}`;
  }

  try {
    const response = await fetch(endpoint, {
      cache: 'no-store', // Disable caching since response is over 2MB
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Blog API Error: ${response.status} ${response.statusText}`);
      return { data: [], error: `Failed to fetch blogs: ${response.statusText}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Blog API Fetch Error:', error);
    return { 
      data: [], 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
