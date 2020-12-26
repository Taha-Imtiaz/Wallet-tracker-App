import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignupForm from "../../Components/SignupForm/SignupForm";

const Signup = (props) => {
  var { user } = props;
  return (
    <div>
      {user ? (
        <Redirect to={`/dashboard/${user.uid}/transactions`}></Redirect>
      ) : (
        <div>
          <SignupForm />
          
        </div>
      )}
    </div>
  );
};

var mapStateToProps = (state) => ({
  user: state.user.currentUser,
});
export default connect(mapStateToProps)(Signup);
