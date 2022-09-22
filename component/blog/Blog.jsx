import Image from "next/image";
export default function Blog(){
    return(
        <>
            <div className=" bg-gray-50 py-20">
                <div className="Container mx-auto px-4">
                    <div className="flex flex-wrap pb-10">
                        <div className="w-full px-4">
                            <div className=" text-center space-y-4">
                                <p className=" text-2xl font-semibold text-[#f75023]">Blog</p>
                                <p className=" text-4xl font-semibold"> My Blog Section</p>
                                <p className=" text-xl text-gray-400">Most common methods for designing websites that work well on desktop <br/> is responsive and adaptive design</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/3 w-full px-4 pt-7 hover:-translate-y-2 duration-500">
                            <div className=" space-y-3 relative">
                                <Image className="rounded-md" width={100} height={60} layout="responsive" src="/img/blog1.jpg" alt=""/>

                                <p className=" text-lg text-orange-600">Web Development</p>
                                <p className=" text-xl font-semibold">Jim Morisson Says when the musics over turn off the light</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full px-4 pt-7 hover:-translate-y-2 duration-500">
                            <div className=" space-y-3">
                                <Image className="rounded-md" width={100} height={60} layout="responsive" src="/img/blog3.jpg" alt=""/>
                                <p className=" text-lg text-orange-600">Social Media</p>
                                <p className=" text-xl font-semibold">How Designer and developer can collaborate better</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full px-4 pt-7 hover:-translate-y-2 duration-500">
                            <div className=" space-y-3">
                                <Image className="rounded-md" width={100} height={60} layout="responsive" src="/img/blog1.jpg" alt=""/>
                                <p className=" text-lg text-orange-600">Social Media</p>
                                <p className=" text-xl font-semibold">How Designer and developer can collaborate better</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-50 py-20">
                <div className="Container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 flex justify-center">
                            <div className="bg-purple-500 rounded-md flex flex-wrap items-center h-80 p-24">
                                <div className="lg:w-1/2 w-full px-4 space-y-2 text-center lg:text-left">
                                    <p className=" text-xl font-semibold text-white">Subscribe Now</p>
                                    <p className=" text-4xl font-semibold text-white">Get My Newsletter</p>
                                    <p className=" text-lg font-semibold text-white">Get latest news, updates, tips and trics in your inbox</p>
                                </div>
                                <div className="lg:w-1/2 w-full px-4 flex lg:justify-end justify-center">
                                    <div className="flex items-center justify-center"> 
                                        <input className=" outline-none p-5 rounded-l-md" type="email" placeholder="Your Email Here" />
                                        <button className=" bg-orange-600 p-5 rounded-r-md text-white">Send Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}