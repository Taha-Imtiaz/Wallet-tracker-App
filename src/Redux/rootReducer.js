import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import transactionReducer from './transactions/transactionReducer';

var rootReducer = combineReducers({
    //user reducer keep track which user is currently sign in.
    user:userReducer,
    transactions:transactionReducer
})
export default rootReducer