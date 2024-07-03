import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";

dotenvConfig();

const connection = mysql.createConnection(process.env.MYSQL_URL);
export default connection;
