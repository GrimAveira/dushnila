import { IEnvBad } from "../../interfaces";
import styles from "./Mood.module.css";

interface IMood extends React.HTMLAttributes<HTMLDivElement> {
	mood: boolean;
	envBad: IEnvBad;
}

function Mood(props: IMood) {
	const { mood, envBad, ...otherProps } = props;
	return (
		<div {...otherProps} className={`${styles.moodContainer} ${!mood && styles.badMood}`}>
			{mood ? (
				<p className={styles.p1}>
					Душнила
					<br />
					доволен вами
				</p>
			) : (
				<p className={styles.p1}>
					Душнила
					<br />
					недоволен
					<br /> вами🫵
				</p>
			)}
			{mood ? (
				<p className={`${styles.p2} ${mood && styles.p1OK}`}>Все показатели в норме</p>
			) : (
				<p className={`${styles.p2} ${mood && styles.p1OK}`}>{`${
					envBad == "CO2" || envBad == "Температура" ? `${envBad} превышает` : `${envBad} превышают`
				} норму`}</p>
			)}
		</div>
	);
}

export default Mood;
