import React from 'react'
import { pure } from 'recompose'
import { string, func } from 'prop-types'
import Tile from '../grid/Tile'

const SessionTile = ({location, timestamp, onClick}) => {
  return (
    <Tile bg='gray' onClick={onClick}>
      <div style={{fontSize: '1.5em'}}>{location}</div>
      <div style={{fontSize: '1.2em', paddingTop: '0.3em'}}>{new Date(timestamp).toLocaleString()}</div>
    </Tile>
  )
}

SessionTile.PropTypes = {
  location: string.isRequired,
  timestamp: string.isRequired,
  onClick: func
}

export default pure(SessionTile)