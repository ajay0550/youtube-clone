import { useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams();

  return (
    <div style={{ color: "white" }}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Watch;
