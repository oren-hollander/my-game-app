import Session from './Session'
import { selectSession } from '../../model/selectors'
import { connect } from 'react-redux'

const makeSmartSession = (showSessionsPanel, showBuyInPanel, showCashOutPanel) => {
  const mapStateToProps = state => ({
    session: selectSession(state)
  })

  const mapDispatchToProps = dispatch => ({
    showSessions: () => dispatch(showSessionsPanel()),
    showBuyIn: () => dispatch(showBuyInPanel),
    showCashOut: () => dispatch(showCashOutPanel)
  })

  const SmartSession = connect(mapStateToProps, mapDispatchToProps)(Session)

  return SmartSession
}

export default makeSmartSession
