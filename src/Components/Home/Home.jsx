import React from 'react'
import Homefirst from './Homefirst'
import './Home.css'
import RecentProducts from './RecentProducts'
import Subscip from './Subscip'
import Testinomials from './Testinomials'
import Categories from './Categories'
import Navbar from '../Navbar'
import Footer from '../../Footer'

export default function Home() {
  return (
    <>
    <div className='absolute h-[10rem] inset-0 top-7'>
       <Navbar />
    </div>
    <Homefirst/>
    <RecentProducts/>
    <Subscip/>
    <Testinomials/>
    <Categories/>

    <Footer/>
 
    </>
  )
}
