import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='overflow-hidden'>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
