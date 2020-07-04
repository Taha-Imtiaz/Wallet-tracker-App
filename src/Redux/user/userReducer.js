import { SET_CURRENT_USER, REMOVE_USER } from "./userConstants"

var initialState = {
    currentUser:null
}

var userReducer = (state = initialState,action)=>{
    var {type,payload} = action
    switch (type) {
        //When the user signsUp get his info from firebase and store it in your app state

        case SET_CURRENT_USER:
            return {...state , currentUser:payload.userObj}
           case REMOVE_USER:
               return {...state , currentUser:null} 
     default:
        return state    
    }
}

export default userReducer