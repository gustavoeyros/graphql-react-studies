const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
  { id: "23", firstName: "Gustavo", age: 18 },
  { id: "47", firstName: "Teste", age: 20 },
];

const UserType = new GraphQLObjectType({
  name: "User", // descreve o tipo que estamos definindo
  fields: {
    // aqui colocamos todos as propriedades que o user deve ter
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: graphql.GraphQLString } },
      //o resolve é a função que utilizamos para buscar o determinado dado dentro do banco de dados
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
