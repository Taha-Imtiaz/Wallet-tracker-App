import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import TransactionForm from '../../Components/TransactionForm/TransactionForm'
import { fetchTransactions } from '../../Redux/transactions/transactionActions'
import TransactionList from '../../Components/TransactionList/TransactionList'
import TransactionSearchFilter from '../../Components/TransactionSearchFilter/TransactionSearchFilter'
import TransactionDateFilter from '../../Components/TransactionDateFilter/TransactionDateFilter'

//fetching data by lifecycleMethod
//fetching all Transacrions by componentDidMount

class Transactions extends Component  {
    state = {
        searchField: '',
        
       
    }
    handleSearchFormInput = (value)=>{ 
      
        this.setState({
           searchField: value
        })
    }
   
    componentDidMount() {
        var {fetchTransactions,match:{params:{uid}}} = this.props;
        fetchTransactions(uid)
    }
    render(){
    var {user,transactions} = this.props
    var {searchField} = this.state
    var shownFilterTransaction = transactions

    var filterTransactions =  shownFilterTransaction.filter((transaction)=>transaction.title.includes(searchField))
    console.log("Transaction state changes")
    return (
        <div>
            {user ? (
            <div>
            <h1>Transactions Page</h1>
            <TransactionForm/>
            <TransactionSearchFilter searchField = {searchField} handleSearchFormInput = {this.handleSearchFormInput}/>
            <TransactionDateFilter />
            <TransactionList transactions = {filterTransactions}/>
            </div>
            ) : 
            <Redirect to = "/"/>}
            
            
        </div>
    )
}
}
var mapStateToProps = (state)=>({
    user:state.user.currentUser,
    transactions:state.transactions
})
var actions = {
    fetchTransactions
}
export default connect(mapStateToProps,actions)(Transactions)