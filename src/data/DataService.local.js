import { cloneDeep, find, map } from 'lodash/fp'

const DataService = () => {
  
  let sessions = []

  const getSessions = () => Promise.resolve(cloneDeep(sessions))

  const session = sessionId => Promise.resolve(find(session => session.id === sessionId, sessions))

  const startSession = location => {
    const timestamp = new Date().toISOString()
    const id = `${location}-${timestamp}`
    const session = {
      id,
      location,
      timestamp,
      buyIns: []
    }
    sessions = [...sessions, session]
    return Promise.resolve(session)
  }
  
  const buyIn = (sessionId, amount) => {
    const timestamp = new Date().toISOString()
    sessions = map(session => session.id === sessionId ? {...session, buyIns: [...session.buyIns, {timestamp, amount}]} : session, sessions)
    return session(sessionId)
  }
  
  const cashOut = (sessionId, amount) => {
    const timestamp = new Date().toISOString()
    sessions = map(session => session.id === sessionId ? {...session, cashOut: {timestamp, amount}} : session, sessions)
    return session(sessionId)
  }

  return { sessions: getSessions, session, startSession, buyIn, cashOut }
}

export default DataService