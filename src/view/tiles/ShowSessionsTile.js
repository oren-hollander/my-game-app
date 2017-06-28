import React from 'react'
import { pure } from 'recompose'
import { func } from 'prop-types'
import Tile from '../grid/Tile'

const ShowSessionsTile = ({showSessions}) => 
  <Tile bg='SteelBlue' onClick={showSessions}>
    <span style={{fontSize: '2em'}}>
      Show Sessions
    </span>
  </Tile>

ShowSessionsTile.propTypes = {
  showSessions: func.isRequired
}

export default pure(ShowSessionsTile)