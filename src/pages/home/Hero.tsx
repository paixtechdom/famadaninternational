import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
// import vid from "../../assets/videos/abstract 1.mp4"
import video from "../../assets/videos/abstract 5.mp4"




export const Hero: React.FC = () => {
    return(
    <div className="h-[90vh] w-full center z-6 relative md:mt-[5vh] lg:mt-0 bg-heroSm lg:bg-hero bg-ce nter bg-cover bg-no-repeat bg-fixed bg-[50%]"> 

            <div className="absolute top-0 w-full h-full center bg- zinc-700">
                <div className="absolute top-0 h-full w-full bg-black bg-opacity-[0.98] lg:bg-opacity-[0.96]"></div>
                <video loop={true} autoPlay={true} controls={false} muted={true}

                    src={video}

                    className={"w-full h-full object-cover"}
                    
                ></video>
            </div>

            <div className="w-full lg:w-10/12 flex justify-center lg:justify-start">

                <div className="w-11/12 xl:w-8/12 justify-center flex flex-col gap-4 p- min-h-screen mb-[10vh]">
                        
                    <Parallax id={"hero"} type="right">
                        <h1 className="font-bold text-zinc-300 text-4xl lg:text-5xl uppercase">
                            Transforming 
                            <span className="text-primary"> Agro-Waste </span>
                             into <br />
                            <span className="text-primary"> Sustainable Energy</span>
                        </h1>
                    </Parallax>


                    <Parallax id={"hero"} type="left">
                        <p className="text-lg text-zinc-200">
                        We specialize in the procurement and supply of Palm Kernel Shells, Rice Chaff, and Sawdust — turning agricultural by-products into valuable energy and industrial resources.

                        </p>
                    </Parallax>

                    <Parallax id={"hero"}>
                        <Link to="/contact" className="mt-4">
                            <Button
                                text={"Contact Us"}
                                btnType="gold"
                                baseTextColor="text-gray-300"
                            />
                        </Link>
                    </Parallax>
                    
                </div>

            </div>
        </div>
    )
}
