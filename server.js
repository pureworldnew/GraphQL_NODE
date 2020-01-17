const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const resolvers = require('./graphql/resolvers');
const schema = require('./graphql/schema');
const typeDefs = gql`${schema}`;
const models = require('./models');

const app = express()
const port = 3001

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();


app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost::${port}${server.graphqlPath}`)
);