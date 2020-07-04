import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/user/userActions";
import { withRouter } from "react-router-dom";



class SignupForm extends Component {
    state ={
        fullname:'',
        email:'',
        password:''
    }

    handleFormInput = (e)=>{
        //common handler for name email and password
        // console.log(e.target)
        var {name,value} = e.target;
        this.setState(prevState =>({
            [name]:value
        }))
    }
    handleFormSubmit = (e)=>{
        e.preventDefault()
        var {fullname,email,password}=this.state;
        var userObj={
          fullname,
          email,
          password
        }
        var {signup,history} = this.props
        /*first method is passing a callback function and when action calls the callback function at the desired time
        the callback function invokes*/

        // signup(userObj,(uid) => {
        //   history.push(`/dashboard/${uid}/transactions`)
        // })
        
       signup(userObj)
       
         
    }

  render() {
    return (
      <div>
          <h1>Signup Form</h1>
          <form onSubmit = {this.handleFormSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="fullname"
          value={this.state.fullname}
          onChange={this.handleFormInput}>
          </input>

          <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleFormInput}>
          </input>
          
          <input
          type="text"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleFormInput}>
          </input>
          <button type ="submit">Signup</button>
        </form>
      </div>
    );
  }
}
var actions = {
  signup
}
export default connect(null,actions)(withRouter(SignupForm));
