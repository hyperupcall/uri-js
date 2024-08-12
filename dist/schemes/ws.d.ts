import { URISchemeHandler, URIComponents } from '../uri.js';
export interface WSComponents extends URIComponents {
    resourceName?: string;
    secure?: boolean;
}
declare const handler: URISchemeHandler;
export default handler;
