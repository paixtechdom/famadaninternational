import { FC, useEffect, useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { Button } from "../../assets/components/Button"

export const AService:FC<any> = ({service, i}) => {
    
    const [ showMore, setShowMore ] = useState(false)
    useEffect(() => {
        if(i == 0) {
            setShowMore(true)
        }
    }, [])

    return(
      <div className="flex flex-col-reverse items-center lg:flex-row gap-3 relative h-full w-full">
  
          <div className="flex flex-col lg:w-7/12 pr-4 gap-2">
            <div className="flex items-center gap-2 bg-secondary rounded-2xl p-2 shadow-xl">
                <BiChevronRight className="text-2xl "/>
                <h2 className='text-xl font-bold text-blue'>{service.title}</h2>
            </div>
            <p className="">{service?.desc}</p>
  
            {
                showMore ?
                <>
                    {/* service categories */}
                        <div className="flex flex-col">
                            <h3 className='font-bold mt-2 mb-1'>
                            Applications
                            </h3>
                        
            
                        <div className="flex flex-col gap-2">
                        {
                            service.applications.map((application:string, i:number) => (
                            <div className="flex gap-2 items-start">
                                    <BsFillCheckCircleFill className="text-gray-950 mt-1"/>
                                <p key={i}>{application}</p>
                            </div>
                            ))
                        }
                        </div>
                        </div>


                    {/* service why */}
                        <div className="flex flex-col">
                            <h3 className='font-bold mt-2 mb-1'>
                            Why our {service.title}?
                            </h3>
                        
            
                        <div className="flex flex-col gap-2">
                        {
                            service.whys.map((why:string, i:number) => (
                            <div className="flex gap-2 items-start">
                                    <BsFillCheckCircleFill className="text-gray-950 mt-1"/>
                                <p key={i}>{why}</p>
                            </div>
                            ))
                        }
                        </div>
                        </div>
                </>
                :
                <div 
                        onClick={() => setShowMore(true)}
                >
                    <Button
                        text={"Read more"}
                        btnType="primary"
                    />
                </div>
            }


          </div>
  
  
  
          <div className="lg:w-5/12 w-full  h-[35vh] overflow-hidden rounded-xl">
            <img src={service.img} alt="" className="w-full h-auto rounded-xl shadow object-cover" />
          </div>
  
  
      </div>
    )
  }