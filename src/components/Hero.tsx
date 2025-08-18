import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <>
        <section
        className='relative h-screen bg-cover bg-center'
        style={{backgroundImage: "url(path/..."}}
        >
            <div className='absolute inset-0 bg-black opacity-50'>
            </div>
            <div className='relative z-10 container mx-auto text-center text-white py-32'>
                <h1 className="text-5xl font-bold mb-4">
                    Innovaciones que cambian la vida
                </h1>
                <p className='text-xl mb-8'>
                    Contáctanos
                </p>
                <div className='flex justify-center gap-4'>
                    <Link to="/consultoria" className='bg-blue-600 text-white px-6 py-3 rounded-lg text-lg'></Link>
                </div>
            </div>

        </section>
    </>
  )
}

export default Hero;