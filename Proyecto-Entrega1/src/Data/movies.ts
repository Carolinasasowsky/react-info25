export type Movie = {
	id: string;
	title: string;
	category: string;
	duration: string;
	image: string;
};

export const movies: Movie[] = [
	{
		id: "1",
		title: "Origen",
		category: "Sci-Fi",
		duration: "2h 28m",
		image: "/public/origen.jpg",
	},
	{
		id: "2",
		title: "Titanic",
		category: "Drama",
		duration: "3h 15m",
		image: "/public/titanic.jpg",
	},
	{
		id: "3",
		title: "The Dark Knight",
		category: "Action",
		duration: "2h 32m",
		image: "/public/dark-knight.jpg",
	},
	{
		id: "4",
		title: "Interstellar",
		category: "Sci-Fi",
		duration: "2h 49m",
		image: "/public/interstellar.jpg",
	},
	{
		id: "5",
		title: "Avengers: Endgame",
		category: "Action",
		duration: "3h 1m",
		image: "/public/endgame.jpg",
	},
	{
		id: "6",
		title: "La La Land",
		category: "Romance",
		duration: "2h 8m",
		image: "/public/lalaland.jpg",
	},
	{
		id: "7",
		title: "Parasyte",
		category: "Thriller",
		duration: "2h 12m",
		image: "/public/parasyte.jpg",
	},
	{
		id: "8",
		title: "Toy Story",
		category: "Animation",
		duration: "1h 21m",
		image: "/public/toy-story.jpg",
	},
];
