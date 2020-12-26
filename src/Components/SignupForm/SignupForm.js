import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/user/userActions";
import { withRouter } from "react-router-dom";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import style from "./SignupForm.module.css";
import GoogleSignin from "../GoogleSignin/GoogleSignin";

class SignupForm extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
  };

  handleFormInput = (e) => {
    //common handler for name email and password
    // console.log(e.target)
    var { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
    }));
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    var { fullname, email, password } = this.state;
    var userObj = {
      fullname,
      email,
      password,
    };
    var { signup, history } = this.props;
    /*first method is passing a callback function and when action calls the callback function at the desired time
        the callback function invokes*/

    // signup(userObj,(uid) => {
    //   history.push(`/dashboard/${uid}/transactions`)
    // })

    signup(userObj);
  };

  render() {
    return (
      <div className={style.signupContainer}>
      
        <div className={style.signupImage}>
          {/* <img src={image} alt=""/> */}
        </div>
        
        <div className={`${style.signupForm} ${style.flex}`}>
        <Card className={style.card}>
            <CardContent className={`${style.flex} ${style.CardContent}`}>
        <h2 className = {style.flex} >Signup Form</h2>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            size="small"
            name="fullname"
            label="Enter Fullname"
            value={this.state.fullname}
            onChange={this.handleFormInput}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            size="small"
            name="email"
            label="Enter Email"
            value={this.state.email}
            onChange={this.handleFormInput}
          ></TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            size="small"
            type="password"
            name="password"
            label="Enter Password"
            value={this.state.password}
            onChange={this.handleFormInput}
          ></TextField>
          <Button
            style={{
              background: "#00ADEE",
              textTransform: "none",
              color: "#FFF",
              fontFamily: "sans-serif",
              width: "100%",
              margin: "1rem 0",
            }}
            type="submit"
          >
            Signup
          </Button>
        </form>
        <p className = {style.flex}>Or Login With Google</p>
              <div className={style.googleLogin}>
                <GoogleSignin />
              </div>
        </CardContent>
        </Card>
        </div>
      </div>
    );
  }
}
var actions = {
  signup,
};
export default connect(null, actions)(withRouter(SignupForm));
