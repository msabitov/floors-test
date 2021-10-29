const defaultState = {
    type: 'floor',
    direction: 'top',
};
export const sortReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_SORT':
            return {...state, type: action.payload}
        case 'SET_DIR':
            return {...state, direction: action.payload}
        default:
            return state
    }
}