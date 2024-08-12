import { URISchemeHandler, URIComponents, URIOptions } from '../uri.js'
import http from './http.js'

const handler: URISchemeHandler = {
  scheme: 'https',
  domainHost: http.domainHost,
  parse: http.parse,
  serialize: http.serialize,
}

export default handler
