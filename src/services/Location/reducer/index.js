import * as ActionType from '../actionType';
import { fromJS } from 'immutable';

const initialState = fromJS({
    location: '',
    currentTemp: '',
    dates: '',
    temps: '',
    selected: ''
});

function locationReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.LOCATION_CHANGE:
            // return Object.assign({}, state, {
            //     location: action.location
            // })

            // return state.set('location', action.location)
            return {
                ...state,
                location: action.location
            }

        case ActionType.SET_CURRENT_TEMP:
            // return {
            //     ...state,
            //     currentTemp: action.currentTemp
            // }
            return state.set('currentTemp', fromJS(action.currentTemp))
        case ActionType.SET_DATES:
            return {
                ...state,
                dates: action.dates
            }
        case ActionType.SET_TEMPS:
            return {
                ...state,
                temps: action.temps
            }
        default:
            return state
    }
}
export default locationReducer;