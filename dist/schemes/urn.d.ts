import { URISchemeHandler, URIComponents, URIOptions } from '../uri.js';
export interface URNComponents extends URIComponents {
    nid?: string;
    nss?: string;
}
export interface URNOptions extends URIOptions {
    nid?: string;
}
declare const handler: URISchemeHandler;
export default handler;
