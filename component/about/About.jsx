import AboutCard from "./AboutCard";
import Image from "next/image";

export default function About(){
    return(
        <div>
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                <div className="flex flex-wrap pb-10">
                        <div className="w-full px-4 ">
                            <div className=" text-center space-y-4">
                                <p className=" text-2xl font-semibold text-[#f75023]">About</p>
                                <p className=" text-4xl font-semibold"> My About Section</p>
                                <p className=" text-xl text-gray-400">Most common methods for designing websites that work well on desktop <br/> is responsive and adaptive design</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <AboutCard />
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 pb-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/2 px-4 w-full">
                            <div className="relative">
                                <Image className="mx-auto" width={100} height={100} layout="responsive" src="/img/group.jpg" alt="" />

                                <div className="bg-white h-20 w-40 rounded-md flex items-center justify-around absolute top-20">
                                    <p className=" text-4xl font-semibold text-green-500">1.5</p>
                                    <p className="font-semibold text-xl">year of <br/> Success</p>
                                </div>
                                <div className="bg-white h-20 w-40 rounded-md flex items-center justify-around absolute top-60 right-10">
                                    <p className=" text-4xl font-semibold text-purple-500">1k</p>
                                    <p className="font-semibold text-xl">Total <br/> Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full px-4 flex items-center pt-7 justify-end">
                            <div className="space-y-4 lg:text-left text-center">
                                <p className="text-[#f75023] text-2xl font-semibold">I'm a Developer</p>
                                <p className=" text-5xl font-semibold">I Can Design Anything You Want</p>
                                <p className=" text-xl text-gray-500">Hello there! I'm a web Developer, and I'm very passionate and dedicated to my work. With 1 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                                <div>
                                    <button className=" px-8 py-3 bg-[#f75023] text-white font-semibold border-2 border-[#f75023] hover:text-black duration-300 rounded-full hover:bg-white" type="">Hire Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}