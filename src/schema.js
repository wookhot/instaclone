
import path from 'path';

import { makeExecutableSchema } from 'graphql-tools';
import { fileloader, mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas';


const allTypes= fileLoader(path.join(__dirname, '/api/**/*.graphql ' ))
const allResolvers = fileLoader(path.join(__dirname, '/api/**/*.js ' ))


const schema = makeExecutableSchema({
    typeDefs:mergeTypes(allTypes),
    resolvers:mergeResolvers(allResolvers)
})

export default schema;