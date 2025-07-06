
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Heart, Zap, Award } from 'lucide-react';

const Ambientes = () => {
  const ambientes = [
    {
      title: 'Sala de Espera',
      description: 'Un espacio acogedor y moderno diseñado para tu comodidad y tranquilidad antes de la consulta.',
      image: '/lovable-uploads/5269011c-4957-4664-a85b-82eb3b55cfb7.png',
      features: ['Ambiente relajante', 'Mobiliario cómodo', 'Decoración moderna']
    },
    {
      title: 'Consultorio Principal',
      description: 'Equipado con la más avanzada tecnología dental para brindarte el mejor tratamiento.',
      image: '/lovable-uploads/aa6d1e4c-31e0-48c7-9e56-41cace2b2b8c.png',
      features: ['Equipos de última generación', 'Ambiente estéril', 'Iluminación óptima']
    },
    {
      title: 'Área de Esterilización',
      description: 'Zona especializada para la esterilización y desinfección de todos nuestros instrumentos.',
      image: '/lovable-uploads/aa9d76ff-8848-4755-86de-03cea8769a8f.png',
      features: ['Protocolos rigurosos', 'Equipos especializados', 'Máxima seguridad']
    },
    {
      title: 'Consultorio de Diagnóstico',
      description: 'Espacio dedicado a exámenes y diagnósticos con equipos de imagen avanzada.',
      image: '/lovable-uploads/3dc4c6b2-af10-49f9-8522-8400a76e0052.png',
      features: ['Equipos de diagnóstico', 'Ambiente controlado', 'Tecnología 3D']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-dental-600">Ambientes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Espacios diseñados para tu comodidad y bienestar, equipados con la más avanzada tecnología dental
            </p>
          </div>
        </div>
      </section>

      {/* Ambientes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {ambientes.map((ambiente, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl font-bold text-gray-900">{ambiente.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {ambiente.description}
                  </p>
                  <ul className="space-y-3">
                    {ambiente.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-dental-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={ambiente.image}
                    alt={ambiente.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Características de Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600">
              Todo diseñado pensando en tu seguridad, comodidad y bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bioseguridad</h3>
              <p className="text-gray-600">
                Protocolos estrictos de esterilización y desinfección en todos nuestros ambientes
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comodidad</h3>
              <p className="text-gray-600">
                Ambientes diseñados para reducir la ansiedad y crear una experiencia relajante
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnología</h3>
              <p className="text-gray-600">
                Equipos de última generación para diagnósticos precisos y tratamientos efectivos
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calidad</h3>
              <p className="text-gray-600">
                Instalaciones que cumplen con los más altos estándares de calidad internacional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnología en Acción
            </h2>
            <p className="text-xl text-gray-600">
              Mira cómo utilizamos la tecnología más avanzada en nuestros tratamientos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/lovable-uploads/75ec2dbc-f474-4594-8996-d17f53f467fe.png"
                alt="Diagnóstico con tecnología 3D"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <img
                src="/lovable-uploads/3005747e-a44c-4f9f-9e9d-9f87993a51c0.png"
                alt="Equipos de diagnóstico avanzado"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Environment */}
      <section className="py-20 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl font-bold">
                Un Ambiente de Trabajo Profesional
              </h2>
              <p className="text-xl text-dental-100 leading-relaxed">
                Nuestro equipo trabaja en un ambiente que favorece la precisión, la colaboración 
                y la excelencia en cada procedimiento dental que realizamos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-dental-100">
                  <div className="w-2 h-2 bg-dental-300 rounded-full mr-3"></div>
                  Trabajo en equipo especializado
                </li>
                <li className="flex items-center text-dental-100">
                  <div className="w-2 h-2 bg-dental-300 rounded-full mr-3"></div>
                  Protocolos de seguridad estrictos
                </li>
                <li className="flex items-center text-dental-100">
                  <div className="w-2 h-2 bg-dental-300 rounded-full mr-3"></div>
                  Formación continua del personal
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/lovable-uploads/5e1e01d7-9426-46bd-bf95-3a9a5d7143f2.png"
                alt="Equipo trabajando"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambientes;
