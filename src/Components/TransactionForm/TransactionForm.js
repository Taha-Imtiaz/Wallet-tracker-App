import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction, editTransaction, deleteTransaction } from "../../Redux/transactions/transactionActions";
import { withRouter } from "react-router-dom";
import { serverTimestamp } from "../../Firebase/firebase";

class TransactionForm extends Component {
  state = {
    // if props.initialValues exists then set title by props.initialValues.title otherwise leave leave it as it is.
   
    title: this.props.initialValues ? this.props.initialValues.title : "",
    cost: this.props.initialValues ? this.props.initialValues.cost : 0,
    type: this.props.initialValues ? this.props.initialValues.type : "income",
  };
  handleFormInput = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e)=>{
      e.preventDefault()
      var {title, cost, type} = this.state
      var {initialValues,editTransaction, history } = this.props
      var {addTransaction,match:{params:{uid}}} = this.props
      var transactionObj = {
          title:title,
          cost:cost,
          type:type,
          //the id of a user adder this transaction
          addedBy:uid,
          //flag leke jaata hai user ne jo user ne bheja hai wo serverTime hai
          createdAt:serverTimestamp()
      }
      if(initialValues){
        editTransaction(initialValues.transactionId, transactionObj,()=>history.goBack())
        
      }
      else{
        addTransaction(transactionObj)
      }
 
  }

  render() {
    var { title, cost, type } = this.state;
    var {initialValues,deleteTransaction,history} = this.props
    return (
      <div>
      <form onSubmit ={this.handleFormSubmit}>
      <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          onChange={this.handleFormInput}
        ></input>

        <input
          type="text"
          name="cost"
          value={cost}
          placeholder="cost"
          onChange={this.handleFormInput}
        ></input>
        <select value = {type} name ="type" onChange = {this.handleFormInput}>
            <option value = "expense">Expense</option>
            <option value="income">Income</option>
        </select>
     { initialValues ? (
     <div>
     <button type="submit">Edit</button> 
     <button onClick = {()=>deleteTransaction(initialValues.transactionId,()=>history.goBack())} type="button">Delete</button>
      </div>)
     : <button type="submit">ADD</button>}
      </form>
      </div>
    );
  }
}
var actions ={
  addTransaction,
  editTransaction,
  deleteTransaction
}

export default connect(null,actions)(withRouter(TransactionForm));
