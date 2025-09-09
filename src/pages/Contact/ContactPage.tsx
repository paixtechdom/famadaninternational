import { Headers } from "../../assets/components/Headers"
import { Helmet } from "react-helmet-async"
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill, BsWhatsapp } from "react-icons/bs"


export const contactInfo = [
    {
        icon: <BsGeoAltFill />,
        contact: "No 6, Oluwadare Close, Off Oloritun Street, Lambe Junction, Ogun State",
        title: "Visit  Us",
        link: "#"
    },
    {
        icon: <BsTelephoneOutboundFill />,
        contact: "+234 803 413 9674",
        title: "Call Us",
        link: "tel:+2348034139674"
    },
    {
        icon: <BsWhatsapp />,
        contact: "+234 802 559 1096",
        title: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone=2348025591096"
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "famadaninternatioalimited@gmail.com",
        title: "Send a message",
        link: "mailto:famadaninternatioalimited@gmail.com"
    },
]

const ContactPage = () => {

  return (
    <>  
        <Helmet>
            <title>Contact | Famadan International Limited</title>
            <meta name="description" content="" />
        </Helmet>

        <main className='w-full min-h-screen center py-[15vh] bg-secondary bg-opacity-60'>
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-white">
            <div className="w-full mb-9">

                <Headers 
                    text="Contact Us"
                />
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-[50px] gap-x-[150px] relative">


            <div className="bg-primary flex flex-col justify-between text-gray-950 gray-se900 p-9 rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:gap-9">

                <div className="flex flex-col gap-5 h-[65%]">
                    {
                        contactInfo.map((contact, i) => (
                            <a target="_blank" href={`/${contact.link}`} key={i} className="flex gap-3 items-start flex-col">
                                <div className="flex items-center gap-2 text-xl">
                                    <div className="text">
                                        {contact.icon}
                                    </div>
                                    <p className="font-bold">{contact.title}</p>
                                </div>

                                <p>{contact.contact}</p>
                            </a>
                        ))
                    }
                </div>


                <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-20 rounded-full -right-[70px] -bottom-[35px]"></div>

                </div>
            </div>


            </div>       
        </main>
    </>
  )
}

export default ContactPage