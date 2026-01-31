import { Link } from "react-router-dom";
import type { Video } from "@/types";

interface VideoCardProps {
  video: Video;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, className = "" }) => {
  const { id, title, thumbnail, duration } = video;
  return (
    <div className={`relative ${className}`}>
      <Link to={`/videos/${id}`}>
        <img src={thumbnail} alt={title} className="w-full h-auto rounded-md" />
      </Link>
      <span className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 rounded">
        {duration}
      </span>
    </div>
  );
};

export default VideoCard;
