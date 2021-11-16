export const THROW_ERROR = "THROW_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const throwError = message => {
    return {
        type: THROW_ERROR,
        message
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

export const dispatchThrowError = message => dispatch => {
    return dispatch(throwError(message))
}

export const dispatchRemoveError = () => dispatch => {
    return dispatch(removeError())
}

export const processError = response => dispatch => {
    return response.text().then(text => {
        return dispatch(dispatchThrowError(text));
    })
}