
import Button from "./button"
import Image from "next/image"
function About(){
    return(
        <>
            <div className="px-[150px] flex flex-row mt-7 ml-12 gap-8">
               <div className="w-[50vw]">
                   <p id="cursive"><span><span className="text-[90px]">a</span>bout us</span></p>
                   <p id="aa">
                           <span className="text-orange-500">We</span><span className="text-white my-4"> create the best</span>
                           </p>
                   
                   <p id="aaa" className="text-white">foody product</p>
                   <p className="my-4 text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi adipisci <br /> iusto saepe neque, reiciendis nisi aliquid numquam laudantium obcaecati <br /> voluptates, molestiae blanditiis mollitia eius esse nobis laboriosam unde <br /> qui  porro  voluptate hic sed architecto, odio consequuntur. Odit molestiae <br /> voluptas  minus esse  explicabo?
                   </p>

                   <span className="flex gap-6 mt-10">
                    <Image src="/picture/check.png" alt="check" height={15} width={20} className="bg-white rounded-[50%]"/>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, esse.

                    </p>
                   </span>
                   <span className="flex gap-6 mt-5">
                    <Image src="/picture/check.png" alt="check" height={15} width={20} className="bg-white rounded-[50%]"/>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.</p>
                   </span>
                   <span className="flex gap-6 my-5">
                    <Image src="/picture/check.png" alt="check" height={15} width={20} className="bg-white rounded-[50%]"/>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur.</p>
                   </span>
                   <Button text="Read More" />
               </div>
               <div>
                        
               </div>

           
           </div>
        </>
    )
}
export default About