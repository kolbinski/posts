import { escapeStringify } from '../functions'
const getPort = () => (parseInt(process.env['APP_SERVER_PORT']) + 10 || 3010)

export default ({ head, content, state, prod, config }) => {
  const base = prod ? `/static/` : `http://${process.env.DEV_IP || 'localhost'}:${getPort()}/static/`
  return (`
    <!doctype html>
    <html>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script defer src="${base}head.js"></script>
        <link rel="stylesheet" href="${base}main.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:400,700&subset=latin-ext" rel="stylesheet">
      </head>
      <body>
        <div id="app" style="height: 100%;">${content}</div>
        <script>
          window.__INITIAL_STATE__ =  ${escapeStringify(state)};
          window.appConfig = {
            config: ${escapeStringify(config)}
          }
        </script>
        <script defer src="${base}client.js"></script>
      </body>
    </html>
  `)
}
