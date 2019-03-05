import { USER_INFO } from '../actions/index';

const INITIAL_STATE = { all: [], data: null};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_INFO: {
            return { ...state, all: action.payload.data };
        }
        default: 
            return state;
    }
}