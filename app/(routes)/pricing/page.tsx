import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PricingTable from '@/components/PricingTable'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='min-h-screen flex justify-self-center  items-center'>
        <PricingTable/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
