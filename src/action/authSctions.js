// import { display } from "@mui/system";
// import firebase from '../reducers/fbconfig/fbConfig'
// import joinUsers from "./joinuser";
export const signIn = (credentials)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
            console.log('Success');
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err});
            console.log(err);
        });
    }
}

export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});
        });
    }
}

export const signUp = (newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,newUser.password
        ).then((resp)=>{
             firestore.collection('myprofile').doc(resp.user.uid).set(newUser);
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstname,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0],
                displayName:newUser.displayName,
            })
        }).then(()=>{
            
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'SIGNUP_ERR'})
        })
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});
        });
    }
}