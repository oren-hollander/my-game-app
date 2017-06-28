import React from 'react'
import { map, last, has } from 'lodash/fp'
import { pure } from 'recompose'
import SessionTile from '../tiles/SessionTile'
import StartSessionTile from '../tiles/StartSessionTile'
import Grid from '../grid/Grid'

const Sessions = ({sessions, startSession, showSession}) => 
  <Grid>
    { 
      map(session => 
        <SessionTile key={session.id}
          location={session.location} 
          timestamp={session.timestamp} 
          onClick={() => showSession(session.id)}
        />, 
        sessions) 
    }
    { 
      sessions.length === 0 || has('cashOut', last(sessions)) ? <StartSessionTile startSession={startSession}/> : null
    }
  </Grid>

export default pure(Sessions)