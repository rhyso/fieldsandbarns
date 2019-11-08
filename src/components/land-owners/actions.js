import * as actionTypes from './action-types.js'

export const simpleAction = () => dispatch => {
    dispatch({
        type: actionTypes.SIMPLE_ACTION,
        payload: 'result_of_simple_action'
    })
}


export const getLandAction = payload => dispatch => {
    dispatch({
        type: actionTypes.GET_LAND,
        payload: payload
    })
}
