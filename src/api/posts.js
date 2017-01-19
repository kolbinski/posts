import axios from 'axios'
import config from '../config'

const getPosts = () => new Promise((resolve, reject) => {
  axios
    .get(`${config.postsApiAddress}/posts`)
    .then(response => {
      const data = {}
      response.data.forEach(item => data[item.id] = item)
      resolve(data)
    })
    .catch(response => reject(response))
})

const getPost = id => new Promise((resolve, reject) => {
  axios
    .get(`${config.postsApiAddress}/posts/${id}`)
    .then(response => resolve({ [response.data.id]: response.data }))
    .catch(response => reject(response))
})

const getPostComments = id => new Promise((resolve, reject) => {
  axios
    .get(`${config.postsApiAddress}/posts/${id}/comments`)
    .then(response => resolve(response.data))
    .catch(response => reject(response))
})

const getPostUsers = () => new Promise((resolve, reject) => {
  axios
    .get(`${config.postsApiAddress}/users`)
    .then(response => resolve(response.data))
    .catch(response => reject(response))
})

const deletePost = id => new Promise((resolve, reject) => {
  axios
    .delete(`${config.postsApiAddress}/posts/${id}`)
    .then(response => resolve(response))
    .catch(response => reject(response))
})

const api = {
  getPost,
  getPosts,
  getPostComments,
  getPostUsers,
  deletePost,
}

export default api
