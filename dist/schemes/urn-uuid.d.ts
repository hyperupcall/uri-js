import { URISchemeHandler } from '../uri.js';
import { URNComponents } from './urn.js';
export interface UUIDComponents extends URNComponents {
    uuid?: string;
}
declare const handler: URISchemeHandler;
export default handler;
