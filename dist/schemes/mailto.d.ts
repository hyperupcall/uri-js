import { URISchemeHandler, URIComponents } from '../uri.js';
export interface MailtoHeaders {
    [hfname: string]: string;
}
export interface MailtoComponents extends URIComponents {
    to: any;
    headers?: MailtoHeaders;
    subject?: string;
    body?: string;
}
declare const handler: URISchemeHandler;
export default handler;
