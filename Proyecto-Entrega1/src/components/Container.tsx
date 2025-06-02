import styles from "./Container.module.css";

type ContainerProps = {
	children: React.ReactNode;
	title?: string;
};

const Container = ({ children, title }: ContainerProps) => {
	return (
		<section className={styles.container}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div className={styles.grid}>{children}</div>
		</section>
	);
};

export default Container;
