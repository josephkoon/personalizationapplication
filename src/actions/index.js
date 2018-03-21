import { 
		SET_PREFERENCES

} from './types'



export function setPreferences(preferences){
	console.log(preferences)
	return{
		type:SET_PREFERENCES,
		payload:preferences
	}
}