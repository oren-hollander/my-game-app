import React from 'react'
import { map } from 'lodash/fp'
import { pure } from 'recompose'

import SessionTile from '../tiles/SessionTile'
import ShowSessionsTile from '../tiles/ShowSessionsTile'
import EnterValueTile from '../tiles/EnterValueTile'
import AmountTile from '../tiles/AmountTile'
import Grid from '../grid/Grid'

const Session = ({session, showSessions, showBuyIn, showCashOut}) => 
  <Grid>
    <ShowSessionsTile showSessions={showSessions}/>
    <SessionTile location={session.location} timestamp={session.timestamp} />
    {
      map(buyIn => <AmountTile key={buyIn.timestamp} label='Buy In' amount={buyIn.amount} timestamp={buyIn.timestamp}/>, session.buyIns)
    }
    { 
      session.cashOut 
        ? <AmountTile label='CashOut' amount={session.cashOut.amount} timestamp={session.cashOut.timestamp}/> 
        : <EnterValueTile label='Buy In' onAction={showBuyIn}/> 
    }
    { 
      session.cashOut 
        ? null 
        : <EnterValueTile label='Cash Out' onAction={showCashOut}/> 
    }
  </Grid>

export default pure(Session)