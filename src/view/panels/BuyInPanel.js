import { connect } from 'react-redux'
import SetAmountPanel from './SetAmountPanel'
import { showCurrentSession } from '../../model/actions'
import { buyIn } from '../../model/remoteActions'

const mapDispatchToProps = dispatch => ({
  onAction: amount => dispatch(buyIn(amount)),
  onCancel: () => dispatch(showCurrentSession)
})

const BuyInPanel = connect(undefined, mapDispatchToProps)(SetAmountPanel)

export default BuyInPanel
