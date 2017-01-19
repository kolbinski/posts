import React from 'react' //eslint-disable-line
import ReactDOM from 'react-dom' //eslint-disable-line
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import express from 'express'
import Helmet from 'react-helmet'
import path from 'path'
import template from './template.js'
import fetchData from './fetchData.js'
import getStore from './store'
import config from '../config'

export const server = express()

server.use((req, res, next) => {
  const go = (url, status = 200) => {
    const generateRouting = require('./routing.js')
    match({ routes: generateRouting(), location: decodeURIComponent(url) }, (error, redirect, props) => {
      const store = getStore()
      const render = () => {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        )
        const head = Helmet.rewind()
        res.status(status).send(template({
          head,
          content,
          config,
          state: store.getState(),
          prod: process.env.NODE_ENV === 'production'
        }))
      }
      if (error) {
        res.status(500).send(error.message)
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if (props) {
        fetchData(props, store)
          .then(() => {
            render(200)
          })
          .catch((e) => {
            console.log('e', e) //eslint-disable-line
            console.log('stack', e.stack) //eslint-disable-line
            if (e.status === 404) {
              go('/', 404)
            }
            if (e.status === 302 || e.status === 301) {
              res.redirect(e.status, e.url)
            }
          })
      } else {
        res.redirect('/')
      }
    })
  }
  go(req.url)
})
