const MySQL = require("./index");
const database = new MySQL();

(async () => {
  const db = await database.connect({});
})();
