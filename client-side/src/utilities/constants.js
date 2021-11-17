require('dotenv').config()

const CORS = '' //process.env.REACT_APP_CORS
const BASE_URL = `${CORS}${process.env.REACT_APP_NODE_ENV === 'production' ?
    process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV}`

module.exports = Object.freeze({
    // CANDIDATES
    candidates: `${BASE_URL}/candidates`,
    winner: `${BASE_URL}/candidates/winner`,
    vote: `${BASE_URL}/candidates/vote`,

    // CUTDOWN
    countdown: `${BASE_URL}/countdown`

})