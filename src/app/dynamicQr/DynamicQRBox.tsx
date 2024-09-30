import React, { useContext } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MyContext } from '../components/Context/context';


function DynamicQRBox() {

  const benifitsItem = [
    { name: 'Static Color & Shape',
      id:1
     },
    {
      name: 'Download SVG & PNG file', 
      id:2
    },
    {
      name: 'No Coding Required',
      id:3

    },
    {
      name: 'QR Code Statistics',
      id:4
    },
    {
      name: 'Fully customized landing pages',
      id:5
    },
  ];
 
  const bool = useContext(MyContext)
  return (
    <>
      <ul className={`opacity-[0.7] mb-[24px] flex flex-col pl-0 border-[0.5px] lg:w-[920px] md:w-[600px] w-[330px] rounded-xl ${bool?'bg-[#ffff] text-slate-800':'bg-black text-slate-200  border-slate-700'}`}>
        {
          benifitsItem.map((item) => (
            <li key={item.id} className={`flex items-center p-5  border-[1px] border-solid border-[#e9ecef] relative ${bool?'bg-[#ffff] text-slate-800':'bg-black text-slate-200 border-slate-700'}`}>
              <i className='text-green-700 mr-2'>
                
                <FaCheckCircle /></i>{item.name}
            </li>
          ))

        }

      </ul>
    </>
  )
}

export default DynamicQRBox