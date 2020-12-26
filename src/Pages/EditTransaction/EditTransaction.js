import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import style from "./EditTransaction.module.css"

const EditTransaction = (props) => {
  var { transaction } = props;

  return (
    <div>
      {transaction ? (
        <div className = {style.editContainer}>
          <div><h2>Edit transaction Page</h2></div>
          {/* get transaction data of particular transaction whose fields user going to edit */}
          {/* reusable component transaction form with the fields completely filled  */}

          {/* initial values yshan se bhejainge jo transactionform ki props me jainge . 
            agar initialValues nahi bhejin to state ki values hi rahaingi */}
            <div>
          <TransactionForm initialValues={transaction} />
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};
var mapStateToProps = (
  state,
  {
    match: {
      params: { transactionId },
    },
  }
) => ({
  transaction: state.transactions.find(
    (transaction) => transaction.transactionId === transactionId )});

export default connect(mapStateToProps)(withRouter(EditTransaction));
