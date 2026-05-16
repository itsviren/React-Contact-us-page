import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <MainContent></MainContent>

    </>
  )
}

export default App