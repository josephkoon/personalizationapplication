import {
	SET_PREFERENCES
} from '../actions/types';


export default function(state={preferences:null}, action){
	switch(action.type){

		case SET_PREFERENCES:
		return {preferences:action.payload}

		default:
		return state

	}
}