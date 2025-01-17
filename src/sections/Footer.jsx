import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3 cursor-pointer">
            <div className="social-icon">
                <a href="https://github.com/riad173" target='_blank' rel="noopener noreferrer" className='flex items-center justify-center'><img src="./assets/github.svg" alt="github" className='w-1/2 h-1/2' /></a>
                
            </div>

            <div className="social-icon">
                <a href="https://wa.me/+8801740077206/" target='_blank' rel="noopener noreferrer" className='flex items-center justify-center'><img src="./assets/whatsapp.svg" alt="twitter" className='w-1/2 h-1/2' /></a>
                
            </div>

            <div className="social-icon">
                <a href="https://www.instagram.com/mahamud7079/" target='_blank' rel="noopener noreferrer" className='flex items-center justify-center'><img src="./assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' /></a>
                
            </div>
        </div>

        <p className='text-white-500'> © 2025 RiadMahamud. All rights reserved. </p>
        
    </section>
  )
}

export default Footer