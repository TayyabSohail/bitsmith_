import { Story } from "@/types/story";

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white hover:shadow-md transition">
      <a
        href={story.url || `https://news.ycombinator.com/item?id=${story.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {story.title}
      </a>
      <p className="text-sm text-gray-500 mt-1">
        By <span className="font-medium">{story.by}</span> | {story.score}{" "}
        points
      </p>
    </div>
  );
}
