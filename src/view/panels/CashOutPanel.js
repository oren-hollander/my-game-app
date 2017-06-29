import { connect } from 'react-redux'
import SetAmountPanel from './SetAmountPanel'
import { showCurrentSession } from '../../model/actions'
import { cashOut } from '../../model/remoteActions'

const mapDispatchToProps = dispatch => ({
  onAction: amount => dispatch(cashOut(amount)),
  onCancel: () => dispatch(showCurrentSession)
})

const CashOutPanel = connect(undefined, mapDispatchToProps)(SetAmountPanel)

export default CashOutPanel
