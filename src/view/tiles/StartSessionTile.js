import React from 'react'
import { pure } from 'recompose'
import { func } from 'prop-types'
import Tile from '../grid/Tile'

const StartSessionTile = ({startSession}) => 
  <Tile bg='gray' onClick={() => startSession('home')}>
    <span style={{fontSize: '2em'}}>
      Start Session
    </span>
  </Tile>

StartSessionTile.propTypes = {
  startSession: func.isRequired
}

export default pure(StartSessionTile)