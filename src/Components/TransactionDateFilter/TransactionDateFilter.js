import { Button, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import 'date-fns';
import {
  filterTransactionsByDate,
  fetchTransactions,
} from "../../Redux/transactions/transactionActions";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import style from "./TransactionDateFilter.module.css"

class TransactionDateFilter extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };
  handleStartDateInput = (e) => {
    // var { name, value } = e.target;
    console.log(e)

    this.setState((prevState) => ({
      startDate: e,
    }));
  };
  handleEndDateInput = (e) => {
    // var { name, value } = e.target;
    console.log(e)
    this.setState((prevState) => ({
      endDate: e,
    }));
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    var { startDate, endDate } = this.state;
    var {
      filterTransactionsByDate,
      match: {
        params: { uid },
      },
    } = this.props;

    filterTransactionsByDate(uid, startDate, endDate);
  };

  render() {
    var { startDate, endDate } = this.state;
    return (
      <div className = {style.dateFilter}>
        <form onSubmit={this.handleFormSubmit}>
         <div className = {style.dateFilterStyling}>
           <div className = {style.datePickers}>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose Start Date"
          format="MM/dd/yyyy"
          value={startDate}
          onChange={this.handleStartDateInput}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose End Date"
          format="MM/dd/yyyy"
          
          value={endDate}
          onChange={this.handleEndDateInput}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider>
        </div>
        <div className = {style.button}>
          <Button
            style={{
              background: "#00ADEE",
              textTransform: "none",
              color: "#FFF",
              fontFamily: "sans-serif",
              // width: "100%",
              marginTop: "1.5rem",
            }}
            type="submit"
          >
            SHOW TRANSACTIONS
          </Button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

var actions = {
  filterTransactionsByDate,
  fetchTransactions,
};

export default connect(null, actions)(withRouter(TransactionDateFilter));
