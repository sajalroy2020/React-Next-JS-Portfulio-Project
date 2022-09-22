import Image from "next/image";
export default function Contact(){
    return(
        <>
            <div className=" bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className=" text-center space-y-3 relative">
                                <div className="absolute -left-64 -top-44">
                                    <Image width={300} height={300} src="/img/zz.png" alt="" />
                                </div>
                                <p className=" text-2xl font-semibold text-[#f75023]">Contact Me</p>
                                <p className=" text-4xl font-semibold">I Want To Hear From You</p>
                                <p className=" text-xl text-gray-400">Please fill out the form on this section to contact with me. Or call between <br/> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-20">
                        <div className="lg:w-1/2 w-full px-4">
                            <div className=" space-y-5">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className=" space-y-1">
                                        <p className=" text-2xl font-semibold">Address</p>
                                        <p>20, Somewhere in world</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className=" space-y-1">
                                        <p className=" text-2xl font-semibold">Email</p>
                                        <p>someone@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className=" space-y-1">
                                        <p className=" text-2xl font-semibold">Phone</p>
                                        <p>+123 456 789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full px-4 lg:pt-0 pt-7">
                            <div className="flex flex-wrap">
                                <div className="md:w-1/2 w-full px-4 pt-3">
                                    <input className=" outline-none border-2 w-full p-3 rounded-md" type="text" placeholder="Your Name"/>
                                </div>
                                <div className="md:w-1/2 w-full px-4 pt-3">
                                    <input className=" outline-none border-2 w-full p-3 rounded-md" type="email" placeholder="Your Email"/>
                                </div>
                                <div className="md:w-1/2 w-full px-4 pt-3">
                                    <input className=" outline-none border-2 w-full p-3 rounded-md" type="email" placeholder="Your Phone"/>
                                </div>
                                <div className="md:w-1/2 w-full px-4 pt-3">
                                    <input className=" outline-none border-2 w-full p-3 rounded-md" type="email" placeholder="Your Subject"/>
                                </div>
                                <div className="w-full px-4 pt-3">
                                    <textarea className="outline-none border-2 rounded-md p-3 w-full" placeholder="Write Your Massege Here" name="" id="" cols="51" rows="7"></textarea>
                                </div>
                                <div className="pl-5 pt-5">
                                    <button className=" px-8 py-3 bg-[#f75023] text-white font-semibold border-2 border-[#f75023] hover:text-black duration-300 rounded-full hover:bg-white" type="">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="relative">
                                <div className="absolute -right-10 -top-60">
                                <Image width={150} height={200} layout="fixed" src="/img/xx.png" alt="" />
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.570492701049!2d89.55139091447592!3d22.818373629655934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8fff093a85eb%3A0xf4d367ff053cf71c!2sCodemen!5e0!3m2!1sen!2sbd!4v1649227945572!5m2!1sen!2sbd" width="100%" height="400" className="rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}