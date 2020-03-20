import 'core-js/stable'
import 'regenerator-runtime/runtime'

import 'normalize.css'
import 'index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from 'store/store'

ReactDOM.render(
<Provider store={store} >
  <App />
</Provider>,
document.getElementById('react-root'))