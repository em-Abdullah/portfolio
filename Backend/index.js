const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const cors = require('cors');

const MONGODB = "mongodb+srv://abdullah:admin111@cluster0.usu4sck.mongodb.net/?retryWrites=true&w=majority"

// ApolloServer
// typeDefs: GraphQL Type Definitions
// resolvers: How to resolve Queries / Mutations

 const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({

 typeDefs,
resolvers

});

mongoose.connect(MONGODB , {useNewUrlParser: true})
.then(() =>{
    console.log("Mongodb Connected");
      return server.listen({port: 8000});
})
.then((res) => {
    console.log(`Server is running at ${res.url}`);
});

