const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema, //You know that it could be written just as schema
  graphiql: true // is the tool we can use as a client to make queries to my server
}));

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));