
import React from 'react';

function ContactForm() {
  return (
    <form action="https://app.proforms.top/f/pr599d03e" method="POST"
    
    className="w-full  bg-opacity-10 p-6 rounded-lg border border-white/[0.2] shadow-lg opacity-90 bg-[#0a0f2c] backdrop-blur-lg mb-5 mt-20"

       >
    
      <div className='mb-8 flex md:flex-row flex-col gap-[5%]'>
        <label htmlFor="name" className='flex-[5%] text-[#e4ecff] text-lg md:text-xl text-left mb-1 md:mb-0'>Name: </label>
      <input type="text" id="name" name="name" placeholder='John Doe' required   
      className='flex-[90%] w-full border text-white p-3 outline-none border-gray-300 rounded-md '/>
      </div>
      
      <div className='mb-8 flex md:flex-row flex-col gap-[5%]'>
      <label htmlFor="email" className='flex-[5%] text-[#e4ecff] text-lg md:text-xl text-left mb-1 md:mb-0' >Email:</label>
      <input type="email" id="email" name="email" placeholder='johndoe@example.com' required 
       className='flex-[90%] w-full border text-white p-3 outline-none border-gray-300 rounded-md '
      />
      </div>

     <div className='mb-8 flex md:flex-row flex-col gap-[5%}'>
       <label htmlFor="message" className='flex-[5%] text-[#e4ecff] text-lg md:text-xl text-left mb-1 md:mb-0'>Message:</label>
      <textarea id="message" name="message "  placeholder='Your message here...' required
       className='flex-[90%] w-full border min-h-3.5 text-white p-3 outline-none border-gray-300 rounded-md '/>
     </div>
     <button type="submit"
     className='bg-white text-[#0a0f2c] hover:opacity-80 font-semibold py-3 px-6 rounded-md transition-colors duration-300'
     >Submit</button>
    </form>
  );
}

export default ContactForm;

