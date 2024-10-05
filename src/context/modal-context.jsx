import { Children, createContext, useContext, useReducer } from "react"
import modalReducer from "../reducer/modal-reducer"


const initialState = {
    isSignInModalOpen:'false',
    isSignUpModalOpen:'false'
}


const ModalContext = createContext(initialState)


const ModalProvier = ({children}) =>{

    const [{isSignInModalOpen,isSignUpModalOpen},modalDispatch] = useReducer(modalReducer,initialState)

    return(
        <ModalContext.Provider value={{isSignInModalOpen,isSignUpModalOpen,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}


const useModal = () => useContext(ModalContext)

export {useModal,ModalProvier}