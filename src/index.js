import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import makeSmartView from './view/SmartView'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducer from './model/reducer'
import RemoteActions from './model/RemoteActions'
import DataService from './data/DataService'

const remoteActions = RemoteActions(DataService())

const store = createStore(reducer, applyMiddleware(thunk))
const View = makeSmartView(remoteActions)

render (
  <Provider store={store}>
    <View/>
  </Provider>, 
  document.getElementById('root')
)

store.dispatch(remoteActions.showSessionsPanel())

registerServiceWorker()
