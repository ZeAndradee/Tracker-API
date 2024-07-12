import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";
import fs from "fs";
import path from "path";

dotenvConfig();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync(path.resolve(__dirname, "certs/ca-certificate.crt")),
  },
};

const connection = mysql.createConnection(connectionConfig);

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados!");
});
export default connection;
