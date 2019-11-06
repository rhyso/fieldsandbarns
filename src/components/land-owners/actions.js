import * as actionTypes from './action-types.js'

export const simpleAction = () => dispatch => {
    dispatch({
        type: actionTypes.SIMPLE_ACTION,
        payload: 'result_of_simple_action'
    })
}
