import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signin } from '../../Redux/user/userActions';

 class SigninForm extends Component {
    state ={
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
        var {email,password}=this.state;
        //email and password ->firebase auth->user create-> user return
        var userObj={
            password:password,
            email:email,
            //uid: we will get from firebase
        }
      this.props.signin(userObj)
    }
    render() {
        return (
            <div>
            <h1>Signin Form</h1>

          <form onSubmit = {this.handleFormSubmit}>

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

          <button type ="submit">Signin</button>
        </form>
            </div>
        )
    }
}
var actions ={
    signin
}

export default connect(null,actions)(SigninForm)
