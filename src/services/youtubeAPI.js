const API_KEY = import.meta.env.VITE_RAPID_API;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async (query = "games") => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
    );

    const data = await response.json();
    console.log("YOUTUBE DATA:", data);

    return data.items || [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
