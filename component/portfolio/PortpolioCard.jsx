export default function PortfoCard({item}){

    let {id, mainTitle, subTitle, image} = item;
    return(
        <>
            <div className="lg:w-1/3 w-full px-4 pt-20">
                <div className=" space-y-2 text-center lg:text-left">
                    <img className="hover:shadow-md mx-auto shadow-gray-500 rounded-md transform hover:-translate-y-5 duration-500" src={image} alt="" />
                    <p className=" text-3xl font-semibold">{mainTitle}</p>
                    <p>{subTitle}</p>
                </div>
            </div>
        </>
    )
}