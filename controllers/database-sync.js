const fetch = require("node-fetch");
const getClient = require("../common/get-client");

async function databaseSync(req, res) {
  try {
    //calling users endpoint
    const response = await fetch("https://gorest.co.in/public-api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const users = await response.json();

    // mongo
    const client = getClient();
    await client.connect();

    const db = await client.db("sample_work");
    await db.collection("users").insertMany(users.data, function (err, result) {
      if (err) throw err;

      return res.send({
        status: "successfull",
        insertedCount: result.insertedCount,
      });
    });
  } catch {
    res.send({ status: "unsuccessfull" });
  }
}

module.exports = databaseSync;
