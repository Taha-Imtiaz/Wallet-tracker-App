import { TextField } from "@material-ui/core";
import React from "react";
import style from "./TransactionSearchFilter.module.css"

const TransactionSearchFilter = (props) => {
  var { searchField, handleSearchFormInput } = props;
  return (
    <div className = {style.searchFilter}>
      <div className = {style.filterField}>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
        type="search"
        label="Search"
        value={searchField}
        onChange={(e) => handleSearchFormInput(e.target.value)}
      ></TextField>
      </div>
    </div>
  );
};

export default TransactionSearchFilter;
