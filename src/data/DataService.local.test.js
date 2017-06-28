import DataService from './DataService.local'

describe('Local DataService', () => {
  let ds

  beforeEach(() => {
    ds = DataService()
  })

  test('should return no sessions', () => 
    ds.sessions().then(sessions => {
      expect(sessions).toEqual([])
    }))

  test('should add a session', () => 
    ds.startSession('a location')
      .then(() => ds.sessions())
      .then(sessions => {
        expect(sessions.length).toBe(1)
        expect(sessions[0].location).toEqual('a location')
      })
  )

  test('should add a buy in', () => 
    ds.startSession('a session')
      .then(session => ds.buyIn(session.id, 100))
      .then(() => ds.sessions())
      .then(sessions => {
        expect(sessions[0].buyIns.length).toBe(1)
        expect(sessions[0].buyIns[0].amount).toBe(100)
      })
  )

  test('should cash out', () => 
    ds.startSession('a session')
      .then(session => ds.buyIn(session.id, 100))
      .then(session => ds.cashOut(session.id, 200))
      .then(session => {
        expect(session.buyIns.length).toBe(1)
        expect(session.buyIns[0].amount).toBe(100)
        expect(session.cashOut.amount).toBe(200)
      })
  )
})
