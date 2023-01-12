export const createProject =(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',
            project:project});     
            console.log("done")
        }).catch((err)=>{
            console.log("ERR");
        })



       
    }
}