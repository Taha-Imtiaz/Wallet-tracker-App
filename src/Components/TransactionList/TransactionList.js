import React from 'react'
import TransactionListItem from '../TransactionListItem/TransactionListItem'

const TransactionList = (props) => {
    var {transactions} = props
    return (
       
        <div>
            <h1>Transaction List</h1>
            {transactions.map((transaction)=><TransactionListItem key ={transaction.transactionId} transaction = {transaction}/>)}
        </div>
    )
}

export default TransactionList
