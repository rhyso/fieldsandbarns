import { createAction, handleActions } from 'redux-actions'
import {LAND_OWNERS_GET, LAND_OWNERS_GET_SUCCESS, LAND_OWNERS_GET_ERROR } from '../actions/action-types.js'
import { landOwnersData } from "../api";

export const initialState ={
    isFetching: false,
    error: null,
    fields: null
}

const owners = handleActions({
    [LAND_OWNERS_GET]: state => ({
        ...state,
        isFetching: true,
    }),
    [LAND_OWNERS_GET_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false,
        fields: action.payload,
    }),
    [LAND_OWNERS_GET_ERROR]: state => ({
        ...state,
        isFetching: false,
        error: true,
    })

}, initialState)

export default owners


export const getLandOwners = () => dispatch => {
    dispatch(createAction(LAND_OWNERS_GET)())
    return landOwnersData()
        .then(
            res => {
                dispatch({type: LAND_OWNERS_GET_SUCCESS, payload: {res}})
            },
            error => dispatch(createAction(LAND_OWNERS_GET_ERROR)({error}))
        )
}
