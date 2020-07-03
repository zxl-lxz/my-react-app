import { combineReducers } from 'redux'
import defaultState from './state'

const lists = (state = defaultState.lists, action) => {
    if (action.type === 'add') {
        return [action.value, ...state]
    }
    return state;
}

const reducer = combineReducers({
    lists,
});


export default reducer;
