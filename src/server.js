import './styles.css'
import { runServer } from './app/runServer'
process.env.NODE_PATH = __dirname
runServer(process.env.APP_SERVER_PORT || 3000)
