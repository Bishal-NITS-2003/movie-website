import React, { useState } from "react";

import axios from "axios";
import CarouselItem from "./carousel_item";

function setCarousel(item) {
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            t: item.title,
            y: item.year,
          },
        });
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.log("Error Loading Header: " + error.message);
      }
    }

    fetchMovie();
  }, [item.title, item.year]);

  return (
    <CarouselItem
      type={item.type}
      src={movie ? movie.Poster : ""}
      alt={item.title}
      title={item.title}
      description={movie ? movie.Plot : "Loading..."}
      rating={movie ? movie.imdbRating : "N/A"}
      reviews={movie ? movie.imdbVotes : "N/A"}
      year={item.year}
      genre={movie ? movie.Genre : "N/A"}
      duration={movie ? movie.Runtime : "N/A"}
    />
  );
}

function Header(props) {
  return (
    <div className="container header-container m-0">
      {/* Carousel */}
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">{props.data.map(setCarousel)}</div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
