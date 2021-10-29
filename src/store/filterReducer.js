//функция, которая определяет максимальные и минимальные значения

const defaultState = {
    visible: false,
    section: false,
    active: false,
    price: {min: 0, max: 6050000},
    area: {min: 33.5, max: 85.3},
    floor: {min: 1, max: 4},
    rooms: {min: 1, max: 3},
    priceLim: {min: 0, max: 6050000},
    areaLim: {min: 33.5, max: 85.3},
    floorLim: {min: 1, max: 4},
    roomsLim: {min: 1, max: 3},
};

export const filterReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SHOW_MODAL':
            return {...state, visible: action.payload}
        case 'SHOW_SECTION':
            return {...state, section: action.payload}
        case 'SET_PRICE':
            return {...state, price: {...state.price, ...action.payload}}
        case 'SET_AREA':
            return {...state, area: {...state.area, ...action.payload}}
        case 'SET_ROOMS':
            return {...state, rooms: {...state.rooms, ...action.payload}}
        case 'SET_FLOOR':
            return {...state, floor: {...state.floor, ...action.payload}}
        case 'RESET':
            return {...state,
                active: false,
                area: {...state.areaLim},
                price: {...state.priceLim},
                floor: {...state.floorLim},
                rooms: {...state.roomsLim},
            }
        case 'APPLY':
            return {...state, active: true, visible: false}
        default:
            return state
    }
}