import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='font-normal mt-16  bg-[#FAFAFA] py-4'>
      <div className='container mx-auto'>
        <div className='text-[#475467] font-light text-sm text-center pt-4'>
          Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the World
        </div>
        <div className='flex justify-between items-center mt-10'>
          <Image src="/brand/Aqua.png" alt='aqua' width={120} height={46} />
          <Image src="/brand/logo.png" alt='aqua' width={120} height={46} />
          <Image src="/brand/mucha_marketing.png" alt='aqua' width={120} height={46} />
          <Image src="/brand/skin_precision.png" alt='aqua' width={120} height={46} />
          <Image src="/brand/SpaTruCLINICS.png" alt='aqua' width={120} height={46} />

        </div>
      </div>
    </div>
  )
}

export default Brand