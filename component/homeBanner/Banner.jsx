import Image from "next/image";
export default function Banner(){
    return(
        <div className="bg-img">
            <div classNameName="container mx-auto px-4">
                <div className="flex flex-wrap py-16">
                    <div className="lg:w-1/2 w-full px-4 flex justify-center lg:hidden">
                        <div className=" flex justify-center">
                            {/* <img className="w-80 mx-auto rounded-full" src="/img/avatar.png" alt=""/> */}
                            <Image className="mx-auto rounded-full" width={100} height={100} layout="responsive" src="/img/avatar.png" alt=""/>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full px-4 flex justify-center items-center mt-5 lg:mt-0">
                        <div className="ml-7 space-y-4 text-center lg:text-left">
                            <p className="text-[#f75023] text-2xl font-semibold">Hello, I'm</p>
                            <p className=" text-6xl">Sajal Roy</p>
                            <p className=" text-xl font-semibold">A <span className=" text-green-500">FrontEnd Developer</span> From <span className="text-purple-500">Bangladesh</span></p>
                            <p className=" text-lg text-gray-600">I'm creative Developer based in Bangladesh, and I'm very passionate and dedicated to my work.</p>
                            <div className="flex items-center lg:justify-start justify-center space-x-5">
                                <button className=" px-8 py-3 bg-[#f75023] text-white font-semibold border-2 border-[#f75023] hover:text-black duration-300 rounded-full hover:bg-white" type="">About Me</button>
                                <div className=" space-x-3">
                                    <a href="#" className="fa fa-facebook"></a>
                                    <a href="#" className="fa fa-twitter"></a>
                                    <a href="#" className="fa fa-linkedin"></a>
                                    <a href="#" className="fa fa-instagram"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 lg:flex hidden justify-center">
                        <div className="relative">
                            <Image className="mx-auto rounded-full" width={400} height={500} src="/img/avatar.png" alt=""/>
                            <img className="w-16 animate-bounce lg:block hidden delay-300 transition-all absolute top-20 right-72" src="/img/html-5.png" alt=""/>
                            <img className="w-16 animate-bounce lg:block hidden delay-300 transition-all absolute top-20 right-0" src="/img/css.png" alt=""/>
                            <img className="w-16 animate-bounce lg:block hidden delay-300 transition-all absolute top-60 right-72" src="/img/tailwind-css.png" alt=""/>
                            <img className="w-16 animate-bounce lg:block hidden delay-300 transition-all absolute top-60 right-0" src="/img/js.png" alt=""/>
                            <img className="w-16 animate-bounce lg:block hidden delay-300 transition-all absolute top-80 right-36" src="/img/figma.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap py-4">
                    <div className="w-full px-4">
                        <div className=" flex justify-center">
                            <div className="w-5 h-8 border-2 cursor-pointer border-black rounded-full flex justify-center items-center">
                                <p className="animate-bounce">I</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}