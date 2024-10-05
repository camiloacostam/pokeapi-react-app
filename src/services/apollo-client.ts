import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta', // URL de la API de PokeAPI para GraphQL
  cache: new InMemoryCache()
})

export default client
