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

// Prueba temporal de conexión
pool.query("SELECT 1 AS conectado")
  .then(([rows]) => {
    console.log("✅ Conexión a Clever Cloud correcta:", rows);
  })
  .catch((error) => {
    console.error("❌ Error al conectar con Clever Cloud:", {
      code: error.code,
      message: error.message
    });
  });