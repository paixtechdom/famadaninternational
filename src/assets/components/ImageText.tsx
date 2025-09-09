import { FC } from "react"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"

interface ImageTextInterface {
    img1: string,
    header: string
    desc: string[],
    btn?: JSX.Element,
    span?: string,
    subHeader?: string
}

// const imageClass = " font - color - navbar ( home services about ) - services on the home page"

export const ImageText:FC<ImageTextInterface> = ({img1, header, desc, btn, span, subHeader}) => {
  return (

    <section className="w-full center my-[10vh] mb-[15vh]">
        <div className="flex flex-col-reverse w-11/12 lg:w-10/12 lg:flex-row justify-between gap-[50px] gap-y-12">
            <div className="w-full lg:w-11/12 relative flex flex-col">
                <Parallax id={TrimText(header)+"img"} type="left">
                    <div className="h-[40vh] md:w-[50vh] lg:h-[35vh] w-full lg:w-9/12  shadow-xl overflow-hidden blob">
                        <img src={img1} alt="" className="w-full h-full object-cover"/>
                    </div>
                </Parallax>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <Parallax id={TrimText(header)} type="right">
                    <h2 className="text-zinc-900 font-bold text-4xl relative">{header} <br />
                        {
                            span && <span className="text-zinc-900">{span}</span>
                        }
                    </h2>
                </Parallax>

                <Parallax id={TrimText(header)+'subHeader'} type="left">
                    <h3 className="font-bold text-xl text-zinc-800">{subHeader}</h3>
                </Parallax>

                <Parallax id={TrimText(header)+'desc'} type="left">
                    <div className="flex flex-col gap-2 tracking-wide leading-relaxed text-black">
                        {
                            desc.map((d, i) => (
                            <p key={i} className="">{d}</p>
                        ))}
                    </div>
                </Parallax>
                {
                    btn &&
                    <Parallax id={TrimText(header)+'btn'}>
                        {btn}
                    </Parallax>
                }
            </div>
        </div>
    </section>
  )
}
