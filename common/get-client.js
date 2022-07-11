const { MongoClient, ServerApiVersion } = require("mongodb");

const getClient = () => {
  const DB_KEY = process.env.DB_KEY;
  const uri = `mongodb+srv://sagar_buddhic:${DB_KEY}@cluster0.ebjcl.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  return client;
};

module.exports = getClient;
