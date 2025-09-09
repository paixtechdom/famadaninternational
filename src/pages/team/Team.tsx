import { Headers } from '../../assets/components/Headers'
import { Helmet } from 'react-helmet-async'
import { Parallax } from '../../assets/components/Parallax'
import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'
import tobi from "./tobi.png"
import eze from "./eze.png"
import together from "../../assets/images/19.png"
import { ImageText } from '../../assets/components/ImageText'


export const Team = () => {
    const members = [
        {
            name: "Mr. Tobi Okechukwu",
            position: "Managing Director",
            img: tobi,
            desc: [
                "Mr. Tobi Okechukwu is a business man,who started his career with ViJu Milk Company as a transport agent from 2003 to 2006. He was also a major supplier for Bobo milk company From Lagos to different states and outside the country (such as Ghana)",
                "In 2010 to 2015, he ventured into importation of Apple from south Africa to Nigeria (Ijora -7up) Lagos.",
                "In 2015, he went into palm tree business with a large portion of land for plantation located at Ikom local government area of Cross River State. He currently has two (2) oil mills in cross river state and dump site for palm kernel shells."
            ],
        },
        {
            name: "Eze Faith",
            position: "Board member",
            img: eze,
            desc: [
                "Eze faith holds B.Sc/B.Ed in Guidance and Counselling /Political Science from university of Ibadan. 2012.  And a Master degree in Educational Psychology, University of Lagos State. 2015. ",
                "She is also a certified member of Charted Institute of Personnel Management (CIPM). 2016.Her career experience is multi- sectoral with two level management roles in Logistics and Administration. She is currently working with Euro-mega Atlantic Nigeria Limited."
            ],
        }
    ]


    const othermembers = [
    {
        name: "Peter Glory",
        position: "Logistics Manager",
    },
    {
        name: "Emmanuel Osawaye",
        position: "Foreman",
    }

]
  return (
    <>
        <Helmet>
            <title>Our Team – Famadan International Limited</title>
            <meta name="description" content="" />
        </Helmet>

        <main className='"w-full min-h-screen center flex-col py-[10vh] pt-[15vh] lg:pt-[20vh]'>
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-9">

                <div className="flex lg:min-h-[70vh] flex-col gap-4 w-full lg:w-9/12">
                    <Headers 
                        text="Meet the People Behind Our Success"
                    />
                    <Parallax id="servicesHeroUpperText" type="left">
                        <p className="leading-relaxed tracking-wide text-zinc-900">
                        At Famadan International Limited, our strength lies in the dedication, expertise, and vision of our team. Together, we are committed to creating sustainable solutions that benefit industries, communities, and the environment.
                        </p>
                    </Parallax>
                    <Parallax id="servicesHeroButtons">
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

                <div className="flex flex-col gap-16 mt-[10vh] w-full">
                    {
                        members.map((member, i) => (
                            <div key={i} className="flex flex-col w-full">
                                <div className="flex flex-col gap-2">
                                    <img src={member.img} alt={member.name} className='overflow-hidden rounded-2xl object-cover h-[45vh] bg-red-300 w-fit'/>

                                    <h3 className='text-lg text-gray-900 font-bold'>{member.name}</h3>
                                    <p className='text-gray-900 uppercase'>{member.position}</p>
                                </div>

                                <div className="flex flex-col gap-2 mt-5">
                                    {member.desc.map((d, i) => (
                                        <p key={i}>{d}</p>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                    
                    {
                        othermembers.map((member, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <h3 className='text-lg text-gray-900 font-bold'>{member.name}</h3>
                                <p className='text-gray-900 uppercase'>{member.position}</p>
                            </div>

                        ))
                    }
                </div>


                
            </div>    

            <ImageText 
                    header="Together, We Deliver"
                    img1={together}
                    desc={[
                        "Our team is united by a vision of creating sustainable impact through innovative use of agro-residuals. With leadership, expertise, and community partnership, Famadan International Limited is set to become a leading player in the biomass industry."
                    ]}
                    btn={
                        <Link to="/contact">
                            <Button 
                                text="Contact Us"
                                btnType="primary"
                            />
                        </Link>
                    }
                />      

        </main>
    </>
  )
}
