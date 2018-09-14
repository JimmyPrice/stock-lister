import  { FETCH_STOCK } from '../actions';

export default function(state = [], action){
    switch(action.type){
        case FETCH_STOCK:
        return [action.payload.data, ...state];
    }
    return state;
}