import { useEffect, useState } from "react";
import { fetchVideos } from "../services/youtubeAPI";
import { Link } from "react-router-dom";

function Home({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);

      // Default to "games" if searchTerm is empty
      const data = await fetchVideos(searchTerm || "games");

      setVideos(data || []);
      setLoading(false);
    };

    loadVideos();
  }, [searchTerm]);

  return (
    <div className="home">
      <h2>Videos</h2>

      {loading ? (
        <p>Loading...</p>
      ) : videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <div className="video-grid">
          {videos.map((video) => {
            // Some safety checks
            const videoId = video?.id?.videoId || video?.id;
            const thumbnail = video?.snippet?.thumbnails?.medium?.url;
            const title = video?.snippet?.title;
            const channel = video?.snippet?.channelTitle;

            if (!videoId || !thumbnail) return null;

            return (
              <Link
                key={videoId}
                to={`/watch/${videoId}`}
                className="video-card"
              >
                <img src={thumbnail} alt={title} />
                <h4>{title}</h4>
                <p>{channel}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
