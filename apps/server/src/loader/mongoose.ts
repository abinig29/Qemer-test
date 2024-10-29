import { connect, set } from "mongoose";
import { validateEnv } from '../config/config';
import { Seeder } from "../seed";


export const mongooseLoader = async () => {

    const MONGO_DB_CONNECTION =
        validateEnv().databaseUrl
    try {
        set("strictQuery", false);
        const db = await connect(MONGO_DB_CONNECTION);
        console.log("MongoDB connected to", db.connection.name);
        Seeder();
    } catch (error) {
        console.error(error);
    }
}


