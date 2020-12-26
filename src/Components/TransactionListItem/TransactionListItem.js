import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./TransactionListItem.module.css";

const TransactionListItem = (props) => {
  var {
    transaction: { title, cost, type, createdAt, transactionId },
    location: { pathname },
  } = props;

  return (
    <div className={style.listItemBody}>
      <div className={style.flex}>{title}</div>
      <div className={style.flex}>{cost}</div>
      <div className={style.flex}>{type}</div>
      <div className={style.flex}>
        {typeof createdAt === "object"
          ? createdAt.toDate().toISOString().split("T")[0]
          : createdAt}
      </div>
      <Link className={style.flex}
        to={`${pathname}/${transactionId}`}
        style={{ textDecoration: "none" }}
      >
        <Button 
          style={{
            background: "#00ADEE",
            textTransform: "none",
            color: "#FFF",
            fontFamily: "sans-serif",
            // width: "100%",
            // marginTop: "1.5rem 0",
          }}
        >
          Edit
        </Button>
      </Link>
    </div>
  );
};

export default withRouter(TransactionListItem);
