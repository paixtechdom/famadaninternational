import { Link } from "react-router-dom"
import { logo, NavInfo } from "../Constants"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"
import { contactInfo } from "../../pages/Contact/ContactPage"


export const Footer = () => {
    
    return(
        <section className="bg-secondary bg-opacity-20 min-h-[40vh] center flex-col">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row justify-between gap-x-[150px] gap-[10vh] py-[8vh]">

                <div className="flex flex-col gap-6">
                    <img src={logo} alt="Cloud Transio Logo" className="h-fit w-3/12"/>
                    <div className="flex flex-col gap-3">
                        <div className="mb-2 text-xl text-gray-950 font-bold">Contact Us</div>
                        {
                            contactInfo.map((contact, i ) => (
                                <Parallax key={i} id={TrimText(contact.title)} type={
                                    i % 2 == 0 ? "right" : "left"
                                }>
                                    <a target="_blank" href={`/${contact.link}`} className="flex gap-2 text-black">
                                        <div className="mt-1">
                                            {contact.icon}
                                        </div>
                                        <div className="text-zinc-900">
                                            {contact.contact}
                                        </div>

                                    </a>
                                </Parallax>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-col gap-3 ">
                    <div className="mb-3 text-xl text-gray-950 font-bold">Links</div>
                    {
                        NavInfo.map((nav, i ) => (
                            <Parallax key={i} id={TrimText(nav.title)} type={
                                i % 2 == 0 ? "right" : "left"
                            }>

                                <Link to={`/${nav.link}`} className="text-zinc-950">
                                    {nav.title}
                                </Link>
                            </Parallax>
                        ))
                    }
                    <Parallax id={"contactus"} type={"left"}>
                        <Link to="/contact" className="text-zinc-950">Contact Us</Link>
                    </Parallax>
                </div>

            </div>

            <div className="center flex-col bg-zinc-900 text-secondary h-[10vh] py-5 w-full border-t border-primary">
                <p className="flex gap-1">
                    All rights reserved <span className="text-primary">{new Date().getFullYear()}</span>
                </p>
                <strong className="text-xl"> &copy; <span className="text-primary">Famadan International Limited</span></strong>
            </div>
        </section>
    )
}