import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

dotenvConfig();

// Resolve the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync(`${__dirname}/certs/ca-certificate.crt`), // caminho do certificado
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

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
    return;
  }
  console.log(`Servidor está rodando na porta ${PORT}`);
});

export default connection;
