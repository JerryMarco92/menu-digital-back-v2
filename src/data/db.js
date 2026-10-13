import mysql from "mysql2/promise";

console.log("Configuración MySQL:", {
  host: process.env.MYSQL_ADDON_HOST || "(NO DEFINIDO)",
  port: process.env.MYSQL_ADDON_PORT || "(NO DEFINIDO)",
  database: process.env.MYSQL_ADDON_DB || "(NO DEFINIDO)",
  userDefined: Boolean(process.env.MYSQL_ADDON_USER),
  passwordDefined: Boolean(process.env.MYSQL_ADDON_PASSWORD)
});

export const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    port: process.env.MYSQL_ADDON_PORT,
    waitForConnections: true,
    connectionLimit: 4
});