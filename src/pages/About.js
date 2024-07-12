import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function About() {
  return (
    <div>
      <NavBar about="active" />
      <div className="container">
        <h1 className="text-center text-white mb-4">About Us</h1>
        <h3 className="text-white">
          Discover Your Next Favorite Movie with Us!
        </h3>
        <p className="text-white mb-4">
          Welcome to Movie Finder—your ultimate destination for finding and
          exploring movies online! We’re passionate about films and dedicated to
          helping you uncover the perfect movie for any mood or occasion.
        </p>
        <h3 className="text-white">Our Mission</h3>
        <p className="text-white mb-4">
          At Movie Finder, our mission is simple: to make discovering movies
          easy, fun, and personalized. Whether you’re a film enthusiast, a
          casual viewer, or just looking for something new to watch, we’re here
          to guide you to the best cinematic experiences.
        </p>
        <h3 className="text-white">What We Do</h3>
        <p className="text-white mb-4">
          Our platform offers a comprehensive and user-friendly search tool that
          helps you find movies from various sources and streaming services.
          With advanced filters, personalized recommendations, and detailed
          movie information, we aim to streamline your movie-watching journey
          and make it more enjoyable.
        </p>
        <h3 className="text-white"> Join Us on Our Movie Journey</h3>
        <p className="text-white mb-4">
          We’re excited to have you here and can’t wait to help you find your
          next great movie experience. Dive in, explore, and let us be your
          guide to the world of film! Thank you for visiting Movie Finder. We
          hope you find exactly what you’re looking for and discover some new
          favorites along the way!
        </p>
        <a className="mb-5" href="/contact">
          For any questions or feedback, feel free to Contact Us.
        </a>
      </div>
      <hr style={{ color: "white" }}></hr>
      <Footer />
    </div>
  );
}

export default About;
