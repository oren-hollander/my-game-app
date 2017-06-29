import { connect } from 'react-redux'
import Session from './Session'
import { selectSession } from '../../model/selectors'
import { showSessionsPanel, buyIn, cashOut} from '../../model/remoteActions'

const mapStateToProps = state => ({
  session: selectSession(state)
})

const mapDispatchToProps = dispatch => ({
  showSessions: () => dispatch(showSessionsPanel),
  showBuyIn: () => dispatch(buyIn),
  showCashOut: () => dispatch(cashOut)
})

const SmartSession = connect(mapStateToProps, mapDispatchToProps)(Session)


export default SmartSession
