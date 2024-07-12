import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CarouselItem(props) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${encodeURIComponent(props.title)}/${props.year}`);
  };

  return (
    <div className={"carousel-item " + props.type}>
      <div className="row">
        <div className="col-lg-8 col-sm-12 image-container">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="d-flex flex-column justify-content-center col-lg-4 col-sm-12">
          <h1 className="text-white">{props.title}</h1>
          <div className="d-flex mb-3">
            <p
              className="fw-bold px-1 rounded"
              style={{ backgroundColor: "#e7b816" }}
            >
              IMDb
            </p>
            <p className="text-white m-0 ps-2">{props.rating}</p>
            <p className="text-white-50 m-0 ps-1">({props.reviews})</p>
            <p className="text-white m-0 ps-2">&bull;</p>
            <p className="text-white m-0 ps-2">
              {props.year} | {props.duration} | {props.genre}
            </p>
          </div>
          <p className="text-white mb-4">{props.description}</p>
          <div className="d-flex mb-3">
            <a
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              onClick={handleClick}
              className="border border-1 rounded px-4 py-2 me-3"
              style={
                hover
                  ? {
                      cursor: "pointer",
                      backgroundColor: "#FCF8F3",
                      color: "black",
                    }
                  : {
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "rgb(15, 7, 22)",
                    }
              }
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
