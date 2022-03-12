import SingleMovie from "../components/movies/SingleMovie";

const SingleMoviePage = () => {
  const singlemovie = {
    minHeight: "80vh",
  };

  return (
    <div className="container py-5" style={singlemovie}>
      <SingleMovie />
    </div>
  );
};

export default SingleMoviePage;
