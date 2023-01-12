const initState =  {
    projects:[
        {id:'1',title:'Hey Shreyansh',content:'rjkgnr renfmref fnrejk f'},
        
        {id:'2',title:'Hey Shh',content:'rjkgnr renfmref fnrejk f'},
        
        {id:'3',title:'Hey Shreya',content:'rjkgnr renfmref fnrejk f'},
    ]
}
const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            // console.log(action.project);
            break
        default:
            // console.log('Not');
    }
    return state
}

export default projectReducer