"use client"
// import Image from "next/image";
// import Colorbutton from "./colorbutton";
import { useContext } from "react";
// import { MdNightlight } from "react-icons/md";
// import { CiLight } from "react-icons/ci";
// import ColorChange from "./navbar/colorChange";
import HeroSection from "./components/MainSection/HeroSection";
import FooterSection from "./components/Footer/FooterSection";
import CustomiseCard from "./components/MainSection/CustomiseCard";
import BenefitsQR from "./components/Companies/BenefitsQR";
import CompaniesLogo from "./components/Companies/CompaniesLogo";
import DynamicVSStaticQR from "./components/Companies/DynamicVsStatic/DynamicVSStaticQR";
import DynamicCart from "./components/Companies/DynamicVsStatic/DynamicCart";
import UseSection from "./components/HowToUseSection/UseSection";
import QuickRespose from "./components/HowToUseSection/QuickRespose";
import QRCodeType from "./components/HowToUseSection/QRCodeType";


import { MyContext } from "./components/Context/context";
// import Checklink from "./checklink";

export default function Home() {

//   const [color, setColor] = useState('white');
//   const [bool , setBool] = useState(true);
//   const handleColor = ()=>{
//      if(color === 'white'){
//         setColor('black')
//         setBool(false)
//      }else{
//        setColor('white')
//        setBool(true)
//      }
//   }

//   const icon = [
//    {link: 'FaHome'}
//  ]


 const name= 'DYNAMIC';
  const DesName='Dynamic QR Codes Explains'
  const ShortName='Dynamic'

  const bool = useContext(MyContext)

  return (
     <>
       <div className={`bg-{color}  h-screen`} style={{backgroundColor: `{color}` }}>
         {/* <ColorChange bool={bool} handleColor={handleColor}/> */}

         <HeroSection />
         <CustomiseCard />
          <CompaniesLogo />
         <BenefitsQR title={'Benefits from QR.io'} mt=""/>

         <DynamicVSStaticQR bool={bool}/>

         <DynamicCart name={name} DesName={DesName} ShortName={ShortName} bool={bool}/>

         <UseSection bool={bool}/>

         <QuickRespose />

         <QRCodeType bool={bool} title="QR Code Types"/>
         <FooterSection />
      </div>
     </>
  );
}
