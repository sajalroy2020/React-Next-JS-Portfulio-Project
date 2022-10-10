import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from 'next/router';

export default function Header() {

    const toggolCart = () => {
        if(ref.current.classList.contains('hidden')){
            ref.current.classList.remove('hidden')
        }else {
            ref.current.classList.add('hidden')
        }
    }
    const ref = useRef()

    const router = useRouter();
    function isActive(route){
      if(route == router.pathname){
        return 'active';
      }
      else ""
    }

const [collor, setCollor]=useState(false);
    const ChangeCollor = ()=>{
      if(window.scrollY >= 120){
        setCollor(true);
      }else{
        setCollor(false);
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', ChangeCollor);
    }
  
  return (
    <div className="sticky top-0 z-50" >
        <div className={collor ? 'head_bg' : false}>
            <div className="container mx-auto">
              <div className="flex flex-wrap py-5">
                  <div className="lg:w-1/4 w-full px-4 lg:flex hidden items-center">
                      <div className="cursor-pointer">
                        <Image src="/img/logo.png" width="140px" height="40px" alt=""/>
                      </div>
                  </div>
                    <div className="lg:w-3/4 w-6/12 px-4 lg:flex hidden items-center justify-end">
                      <div>
                          <ul className="flex justify-end space-x-6 font-semibold text-[16px]">
                            <Link href={'/'}><li className={isActive('/')}><a className="hover:text-[#f75023] duration-300" href="">Home</a></li></Link>
                            <Link href={'/AboutHome'}><li className={isActive('/AboutHome')}><a className="hover:text-[#f75023] duration-300" href="">About</a></li></Link>
                            <Link href={'/PortfolioHome'}><li className={isActive('/PortfolioHome')}><a className="hover:text-[#f75023] duration-300" href="">Portfolio</a></li></Link>
                            <Link href={'/ServiceHome'}><li className={isActive('/ServiceHome')}><a className="hover:text-[#f75023] duration-300" href="">Services</a></li></Link>
                            <Link href={'/BlogHome'}><li className={isActive('/BlogHome')}><a className="hover:text-[#f75023] duration-300" href="">Blog</a></li></Link>
                            <Link href={'/ContactHome'}><li className={isActive('/ContactHome')}><a className="hover:text-[#f75023] duration-300" href="">Contact</a></li></Link>
                            <li><a className="border-2 border-[#f75023] px-6 py-3 rounded-full hover:bg-[#f75023] duration-300 font-semibold hover:text-white" href="">Download CV</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className="lg:hidden w-full px-4 flex items-center justify-between">
                        <div className="cursor-pointer">
                          <Image width="140px" height="40px" src="/img/logo.png" alt=""/>
                        </div>
                        <div className="text-2xl text-gray-700 hover:text-[#f75023]" onClick={toggolCart}>
                            <FaBars/>
                        </div>
                    </div>
                    <div ref={ref} onClick={toggolCart} className="hidden absolute mt-2 top-20 left-0 translate-x-0 ease-in duration-300 bg-gray-200 h-screen">
                        <ul className="space-y-6 font-semibold text-gray-700 text-[16px] p-5">
                            <li><a  className=" text-[#f75023] hover:text-[#f75023] duration-300" href="">Home</a></li>
                            <li><a className="hover:text-[#f75023] duration-300" href="">About</a></li>
                            <li><a className="hover:text-[#f75023] duration-300" href="">Portfolio</a></li>
                            <li><a className="hover:text-[#f75023] duration-300" href="">Services</a></li>
                            <li><a className="hover:text-[#f75023] duration-300" href="">Blog</a></li>
                            <li><a className="hover:text-[#f75023] duration-300" href="">Contact</a></li>
                            <li><a className="border-2 border-[#f75023] px-6 py-3 rounded-full hover:bg-[#f75023] duration-300 font-semibold hover:text-white" href="">Download CV</a></li>
                        </ul>
                    </div>
              </div>
          </div>
        </div>
    </div>
  )
}
