import { API } from "./api";

export async function getPosts() {
  const response = await fetch(
    `${API}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}`
  );
  const data = await response.json();
  return data.posts;
}

export async function getPostTitle() {
  const response = await fetch(
    `${API}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}&fields=title, slug, custom_excerpt, feature_image`
  );
  const data = await response.json();
  return data.posts;
}

export async function getPost(slug: string) {
  const response = await fetch(
    `${API}/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}&slug=${slug}`
  );
  const data = await response.json();
  return data.posts[0];
}
