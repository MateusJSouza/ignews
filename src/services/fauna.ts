import { Client } from 'faunadb'

// conexão com o FaunaDB
export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
})