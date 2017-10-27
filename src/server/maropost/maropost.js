import request from 'request'
import promisify from 'es6-promisify'
import moment from 'moment'
import winston from 'winston'

const pRequest = promisify(request)

const authToken = 'b87f85454cff02d1b355f99680b67949473a36c6'
const apiURL = 'http://api.maropost.com/accounts/196'

export async function createMaropostContact(listId, leadData) {
  const body = {
    contact: {
      email: leadData.email,
      custom_field: {
        jumptype: leadData.jumpType || null,
        uniqueid: leadData.id || null,
        optintime: moment().format(),
        source: leadData.source || null,
        keyword: leadData.keyword || null,
      },
      remove_from_dnm: true,
    },
  }

  const postOptions = {
    method: 'POST',
    url: `${apiURL}/lists/${listId}/contacts.json?auth_token=${authToken}`,
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body,
    json: true,
  }

  winston.log('info', 'Creating Maropost contact', {
    postOptions,
  })

  const result = await pRequest(postOptions)
  winston.log('info', 'Maropost Response', { resultBody: result[0].body })
  return result[0].body
}
