import { Button } from "../../assets/components/Button"
import { Headers } from "../../assets/components/Headers"
import { ImageText } from "../../assets/components/ImageText"
import story from "../../assets/images/8.jpg"
import goal from "../../assets/images/17.png"

import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"
import { VisionMission } from "../home/VisionMission"


export const whyUsInfo = [
    {
        title: "Sustainability First",
        desc: "We emphasize responsible sourcing and eco-friendly practices.",
        img: "personalizedSupport"
    },
    {
        title: "Community Impact",
        desc: "Supporting local communities with job creation and fair labor practices.",
        img: "continuousMonitoring"
    },
    {
        title: "Quality Assurance",
        desc: "Rigorous washing, sorting, and loading under expert supervision.",
        img: "seamlessIntegration"
    },
    {
        title: "Reliable Supply ",
        desc: "Multiple sourcing sites, storage dumps, and transportation capacity of 30–50 trucks weekly.",
        img: "educationalResources"
    },
]

export const commitment = [
    {
        title: "No Poverty",
        desc: "Providing income opportunities for rural families.",
        img: "personalizedSupport"
    },
    {
        title: "Decent Work",
        desc: "Ensuring no child labor, only skilled community labor.",
        img: "personalizedSuort"
    },
    {
        title: "Sustainable Communities",
        desc: "Reducing harmful waste burning practices.",
        img: "perlizedSupport"
    },
    {
        title: "Climate Action",
        desc: "Transforming waste into energy, lowering environmental hazards.",
        img: "personalupport"
    },

]

export const edges = [
    {
        title: "Sustainability",
        desc: "we emphasize sustainable sourcing practices such as responsible land use and waste reduction, to enhance our company’s environmental reputation.",
        img: "persdSupport",
        icon: ""
    },
    {
        title: "Community Engagement",
        desc: "We contribute to development through positive relationship with local communities, by addressing concerns and providing possible benefits to them.",
        img: "persdSupport",
        icon: ""
    },
    {
        title: "Quality Assurance",
        desc: "We ensure, under the supervision of a trained coordinator, rigorous washing, sorting and supervised loading at each location.",
        img: "persdSupport",
        icon: ""
    },
    {
        title: "Logistics Strength",
        desc: "We use 20-30 tons of truck for loading which is normally sent from different companies in need of it. And we are capable of loading up to 30-50 trucks per week from different locations to different plant.",
        img: "persdSupport",
        icon: ""
    },
    {
        title: "Diversity of Palm Tree Source",
        desc: "we have imported Malaysia hybrid palm trees for plantation, to ensure a stable and reliable supply.",
        img: "persdSupport",
        icon: ""
    },
    {
        title: "Dumb Site",
        desc: "We have a large portion of dump site at cross river state where materials are stored and readily available at any time for our customers.",
        img: "persdSupport",
        icon: ""
    },
]



const AboutPage = () => {
  return (
    <>
        <Helmet>
            <title>About | Famadan International Limited</title>
            <meta name="description" content="" />
        </Helmet>

        <main className='w-full min-h-[70vh] center flex-col pt-[15vh] lg:pt-[20vh]'>
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-white">

                <div className="flex flex-col gap-4 w-full lg:w-9/12">
                    <Headers 
                        text="About Us"
                    />
                    <Parallax id={"aboutHeroUpperText"} type="left">
                        <p className="leading-relaxed tracking-wide text-black">
                        Famadan international limited is a company that specializes in the sourcing of bioenergy materials such as PKS, Rice chaff and saw dust whose approach to trading is impact based.
                        </p>
                    </Parallax>
                    <Parallax id={"aboutHeroLowerText"} type="right">
                        <p className="leading-relaxed tracking-wide text-black">
                        The sole aim of the company is to stop the practice of burning agricultural waste that causes both environmental and health hazards, in which can be converted into usable energy thereby providing job opportunities and eradicating poverty in return.
                        </p>
                    </Parallax>

                    <Parallax id={"aboutHeroButtons"}>
                        <div className="flex items-center gap-4 mt-4">
                            <Link to="/contact">
                                <Button 
                                    text={"Contact us"}
                                    btnType="secondary"
                                />
                            </Link>
                        </div>
                    </Parallax>
                </div>
            </div>

            <ImageText 
                header="Our Story"
                img1={story}
                desc={[
                    "Since our inception, we have focused on sourcing biomass responsibly from palm oil mills, rice milling facilities, sawmills, and furniture factories across Nigeria. By building strong partnerships with local producers, we ensure a consistent and reliable supply of high-quality materials.",
                    "Our operations span multiple states — including Cross River, Port Harcourt, Ondo, and Ebonyi — supported by storage dumps and transportation capacity that allow us to serve both local and international clients efficiently."]}
            />

            <VisionMission />

            <ImageText 
                header="Our Goals"
                img1={goal}
                desc={[
                    "To maximize the value of palm kernel shells, saw dust and rice chaff by utilizing them as a renewable fuel source and for various industrial applications.",
                    "This includes energy production (co-firing with coal or as a standalone fuel), production of activated carbon and as material for construction and other industrial uses",
                    "We aim to strengthen relationships with stakeholders through trust, sustainability, and reliable service.And to develop a monthly capacity of 7,000 metric tons of biomass resources."
                ]}
            />

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
            


            <div id="edge" className="w-full bg-secondary bg-opacity-40 border-y border-primary border-opacity-60 backdrop-blur-2xl min-h-[70vh] center py-[15vh]">
                <div className="w-11/12 lg:w-10/12 flex items-center flex-col xl:flex-row gap-9 text-white">

                    <div className="flex flex-col gap-4 w-full xl:w-6/12">
                        <Headers 
                            text="Our Competitive Edge"
                            bg="primary"
                        />
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                            edges.map((item, i) => (
                                <Parallax key={i} id={TrimText(item.title)} type={
                                    i % 2 == 0 ? "left" : "right"
                                }>
                                <div
                                    className="p-6  rounded-xl shadow-xl bg-secondary bg-opacity-15 hover:shadow-lg transition"
                                >
                                    <div className="flex justify-center mb-4">
                                        {item.icon}
                                    </div>
                                        <h3 className="text-xl font-semibold mb-2 text-center text-tertiary">
                                        {item.title}
                                        </h3>
                                        <p className="text-gray-800 text-center">{item.desc}</p>
                                    </div>
                                    
                            </Parallax>
                            ))
                        }
                    </div>
                </div>
            </div>
            


        </main>
    </>
  )
}

export default AboutPage