import styles from "./MovieCard.module.css";

type Movie = {
	id: string;
	title: string;
	category: string;
	duration: string;
	image: string;
};

const MovieCard = ({ title, category, duration, image }: Movie) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.image} />
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.subtitle}>
					{category} • {duration}
				</p>
				<button className={styles.button}>▶ Play</button>
			</div>
		</div>
	);
};

export default MovieCard;
