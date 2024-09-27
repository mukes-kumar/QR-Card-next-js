'use client'
import React , {useContext} from 'react'
import Heading from './Heading'
// import Marquee from 'react-marquee';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { MyContext } from '../Context/context';



function CompaniesLogo() {

  const bool = useContext(MyContext)
  return (
    <div>
      <div className={`${bool?'bg-white':'bg-black'} py-10`}>
        <Heading bool={bool}/>
      </div>
      <div>
        <Marquee className={`${bool?'':'bg-gray-600'}`}>
          <div className='py-12'>
            <ul className='flex justify-around space-x-28'>

            <li className=''><Image src="/Image1/dhl.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/amazon.png" alt='not' className='max-w-[100px] text-white' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/bloomingdales.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/disney.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/fedex.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/ford.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/paypal.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/pepsi.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/spotify.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/samsung.png" alt='not11' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/tesla.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/walmart.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/porsche.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/nike.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/mastercard.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/louis-vuitton.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/loreal.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/lamborghini.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

            <li className=''><Image src="/Image1/jpmorgan.png" alt='not' className='max-w-[100px]' width={100} height={100}/></li>

        </ul>
        </div> 
        </Marquee>
      </div>
    </div>
  )
}

export default CompaniesLogo