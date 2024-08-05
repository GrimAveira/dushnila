export interface IEnvInfo {
	co2: string;
	temp: string;
}
export interface AxiosError {
	message: string;
	response?: {
		status: number;
		data: {
			message: string;
		};
	};
}
export type IEnvBad = "CO2" | "Температура" | "CO2 и температура" | "";
