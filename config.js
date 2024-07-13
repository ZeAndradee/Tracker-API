import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import os from "os";

dotenvConfig();

// Resolve the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Função para criar um arquivo temporário com o conteúdo do certificado
function createTempCertFile(certContent) {
  const tempFilePath = `${os.tmpdir()}/temp-ca-certificate.crt`;
  fs.writeFileSync(tempFilePath, certContent);
  return tempFilePath;
}

const sslCertContent = process.env.SSL_CERT.replace(/\\n/g, "\n");
const sslCertPath = createTempCertFile(sslCertContent);

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync(sslCertPath),
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
