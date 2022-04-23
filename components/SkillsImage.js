import Lottie from "lottie-react-web";
import Image from '../public/Animations/71676-ui-and-ux-design-isometric-animation.json'
import { Fade } from 'react-reveal'

const SkillsImage = () => (
    <Fade>
        <div className="w-full h-96 flex justify-center items-center z-40">
            <div>
                <Lottie
                    width={300}
                    options={{
                        animationData: Image,
                        autoplay: true,
                        loop: true
                    }}
                />
            </div>
        </div>
    </Fade>
)

export default SkillsImage