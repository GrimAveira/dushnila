import styles from "./Indicator.module.css";

interface IIndicator extends React.HTMLAttributes<HTMLDivElement> {
	value: string;
	indicatorType: "CO2" | "Температура";
	dimension: "ppm" | "°C";
}

function Indicator(props: IIndicator) {
	const { value, indicatorType, dimension, ...otherProps } = props;
	return (
		<div {...otherProps}>
			<p className={styles.value}>{`${value} ${dimension}`}</p>
			<p className={styles.indicatorType}>{indicatorType}</p>
		</div>
	);
}

export default Indicator;
