'use client'

import ContactUsForm from '@/components/ContactUs/ContactUsForm'
import React from 'react'

const ContactUsPage = () => {

  return (
    <section className="bg-slate-200">
      <div className="container mx-auto p-2 flex flex-col justify-center items-center gap-3 mt-32">
        <div className="font-heading text-primary-dark">Contact Us</div>
        <div className="font-sub-title  text-primary-dark">
          Contact our team for any inquiries or assistance
        </div>
        <div className="my-5 flex flex-col md:flex-row justify-between gap-3 bg-white text-slate-700 rounded-md overflow-hidden shadow-md shadow-slate-600 p-5 w-full sm:min-w-fit">
          <ContactUsForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactUsPage
