import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../components/Context/context";




function LoginPage() {


  // ...
  const bool = useContext(MyContext)
  return (
    <>
      <div className={`flex flex-wrap justify-center h-screen pt-28 ${bool?'':'bg-gray-950 text-white'}`}>
        <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-20 md:-mb-28 md:justify-start md:pl-24">
            <a href="#" className={`${bool ? '' : 'bg-gray-950 text-white'}border-b-gray-700 border-b-4  pb-2 text-2xl font-bold`}> QR Code . </a>
          </div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-left text-3xl font-bold">Welcome back, QR Code</p>
            <p className="mt- text-left text-gray-500">Welcome back, please enter your details.</p>
            <button className={` mt-16 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent  hover:text-white ${bool?'hover:bg-black':'hover:bg-blue-600'}`}>
              <Image className="mr-2 h-5" src="/Image1/GOOGLEPIC.webp" alt='img' width={20} height={80} /> Log in with Google</button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
            </div>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="password" id="login-password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                </div>
              </div>
              <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
            </form>
            <div className="pt-5 text-center">
              <p className="whitespace-nowrap text-gray-600">

                <Link href="/login/forgetpassword" className={`${bool?'text-gray-900 ':'text-blue-400 hover:text-gray-400'} underline-offset-4 font-semibold text-gray-900 underline`}>Forget Password </Link>
              </p>
            </div>
            <div className={`py-8 text-center `}>
              <p className={`whitespace-nowrap text-gray-600 ${bool?'':'text-white'}`}>
                Do not have an account?
                <Link href="signup" className={`underline-offset-4 font-semibold underline ${bool?'text-gray-900 ':'text-blue-400 hover:text-gray-300'}`}> Sign up for free.</Link>
              </p>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}


export default LoginPage;