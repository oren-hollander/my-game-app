import { connect } from 'react-redux'
import SetAmountPanel from './SetAmountPanel'
import { showCurrentSession } from '../../model/actions'

const makeBuyInPanel = buyIn => {
  const mapDispatchToProps = dispatch => ({
    onAction: amount => dispatch(buyIn(amount)),
    onCancel: () => dispatch(showCurrentSession)
  })

  const BuyInPanel = connect(undefined, mapDispatchToProps)(SetAmountPanel)

  return BuyInPanel
}

export default makeBuyInPanel
