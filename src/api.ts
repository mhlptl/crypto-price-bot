import axios, {AxiosResponse} from "axios";

const url: string = process.env.API_URL;

const header = {
	"X-CMC_PRO_API_KEY": process.env.API_KEY
};

const params = {
	symbol: "eth"
};

const config = {
	headers: header,
	params: params
};

const getPrice = async (): Promise<AxiosResponse> => {
	return await axios.get(url, config);
};

export {getPrice};
