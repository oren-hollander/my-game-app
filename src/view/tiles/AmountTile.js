import React from 'react'
import { pure } from 'recompose'
import { string, number } from 'prop-types'
import Tile from '../grid/Tile'

const AmountTile = ({label, amount, timestamp}) => 
  <Tile bg='gray'>
    <div style={{fontSize: '1.5em'}}>{label}: {amount}</div>
    <div style={{fontSize: '1.2em', paddingTop: '0.3em'}}>{new Date(timestamp).toLocaleString()}</div>
  </Tile>

AmountTile.PropTypes = {
  label: string.isRequired,
  amount: number.isRequired,
  timestamp: string.isRequired
}

export default pure(AmountTile)