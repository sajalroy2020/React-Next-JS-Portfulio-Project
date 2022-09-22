export default function Skills(){
    return(
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 w-full px-4 flex items-center">
                        <div className=" space-y-5 text-center lg:text-left">
                            <p className="text-2xl font-semibold text-[#f75023]">Design is Life</p>
                            <p className=" text-4xl font-semibold">I Develop Skills Regularly to Keep Me Update</p>
                            <p className=" text-xl text-gray-500">Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex space-x-48 pb-3">
                                            <p>HTML</p>
                                            <p>85%</p>
                                        </div>
                                        <div className="w-96 h-2 bg-gray-400 rounded-full">
                                            <div className="w-72 h-2 bg-[#f75023] rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex space-x-48 pb-3">
                                            <p>CSS</p>
                                            <p>65%</p>
                                        </div>
                                        <div className="w-96 h-2 bg-gray-400 rounded-full">
                                            <div className="w-64 h-2 bg-yellow-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex space-x-48 pb-3">
                                            <p>Tailwind</p>
                                            <p>95%</p>
                                        </div>
                                        <div className="w-96 h-2 bg-gray-400 rounded-full">
                                            <div className="w-80 h-2 bg-green-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex space-x-48 pb-3">
                                            <p>Javascript</p>
                                            <p>70%</p>
                                        </div>
                                        <div className="w-96 h-2 bg-gray-400 rounded-full">
                                            <div className="w-52 h-2 bg-purple-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex space-x-48 pb-3">
                                            <p>React</p>
                                            <p>50%</p>
                                        </div>
                                        <div className="w-96 h-2 bg-gray-400 rounded-full">
                                            <div className="w-52 h-2 bg-sky-700 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="lg:w-1/2 w-full px-4 pt-10">
                        <div className="relative">
                            <img className="w-96 mx-auto lg:mx-0" src="/img/gg.jpg" alt="" />
                            <img className="absolute -right-10 top-96" src="/img/qq.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}