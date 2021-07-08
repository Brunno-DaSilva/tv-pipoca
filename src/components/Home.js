import React, { useState, useEffect } from "react";

// API
import API from "../API";
// Configure
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components

// Hooks

// Default Image
import DefaultImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);
    } catch (error) {
      setError(true);
    }
  };

  //Initial Render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
