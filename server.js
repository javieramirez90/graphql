const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema, //You know that it could be written just as schema
  graphiql: true // is the tool we can use as a client to make queries to my server
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));