import { connect } from 'react-redux'
import SetAmountPanel from './SetAmountPanel'
import { showCurrentSession } from '../../model/actions'

const makeCashOutPanel = cashOut => {
  const mapDispatchToProps = dispatch => ({
    onAction: amount => dispatch(cashOut(amount)),
    onCancel: () => dispatch(showCurrentSession)
  })

  const CashOutPanel = connect(undefined, mapDispatchToProps)(SetAmountPanel)

  return CashOutPanel
}

export default makeCashOutPanel
