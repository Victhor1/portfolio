import React, { useState, useEffect } from 'react';
import SkillsMap from '../components/Skills';
import { Skeleton, SkeletonImage } from '../components/Skeleton';
import User from '../components/User';
import UserAnimation from '../components/UserAnimation';
import SkillsImage from '../components/SkillsImage';
import { Fade } from 'react-reveal';
import ProjectsAnimation from '../components/ProjectsAnimation';
import Projects from '../components/Projects';

const Index = () => {

    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [disabled, setDisabled] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setData('me')
        setTimeout(function(){
            setIsLoading(false)
            setDisabled(false)
        }, 3000)
    }, [])

    const changeData = (source) => {
        if(data != source){
            setDisabled(true)
            setIsLoading(true)
            setData(source)
            setTimeout(function(){
                setIsLoading(false)
                setDisabled(false)
            }, 3000)
        }
    }

    const DataSelect = () => {
        if(data == 'me'){
            return(<User/>)
        }else if(data == 'stack'){
            return(<SkillsMap/>)
        }else if(data == 'projects'){
            return(<Projects/>)
        }
    }

    const DataImageSelect = () => {
        if(data == 'me'){
            return(<UserAnimation/>)
        }else if(data == 'stack'){
            return(<SkillsImage/>)
        }else if(data == 'projects'){
            return(<ProjectsAnimation/>)
        }
    }

    return(
        <div className="bg-gray-700 w-full h-full lg:h-screen text-white flex flex-col justify-between">
            <nav className="bg-gray-900 z-50">
                <div className="hidden lg:block container mx-auto px-4 lg:px-20 py-2">
                    <div className="flex justify-between items-center">
                        <button onClick={() => changeData('me')} disabled={disabled}>
                            <p className="font-bold uppercase">Victhor</p>
                        </button>
                        <div className="flex items-center space-x-4 text-xs">
                            <div className="flex items-center space-x-1">
                                <button onClick={() => changeData('me')} disabled={disabled} className={`hover:text-black flex items-center space-x-1 font-bold px-2 py-1 rounded-full hover:bg-purple-400 ${data == 'me'? 'bg-purple-500':''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p>Sobre mi</p>
                                </button>
                                <button onClick={() => changeData('stack')} disabled={disabled} className={`hover:text-black flex items-center space-x-1 font-bold px-2 py-1 rounded-full hover:bg-purple-400 ${data == 'stack'? 'bg-purple-500':''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                    <p>Mi Stack</p>
                                </button>
                                <button onClick={() => changeData('projects')} disabled={disabled} className={`hover:text-black flex items-center space-x-1 font-bold px-2 py-1 rounded-full hover:bg-purple-400 ${data == 'projects'? 'bg-purple-500':''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                    <p>Proyectos</p>
                                </button>
                                {!isLoading ? 
                                <a href="/Victor-Ali-Ramirez-Velazquez.pdf" download  className="flex items-center space-x-1 font-bold px-2 py-1 rounded-full hover:bg-green-400 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                    </svg>
                                    <p>Mi CV</p>
                                </a>
                                :
                                <button className="flex items-center space-x-1 font-bold px-2 py-1 rounded-full hover:bg-green-400 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                    </svg>
                                    <p>Mi CV</p>
                                </button>
                                }
                            </div>
                            <div className="flex items-center space-x-1">
                                <a href="https://www.facebook.com/victor.ramirezvelazquez.9" target="_blank" className="bg-blue-600 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#fff" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>
                                </a>
                                {/**<a href="https://youtube.com" target="_blank" className="bg-red-600 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#fff" d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"/></svg>
                                </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block lg:hidden container mx-auto px-4 py-2 relative">
                    <div className="flex justify-between items-center">
                        <button onClick={() => setOpen(!open)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="font-bold uppercase">
                            VICTHOR
                        </button>
                        <a className="bg-blue-600 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#fff" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>
                        </a>
                    </div>
                    {
                        open &&
                        <Fade left>
                            <div className="absolute bg-gray-900 h-96 w-1/2 left-0 mt-1 z-50 rounded-br-md">

                            </div>
                        </Fade>
                    }
                </div>
            </nav>

            <main className="container mx-auto px-4 lg:px-20 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 z-40">
                    {
                        isLoading ? <SkeletonImage/> : <DataImageSelect/>
                    }
                    
                    {
                        isLoading ? <Skeleton/> : <DataSelect/>
                    }

                </div>
            </main>

            <footer className="bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center py-2 z-50">
                <div className="flex items-center space-x-1 text-xs font-bold">
                    <p>&copy; Hecho por Victhor con</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="red">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                </div>
                {/**<p className="font-bold text-xs">2021 - {new Date().getFullYear()}</p>*/}
            </footer>
        </div>
    )
}

export default Index