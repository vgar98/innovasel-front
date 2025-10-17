export default function About() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Encabezado */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En <span className="font-semibold text-blue-600">INNOVASEL</span> 
            trabajamos con pasión para ofrecer soluciones innovadoras que generan valor 
            y confianza en nuestros clientes.
          </p>
        </section>
  
        {/* Misión y Visión */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600">
              Brindar servicios y productos de calidad que transformen la forma en que 
              las empresas y personas alcanzan sus objetivos, siempre con responsabilidad 
              y compromiso.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nuestra Visión</h2>
            <p className="text-gray-600">
              Ser reconocidos como líderes en innovación tecnológica y servicios de calidad, 
              contribuyendo al desarrollo sostenible y generando un impacto positivo en la sociedad.
            </p>
          </div>
        </section>
  
        {/* Nuestro equipo */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nuestro Equipo
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="CEO"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Juan Pérez</h3>
              <p className="text-blue-600">CEO & Fundador</p>
              <p className="text-gray-600 mt-2 text-sm">
                Con más de 10 años de experiencia liderando proyectos tecnológicos.
              </p>
            </div>
            {/* Miembro 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="CTO"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">María López</h3>
              <p className="text-blue-600">CTO</p>
              <p className="text-gray-600 mt-2 text-sm">
                Especialista en desarrollo de software y soluciones innovadoras.
              </p>
            </div>
            {/* Miembro 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="CMO"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Carlos Ramírez</h3>
              <p className="text-blue-600">CMO</p>
              <p className="text-gray-600 mt-2 text-sm">
                Experto en marketing digital y estrategias de posicionamiento empresarial.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }