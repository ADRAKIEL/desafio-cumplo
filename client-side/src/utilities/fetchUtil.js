import { getSecInstance, postSecInstance, putInstance, putSecInstance } from "./axioConfig"
import { getInstance, postInstance, patchInstance, deleteInstance } from "./axioConfig"
import API from "./constants"

// CANDIDATES
export const fetchGetCandidates = () => { return getInstance(`${API.candidates}`) }

// CUTDOWN