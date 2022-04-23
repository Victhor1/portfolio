import Navbar from './Nabvar'

const Layout = ({children}) => (
    <>
        <Navbar />
        <main className="container mx-auto px-20">
            {children}
        </main>
    </>
)

export default Layout