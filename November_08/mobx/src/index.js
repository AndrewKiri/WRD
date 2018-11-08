import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'
import store from './store'

import App from './app'

const entry = document.getElementById('root')

ReactDOM.render(
  <Provider {...store}>
    <App/>
  </Provider>, entry
)
