import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const Home = () => {
  console.log(movies);

	return (
		<div>
			<Container title="Películas populares">
				{movies.map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</Container>
		</div>
	);
};

export default Home;
