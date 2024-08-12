declare module 'punycode/punycode.js' {
  function ucs2decode(string: string): any
  function ucs2encode(array: any): string
  function decode(string: string): string
  function encode(string: string): string
  function toASCII(string: string): string
  function toUnicode(string: string): string

  interface Punycode {
    version: '2.2.0'
    ucs2: {
      decode: typeof ucs2decode
      encode: typeof ucs2encode
    }
    decode: typeof decode
    encode: typeof encode
    toASCII: typeof toASCII
    toUnicode: typeof toUnicode
  }

  const punycode: Punycode

  export default punycode
}
