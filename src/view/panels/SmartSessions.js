import { connect } from 'react-redux'

import Sessions from './Sessions'
import { selectSessions } from '../../model/selectors'

const makeSmartSessions = (startSession, showSessionPanel) => {
  const mapStateToProps = state => { 
    const x = selectSessions(state)
    return {
      sessions: x
    }
  }

  const mapDispatchToProps = dispatch => ({
    startSession: location => dispatch(startSession(location)),
    showSession: sessionId => dispatch(showSessionPanel(sessionId))
  })

  const SmartSessions = connect(mapStateToProps, mapDispatchToProps)(Sessions)
  return SmartSessions
}

export default makeSmartSessions