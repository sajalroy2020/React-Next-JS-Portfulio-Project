import PortfolioImg from "./PortpolioImg";

export default function Portfolio(){
    return(
        <div className="bg-gray-50 py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className=" text-center space-y-5 relative">
                            <p className=" text-2xl text-[#f75023] font-semibold">Portfolio</p>
                            <p className=" text-4xl font-semibold">My Amazing Works</p>
                            <p className=" text-xl text-gray-400">Most common methods for designing websites that work well on desktop <br/> is responsive and adaptive design</p>
                            <img className="absolute -top-60 right-10" src="/img/side.png" alt="" />
                            <img className=" absolute left-10 top-0" src="/img/side2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 flex justify-center mt-20">
                        <div>
                            <ul className="flex items-center text-xl font-semibold space-x-6">
                                <li className=" cursor-pointer">All</li>
                                <li className=" cursor-pointer">Youtube</li>
                                <li className=" cursor-pointer">Vimeo</li>
                                <li className=" cursor-pointer">Soundcloud</li>
                                <li className=" cursor-pointer">Popup</li>
                                <li className=" cursor-pointer">Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <PortfolioImg image="/img/web1.png" mainTitle="Studio Agency" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                    <PortfolioImg image="/img/web2.png" mainTitle="Website 1" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                    <PortfolioImg image="/img/web3.png" mainTitle="Portfolio" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                    <PortfolioImg image="/img/web4.png" mainTitle="Product Web" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                    <PortfolioImg image="/img/web5.png" mainTitle="Studio Agency" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                    <PortfolioImg image="/img/web6.png" mainTitle="Blog Agency" subTitle="It has been used background video and vedio popup.You can use it for all kinds of agencies studio." />
                </div>
            </div>
        </div>
    )
}