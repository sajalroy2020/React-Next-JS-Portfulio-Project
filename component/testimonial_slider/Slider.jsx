import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default function Slider(){
    return(
        <div className="bg-gray-50 pt-40">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap pb-10">
                    <div className="w-full px-4 ">
                        <div className=" text-center space-y-4 relative">
                            <p className=" text-2xl font-semibold text-[#f75023]">Testimonial</p>
                            <p className=" text-4xl font-semibold">What My Clients Say</p>
                            <p className=" text-xl text-gray-400">Most common methods for designing websites that work well on desktop <br/> is responsive and adaptive design</p>
                            <img className="absolute -top-32 -right-20" src="/img/ss.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap pt-10">
                    <div className="lg:w-2/12 w-full px-4 lg:flex hidden items-center">
                        <div>
                            <img className="rounded-full w-20 transform translate-x-5" src="/img/cl2.jpg" alt=""/>
                            <img className="rounded-full w-16 transform -translate-x-32 translate-y-11" src="/img/cl3.jpg" alt=""/>
                            <img className="rounded-full w-10 transform translate-x-20" src="/img/cl4.jpg" alt=""/>
                            <img className="rounded-full w-9 transform translate-x-24 translate-y-20" src="/img/cl5.jpg" alt=""/>
                            <div className="w-10 h-10 bg-green-500 rounded-full transform -translate-y-40 -translate-x-14">

                            </div>
                            <div className="w-8 h-8 bg-yellow-500 rounded-full transform -translate-y-14">

                            </div>
                            <div className="w-11 h-11 bg-purple-500 rounded-full flex items-center justify-center transform -translate-y-52 translate-x-24">
                                <div className="h-9 w-9 bg-white rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-8/12 w-full px-4">
                        <div className="flex justify-center">
                            <div className=" space-y-6">
                                <AwesomeSlider >
                                    <div data-src="">
                                        <div className="pt-10">
                                            <p className=" text-center text-lg text-gray-500">Really the Code Quality, Customer Support, and design are awesome and its <br/> good support they are giving. They give an instant solution to our needs. <br/> Really awesome. I will strongly recommend to my friends. Simply amazing <br/> team and amazing theme! Thank you from United States of America!</p>
                                            <div className="flex justify-center items-center space-x-4 pt-5">
                                                <img className="w-20 rounded-full" src="/img/cl1.jpg" alt=""/>
                                                <div>
                                                    <p className=" text-xl font-semibold">Alan Walker</p>
                                                    <p className=" text-lg text-gray-400">Web Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-src="">
                                        <div className="pt-10">
                                            <p className=" text-center text-lg text-gray-500">Really the Code Quality, Customer Support, and design are awesome and its <br/> good support they are giving. They give an instant solution to our needs. <br/> Really awesome. I will strongly recommend to my friends. Simply amazing <br/> team and amazing theme! Thank you from United States of America!</p>
                                            <div className="flex justify-center items-center space-x-4 pt-5">
                                                <img className="w-20 rounded-full" src="/img/cl1.jpg" alt=""/>
                                                <div>
                                                    <p className=" text-xl font-semibold">Alan Walker</p>
                                                    <p className=" text-lg text-gray-400">Web Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-src="">
                                        <div className="pt-10">
                                            <p className=" text-center text-lg text-gray-500">Really the Code Quality, Customer Support, and design are awesome and its <br/> good support they are giving. They give an instant solution to our needs. <br/> Really awesome. I will strongly recommend to my friends. Simply amazing <br/> team and amazing theme! Thank you from United States of America!</p>
                                            <div className="flex justify-center items-center space-x-4 pt-5">
                                                <img className="w-20 rounded-full" src="/img/cl1.jpg" alt=""/>
                                                <div>
                                                    <p className=" text-xl font-semibold">Alan Walker</p>
                                                    <p className=" text-lg text-gray-400">Web Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AwesomeSlider>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/12 w-full px-4 lg:flex items-center hidden">
                        <div>
                            <img className="w-16 rounded-full transform translate-x-20" src="/img/cl7.jpg" alt=""/>
                            <img className="w-14 rounded-full transform translate-x-60 translate-y-20" src="/img/cl6.jpg" alt=""/>
                            <img className="w-20 rounded-full" src="/img/cl1.jpg" alt=""/>
                            <div className="w-10 h-10 bg-yellow-400 rounded-full transform -translate-y-40">
                            </div>
                            <div className="transform translate-x-32 -translate-y-32 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="h-12 w-12 bg-white rounded-full">
                                </div>
                            </div>
                            <div className="w-7 h-7 bg-purple-500 rounded-full transform translate-x-24">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}