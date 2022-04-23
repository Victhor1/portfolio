const Navbar = () => (
    <div className="bg-gray-900 bg-opacity-75 text-white">
        <div className="container mx-auto px-20 py-2">
            <div className="flex justify-between items-center">
                <p className="font-bold uppercase">Victhor</p>
                <div className="flex items-center space-x-2 text-xs">
                    <button className="font-bold bg-purple-500 px-3 py-1 rounded-full hover:bg-purple-400">
                        Sobre mi
                    </button>
                    <button className="font-bold bg-purple-500 px-3 py-1 rounded-full hover:bg-purple-400">
                        Mi Stack
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar