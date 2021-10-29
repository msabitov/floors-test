import {createStore, combineReducers} from 'redux'
import {sortReducer} from './sortReducer'
import {flatsReducer} from './flatsRegucer'
import {filterReducer} from './filterReducer'

const reducer = combineReducers({
    sort: sortReducer,
    flat: flatsReducer,
    filter: filterReducer
})

const store = createStore(reducer)
export default store