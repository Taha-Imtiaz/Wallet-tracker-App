import React from 'react'
import { connect } from 'react-redux'
import { googleLogin } from '../../Redux/user/userActions'

const GoogleSignin = (props) => {
    var {googleLogin}=props
    return (
        <div>
            <h1>Google Signin</h1>
            <button onClick ={()=>googleLogin()}>Google Login</button>
        </div>
    )
}
var actions={
    googleLogin
}
export default connect(null,actions)(GoogleSignin)
