export const config = {
  postsApiAddress: 'https://jsonplaceholder.typicode.com'
}

const getConfig = () => {
  if (process.env.__APP__CLIENT__) {
    return window.appConfig.config
  }
  return config
}

export default getConfig()
