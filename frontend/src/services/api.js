const API_KEY = "8da28e19479dbd40da8a3c8490696c1c";
 const BASE_URL = "https://api.themoviedb.org/3";

 export const getPoupularMovies = async () => {

        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;


 };

  export const searchMovies = async (query) => {

        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;


 };

