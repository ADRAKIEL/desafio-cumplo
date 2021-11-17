import { getSecInstance, postSecInstance, putInstance, putSecInstance } from "./axioConfig"
import { getInstance, postInstance, patchInstance, deleteInstance } from "./axioConfig"
import API from "./constants"

// CANDIDATES
export const fetchGetCandidates = () => { return getInstance(`${API.candidates}`) }
export const fetchVoteCandidate = (id) => { return postInstance(`${API.vote}`, id) }

// CUTDOWN
export const fetchGetCountdown = () => { return getInstance(`${API.countdown}`) }