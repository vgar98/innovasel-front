import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const Navbar: React.FC= () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header className='bg-blue-600 p-4'>
                <nav className='flex justify-between items-center container mx-auto'>
                    <div className='text-white text-lg font-semibold'>
                        
                        <Link to={"/"}>INNOVASEL</Link>
                    </div>
                    {/*MENU PARA PANTALLAS GRANDES */}
                    <ul className='hidden md:flex space-x-6 text-white'>
                    <li><Link to="/commitment">Comprometidos</Link></li>
                    <li><Link to="/services">Servicios</Link></li>
                    <li><Link to="/contact">Contáctanos</Link></li>
                    <li><Link to="/about">Sobre Nosotros</Link></li>
                    </ul>

                    {/* Menú hamburguesa en pantallas pequeñas */}

                    <button
                    className='md:hidden text-white'
                    onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>

                {/* Menú desplegable en móviles */}
                {menuOpen && (
                    <div className="md:hidden bg-blue-600 text-white">
                    <ul className="space-y-4 py-4">
                        <li><Link to="/" onClick={toggleMenu}>Salud</Link></li>
                        <li><Link to="/science" onClick={toggleMenu}>Ciencia</Link></li>
                        <li><Link to="/commitment" onClick={toggleMenu}>Comprometidos</Link></li>
                        <li><Link to="/services" onClick={toggleMenu}>Servicios</Link></li>
                        <li><Link to="/health" onClick={toggleMenu}>Noticias</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contáctanos</Link></li>
                    </ul>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar;