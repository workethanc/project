import {TEXT} from './ActionTypes';

export function test(){
	return (dispatch) => {
		dispatch(testFunction())	;
	}

}

export function testFunction(){
	return {
		type: TEST
	}
}