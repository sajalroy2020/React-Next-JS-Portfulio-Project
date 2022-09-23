import { useState } from "react";
import ImgList from "./PortfulioImg";
import PortpolioCard from "./PortpolioCard";

export default function Portfolio(){

    const [allItems, setAllItems]= useState(ImgList);

    const fillterItem =(catItem)=>{
        const updateItem = ImgList.filter((cerEle)=>{
            return cerEle.category == catItem;
        });
        setAllItems(updateItem);
    }

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
                                <li className="duration-300 cursor-pointer" onClick={()=>setAllItems(ImgList)}>All</li>
                                <li className="duration-300 cursor-pointer" onClick={()=>fillterItem('Youtube')}>Youtube</li>
                                <li className="duration-300 cursor-pointer" onClick={()=>fillterItem('Web')}>Web</li>
                                <li className="duration-300 cursor-pointer" onClick={()=>fillterItem('App')}>App</li>
                                <li className="duration-300 cursor-pointer" onClick={()=>fillterItem('Game')}>Game</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        allItems.map((item) => (<PortpolioCard key={item.id} item={item} />))
                    }
                </div>
            </div>
        </div>
    )
}