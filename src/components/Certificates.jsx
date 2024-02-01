import { useState } from 'react';
import { Media } from './media';

function Certificates() {

  const open = (src) => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = src;

  }

  const close = () => {
    document.querySelector('.popup-image').style.display = 'none';
  }

  return (
    <div className='w-full h-full pb-10 justify-center pt-10 bg-orange-300'>
      <h1 className='text-4xl underline text-center'>Certifications</h1>
      <div className='flex justify-center w-fit flex-wrap mt-4 border-black '>
        {
          Media.map((file, index) => (
            <div className='mx-4 my-10 border cursor-pointer'>
              <img src={file.url}  width={400} onClick={() => open(file.url)} alt="Image not found" className='h-full' />
              <h2 className='font-3xl font-bold text-center mt-4 mb-4'>{file.name}</h2>
            </div>
          ))
        }
      </div>

      <div className='popup-image fixed top-20 left-0 h-3/4 w-11/12 z-full flex-none'>
        <span className='absolute mt-5 right-2 text-4xl font-bold cursor-pointer z-full' onClick={close}>&times;</span>
        <img src="./media/certificate.jpg"  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border w-3/4 object-cover' alt="Image" />
      </div>
    </div>
  )
}

export default Certificates
