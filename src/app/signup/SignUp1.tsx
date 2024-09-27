import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../components/Context/context";




function SignUpPage1() {

  const bool = useContext(MyContext)
  return (
    <>
      <div className={`py-16 ${bool ? '' : 'bg-gray-950 text-white'} flex w-screen flex-wrap text-slate-800 justify-center`}>

        <div className="flex justify-center w-full flex-col md:w-1/2">
          <div className="flex pt-12 md:justify-start md:pl-12">
          </div>
          <div className="flex justify-center pt-12 md:-mb-36 md:justify-start md:pl-24">
            <a href="#" className={`${bool ? '' : 'bg-gray-950 text-white'}border-b-gray-700 border-b-4  pb-2 text-2xl font-bold`}> QR Code . </a>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">

              <p className="text-left text-3xl font-bold">Welcome back, QR Code</p>
              <p className="mt- text-left text-gray-500">Welcome back, please enter your details.</p>
            </div>
            <p className="mt-16 text-center font-medium md:text-left">
              Already using QR?
              <a href="#" className="whitespace-nowrap font-semibold text-blue-700"> Login here</a>
            </p>
            <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
              <Image className="mr-2 h-5" src="/Image1/GOOGLEPIC.webp" alt='PIC' width={20} height={60} />
              Get started with Google</button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
            </div>
            <form className="flex flex-col items-stretch pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="text" id="login-name" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
                </div>
              </div>

              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Conform Password" />
                </div>
              </div>
              <div className="block">
                <input className="mr-2 h-5 w-5 appearance rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow" type="checkbox" id="remember-me" style={{}} />
                <label className="inline-block" htmlFor="remember-me"> I agree to the <a className="underline hover:text-blue-700" href="#">Terms and Conditions</a></label>
              </div>
              <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2 mt-3 hover:bg-gray-700">Sign Up</button>

              <div className="py-8 text-center">
                <p className="whitespace-nowrap text-gray-600">
                  You have already account?
                  <Link href="signup" className="underline-offset-4 font-semibold text-gray-900 underline hover:text-blue-700"> LogIn for free.</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}


export default SignUpPage1;