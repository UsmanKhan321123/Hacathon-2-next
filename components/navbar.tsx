import Image from "next/image"
function Navbar() {

    return (< div className="" >
    

            <div className="text-center text-2xl font-bold ">
                <span className=" text-orange-500">Food</span>
                <span className="text-white">tuck</span>
            </div>
            <div className="flex justify-center w-[90vw] px-10">

                <div className="flex m-[0px 100px 0px 0px] text-white bg-black" >

                    <button className="mx-4 ">Home</button>
                    <button className="mx-4 ">Menu</button>
                    <button className="mx-4 ">Blog</button>
                    <button className="mx-4 ">pages</button>
                    <button className="mx-4 ">About</button>
                    <button className="mx-4 ">Shop</button>
                    <button className="mx-4 ">Contact</button>
                </div>
                        <div className="flex w-[18vw] h-[40px] ml-24 px-5 py-1 border-orange-400 border-2 rounded-3xl ">
                            <div className="text-white">Search...</div>
                            <p className="mx-24 ">&#128269;</p>

                      
                        {/* <img src="/picture/search-interface-symbol.png" width={10} height={10} alt="basket" className="bg-white"></img> */}
                </div>




            </div>

   
        </div>
    )
}
export default Navbar