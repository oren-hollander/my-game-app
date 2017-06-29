import { connect } from 'react-redux'
import { selectView } from '../model/selectors'
import View from './View'
import { showSessionPanel, showSessionsPanel, buyIn, cashOut, startSession } from '../model/remoteActions'

const mapStateToProps = state => ({
  view: selectView(state)
})

const mapDispatchToProps = dispatch => ({
  showSessionPanel: sessionId => dispatch(showSessionPanel(sessionId)),
  showSessionsPanel: () => dispatch(showSessionsPanel),
  buyIn: amount => dispatch(buyIn(amount)),
  cashOut: amount => dispatch(cashOut(amount)),
  startSession: location => dispatch(startSession(location))
})

const SmartView = connect(mapStateToProps, mapDispatchToProps)(View)

export default SmartView
