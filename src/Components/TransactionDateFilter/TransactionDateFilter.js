import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { filterTransactionsByDate, fetchTransactions } from '../../Redux/transactions/transactionActions'

 class TransactionDateFilter extends Component {
     state = {
        startDate : '',
        endDate : ''
     }
     handleDateInput = (e)=>{
        var {name,value}= e.target
        
        this.setState((prevState)=>({
            [name] : value
        }))
    }
    handleFormSubmit = (e)=>{
        e.preventDefault()
        var {startDate,endDate} = this.state
        var {filterTransactionsByDate,match:{params:{uid}}} = this.props
     
       filterTransactionsByDate(uid,startDate,endDate)
     }
     
    render() {
        var {startDate,endDate} = this.state
        return (
            <div>
          <form onSubmit = {this.handleFormSubmit}>
          <input type = "date" name = "startDate" value = {startDate} onChange = {this.handleDateInput}></input>
            <input type = "date" name = "endDate" value = {endDate} onChange = {this.handleDateInput}></input>
            <button type = "submit">SHOW TRANSACTIONS</button>
          </form>
            </div>
        )
    }
}


var actions = {
    filterTransactionsByDate,
    fetchTransactions
}

export default connect(null,actions)(withRouter(TransactionDateFilter))
