import * as FetchUtil from '../utilities/fetchUtil';
import { dispatchThrowError } from './errorActions';

export const LIST_CANDIDATES = "LIST_CANDIDATES"

export const listCandidates = candidate => {
    return {
        type: LIST_CANDIDATES,
        candidate
    }
}

export const fetchGetCandidates = () => dispatch => {
    return FetchUtil.fetchGetCandidates().then(response => {
        debug(res)
        //if (res?.status === 200) {
        if (response) {
            return response.json().then(candidate => {
                if (candidate) {
                    dispatch(listCandidates(candidate))
                } else {
                    dispatch(dispatchThrowError())
                }
            }).catch(err => dispatch(dispatchThrowError()))
        } else {
            return dispatch(processError(response));
        }

    }).catch(err => dispatch(dispatchThrowError()))
}