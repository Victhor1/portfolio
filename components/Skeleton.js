import Lottie from 'lottie-react-web'
import { Fade, Zoom, Bounce } from 'react-reveal'
import Loader from '../public/Animations/72284-rocket-animation.json'
import Image from '../public/Animations/lf30_editor_vpkcrecd.json'

export const Skeleton = () => (
    <Bounce big>
        <div className="col-span-2 w-full h-96 flex justify-center items-center z-40">
            <Lottie 
                options={{
                    animationData: Loader,
                    autoplay: true,
                    loop: true
                }}
            />
        </div>
    </Bounce>
)

export const SkeletonImage = () => (
    <Fade>
        <div className="w-full h-96 flex justify-center items-center z-40">
            <div>
                <Lottie
                    width={250}
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