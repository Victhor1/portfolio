import { Fade, Zoom } from "react-reveal";
import Image from 'next/image'

const Projects = () => (
    

    <Fade>
        <div className=" rounded-lg lg:shadow-2xl col-span-2 w-full h-full lg:h-96 relative">

        <div className="hidden lg:block">
                <div className="absolute top-0 -left-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 left-56 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-yellow-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob2"></div>
            </div>

            <div className="isolate bg-gray-900 bg-opacity-70 rounded-md lg:p-4 w-full h-full lg:h-96">
                
                <div className="sidebar-portfolio h-full overflow-y-auto px-4">
                <Zoom>
                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 lg:space-y-0 space-y-4 items-center justify-center mt-4"> 
                        <div className="w-80 h-32 px-4 lg:px-0">
                            <img src="/portfolio.png" className="w-full h-full rounded-md object-cover shadow-lg" />
                        </div>
                        <div className="w-full h-full">
                            <div className="flex items-center justify-center space-x-2">
                                <p className="font-bold text-center text-xl">Portfolio</p>
                                <p className="bg-green-600 text-xs rounded-full px-2 py-1">En Producción</p>
                            </div>
                            <p className="text-justify">
                                Portafolio personal dedsarrollado en JavaScript con la ayuda de Nextjs framework basado en React que a su vez es ideal para producción
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 lg:space-y-0 space-y-4 items-center justify-center mt-8"> 
                        <div className="w-80 h-32 px-4 lg:px-0">
                            <img src="/deliveryApp.png" className="w-full h-full rounded-md object-cover shadow-lg" />
                        </div>
                        <div className="w-full h-full">
                            <div className="flex items-center justify-center space-x-2">
                                <p className="font-bold text-center text-xl">Delivery App </p>
                                <p className="bg-yellow-600 text-xs rounded-full px-2 py-1">En desarrollo</p>
                            </div>
                            <p className="text-justify">
                                Aplicación Móvil ecomerce "DeliveryApp(Nombre no oficial)".<br/>
                                Está aplicacion esta siendo desarrollada usando la tecnologia JavaScript, empleando ReactNative como la tecnologia frontend y Laravel, Mysql como la tecnologia backend.<br/>
                                Esta pensada para poder aceptar pagos online usando la pasarela de pagos Stripe
                            </p>
                        </div>
                    </div>
                </Zoom>
                </div>
            </div>
        </div>

    </Fade>
)

export default Projects