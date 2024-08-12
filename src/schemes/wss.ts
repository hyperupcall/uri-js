import { URISchemeHandler, URIComponents, URIOptions } from '../uri.js'
import ws from './ws.js'

const handler: URISchemeHandler = {
  scheme: 'wss',
  domainHost: ws.domainHost,
  parse: ws.parse,
  serialize: ws.serialize,
}

export default handler
