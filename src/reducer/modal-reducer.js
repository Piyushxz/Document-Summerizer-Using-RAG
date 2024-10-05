const modalReducer = (state,{type,payload}) =>{
    switch(type){
        case "OPEN_SIGNIN_MODAL":
            return{
                ...state,
                isSignInModalOpen : !state.isSignInModalOpen
            }



        
    }
}
export default modalReducer