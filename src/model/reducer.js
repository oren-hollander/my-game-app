import { SHOW_SESSION_PANEL, SHOW_SESSIONS_PANEL, SHOW_CURRENT_SESSION, SHOW_BUY_IN_PANEL, SHOW_CASH_OUT_PANEL } from './actionTypes'
import { combineReducers } from 'redux'
import { VIEW_SESSIONS, VIEW_SESSION, VIEW_BUY_IN, VIEW_CASH_OUT } from './views'

const sessions = (sessions = [], action) => {
  switch(action.type){
    case SHOW_SESSIONS_PANEL:
      return action.sessions 
    default:
      return sessions
  }
}

const session = (session = null, action) => {
  switch(action.type){
    case SHOW_SESSION_PANEL:
      return action.session
    default:
      return session
  }
}

const view  = (view = VIEW_SESSIONS, action) => {
  switch(action.type){
    case SHOW_SESSIONS_PANEL:
      return VIEW_SESSIONS
    case SHOW_SESSION_PANEL:
    case SHOW_CURRENT_SESSION:
      return VIEW_SESSION
    case SHOW_BUY_IN_PANEL:
      return VIEW_BUY_IN
    case SHOW_CASH_OUT_PANEL:
      return VIEW_CASH_OUT
    default:
      return view
  }  
}

const reducer = combineReducers({
  view,
  sessions,
  session
})

export default reducer