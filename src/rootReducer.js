import { combineReducers } from "redux";

import locationReducer from './services/Location/reducer'


const rootReducer = combineReducers({
    locationReducer
});

export default rootReducer;