import { useState, useEffect, useRef } from "react";
// API
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);

      setState((prev) => ({
        ...movies,
        results:
          //IF Page is greater than one Get old movies (..prev.results) and new movies (...movies.results)
          // ELSE get new movies only (...movies.results)
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial Render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return {
    state,
    loading,
    error,
  };
};