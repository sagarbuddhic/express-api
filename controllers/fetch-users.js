const getClient = require("../common/get-client");

async function fetchUsers(req, res) {
  const client = getClient();

  await client.connect();

  const db = client.db("sample_work");
  db.collection("users")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      const output = results.map((result) => ({
        id: result.id,
        name: result.name,
        email: result.email,
        gender: result.gender,
        status: result.status,
      }));
      return res.send(output);
    });
}

module.exports = fetchUsers;
