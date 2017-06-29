import { connect } from 'react-redux'

import Sessions from './Sessions'
import { selectSessions } from '../../model/selectors'
import { startSession, showSessionPanel } from '../../model/remoteActions'

const mapStateToProps = state => ({
  sessions: selectSessions(state)
})

const mapDispatchToProps = dispatch => ({
  startSession: location => dispatch(startSession(location)),
  showSession: sessionId => dispatch(showSessionPanel(sessionId))
})

const SmartSessions = connect(mapStateToProps, mapDispatchToProps)(Sessions)

export default SmartSessions