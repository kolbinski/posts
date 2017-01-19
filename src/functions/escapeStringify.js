export default (s, emitUnicode) => {
  const json = JSON.stringify(s)
  if (emitUnicode) {
    return json
  }
  return json
    .replace(/\//g, () => '\\/')
    .replace(/[\u003c\u003e]/g, (c) => '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4).toUpperCase()) //eslint-disable-line
    .replace(/[\u007f-\uffff]/g, (c) => '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4)) //eslint-disable-line
}
