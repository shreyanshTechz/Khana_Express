export const orderProject =(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        firestore.collection('Orders').add({
            ...project,
            // createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',
            Orders:project});     
            console.log("done")
        }).catch((err)=>{
            console.log("ERR");
        })

    }
}