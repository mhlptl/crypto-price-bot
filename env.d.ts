declare namespace NodeJS {
	export interface ProcessEnv {
		DISCORD_TOKEN: string;
		NODE_ENV: "production" | "development" | "test" | "staging";
		PORT: string;
		API_KEY: string;
		API_URL: string;
		BOT_TOKEN: string;
	}
}
