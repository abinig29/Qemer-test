
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import express from "express";
import helmet from "helmet";
import cors from "cors";

import { errorHandler, successHandler } from "../config/morgan";

import { corsOptions } from "../config/cors-option";
import bodyParser from "body-parser";
import notFoundMiddleware from "../middleware/not-found.middleware";
import errorHandlerMiddleware from "../middleware/error-handler.middleware";
import router from "../api";

// validateEnv();
export const bootstrapExpress = (app: any) => {

    app.use(successHandler);
    app.use(errorHandler);
    app.use(helmet());
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));


    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.use("/api/v1", router)

    app.use(notFoundMiddleware);
    app.use(errorHandlerMiddleware);



}


const app = express();





export default app;
