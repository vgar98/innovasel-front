import React from 'react'

const Contact: React.FC = () => {
  return (
    <>
        <section className='bg-gray-50 py-16 px-4'>
            <div className='container mx-auto text-center'>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
                <p className='text-lg text-gray-700 mb-10'>
                Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros para cotizar tu servicio.
                </p>

            </div>

      {/* Información de contacto */}
      <div className="flex justify-center space-x-16 mb-10">
        <div className="bg-white p-8 shadow-xl rounded-lg w-80">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
          <div className="mb-4">
            <p className="text-gray-600"><strong>Email:</strong> innovaselsac@gmail.com</p>
            <p className="text-gray-600"><strong>Teléfono:</strong> +51 931 995 661</p>
            <p className="text-gray-600"><strong>WhatsApp:</strong> <a href="https://wa.me/+51931995661" className="text-blue-600 hover:underline">+51 931 995 661</a></p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 hover:text-blue-800">
                <path d="M22.675 0h-21.35C.297 0 0 .297 0 .665v22.67c0 .368.297.664.665.664h11.547v-9.246h-3.14v-3.622h3.14v-2.673c0-4.121 2.466-6.438 6.197-6.438 1.8 0 3.418.134 3.88.193v4.309h-2.466c-1.928 0-2.566.986-2.566 2.486v3.26h5.134l-.664 3.622h-4.47v9.246h7.348c.368 0 .665-.297.665-.664V.665c0-.368-.297-.665-.665-.665z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 hover:text-blue-800">
                <path d="M20.451 0H3.549C2.755 0 2.062.693 2.062 1.546v20.91c0 .853.693 1.546 1.487 1.546h16.902c.794 0 1.487-.693 1.487-1.546V1.546c0-.853-.693-1.546-1.487-1.546zM8.165 20.347H4.712V9.133h3.453v11.214zm-1.726-12.653c-1.116 0-2.02-.883-2.02-1.968 0-1.086.904-1.968 2.02-1.968 1.115 0 2.019.883 2.019 1.968 0 1.085-.904 1.968-2.019 1.968zm14.62 12.653h-3.453v-5.65c0-1.345-.484-2.259-1.705-2.259-1.069 0-1.707.723-1.707 1.725v5.184h-3.453v-11.21h3.453v1.517h.046c.459-.822 1.293-1.747 2.787-1.747 2.046 0 3.576 1.359 3.576 4.272v5.168h-.01z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 hover:text-blue-800">
                <path d="M23.643 4.937c-.883.391-1.83.654-2.827.773 1.016-.607 1.795-1.565 2.16-2.724-.951.563-2.004.973-3.126 1.192-.896-.956-2.174-1.554-3.595-1.554-2.719 0-4.927 2.209-4.927 4.928 0 .387.042.765.125 1.124C7.724 8.094 4.085 6.15 1.67 3.149c-.419.717-.66 1.552-.66 2.447 0 1.687.859 3.168 2.161 4.036-.796-.025-1.546-.244-2.197-.607v.061c0 2.36 1.68 4.328 3.913 4.782-.409.11-.839.17-1.278.17-.314 0-.616-.031-.917-.089.616 1.927 2.4 3.34 4.518 3.38-1.653 1.294-3.73 2.067-5.996 2.067-.388 0-.77-.023-1.146-.067 2.137 1.368 4.688 2.171 7.426 2.171 8.91 0 13.806-7.391 13.806-13.807 0-.21-.005-.42-.014-.63.947-.683 1.77-1.535 2.423-2.509z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

        </section>
    </>
  )
}

export default Contact;
