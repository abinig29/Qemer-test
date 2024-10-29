import { bootstrapExpress } from "./express";
import { logger } from '../utils/logger';
import { validateEnv } from "../config/config";
import { mongooseLoader } from "./mongoose";

export const bootstrap = async (app) => {
    validateEnv()
    mongooseLoader()
    bootstrapExpress(app);
    logger.info('Express app initiated.');



};