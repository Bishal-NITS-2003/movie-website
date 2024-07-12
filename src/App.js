import "./styles.css";
import React from "react";
import Header from "./components/header";
import RowView from "./components/rowView";
import headerData from "./data/movie-header-data";
import bollywoodData from "./data/new-bollywood-movies";
import hollywoodData from "./data/new-hollywwod-movies";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <NavBar home="active"/>
      <Header data={headerData} />
      <RowView heading="New Bollywood Movies" data={bollywoodData} />
      <RowView heading="New Hollywood Movies" data={hollywoodData} />
      <hr styles={{color:"white"}}></hr>
      <Footer/>
    </div>
  );
}
