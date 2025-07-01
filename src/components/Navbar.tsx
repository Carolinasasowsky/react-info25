import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src="/logo-netflix.png" alt="Netflix" className={styles.logo} />
		</nav>
	);
};

export default Navbar;
