import React from 'react'
import { VIEW_SESSION, VIEW_SESSIONS, VIEW_BUY_IN, VIEW_CASH_OUT } from '../model/views'
import makeSmartSessions from './panels/SmartSessions'
import makeSmartSession from './panels/SmartSession'
import makeBuyInPanel from './panels/BuyInPanel'
import makeCashOutPanel from './panels/CashOutPanel'
import { showBuyInPanel, showCashOutPanel } from '../model/actions'

const View = ({view, showSessionPanel, showSessionsPanel, buyIn, cashOut, startSession}) => {
  switch(view){
    case VIEW_SESSION:
      const Session = makeSmartSession(
        showSessionsPanel, 
        showBuyInPanel, 
        showCashOutPanel
      )
      return <Session/>
    case VIEW_SESSIONS:
      const Sessions = makeSmartSessions(
        startSession, 
        showSessionPanel
      )
      return <Sessions/>
    case VIEW_BUY_IN:
      const BuyInPanel = makeBuyInPanel(buyIn)
      return <BuyInPanel label='Buy In' validator={amount => Number(amount) > 0 ? true : 'Buy In should be greater than zero'}/>
    case VIEW_CASH_OUT:
      const CashOutPanel = makeCashOutPanel(cashOut)
      return <CashOutPanel label='Cash Out' validator={amount => amount.length > 0 && Number(amount) >= 0 ? true : 'Cash Out >= 0'}/>
    default:
      throw new Error(`Unknown view ${view}`)
  }
}

export default View
