import React from 'react'

const Services: React.FC = () => {
  return (
    <>
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-xl font-bold text-center mb-8">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                { /**desarrollo de software */ }
                <div className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                    <div className="mb-4">
                        <img src="" alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Desarrolo de Software</h3>
                    <p className='text-lg mb-4'>Creamos soluciones de software personalizadas para mejorar la productividad, optimizar procesos y satisfacer las necesidades específicas de nuestros clientes</p>
                </div>
                { /**Estudios ambientales */ }
                <div className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                    <div className="mb-4">
                        <img src="" alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Estudios Ambientales</h3>
                    <p className='text-lg mb-4'>Realizamos estudios ambientales detallados para evaluar el impacto de proyectos en el medio ambiente y garantizar el cumplimiento de las normativas</p>
                </div>

               {/* Servicio 5: Cableado de Red y Eléctrico */}
                <div className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                    <img src="https://via.placeholder.com/80" alt="Cableado de Red y Eléctrico" className="mx-auto mb-4" /> {/* Icono o imagen del servicio */}
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cableado de Red y Eléctrico</h3>
                <p className="text-lg mb-4">
                    Ofrecemos soluciones en cableado estructurado y sistemas eléctricos, garantizando la eficiencia energética y la confiabilidad de las instalaciones.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition-all hover:bg-blue-700">Más Información</button>
                </div>
                
                 {/* Servicio 8: Diseño Arquitectónico */}
                <div className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                    <img src="https://via.placeholder.com/80" alt="Diseño Arquitectónico" className="mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Diseño Arquitectónico</h3>
                <p className="text-lg mb-4">
                    Ofrecemos servicios de diseño arquitectónico innovador, creando espacios funcionales, estéticos y sostenibles que se ajusten a tus necesidades y visión.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition-all hover:bg-blue-700">Más Información</button>
                </div>

                 {/* Servicio 8: Diseño de plantas quimicas */}
                 <div className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300">
                <div className="mb-4">
                    <img src="https://via.placeholder.com/80" alt="Diseño Arquitectónico" className="mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Diseño de plantas químicas</h3>
                <p className="text-lg mb-4">
                    Contamos con experiencia en el diseño de plantas químicas, desde la planificación hasta la ejecución, asegurando máxima eficiencia y cumplimiento de normativas.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition-all hover:bg-blue-700">Más Información</button>
                </div>


            </div>
        </section>
    </>
    )
}

export default Services;