const domain = 'https://my-game.now.sh'

const toJson = response => response.json()

const postOptions = json => ({
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(json)
})

const makeUri = uri => domain + uri

const get = uri => fetch(makeUri(uri)).then(json)
const post = (uri, json) => fetch(makeUri(uri), postOptions(json)).then(toJson)

export const sessions = () => get('/api/v0/sessions')
export const session = sessionId => get(`/api/v0/sessions/${sessionId}`)
export const startSession = location => post('/api/v0/sessions', {location})
export const buyIn = (sessionId, amount) => post(`/api/v0/sessions/${sessionId}/buyIn`, {amount})
export const endSession = (sessionId, amount) => post(`/api/v0/sessions/${sessionId}/cashOut`, {amount})
