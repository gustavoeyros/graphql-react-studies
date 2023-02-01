const graphql = require("graphql");

const { GraphQLObjectType } = graphql;

const UserType = new GraphQLObjectType({
  name: "User", // descreve o tipo que estamos definindo
  fields: {
    // aqui colocamos todos as propriedades que o user deve ter
    id: { type: graphql.GraphQLString },
    firstName: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
  },
});
