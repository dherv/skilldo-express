let config = {};

console.log("PROCESS", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  config = {
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "root",
    database: "skilldo",
    port: 33064,
  };
} else {
  config = {
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "root",
    database: "skilldo",
    port: 33065,
  };
}

export default config;
