import { server } from './server'
export const runServer = (port = 3000) => {
  server.listen(port, () => {
    console.log('Start: ' + port) //eslint-disable-line
  })
}
