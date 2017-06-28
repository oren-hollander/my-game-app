import { connect } from 'react-redux'
import { selectView } from '../model/selectors'
import View from './View'

const makeSmartView = remoteActions => {

  const mapStateToProps = state => ({
    view: selectView(state)
  })

  const mapDispatchToProps = dispatch => ({
    showSessionPanel: remoteActions.showSessionPanel,
    showSessionsPanel: remoteActions.showSessionsPanel,
    buyIn: remoteActions.buyIn,
    cashOut: remoteActions.cashOut,
    startSession: remoteActions.startSession
  })

  const SmartView = connect(mapStateToProps, mapDispatchToProps)(View)

  return SmartView
}

export default makeSmartView
