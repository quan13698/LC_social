import * as dotenv from 'dotenv';
dotenv.config();

interface EnvConfig {
    PORT: number;
    USER_NAME: String;
    PASSWORD: String;
    MONGO_URL: String;
    ACCESS_TOKEN_SECRET: String;
    // MONGO_URL: string
}
export const EnvAppConfig: EnvConfig = {
    PORT: (process.env.PORT || 8000) as number,
    USER_NAME: process.env.USER_NAME as String,
    PASSWORD: process.env.PASSWORD as String,
    MONGO_URL: process.env.MONGO_URL as String,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET as String,

    // MONGO_URL: process.env.MONGO_URL,
};
