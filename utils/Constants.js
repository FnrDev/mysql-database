/**
 * The connect auth that are used in connect method.
 * @typedef ConnectOptions
 *
 * @property {string} [host] The host to connect.
 * @property {string} [port='3306'] The port to connect.
 * @property {string} [user] The user name to connect.
 * @property {string} [password] The password to connect.
 * @property {string} [database] The database name to connect to.
 * @property {string} [charset] The charset type to set in database.
 */

exports.ConnectOptions = {
  host: "localhost",
  port: "3306", // The default port is 3306
  user: "root",
  password: "",
  database: "my_database",
  charset: "utf8mb4", // Recommended for stores emojis
};
