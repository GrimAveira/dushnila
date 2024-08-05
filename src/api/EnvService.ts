import axios from "axios";

export default class EnvService {
	static async getEnvInfo() {
		try {
			const response = await axios.get(`http://dushnila.gooddelo.com/data`);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw error.response?.data;
			} else if (error instanceof Error) {
				throw error.message;
			}
		}
	}
}
