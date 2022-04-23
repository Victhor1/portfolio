import Lottie from "lottie-react-web";
import { Fade } from "react-reveal";
import animationUser from '../public/Animations/67856-men-1.json'

const UserAnimation = () => (
    <Fade>
        <div className="w-full h-96 flex justify-center items-center">
            <div className="lg:mt-16">
                <Lottie
                    options={{
                        animationData: animationUser,
                        autoplay: true,
                        loop: true
                    }}
                />
            </div>
        </div>
    </Fade>
)

export default UserAnimation