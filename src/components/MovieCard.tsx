import styles from "./MovieCard.module.css";


type Movie = {
	id: string;
	title: string;
	category: string;
	duration: string;
	image: string;
	youtube: string;
};

const MovieCard = ({

	title,
	category,
	duration,
	image,
	youtube,
}: Movie) => {
	const handlePlay = () => {
		window.open(youtube, "_blank");
	};

	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.image} />
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.subtitle}>
					{category} • {duration}
				</p>
				{/* 🔘 Sólo el botón redirige */}
				<button className={styles.button} onClick={handlePlay}>
					▶ Play
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
