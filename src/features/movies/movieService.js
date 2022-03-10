import axios from "axios";

const movies_url = process.env.REACT_APP_MOVIES_API;

//  get all movies
const getMovies = async () => {
  const response = await axios.get(movies_url);

  return response.data;
};

const movieService = {
  getMovies,
};

export default movieService;
