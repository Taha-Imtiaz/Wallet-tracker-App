import React from "react";

const TransactionSearchFilter = (props) => {
  var { searchField, handleSearchFormInput } = props;
  return (
    <div>
      <input
        type="search"
        placeholder="search"
        value={searchField}
        onChange={(e) => handleSearchFormInput(e.target.value)}
      ></input>
    </div>
  );
};

export default TransactionSearchFilter;
