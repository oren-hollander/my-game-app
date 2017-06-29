import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import SmartView from './view/SmartView'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducer from './model/reducer'
import { showSessionsPanel } from './model/remoteActions'

const store = createStore(reducer, applyMiddleware(thunk))

render (
  <Provider store={store}>
    <SmartView/>
  </Provider>, 
  document.getElementById('root')
)

store.dispatch(showSessionsPanel)

registerServiceWorker()
