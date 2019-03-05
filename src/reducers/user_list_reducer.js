import { SEARCH_USER } from '../actions/index';

const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_USER: {
            return { ...state, all: action.payload.data };
        }
        default: 
            return state;
    }
}