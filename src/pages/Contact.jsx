import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoSend } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 w-full  my-8 px-4'>
      {/* Contact info */}
      <div className='flex flex-col px-6 py-8 shadow-lg shadow-black w-full lg:w-1/4 gap-3'>
        <p className='text-2xl flex items-center gap-4 font-bold mt-2'>
          <FaPhoneAlt />
          Call To Us
        </p>
        <span>We are available 24/7, 7 days a week.</span>
        <h3 className='font-medium'>Phone: +998 91 280 43 83</h3>
        <hr />
        <p className='text-2xl flex gap-4 items-center font-bold mt-2'>
          <IoIosMail className='text-4xl' />
          Write To Us
        </p>
        <span>Fill out our form and we will contact you within 24 hours.</span>
        <h5 className='font-medium'>Emails: customer@exclusive.com</h5>
        <h6 className='font-medium'>Emails: support@exclusive.com</h6>
      </div>

      {/* Contact form */}
      <div className='w-full lg:w-2/4'>
        <form className='flex flex-col gap-5 w-full'>
          <div className='flex flex-col md:flex-row gap-5 w-full'>
            <input className='py-3 border-2 pl-5 border-black/65 w-full' type="text" placeholder='Your Name' />
            <input className='py-3 border-2 pl-5 border-black/65 w-full' type="email" placeholder='Your Email' />
            <input className='py-3 border-2 pl-5 border-black/65 w-full' type="number" placeholder='Your Phone' />
          </div>
          <div>
            <textarea className='w-full h-[220px] border-2 border-black/65 pl-5 pt-5' placeholder='Your Message'></textarea>
          </div>
          <button className='w-fit text-white px-8 py-3 bg-red-500 rounded-md flex items-center gap-2'>
            Send message <IoSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
