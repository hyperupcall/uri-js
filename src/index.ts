import { SCHEMES } from './uri.js'

import http from './schemes/http.js'
SCHEMES[http.scheme] = http

import https from './schemes/https.js'
SCHEMES[https.scheme] = https

import ws from './schemes/ws.js'
SCHEMES[ws.scheme] = ws

import wss from './schemes/wss.js'
SCHEMES[wss.scheme] = wss

import mailto from './schemes/mailto.js'
SCHEMES[mailto.scheme] = mailto

import urn from './schemes/urn.js'
SCHEMES[urn.scheme] = urn

import uuid from './schemes/urn-uuid.js'
SCHEMES[uuid.scheme] = uuid

export * from './uri.js'
