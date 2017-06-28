import React from 'react'
import { func, string, bool } from 'prop-types'

const callEventHandler = handler => () => {
  if(handler)
    handler()
}

const Tile = ({children, onClick, bg, center}) => 
  <div onClick={callEventHandler(onClick)} style={{
    overflow: 'hidden',
    backgroundColor: bg,
    padding: '0.5em 0.5em',
    gridColumnEnd: 'span 2',
    textAlign: center ? 'center' : '',
    color: 'white'
  }}>
    {children}
  </div>

Tile.defaultProps = {
  bg: 'gray',
  center: true
}

Tile.propTypes = {
  onClick: func,
  bg: string.isRequired,
  center: bool
}

export default Tile