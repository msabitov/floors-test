import {dataFlats} from '../json/data'

const defaultState = dataFlats;

export const flatsReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SORT':
            const [sortType, dir] = action.payload
            return [...state.sort((a, b) => {
                if( dir === 'top')
                    return a[sortType] - b[sortType]
                return b[sortType] - a[sortType]
            })]
        default:
            return state
    }
}