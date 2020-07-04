import { SET_CURRENT_USER, REMOVE_USER } from "./userConstants";
import { auth, serverTimestamp, firestore, googleAuthProvider } from "../../Firebase/firebase";

export var setCurrentUser = (userObj) => ({
  type: SET_CURRENT_USER,
  payload: {
    userObj: userObj,
  },
});

export var signup = (userObj/*,navigate(2nd argument of action)*/) => {
  return async (dispatch) => {
    try {
      var { fullname, email, password } = userObj;
      
      //email and password ->firebase auth->user create-> user return
      //create user with firebase auth
    var createdUser = await auth.createUserWithEmailAndPassword(email,password );
    
    //save user info in database too.
    var userObjForFirestore = {
      fullname: fullname,
      email: email,
      createdAt: serverTimestamp(),
    };
    await firestore.collection("users").doc(createdUser.user.uid).set(userObjForFirestore);

    //update user auth profile
      await createdUser.user.updateProfile({
        displayName: fullname,
      });
     
      

     //update app state (this is managed by onAuthStateChanged)

      //update user state in app.
     
      //when user clicks signup button update the state of app by saving the user info in database and 
      //Navigate user to transaction Page

      // first method is to call the callback when the state changes
      // navigate(createdUser.user.uid)
    } catch (error) {
      console.log(error);
    }
  };
};
export var signin = (userObj)=>{
return async (dispatch)=>{
try {
  var {email,password}=userObj
  //set user auth profile
 await auth.signInWithEmailAndPassword(email,password)


 //update user state in app.(this is managed by onAuthStateChanged)

} catch (error) {
  console.log(error)
}
}
}
 //REMOVE USER FROM APP(CHANGE APP STATE)
export var removeCurrentUser = ()=>{
  return async (dispatch)=>{
    dispatch({
      type:REMOVE_USER
    })
  }
}

export var signout = ()=>{
  return async (dispatch)=>{
    //REMOVE USER FROM FIREBASE
    await auth.signOut()

   
   
  }
}

export var googleLogin = ()=>{
  return async (dispatch)=>{
    try {
     
    var {user:{displayName,email,uid},additionalUserInfo:{isNewUser}} = await auth.signInWithPopup(googleAuthProvider)

    if(isNewUser){
    //send user data to firestore
      var userObj ={
        fullname:displayName,
        email:email,
        createdAt:serverTimestamp()
      }
      await firestore.collection("users").doc(uid).set(userObj)

      //update app state (this is managed by onAuthStateChanged)
      
    }
    } catch (error) {
      console.log(error)
    }
  }
}