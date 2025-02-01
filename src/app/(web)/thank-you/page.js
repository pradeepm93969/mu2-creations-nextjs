import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ThankYou = () => {
  return (
    <section className="container mx-auto max-w-5xl p-2 flex flex-col justify-center items-center gap-3 mt-36">
      <div className="font-heading text-primary-dark">Thank you!</div>
      <div className="flex-1 text-center mt-5">
        <div className="text-typography flex-1 text-justify">
          Thank you for reaching out! We’ve received your message and will get
          back to you as soon as possible.
        </div>
      </div>
      <div className="btn-primary max-w-48 mb-10 mt-5 mx-auto">
        <Link href="/">Back to Home</Link>
      </div>
    </section>
  )
}

export default ThankYou
