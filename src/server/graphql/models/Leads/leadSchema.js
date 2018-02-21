import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'
import { GraphQLEmailType } from '../types'
import { makeRequired } from '../utils'

export const Lead = new GraphQLObjectType({
  name: 'Lead',
  description: 'A lead acquired through elite website',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID), description: 'The leadId' },
    email: { type: new GraphQLNonNull(GraphQLEmailType), description: 'The email address of the lead' },
    source: { type: GraphQLString, description: 'The source of lead' },
    keyword: { type: GraphQLString, description: 'Keyword from search' },
    listId: { type: GraphQLString, description: 'The maropost list id.' },
    createdAt: { type: GraphQLString, description: 'The datetime the lead was created' },
    updatedAt: { type: GraphQLString, description: 'The datetime the lead was last updated' },
  }),
})

const inputFields = {
  id: { type: GraphQLID, description: 'The leadId' },
  email: { type: GraphQLEmailType, description: 'The email address of the lead.' },
  source: { type: GraphQLString, description: 'The source of lead' },
  keyword: { type: GraphQLString, description: 'Keyword from search' },
  listId: { type: GraphQLID, description: 'The Maropost list id.' },
}

export const UpdatedLead = new GraphQLInputObjectType({
  name: 'UpdatedLead',
  description: 'Args to update a lead',
  fields: () => makeRequired(inputFields, ['id']),
})

export const NewLead = new GraphQLInputObjectType({
  name: 'NewLead',
  description: 'Args to add a lead',
  fields: () => makeRequired(inputFields, ['email', 'listId']),
})
