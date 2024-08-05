import { IEnvInfo } from "../../interfaces";
import styles from "./EnvIndicators.module.css";
import Indicator from "./Indicator";

interface IEnvIndicator extends React.HTMLAttributes<HTMLDivElement> {
	mood: boolean;
	envInfo: IEnvInfo;
}

function EnvIndicators(props: IEnvIndicator) {
	const { mood, envInfo, ...otherProps } = props;

	return (
		<div {...otherProps} className={`${styles.envContainer} ${!mood && styles.badMood}`}>
			<Indicator indicatorType="Температура" value={envInfo.temp} dimension="°C" />
			<Indicator
				className={styles.secondChild}
				indicatorType="CO2"
				value={Math.round(Number(envInfo.co2)).toString()}
				dimension="ppm"
			/>
		</div>
	);
}

export default EnvIndicators;
