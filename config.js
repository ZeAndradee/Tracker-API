import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";

dotenvConfig();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const connection = mysql.createConnection(dbConfig);
export default connection;
