export const initialState = {
    logMessage: 'default',
    fields: [],
}


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOG_TO_SCREEN':
            return {...state, logMessage: payload}
        case 'LOG_TO_CONSOLE':
            return {...state, logMessage: payload}
        default:
            return state
    }
}

