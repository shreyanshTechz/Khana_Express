export const orderProject =(project)=>{
    // console.log(project);
    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        firestore.collection('Orders').add({
            ...project,
            // createdAt : new Date()
        }).then(()=>{
            // console.log(resp);
            dispatch({type:'CREATE_PROJECT',
            Orders:project});     
            console.log("done")
        }).catch((err)=>{
            console.log("ERR");
        })

    }
}