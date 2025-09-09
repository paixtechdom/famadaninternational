import { useState } from "react"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"


const Vision = [
    "To become a leading player in the sustainable use of pks biomass resource.",
    "To bring about impact-based solutions in agro-residuals",
    "To develop a capacity for 7000 metric tons of PKS Saw dust and Rice chaff per month.",
    "To lift the standard of peasants and rural communities’ livelihood through valve created biomass.",
    "To meet market demands and build strong relationship with stake holders.",
]

const Mission = [
    "To create at list 500 jobs opportunities by 2026",
    "To provide high quality pks products and services through efficient and environmentally responsible methods.",
    "Becoming a leader in the industry known for quality, innovation and positive impact. e.g., aiming to be a globally competitive entity.",

]


/*
    
    1. Words to use
    2. small screen size?a

*/

export const VisionMission = () => {
    const [ showVision, setShowVision ] = useState(false)


    const toggleDisplay = () => {
        setShowVision(!showVision)
    }


    return(
        <section className="w-full center md:my-[10vh] lg:mt-[5vh] min-h-[70vh] ">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 bg-secondary bg-opacity-30 rounded-2xl relative h-full py-0 pb-[5vh] lg:py-[5vh] gap-9 lg:gap-0">

                <div className={`transition-all duration-500 center p-7 absolute lg:w-6/12 top-0 h-full ${
                        showVision ? "right-0" : "right-[50%]"
                    }`}>
                    <div className="bg-primary w-full h-full rounded-xl cursor-pointer"></div>
                </div>


                
                <div className={`flex flex-col gap-5 lg:m-4 p-7 pt-[7vh] lg:pt-7 rounded-t-2xl lg:rounded-t-none z-10 w-full border border-secondary 
                    ${showVision ? "" : "lg:hidden"} bg-primary lg:bg-transparent`}>
                    <Parallax id={"vision"} className="w-full">
                        <div className={`text-zinc-800 text-2xl capitalize font-bold w-full`}>
                            Our Vision
                        </div>
                    </Parallax>

                    <div className="flex flex-col divide-y-2 divide-zinc-800 lg:divide-primary gap-2">
                        {
                            Vision.map((vis, i) => (
                                <Parallax key={i} id={TrimText(vis)} 
                                type={
                                    i % 2 == 0 ? "right" : "left"
                                }>
                                    <div key={i} className="flex items-start  font-bold text-zinc-800 h-[10vh] pt-5">
                                        <p>{vis}</p>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>

                <div className={`lg:m-4 rounded-2xl p-7 z-10 cursor-pointer w-full ${showVision ? "hidden lg:flex lg:justify-center lg:items-center" : "hidden"} `} onClick={
                    () => toggleDisplay()}>
                    <Parallax id={"toogleSmooth"}>
                    <div className="flex flex-col">
                            <div className="text-2xl capitalize  text-zinc-800 font-bold mb-4">
                                Our Mission
                            </div>
                        <Button 
                            text="Read more"
                            btnType="primary"
                            />
                    </div>
                    </Parallax>
                </div>


                <div className={`lg:m-4 rounded-2xl p-7 z-10 w-full cursor-pointer b g-red-500 ${showVision ? "hidden" : "hidden lg:flex lg:justify-cen ter lg:items-center"}`}
                onClick={() => toggleDisplay()}>
                    <Parallax id={"toogleVision"}>
                    <div className="flex flex-col w-full m-3">
                            <div className="text-2xl capitalize text-zinc-800 font-bold mb-4">
                                Our Vision
                            </div>
                        <Button 
                            text="Read more"
                            btnType="primary"
                            />
                    </div>                  
                    </Parallax>
                </div>
                
                <div className={`flex flex-col gap-5 lg:m-4 p-7 z-10 w-full center ${showVision ? "lg:hidden" : ""}`}>
                    <Parallax id={"runsSmoothly"} className="w-full">
                        <div className="text-zinc-800 text-2xl capitalize font-bold w-full">
                            Our Mission
                        </div>
                    </Parallax>

                    <div className="bg-se condary flex flex-col divide-y-2 divide-primary gap-2">                        
                    {Mission.map((desire, i) => (
                        <Parallax key={i} id={TrimText(desire)} 
                        type={
                            i % 2 == 0 ? "right" : "left"
                        }>
                            <div key={i} className="flex items-start  font-bold text-zinc-800 h-[10vh] pt-5">
                                <p>{desire}</p>
                            </div>
                        </Parallax>
                    ))}
                </div>
                </div>



            </div>
        </section>
    )
}