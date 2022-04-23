import Lottie from "lottie-react-web";
import { Fade } from "react-reveal";
import projectsAnimation from '../public/Animations/64947-working-man.json'

const ProjectsAnimation = () => (
    <Fade>
        <div className="w-full h-96 flex justify-center items-center">
            <div className="lg:mt-16">
                <Lottie
                    options={{
                        animationData: projectsAnimation,
                        autoplay: true,
                        loop: true
                    }}
                />
            </div>
        </div>
    </Fade>
)

export default ProjectsAnimation