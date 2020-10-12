import React from 'react'
import Navbar1 from '../../components/Navbar1/index.js'
import Navbar2 from '../../components/Navbar2/index.js'
import Navbar3 from '../../components/Navbar3/index.js'
import Navbar4 from '../../components/Navbar4/index.js'
import LowerNavigationBar from '../../components/LowerNavigationBar/index.js'
import Footer from '../../components/Footer/index.js'
import RecoveryForm from '../../components/RecoveryForm'

export default function RecoverPassword() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <RecoveryForm />
      <LowerNavigationBar />
      <Footer />
    </>
  )
}
