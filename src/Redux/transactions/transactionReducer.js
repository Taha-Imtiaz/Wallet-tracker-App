import { ADD_TRANSACTION, SET_TRANSACTIONS, FILTER_TANSACTIONS } from "./transactionConstants"

var initialState = []

var transactionReducer = (state= initialState,action)=>{
    var {type,payload}=action
    switch (type) {
   case ADD_TRANSACTION:
        return [ {...payload.transaction, createdAt:new Date().toISOString().split("T")[0]}, ...state]
       
case SET_TRANSACTIONS:
    return [...payload.transactions]

    case FILTER_TANSACTIONS:
    return [...payload.filteredTransactions]

    default:
       return state
}
}
export default transactionReducer