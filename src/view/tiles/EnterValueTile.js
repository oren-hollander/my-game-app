import React from 'react'
import { pure } from 'recompose'
import { string, func } from 'prop-types'
import Tile from '../grid/Tile'

const EnterValueTile = ({label, onAction}) => 
  <Tile bg='SteelBlue' onClick={onAction}>
    <span style={{fontSize: '2em'}}>
      {label}
    </span>
  </Tile>

EnterValueTile.PropTypes = {
  label: string.isRequired,
  onAction: func.isRequired
}

export default pure(EnterValueTile)