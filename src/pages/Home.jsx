import { useEffect, useState } from "react";
import { fetchVideos } from "../services/youtubeAPI";
import { Link } from "react-router-dom";

function Home({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      const data = await fetchVideos(searchTerm);
      setVideos(data);
      setLoading(false);
    };

    loadVideos();
  }, [searchTerm]); 

  return (
    <div className="home">
      <h2>Videos</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <Link
              key={video.id.videoId || video.id}
              to={`/watch/${video.id.videoId || video.id}`}
              className="video-card"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
