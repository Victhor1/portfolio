import { skills } from '../user'
import { Fade, Zoom } from 'react-reveal'

const SkillsMap = () => (
    <Fade>
        <div className=" rounded-lg lg:shadow-2xl col-span-2 w-full h-full lg:h-96 relative">

        <div className="hidden lg:block">
                <div className="absolute top-0 -left-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 left-56 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-yellow-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob2"></div>
            </div>

            <div className="isolate lg:p-4 w-full h-full lg:h-96">
                
                <div className="sidebar-portfolio grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 h-full overflow-y-auto px-4">
                {
                    skills.map(({skill, img}, i) => (
                        <div className="w-full text-center" key={i}>
                            <Zoom>
                                <figure className="overflow-hidden w-full h-32 rounded-lg shadow-lg relative">
                                    <img src={`/${img}`} alt="" className="w-full h-full object-cover transform hover:rotate-6 hover:scale-125 transition-all duration-300 ease-in-out box-border max-w-full filter saturate-150" />
                                    <div className="absolute bottom-0 text-xs text-white bg-gradient-to-t from-gray-900 w-full font-bold py-3">
                                        <p>
                                            {skill}
                                        </p>
                                    </div>
                                </figure>
                            </Zoom>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        
    </Fade>
)

export default SkillsMap