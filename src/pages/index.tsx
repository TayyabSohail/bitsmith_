import { useEffect, useState } from "react";
import Link from "next/link";
import { HN_API_BASE, STORY_LIMIT } from "@/utils/constants";
import { Story } from "@/types/story";

export default function Home() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch(`${HN_API_BASE}/topstories.json`);
      const ids: number[] = await res.json();
      const topIds = ids.slice(0, STORY_LIMIT);

      const storiesData = await Promise.all(
        topIds.map(async (id) => {
          const story = await fetch(`${HN_API_BASE}/item/${id}.json`).then(
            (res) => res.json()
          );
          return story;
        })
      );
      setStories(storiesData);
    };

    fetchStories();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-hn-header px-2 py-1 flex items-center text-xs text-white">
        <span className="font-bold pr-2">Y</span>
        <Link href="/" className="text-white font-bold mr-2">
          Hacker News
        </Link>
        <nav className="space-x-1 text-white">
          <Link href="#">new</Link>|<Link href="#">past</Link>|
          <Link href="#">comments</Link>|<Link href="#">ask</Link>|
          <Link href="#">show</Link>|<Link href="#">jobs</Link>|
          <Link href="#">submit</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        <ol className="space-y-3">
          {stories.map((story, index) => (
            <li key={story.id} className="flex items-start gap-2">
              <span className="text-hn-meta">{index + 1}.</span>
              <div>
                <a
                  href={
                    story.url ||
                    `https://news.ycombinator.com/item?id=${story.id}`
                  }
                  className="hover:underline hover:text-hn-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {story.title}
                </a>
                <div className="text-hn-meta text-xs">
                  {story.score} points by {story.by} | {story.descendants}{" "}
                  comments
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
