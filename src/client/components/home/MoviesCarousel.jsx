import { Carousel } from "@trendyol-js/react-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMovies } from "../../context/MoviesContext";
import CarouselMovie from "./CarouselMovie";
import Loading from "../common/Loading";

const MoviesCarousel = () => {
  const { allMovies, isLoading } = useMovies();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h1>New Subtitle</h1>
      </div>
      <Carousel
        show={4}
        slide={1}
        swiping={true}
        transition={0.3}
        responsive={true}
        leftArrow={<FaArrowLeft />}
        rightArrow={<FaArrowRight />}
      >
        {allMovies.slice(0, 10).map((movie) => (
          <CarouselMovie movie={movie} />
        ))}
      </Carousel>
    </>
  );
};

export default MoviesCarousel;
