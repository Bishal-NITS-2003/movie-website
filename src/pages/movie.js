import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import RowView from "../components/rowView";
import headerData from "../data/movie-header-data";
import bollywwodData from "../data/new-bollywood-movies";
import topbollywwodData from "../data/top-bollywood-movies";

function Movie() {
  return (
    <div>
      <NavBar movies="active" />
      <Header data={headerData} />
      <RowView heading="New Bollywood Movies" data={bollywwodData} />
      <RowView heading="Top Bollywood Movies" data={topbollywwodData} />
      <hr style={{ color: "white" }}></hr>
      <Footer />
    </div>
  );
}

export default Movie;
