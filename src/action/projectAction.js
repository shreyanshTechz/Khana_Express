export const createProject =(project)=>{
    console.log(project);
    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        firestore.collection('Users').add({
            ...project,
            // createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',
            Users:project});     
            console.log("done")
        }).catch((err)=>{
            console.log("ERR");
        })

    }
}