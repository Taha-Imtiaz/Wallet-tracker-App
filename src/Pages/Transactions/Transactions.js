import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import TransactionForm from '../../Components/TransactionForm/TransactionForm'
import { fetchTransactions } from '../../Redux/transactions/transactionActions'
import TransactionList from '../../Components/TransactionList/TransactionList'
import TransactionSearchFilter from '../../Components/TransactionSearchFilter/TransactionSearchFilter'
import TransactionDateFilter from '../../Components/TransactionDateFilter/TransactionDateFilter'
import style from "./Transactions.module.css"

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
            <div className = {style.transactionPage}>
            <div className = {style.transactionHeading}>
                <h2>Transactions Page</h2>
            </div>
            <div className = {style.transactionAddForm}>
            <TransactionForm/>
            </div>
            <div className = {style.transactionSearchForm}>
            <TransactionSearchFilter searchField = {searchField} handleSearchFormInput = {this.handleSearchFormInput}/>
            </div>
            <div className = {style.transactionDateFilter}>
            <TransactionDateFilter />
            </div>
            <div className = {style.transactionList}>
            <TransactionList transactions = {filterTransactions}/>
            </div>
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