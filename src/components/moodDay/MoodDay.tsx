import styles from "./MoodDay.module.css";

function MoodDay(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={styles.moodDayContainer}>
			<p className={styles.p1}>
				Дней без <br />
				душноты {Math.round(Math.random() * 10)}
			</p>
			<button className={styles.historyButton}>
				<p>История</p>
				<svg
					className={styles.svgArrow}
					width="28"
					height="29"
					viewBox="0 0 28 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
}

export default MoodDay;
