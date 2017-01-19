import React from 'react' //eslint-disable-line
import { provideHooks } from 'redial'
import { hooks } from './data'
import View from './view'

export default provideHooks(hooks)(View)
