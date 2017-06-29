import { showSession, showSessions} from './actions'
import { selectSessionId } from './selectors'
import { sessions, session, startSession as dsStartSession, buyIn as dsBuyIn, endSession } from '../data/dataService'

export const showSessionPanel = sessionId => dispatch => {
  session(sessionId)
    .then(session => {
      dispatch(showSession(session))
    })
}

export const showSessionsPanel = dispatch => {
  sessions()
    .then(sessions => {
      dispatch(showSessions(sessions))
    })
}

export const startSession = location => dispatch => {
  dsStartSession(location)
    .then(session => {
      dispatch(showSession(session))
    })
}

export const buyIn = amount => (dispatch, getState) => {
  const sessionId = selectSessionId(getState())
  dsBuyIn(sessionId, amount)
    .then(session => dispatch(showSession(session)))
}

export const cashOut = amount => (dispatch, getState) => {
  const sessionId = selectSessionId(getState())
  endSession(sessionId, amount)
    .then(session => dispatch(showSession(session)))
}