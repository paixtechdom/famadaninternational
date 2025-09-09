import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'
import { Headers } from '../../assets/components/Headers'
import { Helmet } from 'react-helmet-async'
import { products } from '../../assets/Constants'
import { AService } from './AService'
import { ImageText } from '../../assets/components/ImageText'
import hero from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
import img7 from "../../assets/images/7.jpg"
import img8 from "../../assets/images/9.jpg"
import img9 from "../../assets/images/10.jpg"
import img10 from "../../assets/images/11.jpg"
import img11 from "../../assets/images/16.png"
import img12 from "../../assets/images/8.jpg"

const imgs = [
    img2,
    img3,
    img4,
    img6,
    img5,
    img8,
    img7,
    img10,
    img9,
    img11,
    img12,
]
const Services = () => {
  return (
    <>
        <Helmet>
            <title>Products | Famadan International Limited</title>
            <meta name="description" content="" />
        </Helmet>

        <main className='"w-full min-h-screen center flex-col pt-[5vh]'>

        <ImageText
            header="What we do"
            img1={hero}
            desc={["We specialize in the procurement, processing, and distribution of agro-based biomass materials. These by-products, often considered waste, are transformed into valuable resources for energy, construction, agriculture, and industrial use."]}
            btn={
            <Link to="/contact">
                <Button 
                    text={"Contact us"}
                    btnType="secondary"
                />
            </Link>

            }
        />             


      
        
        <section className='flex flex-col gap-9 w-11/12 lg:w-10/12 mt-[12vh]'>
            <Headers 
                text='Our key materials include:'
                bg='primary'
            />
            <div className="flex flex-col gap-[10vh]">
                {
                    products.map((product, i) => (
                        <AService
                            service={product}
                            key={i}
                            i={i}
                        />
                    ))
                }
            </div>


            <div className="grid grid-cols-3 gap-2 lg:gap-4">
                {
                    imgs.map((img, i) => (
                        <img src={img} alt="" key={i}
                            className='w-full h-[20vh] object-cover rounded-lg'
                        />
                    ))
                }
            </div>
        </section>
        

    </main>
        

    </>
  )
}

export default Services