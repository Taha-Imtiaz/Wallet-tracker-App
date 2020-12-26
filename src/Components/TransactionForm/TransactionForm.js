import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTransaction,
  editTransaction,
  deleteTransaction,
} from "../../Redux/transactions/transactionActions";
import { withRouter } from "react-router-dom";
import { serverTimestamp } from "../../Firebase/firebase";
import { Button, FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import style from "./TransactionForm.module.css";

class TransactionForm extends Component {
  state = {
    // if props.initialValues exists then set title by props.initialValues.title otherwise leave leave it as it is.

    title: this.props.initialValues ? this.props.initialValues.title : "",
    cost: this.props.initialValues ? this.props.initialValues.cost : 0,
    type: this.props.initialValues ? this.props.initialValues.type : "income",
  };
  handleFormInput = (e) => {
    var { name, value } = e.target;
    console.log(name, value)
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    var { title, cost, type } = this.state;
    var { initialValues, editTransaction, history } = this.props;
    var {
      addTransaction,
      match: {
        params: { uid },
      },
    } = this.props;
    var transactionObj = {
      title: title,
      cost: cost,
      type: type,
      //the id of a user adder this transaction
      addedBy: uid,
      //flag leke jaata hai user ne jo user ne bheja hai wo serverTime hai
      createdAt: serverTimestamp(),
    };
    if (initialValues) {
      editTransaction(initialValues.transactionId, transactionObj, () =>
        history.goBack()
      );
    } else {
      addTransaction(transactionObj);
    }
  };

  render() {
    var { title, cost, type } = this.state;
    var { initialValues, deleteTransaction, history } = this.props;
    return (
      <div className={initialValues ? null: style.trasactionForm}>
        <form onSubmit={this.handleFormSubmit}>
          <div className={initialValues ? null :  style.formFields}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              type="text"
              name="title"
              value={title}
              label="Enter title"
              onChange={this.handleFormInput}
            ></TextField>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              type="text"
              name="cost"
              value={cost}
              label="Enter cost"
              onChange={this.handleFormInput}
            ></TextField>
            {/* <select value={type} name="type" onChange={this.handleFormInput}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select> */}
              <FormControl variant="outlined" className = {initialValues ? style.styleDropDown :null}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select  style={{height:"2.5rem",margin : "1rem 0"}}
        
          native
          value={type}
         
        
          onChange={this.handleFormInput}
          label="Type"
          inputProps={{
            name : "type",
            id: 'outlined-age-native-simple',
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <option value="expense">Expense</option>
          <option value="income">Income</option>
          
        </Select>
      </FormControl>
            {initialValues ? (
              <div style={{display:"flex"}}>
                <Button
                  style={{
                    background: "#00ADEE",
                    textTransform: "none",
                    color: "#FFF",
                    fontFamily: "sans-serif",
                    width: "100%",
                    margin: "1rem 0.25rem",
                  }}
                  type="submit"
                >
                  Edit
                </Button>
                <Button
                  style={{
                    background: "#00ADEE",
                    textTransform: "none",
                    color: "#FFF",
                    fontFamily: "sans-serif",
                    width: "100%",
                    margin: "1rem 0.25rem",
                  }}
                  onClick={() =>
                    deleteTransaction(initialValues.transactionId, () =>
                      history.goBack()
                    )
                  }
                  type="button"
                >
                  Delete
                </Button>
              </div>
            ) : (
              <Button
                style={{
                  background: "#00ADEE",
                  textTransform: "none",
                  color: "#FFF",
                  fontFamily: "sans-serif",
                  // width: "100%",
                  margin: "1rem 0",
                }}
                type="submit"
              >
                ADD
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
var actions = {
  addTransaction,
  editTransaction,
  deleteTransaction,
};

export default connect(null, actions)(withRouter(TransactionForm));
