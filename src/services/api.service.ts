import { Story } from "@/types/story";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStories(): Promise<number[]> {
  const res = await fetch(`${BASE_URL}/topstories.json`);
  return res.json();
}

export async function fetchStoryById(id: number): Promise<Story> {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);
  return res.json();
}
