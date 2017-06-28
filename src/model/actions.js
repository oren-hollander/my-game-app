import { SHOW_SESSION_PANEL, SHOW_SESSIONS_PANEL, SHOW_CURRENT_SESSION, SHOW_BUY_IN_PANEL, SHOW_CASH_OUT_PANEL } from './actionTypes'

export const showSessions = sessions => ({type: SHOW_SESSIONS_PANEL, sessions})
export const showSession = session => ({type: SHOW_SESSION_PANEL, session})
export const showCurrentSession = {type: SHOW_CURRENT_SESSION}

export const showBuyInPanel = {type: SHOW_BUY_IN_PANEL}
export const showCashOutPanel = {type: SHOW_CASH_OUT_PANEL}
