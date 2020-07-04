import { firestore } from "../../Firebase/firebase";
import {
  ADD_TRANSACTION,
  SET_TRANSACTIONS,
  FILTER_TANSACTIONS,
} from "./transactionConstants";

export var addTransaction = (transactionObj) => {
  return async (dispatch) => {
    try {
      var createdTransaction = await firestore
        .collection("transactions")
        .add(transactionObj);
      console.log({ ...transactionObj, transactionId: createdTransaction.id });
      //update app state
      dispatch({
        type: ADD_TRANSACTION,
        payload: {
          transaction: {
            ...transactionObj,
            transactionId: createdTransaction.id,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export var fetchTransactions = (uid) => {
  return async (dispatch) => {
    try {
      var transactions = [];
      var transactionSnap = await firestore
        .collection("transactions")
        .where("addedBy", "==", uid)
        .orderBy("createdAt", "desc")
        .get();
      transactionSnap.forEach((doc) =>
        transactions.push({ ...doc.data(), transactionId: doc.id })
      );
      dispatch({
        type: SET_TRANSACTIONS,
        payload: {
          transactions: transactions,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export var editTransaction = (transactionId, updatedTransaction, goBack) => {
  return async (dispatch) => {
    try {
      //createdAt server Timestamp hai jo update nahi karna
      var { createdAt, ...editTransactionObj } = updatedTransaction;
      console.log(editTransactionObj);
      await firestore
        .collection("transactions")
        .doc(transactionId)
        .update(editTransactionObj);
      goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export var deleteTransaction = (transactionId, goBack) => {
  return async (dispatch) => {
    try {
      await firestore.collection("transactions").doc(transactionId).delete();
      goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export var filterTransactionsByDate = (uid, startDate, endDate) => {
  return async (dispatch) => {
    try {
    
      startDate = new Date(startDate);
      endDate = new Date(endDate); 
     console.log(uid, startDate, endDate);
    
      var filteredTransactions = [];
      
      if (startDate && endDate) {
        var transactionSnap = await firestore
          .collection("transactions")
          .orderBy("createdAt", "desc")
          .where("addedBy", "==", uid)
          .where("createdAt", ">=", startDate)
          .where("createdAt", "<=", endDate)
          .get();
        transactionSnap.forEach((doc) => {
          console.log(doc.data());
          filteredTransactions.push({ ...doc.data(), transactionId: doc.id });
        });
        //update app's state
        dispatch({
          type: FILTER_TANSACTIONS,
          payload: {
            filteredTransactions: filteredTransactions,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
