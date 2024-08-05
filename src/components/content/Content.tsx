import { useEffect, useState } from "react";
import EnvIndicators from "../envIndicator/EnvIndicators";
import Logo from "../logo/Logo";
import Mood from "../mood/Mood";
import MoodDay from "../moodDay/MoodDay";
import styles from "./Content.module.css";
import EnvService from "../../api/EnvService";
import { AxiosError, IEnvBad, IEnvInfo } from "../../interfaces";

function Content() {
	const [envInfo, setEnvInfo] = useState<IEnvInfo>({ co2: "", temp: "" });
	const [mood, setMood] = useState<boolean>(true);
	const [envBad, setEnvBad] = useState<IEnvBad>("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<AxiosError>();
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

	useEffect(() => {
		const fetchEnvInfo = async () => {
			try {
				const envInfo = await EnvService.getEnvInfo();
				setEnvInfo(envInfo);
			} catch (err) {
				const axiosError = err as AxiosError;
				setError(axiosError);
			} finally {
				setLoading(false);
			}
		};
		fetchEnvInfo();

		const intervalId = setInterval(fetchEnvInfo, 60000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const co2Bad = Number(envInfo.co2) > 800;
		const tempBad = Number(envInfo.temp) > 27;
		if (co2Bad || tempBad) {
			setMood(false);
			if (co2Bad && tempBad) setEnvBad("CO2 и температура");
			else if (co2Bad) setEnvBad("CO2");
			else setEnvBad("Температура");
		} else setMood(true);
	}, [envInfo]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.outerWidth <= 600);
		};

		window.addEventListener("resize", handleResize);
		setIsMobile(window.outerWidth <= 600);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className={styles.contentContainer}>
			{isMobile ? (
				<>
					<Mood id="mood" mood={mood} envBad={envBad} />
					<EnvIndicators id="indicators" mood={mood} envInfo={envInfo} />
					<MoodDay />
					<Logo />
				</>
			) : (
				<>
					<div className={styles.allMoodContainer}>
						<Mood id="mood" mood={mood} envBad={envBad} />
						<div id="addInfo" className={styles.additionalInfo}>
							<MoodDay />
							<Logo />
						</div>
					</div>
					<EnvIndicators id="indicators" mood={mood} envInfo={envInfo} />
				</>
			)}
		</div>
	);
}

export default Content;
