export default function Footer(){
    return(
        <>
        <div className="bg-gray-200 py-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2 w-full px-4">
                        <div>
                            <p className=" text-sm text-center lg:text-left">Developed with love by <span className="font-semibold">Dev-sajal</span> © 2022</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex md:justify-end justify-center">
                        <div>
                            <ul className="flex items-center text-center lg:space-x-3 text-sm">
                                <li><a className="text-orange-600 tcn duration-300" href="">Terms&Condition</a></li>
                                <li><a className="text-orange-600 duration-300" href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}