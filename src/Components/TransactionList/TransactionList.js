import {
  Card,
  CardContent,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import TransactionListItem from "../TransactionListItem/TransactionListItem";
import style from "./TransactionList.module.css";
const TransactionList = (props) => {
  var { transactions } = props;
  return (
    <div >
      <h2>Transaction List</h2>
      <div className={style.transactionList}>
        <div className={style.flex}>Transaction Title</div>
        <div className={style.flex}>Transaction Cost</div>
        <div className={style.flex}>Transaction Type</div>
        <div className={style.flex}>Date</div>
        <div className={style.flex}>Action</div>
      </div>
      {transactions.map((transaction) => (
        
         
            <TransactionListItem
              key={transaction.transactionId}
              transaction={transaction}
            />
         
        
      ))}
    </div>
  );
};

export default TransactionList;
