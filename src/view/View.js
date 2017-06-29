import React from 'react'
import { VIEW_SESSION, VIEW_SESSIONS, VIEW_BUY_IN, VIEW_CASH_OUT } from '../model/views'
import SmartSession from './panels/SmartSession'
import SmartSessions from './panels/SmartSessions'
import BuyInPanel from './panels/BuyInPanel'
import CashOutPanel from './panels/CashOutPanel'

const View = ({ view }) => {
  switch(view){
    case VIEW_SESSION:
      return <SmartSession/>
    case VIEW_SESSIONS:
      return <SmartSessions/>
    case VIEW_BUY_IN:
      return <BuyInPanel label='Buy In' validator={amount => Number(amount) > 0 ? true : 'Buy In should be greater than zero'}/>
    case VIEW_CASH_OUT:
      return <CashOutPanel label='Cash Out' validator={amount => amount.length > 0 && Number(amount) >= 0 ? true : 'Cash Out >= 0'}/>
    default:
      throw new Error(`Unknown view ${view}`)
  }
}

export default View
