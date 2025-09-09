import { Headers } from "../../assets/components/Headers"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentHoveredService } from "../../assets/store/navigation/navigationSlice"
import { Button } from "../../assets/components/Button"
import { Parallax } from "../../assets/components/Parallax"
import { TrimText } from "../../assets/Functions"
import { RootState } from "../../assets/store/AppStore"
import { products } from "../../assets/Constants"
import { Link } from "react-router-dom"
{/* <Suspense fallback={<></>}> */}




export const ServicesListing = () => {
    
    return(
        <div id="servicesListing" className="w-full center pt-[15vh]">
            <div className="w-11/12 lg:w-10/12 center flex-col  gap-[10vh] ">
                <div className="w-full">
                    <Headers 
                        text="Our Products"
                    />
                </div>


                <div className="w-full lg:w-11/12 flex flex-col gap-y-[10vh]">
                    {
                        products.map((product, i) => (
                            <ServicesComponent 
                                key={i}
                                title={product.title}
                                desc={product.desc[0]}
                                index={i}
                                img={product.img}                                
                            />
                        ))
                    }
                </div>
                <Link to="/products">
                <Button 
                    text="read more"
                    btnType={"primary"}
                    />
                </Link>
                
            </div>
        </div>
    )
}


interface serviceInterface {
    img: string,
    title: string,
    desc: string,
    index: number
}



const ServicesComponent:FC<serviceInterface> = ({img, title, desc, index}) => {
    const currentHoveredService = useSelector((state: RootState) => state.navigation.currentHoveredService)
    const dispatch = useDispatch()

    return(        
        <div 
            onMouseOver={() => {
                dispatch(setCurrentHoveredService(index))
            }}
            onMouseOut={() => {
                dispatch(setCurrentHoveredService(-1))
            }}
            className={`cursor-pointer flex items-center relative lg:justify-between flex-col
            ${index % 2 == 0 ? "lg:flex-row justify-start" : "lg:flex-row-reverse justify-end"} w-full`}>
                
            <Parallax id={TrimText(title)} type={index % 2 == 0 ? "left" : "right"} className="w-11/12 lg:w -fit">
                <div className="h-[40vh] lg:h-[55vh] w-full lg:w-8/12 rounded-2xl overflow-hidden bg-primary center border border-secondary"> 
                    <img src={img} alt={title} className="w-full h-full object-cover"/>
                </div>
            </Parallax>
            <div className={`flex flex-col p-6 transition-all duration-1000 ease-in-out rounded-2xl gap-6 shadow-xl w-full lg:w-6/12 mt-5 lg:mt-0 bg-opacity-40 backdrop-blur-xl bg-secondary relative lg:absolute
                ${index % 2 == 0 ? 
                    "lg:right-[10%]" : 
                    "lg:right-[40%]"
                }

                ${currentHoveredService == index ?
                    index % 2 == 0 ?
                    "lg:right-[-5%]" : 
                    "lg:right-[55%]" :
                    ""}`}>
                    
                <h2 className="font-bold text-xl">{title}</h2>
                
                <p>{desc}</p>

            </div>
            
        </div>

    )

}