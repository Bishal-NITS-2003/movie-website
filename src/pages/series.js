import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import RowView from "../components/rowView";
import headerData from "../data/series-header-data";
import bollywwodData from "../data/new-hindi-series";
import topbollywwodData from "../data/new-english-series";

function Series() {
  return (
    <div>
      <NavBar series="active" />
      <Header data={headerData} />
      <RowView heading="New Hindi Series" data={bollywwodData} />
      <RowView heading="New English Series" data={topbollywwodData} />
      <Footer />
    </div>
  );
}

export default Series;
