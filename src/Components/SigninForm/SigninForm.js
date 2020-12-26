import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../Redux/user/userActions";
import GoogleSignin from "../GoogleSignin/GoogleSignin";
import style from "./SigninForm.module.css";

class SigninForm extends Component {
  state = {
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
    var { email, password } = this.state;
    //email and password ->firebase auth->user create-> user return
    var userObj = {
      password: password,
      email: email,
      //uid: we will get from firebase
    };
    this.props.signin(userObj);
  };
  render() {
    return ( 
    
      <div className={style.signinContainer}>
       
       
        <div className={style.signinImage}>
        
        </div>
        
       
        <div className={`${style.signinForm}  ${style.flex}`}>
           
          <Card className={style.card}>
            <CardContent className={`${style.flex} ${style.CardContent}`}>
              {/* <h1 >Home Page</h1> */}
              <h2 className = {style.flex}>Signin Form</h2>

              <form onSubmit={this.handleFormSubmit}>
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
                  Signin
                </Button>
              </form>

              <p className = {style.flex}>Or Login With Google</p>
              <div className={style.googleLogin}>
                <GoogleSignin />
              </div>
              <div className={`${style.alternateLogin}`}>
                Don't Have an account
                <Link to = "/signup"
                  style={{ color: "mediumseagreen", textDecoration: "none" }}
                >
                  {" "}
                  Signup
                </Link>
              </div>
            </CardContent>
          </Card>
           
        </div>
     
     
      </div>
       
    );
  }
}
var actions = {
  signin,
};

export default connect(null, actions)(SigninForm);
