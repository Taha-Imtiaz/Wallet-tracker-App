import React from 'react'
import SignupForm from '../../Components/SignupForm/SignupForm'
import SigninForm from '../../Components/SigninForm/SigninForm'
import GoogleSignin from '../../Components/GoogleSignin/GoogleSignin'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const Home = (props) => {
    //if user exists then navigate to transaction page otherwise if user doesn't exist then it is in the initial state
    // if(props.user){
        //this method gives us a warning because return doesn't execute if the condition is true
        //so warning is to write logic in return
    //     props.history.push(`/dashboard/${props.user.uid}/transactions`)
    // }
    var {user} =props
    return (
        <div>
        { user ?  ( <Redirect to = {`/dashboard/${user.uid}/transactions`}></Redirect>)
           :
           (<div>
            <h1>Home Page</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleSignin/>
            </div>
            )}
            {/* Simple Routing */}
            {/* <Link to ="/dashboard/1234/transactions"><button>Navigate</button></Link> */}

            {/* Programmatic Navigation for e.g if the state changes then go to this page */}
            {/* <button onClick={()=>{
               props.history.push("/dashboard/1234/transactions")
            }}>Navigate</button> */}
        </div>
    )
}
var mapStateToProps = (state)=>({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(Home)
