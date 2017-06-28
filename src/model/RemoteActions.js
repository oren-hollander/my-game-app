import { showSession, showSessions} from './actions'
import { selectSessionId } from './selectors'

const RemoteActions = ds => {

  const showSessionPanel = sessionId => dispatch => {
    ds.session(sessionId)
      .then(session => {
        dispatch(showSession(session))
      })
  }

  const showSessionsPanel = () => dispatch => {
    ds.sessions()
      .then(sessions => {
        dispatch(showSessions(sessions))
      })
  }

  const startSession = location => dispatch => {
    ds.startSession(location)
      .then(session => {
        dispatch(showSession(session))
      })
  }

  const buyIn = amount => (dispatch, getState) => {
    const sessionId = selectSessionId(getState())
    ds.buyIn(sessionId, amount)
      .then(session => dispatch(showSession(session)))
  }

  const cashOut = amount => (dispatch, getState) => {
    const sessionId = selectSessionId(getState())
    ds.cashOut(sessionId, amount)
      .then(session => dispatch(showSession(session)))
  }

  return {
    showSessionPanel,
    showSessionsPanel,
    startSession,
    buyIn,
    cashOut
  }
}

export default RemoteActions