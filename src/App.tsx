import styles from "./App.module.css";
import Content from "./components/content/Content";

function App() {
	return (
		<>
			<h1 className={styles.title}>Душнила</h1>
			<Content />
		</>
	);
}

export default App;
