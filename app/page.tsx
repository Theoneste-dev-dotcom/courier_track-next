import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

export default function Home() {
  return (
    <div>
    <div>
     <Header/>
    </div>
    <div className=''>
       <Hero/>
    </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}