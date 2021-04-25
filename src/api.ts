import axios from "axios";

interface Params {
	symbol: string;
}

const url: string = process.env.API_URL;

const header = {
	"X-CMC_PRO_API_KEY": process.env.API_KEY
};

const apiRequest = async (ticker: string, params: Params) => {
	const config = {
		headers: header,
		params: params
	};
	try {
		const res = await axios.get(url, config);
		const data = await res.data;

		if (data.status.error_code !== 0) {
			return -1;
		}
		return data.data[ticker].quote.USD.price;
	} catch (e) {
		console.error(e);
		return -1;
	}
};

const getPrice = async (ticker: string): Promise<number> => {
	const params = {
		symbol: ticker
	};

	return await apiRequest(ticker, params);
};

export {getPrice};
