import React from 'react'
import Header from '../Components/Header/Header'
import { Profile } from '../Components/Profile/Profile'
import { About } from '../Components/About/About'

export const Main = () => {
  return (
    <div>
        <Header/>
        <Profile/>
        <About/>
    </div>
 )
}
