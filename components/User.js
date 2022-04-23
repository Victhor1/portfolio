import { Fade, Zoom } from "react-reveal"

const User = () => (
    <Fade>
        <div className="rounded-lg shadow-2xl col-span-2 w-full h-full lg:h-96 relative">
            <div className="hidden lg:block">
                <div className="absolute top-0 -left-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob"></div>
                <div className="absolute top-0 left-56 w-12 h-12 lg:w-96 lg:h-96 rounded-full bg-yellow-500 mix-blend-multiply filter blur-3xl brightness-125 animate-blob2"></div>
            </div>
            <div className="isolate bg-gray-900 bg-opacity-70 rounded-md p-4 lg:p-16 flex flex-col justify-center w-full h-full lg:h-96">
                <Zoom>
                    <div className="mb-4 text-center">
                        <p className="font-bold text-3xl">Víctor Ali Ramírez Velázquez</p>
                        <p className="font-semibold text-lg">Ingeniero en Tecnologías de la Información</p>
                    </div>
                    <p className="text-justify text-xs lg:text-sm">
                        Egresado de la carrera en Ingeniería en Tecnologías de la Información, amante de la tecnologia e inovación.<br />
                        Me gusta aprender, experimentar y poner en practica cosas nuevas
                    </p>
                    <p className="font-bold">Mi dicho: "No existen imposibles, solo retos"</p>
                </Zoom>
            </div>
        </div>
    </Fade>
)

export default User