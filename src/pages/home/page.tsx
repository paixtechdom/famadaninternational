import { Hero } from "./Hero"
import { Helmet } from "react-helmet-async"
import { ServicesListing } from "./ServicesListing"
import { ImageText } from "../../assets/components/ImageText"
import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
import hero from "../../assets/images/images (6).jpeg"
import { Headers } from "../../assets/components/Headers"
import { Parallax } from "../../assets/components/Parallax"
import { commitment, whyUsInfo } from "../About/AboutPage"
import { TrimText } from "../../assets/Functions"



const HomePage: React.FC = () => {


    return(
        <>
            <Helmet>
                <title>Famadan International Limited</title>
                <meta name="description" content="" />
            </Helmet>
            <main className="center flex-col relative text-black">
                               
                <Hero />

                <ImageText 
                    header="Who We Are"
                    img1={hero}
                    desc={["Famadan International Limited is a bioenergy company committed to sourcing, processing, and supplying agro-based biomass materials." ,
                    "Our mission is simple: stop harmful agricultural waste burning and transform these materials into sustainable energy solutions that improve livelihoods and protect the environment."]}
                    btn={
                        <Link to="/about">
                            <Button 
                                text="Read more"
                                btnType="primary"
                            />
                        </Link>
                    }
                />                
                <ServicesListing />
                
                <div id="whyus" className="w-full bg-secondary bg-opacity-40 border-y border-primary border-opacity-60 backdrop-blur-2xl min-h-[70vh] center py-[15vh] mt-[10vh]">
                <div className="w-11/12 lg:w-10/12 flex items-center flex-col xl:flex-row gap-9 text-white">

                    <div className="flex flex-col gap-4 w-full xl:w-6/12">
                        {/* <h2 className="text-3xl font-bold uppercase"></h2> */}
                        <Headers 
                            text="Why choose us?"
                            bg="primary"
                        />
                        <Parallax id="whydesc">
                            <p className="text-black leading-relaxed tracking-wide">Our Competitive Edge</p>
                        </Parallax>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 w-full">
                        {
                            whyUsInfo.map((why, i) => (
                                <Parallax key={i} id={TrimText(why.title)} type={
                                    i % 2 == 0 ? "left" : "right"
                                }>
                                    <div className="flex p-7 shadow-xl rounded-xl lg:min-h-[15vh] bg-primary g-opacity-70 gap-3 items-start relative">

                                        <div className="absolute top-5 right-5 rounded-full size-4 bg-zinc-900"></div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-bold text-zinc-900 text-xl">
                                                {why.title}
                                            </h3>
                                            <p className="text-black">{why.desc}</p>
                                        </div>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div id="commitment" className="w-full bg-secondary bg-opacity-40 border-y border-primary border-opacity-60 backdrop-blur-2xl min-h-[70vh] center py-[15vh]">
                <div className="w-11/12 lg:w-10/12 flex items-center flex-col xl:flex-row gap-9 text-white">

                    <div className="flex flex-col gap-4 w-full xl:w-6/12">
                        <Headers 
                            text="Our Commitment to Sustainability"
                            bg="primary"
                        />
                        <Parallax id="whydesc">
                            <p className="text-black leading-relaxed tracking-wide">At Famadan, we align our operations with the UN Sustainable Development Goals (SDGs)</p>
                        </Parallax>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 w-full">
                        {
                            commitment.map((commit, i) => (
                                <Parallax key={i} id={TrimText(commit.title)} type={
                                    i % 2 == 0 ? "left" : "right"
                                }>
                                    <div className="flex p-7 shadow-xl rounded-xl lg:min-h-[15vh] bg-primary g-opacity-70 gap-3 items-start relative">

                                        <div className="absolute top-5 right-5 rounded-full size-4 bg-zinc-900"></div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-bold text-zinc-900 text-xl">
                                                {commit.title}
                                            </h3>
                                            <p className="text-black">{commit.desc}</p>
                                        </div>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>
            </div>

                {/* <Testimonials /> */}
                
            </main>

            
        </>
    )
}


export default HomePage