const initState =  {
    authError:null
}
const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return{ ...state
            ,authError :'Login fail'
        
        }
        case 'LOGIN_SUCCESS':
            console.log('Log Succsss')
            return{
                ...state, authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,authError:null
            }
        case 'SIGNUP_ERR':
            console.log('signup_error');
            return{
                ...state,authError:action.err
            }
        default:
            return state;
    
    }
}

export default authReducer