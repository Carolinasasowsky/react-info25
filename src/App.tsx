import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail"; // 

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pelicula/:id" element={<MovieDetail />} />{" "}
				{/* ✅ ruta dinámica */}
			</Routes>
		</>
	);
};

export default App;
