import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { googleLogin } from "../../Redux/user/userActions";

const GoogleSignin = (props) => {
  var { googleLogin } = props;
  return (
    <div >
      {/* <h1>Google Signin</h1> */}
      <Button
        style={{
          background: "mediumseagreen",
          color: "#FFF",
          width: "100%",
          margin: "1rem 0",
        }}
        onClick={() => googleLogin()}
      >
        Google Login
      </Button>
    </div>
  );
};
var actions = {
  googleLogin,
};
export default connect(null, actions)(GoogleSignin);
