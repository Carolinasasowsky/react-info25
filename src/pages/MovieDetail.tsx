import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetail = () => {
	const { id } = useParams();
	const movie = movies.find((m) => m.id === id);

	if (!movie) {
		return (
			<div style={{ padding: "2rem", color: "white" }}>
				<h2>Película no encontrada</h2>
			</div>
		);
	}

	return (
		<div
			style={{
				padding: "2rem",
				color: "white",
				maxWidth: "800px",
				margin: "0 auto",
			}}
		>
			<h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
				{movie.title}
			</h1>
			<img
				src={movie.image}
				alt={movie.title}
				style={{
					width: "100%",
					maxHeight: "500px",
					objectFit: "cover",
					borderRadius: "10px",
					marginBottom: "1rem",
				}}
			/>
			<p style={{ fontSize: "1.2rem" }}>
				<strong>Categoría:</strong> {movie.category}
			</p>
			<p style={{ fontSize: "1.2rem" }}>
				<strong>Duración:</strong> {movie.duration}
			</p>
		</div>
	);
};

export default MovieDetail;
