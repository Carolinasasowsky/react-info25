/*import Container from "../components/Container";
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

export default Home;*/



import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

// Categorías a mostrar
const categorias = [
	{ label: "🎭 Drama", value: "Drama" },
	{ label: "🚀 Sci-Fi", value: "Sci-Fi" },
	{ label: "🔫 Acción", value: "Action" },
	{ label: "💘 Romance", value: "Romance" },
	{ label: "🧒 Infantil", value: "Animation" },
];

const Home = () => {
	// Películas con ID del 1 al 8 (populares)
	const populares = movies.filter((movie) => Number(movie.id) <= 8);

	return (
		<div>
			{/* Bloque de películas populares */}
			<Container title="🔥 Películas populares">
				{populares.map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</Container>

			{/* Bloques por categoría */}
			{categorias.map(({ label, value }) => {
				const filtered = movies.filter((movie) => movie.category === value);
				return (
					<Container key={value} title={label}>
						{filtered.map((movie) => (
							<MovieCard key={movie.id} {...movie} />
						))}
					</Container>
				);
			})}
		</div>
	);
};

export default Home;
