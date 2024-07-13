import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function shareLink() {
  const url = window.location.href;
  const title = document.title;

  if (navigator.share) {
    navigator
      .share({
        title: title,
        url: url,
      })
      .then(() => console.log("Successfully shared"))
      .catch((error) => console.error("Error sharing", error));
  } else {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Could not copy text: ", err));
  }
}

async function searchYouTube(query) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          maxResults: 1,
          type: "video",
        },
      }
    );

    const video = response.data.items[0];
    if (video) {
      const videoID = video.id.videoId;
      console.log("Video ID:", videoID);
      return videoID;
    } else {
      console.log("No videos found.");
      return null;
    }
  } catch (error) {
    console.error("Error searching YouTube:", error);
    return null;
  }
}

function Details() {
  const { title, year } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const query = `${decodedTitle} trailer`;

  const [movie, setMovie] = React.useState(null);
  const [hover, setHover] = React.useState(false);
  const [videoID, setVideoID] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            t: decodedTitle,
            y: year,
          },
        });
        console.log(response.data);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    async function fetchVideoID() {
      const id = await searchYouTube(query);
      setVideoID(id);
    }

    fetchMovie();
    fetchVideoID();
  }, [decodedTitle, year, query]);

  if (loading)
    return (
      <div className="text-white h1 d-flex justify-content-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-white h1 fs-1 d-flex justify-content-center">
        Error: {error}
      </div>
    );

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-11">
            <h1 className="text-white">{movie.Title}</h1>
            <p className="text-white-50">
              {year} | {movie.Runtime} | {movie.Released}
            </p>
          </div>
          <div className="col-1 d-flex align-items-center">
            <svg
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              onClick={shareLink}
              className="p-2 border border-1 rounded bi bi-share-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 16 16"
              style={
                hover
                  ? {
                      cursor: "pointer",
                    }
                  : {
                      textDecoration: "none",
                    }
              }
            >
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
            </svg>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-8 col-12 rounded mt-2"
            style={{ height: "550px" }}
          >
            {videoID && (
              <iframe
                className="rounded"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoID}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="col-lg-4 col-12 rounded mt-2">
            <div className="row">
              <div className="col-5">
                <img
                  className="rounded"
                  src={movie.Poster}
                  alt={decodedTitle}
                  height={"250px"}
                  width={"100%"}
                />
              </div>
              <div className="col-7">
                <div className="d-flex flex-column mt-3"></div>
                <p className="text-white">
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p className="text-white">
                  <strong>Plot:</strong> {movie.Plot}
                </p>
                <div className="d-flex flew-row align-items-center">
                  <p className="text-white mb-0">
                    <span
                      className="text-black fw-bold px-2 py-1 me-2 rounded"
                      style={{ backgroundColor: "#e7b816" }}
                    >
                      IMDb
                    </span>
                    {movie.imdbRating}
                  </p>
                  <svg
                    className="mx-2 bi bi-star-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <hr className="my-2" style={{ color: "white" }} />
                <p className="text-white">
                  <strong>Released: </strong> {movie.Released}
                </p>
                <hr className="my-2" style={{ color: "white" }} />
                <p className="text-white">
                  <strong>Duration: </strong> {movie.Runtime}
                </p>
                <hr className="my-2" style={{ color: "white" }} />
                <p className="text-white">
                  <strong>Director: </strong> {movie.Director}
                </p>
                <hr className="my-2" style={{ color: "white" }} />
                <p className="text-white">
                  <strong>Writer: </strong> {movie.Writer}
                </p>
                <hr className="my-2" style={{ color: "white" }} />
                <p className="text-white">
                  <strong>Actors: </strong> {movie.Actors}
                </p>
                <hr className="my-2" style={{ color: "white" }} />
                <a
                  href={"https://www.imdb.com/title/" + movie.imdbID}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }}></hr>
      <Footer />
    </div>
  );
}

export default Details;
