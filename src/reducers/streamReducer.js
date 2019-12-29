import _ from 'lodash';
import { EDIT_STREAM, FETCH_STREAM, CREATE_STREAM, DELETE_STREAM, FETCH_STREAMS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.paylaod };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
            // The same as the code below  
            // const newState = { ...state };
            // newState[action.payload.id] = action.payload;
            // return newState;
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}