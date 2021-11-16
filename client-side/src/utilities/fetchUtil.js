import { getSecInstance, postSecInstance, putInstance, putSecInstance } from "./axioConfig"
import { getInstance, postInstance, patchInstance, deleteInstance } from "./axioConfig"
import API from "./constants"
const TOKEN = process.env.REACT_APP_SEPOMEX_TOKEN

// CANDIDATES
export const fetchGetCandidates = () => { return getInstance(`${API.candidates}`) }

// CUTDOWN