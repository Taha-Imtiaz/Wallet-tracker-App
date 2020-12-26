import React from 'react'
import { signout } from '../../Redux/user/userActions'
import { connect } from 'react-redux'
import "./Navbar.css"
import { Button } from '@material-ui/core'

const Navbar = (props) => {
    var {signout, user, currentAmount} = props
    console.log(currentAmount)
    return (
        /*if the user clicks signout he wouldn't see other pages of app because if the user is not logged in
        why would he see other pages of my app*/
        <div className = "navbar">
            <div className = "logo">
                <h2>LOGO</h2>
            </div>

            <div className = "mid">
             { user &&  <h2>{`Net Amount in Wallet is ${currentAmount} PKR`}</h2> }
            </div>

           <div className = "signout">
         {user &&  <Button  style={{
              background: "#00ADEE",
              textTransform: "none",
              color: "#FFF",
              fontFamily: "sans-serif",
            
            }}
          onClick = {() => signout()}>Signout</Button>}
           </div>

        </div>
    )
}

var actions = {
    signout
}
var mapStateToProps = (state)=>({
    user:state.user.currentUser,
    currentAmount: state.transactions.reduce((sum,currentItem)=>{
     if(currentItem.type === "income"){
         return sum + parseInt(currentItem.cost)
     }
     else{
         return sum - parseInt(currentItem.cost)
     }
    },0)
})
export default connect(mapStateToProps,actions)(Navbar)
