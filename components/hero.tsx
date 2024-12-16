import Image from "next/image"
import Navbar from "./navbar"
import Button from "./button"
function Hero(){

    return(

        <>
            <Navbar/>
            <div className="px-[150px] flex flex-row mt-7 gap-8">
                
                 <div className="flex flex-col gap-8">

                    <div className="h-[150px] w-[2px] bg-white"></div>
                    <div className="flex flex-col gap-5">
                        <Image src="/picture/2bdba814805d367d7faf537519a128c7.png" alt="fb" width="20" height="20" className="logos"></Image>
                        <Image src="/picture/84dddf1d8b9bc95b4a094dd0d3efa64c.png" alt="tweeter" width="20" height="20" className="logos"></Image>
                        <Image src="/picture/84dddf1d8b9bc95b4a094dd0d3efa64c.png" alt="pintrest" width="20" height="20" className=" logos"></Image>   
                    </div>
                    <div className="h-[150px] w-[2px] bg-white"></div>

                </div> 
                <div className="w-[50vw]">
                    <p id="cursive"><span>Its Quick & </span><span id="cpa">a</span><span>musing!</span></p>
                    <p id="aa">
                            <span className="text-orange-500">Th</span><span className="text-white">e Art of speed</span>
                            </p>
                    
                    <div id="aaa" className="text-white"><p>Food Quality</p></div>
                    <p className="my-4 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quaerat esse magnam nihil maiores suscipit atque.
                    </p>
                    <Button text="See Menu"/>
                </div>
                <div>
                        <Image src="/picture/15aa0f4f312fd5f483e60b93f68c90ba.png" width={600} height={600} alt="main" id="hero-img"/>
                        <Image src="/picture/090e8fa1516523a278a8ff4dbb5cbba8.png" width={400} height={600} alt="main2" id="hero1-img" className=""/>
                </div>

            
            </div>
        </>
    )

}

export default Hero