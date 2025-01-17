import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"


const About = () => {


    const [ hasCopied, setHasCopied] = useState(false);

    const handlecopy = () => {
        navigator.clipboard.writeText("riadmahamud173@gmail.com")

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }


  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="./assets/grid1.1.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain " />
                    <div>
                        <p className="grid-headtext">Hi, I'm Riad Mahamud</p>
                        <p className="grid-subtext">I have honed my skills in frontend developemnt, with a focus on animated 3D websites.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="./assets/grid2_animation.gif" alt="grid-2" className="w-full sm:w-[300px] h-fit object-contain rounded-lg" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in JavaScript with a focus on React and Next.js ecosystems.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="roundec-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        />
                    </div>

                    <div >
                        <p className="grid-headtext">I work remotely across most timezones.</p>
                        <p className="grid-subtext">I'm based in Bangladesh, with remote work available.</p>
                        <a href="https://wa.me/+8801740077206/" target="_blank" ><Button name="WhatsApp" isBeam containerClass="w-full mt-10" /></a>
                        
                        
                    </div>
                </div>

            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="./assets/grid3.1_animation.gif" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                    <div className="text-white">
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                    </div>
                </div>

            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="./assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handlecopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">riadmahamud173@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About