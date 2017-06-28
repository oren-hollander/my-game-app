import React from 'react'

const Grid = ({children}) => 
  <div style={{
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '5em',
    gridAutoRows: '5em',
    gridRowGap: '0.4em'
  }}>
    {children}
  </div>

export default Grid