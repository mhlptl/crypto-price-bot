interface APIRequest {
	status: {
		timestamp: string;
		error_code: number;
		error_message: string;
	};
	data: {
		[key?: string]: {
			id: number;
			name: string;
			symbol: string;
			slug: string;
			quote: {
				USD: {
					price: number;
				};
			};
		};
	};
}
