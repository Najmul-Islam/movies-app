import { Carousel } from "@trendyol-js/react-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMovies } from "../../context/MoviesContext";
import Movie from "../movies/Movie";

const MoviesCarousel = () => {
  const { allMovies } = useMovies();
  console.log(allMovies);
  return (
    <Carousel
      show={4}
      slide={1}
      swiping={true}
      transition={0.3}
      leftArrow={<FaArrowLeft />}
      rightArrow={<FaArrowRight />}
    >
      {allMovies.slice(0, 10).map((movie) => (
        <Movie movie={movie} />
      ))}
    </Carousel>
  );
};

export default MoviesCarousel;
