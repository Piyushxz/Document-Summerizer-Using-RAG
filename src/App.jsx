import { useState } from 'react'
import Navbar from './components/Navbar'
import FileUpload from './components/FileUpload'
import SignInModal from './components/SignInModal'
import { useModal } from './context/modal-context'



function App() {

  const {isSignInModalOpen} = useModal()

  return (
    <>
        <Navbar/>
        <FileUpload/>
        

        {
          isSignInModalOpen &&
          <SignInModal/>
        }
    </>
  )
}

export default App
