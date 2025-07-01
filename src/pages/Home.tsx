import { useState } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

// Categorías disponibles
const categorias = [
	{ label: "🎭 Drama", value: "Drama" },
	{ label: "🚀 Sci-Fi", value: "Sci-Fi" },
	{ label: "🔫 Acción", value: "Action" },
	{ label: "💘 Romance", value: "Romance" },
	{ label: "🧒 Infantil", value: "Animation" },
];

const Home = () => {
	const [searchTitle, setSearchTitle] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	// Películas populares (id del 1 al 8)
	const populares = movies.filter((movie) => Number(movie.id) <= 8);

	// Filtrado general por título y categoría
	const peliculasFiltradas = movies.filter((movie) => {
		const matchesTitle = movie.title
			.toLowerCase()
			.includes(searchTitle.toLowerCase());
		const matchesCategory = selectedCategory
			? movie.category === selectedCategory
			: true;
		return matchesTitle && matchesCategory;
	});

	// Categorías a mostrar según selección
	const categoriasAMostrar = selectedCategory
		? categorias.filter((cat) => cat.value === selectedCategory)
		: categorias;

	return (
		<div>
			{/* Filtros */}
			<div
				style={{
					padding: "1rem",
					color: "white",
					display: "flex",
					gap: "1rem",
					flexWrap: "wrap",
				}}
			>
				<input
					type="text"
					placeholder="Buscar por título..."
					value={searchTitle}
					onChange={(e) => setSearchTitle(e.target.value)}
					style={{ padding: "0.5rem", fontSize: "1rem", flex: "1" }}
				/>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
					style={{ padding: "0.5rem", fontSize: "1rem" }}
				>
					<option value="">Todas las categorías</option>
					{categorias.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>

			{/* Mostrar populares solo si no hay búsqueda ni categoría seleccionada */}
			{!searchTitle && !selectedCategory && (
				<Container title="🔥 Películas populares">
					{populares.map((movie) => (
						<MovieCard key={movie.id} {...movie} />
					))}
				</Container>
			)}

			{/* Resultados filtrados por búsqueda y/o categoría */}
			{searchTitle && (
				<Container title="🎬 Resultados de búsqueda">
					{peliculasFiltradas.length > 0 ? (
						peliculasFiltradas.map((movie) => (
							<MovieCard key={movie.id} {...movie} />
						))
					) : (
						<p style={{ color: "white" }}>No se encontraron coincidencias.</p>
					)}
				</Container>
			)}

			{/* Secciones por categoría (una o todas) si no hay búsqueda */}
			{!searchTitle &&
				categoriasAMostrar.map(({ label, value }) => {
					const filtradas = peliculasFiltradas.filter(
						(movie) => movie.category === value
					);
					return (
						<Container key={value} title={label}>
							{filtradas.length > 0 ? (
								filtradas.map((movie) => (
									<MovieCard key={movie.id} {...movie} />
								))
							) : (
								<p style={{ color: "white" }}>
									No hay películas en esta categoría.
								</p>
							)}
						</Container>
					);
				})}
		</div>
	);
};

export default Home;
