import dotenv from 'dotenv';
import { EnvConfig, envSchema } from '../validation/env.validation';
import { ZodError } from 'zod';
dotenv.config();

export const validateEnv = () => {
    try {
        const envVars: EnvConfig = envSchema.parse(process.env);
        return {
            port: +envVars.PORT,
            env: envVars.NODE_ENV,
            databaseUrl: envVars.DATABASE_URL,
        };
    } catch (error) {
        if (error instanceof ZodError) {
            console.error('Validation failed:', error.errors);
        } else {
            console.error('Error parsing environment variables:', error);
        }
    }

}
