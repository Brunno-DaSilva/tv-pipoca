import React, { useState, useEffect } from "react";

// Configure
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components

// Hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";

// Default Image
import DefaultImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
