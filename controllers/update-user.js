const getClient = require("../common/get-client");

async function updateUser(req, res) {
  const fields = req.body;

  const client = getClient();
  await client.connect();

  const db = client.db("sample_work");
  const query = { id: fields.id };
  const newValues = {
    $set: {
      id: fields.id,
      name: fields.name,
      email: fields.email,
      gender: fields.gender,
      status: fields.status,
    },
  };
  db.collection("users").updateOne(query, newValues, (err, results) => {
    if (err) throw err;
    return res.send({ updated: `${results.modifiedCount} row` });
  });
}

module.exports = updateUser;
