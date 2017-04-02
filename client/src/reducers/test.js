import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const init = {
	test: 'test'
}

export default function test(state, action){
	if(typeof state === "undefined"){
        state = initialState;
    }

    return state;
}