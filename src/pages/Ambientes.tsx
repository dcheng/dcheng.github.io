
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Heart, Shield, Sparkles } from 'lucide-react';

const Ambientes = () => {
  const ambientes = [
    {
      title: 'Recepción y Sala de Espera',
      description: 'Un ambiente acogedor y relajante donde nuestros pacientes se sienten como en casa.',
      image: '/images/aa6d1e4c-31e0-48c7-9e56-41cace2b2b8c.png',
      features: ['Ambiente climatizado', 'Música relajante', 'Revistas y entretenimiento']
    },
    {
      title: 'Consultorio Principal',
      description: 'Equipado con la más moderna tecnología dental para tratamientos precisos y cómodos.',
      image: '/images/3005747e-a44c-4f9f-9e9d-9f87993a51c0.png',
      features: ['Sillón ergonómico', 'Tecnología avanzada', 'Ambiente estéril']
    },
    {
      title: 'Área de Esterilización',
      description: 'Instalaciones especializadas que garantizan los más altos estándares de higiene y seguridad.',
      image: '/images/5269011c-4957-4664-a85b-82eb3b55cfb7.png',
      features: ['Autoclave de última generación', 'Protocolos estrictos', 'Seguridad garantizada']
    },
    {
      title: 'Laboratorio Interno',
      description: 'Nuestro laboratorio propio nos permite crear prótesis y restauraciones de la más alta calidad.',
      image: '/images/aa9d76ff-8848-4755-86de-03cea8769a8f.png',
      features: ['Tecnología CAD/CAM', 'Control de calidad', 'Tiempos reducidos']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-dental-600">Ambientes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instalaciones modernas diseñadas para brindar comodidad, seguridad y la mejor experiencia dental
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
                  <div className="space-y-3">
                    {ambiente.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="bg-dental-100 p-1 rounded-full">
                          <Heart className="h-4 w-4 text-dental-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={ambiente.image}
                    alt={ambiente.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-dental-100 p-3 rounded-full">
                        <Camera className="h-6 w-6 text-dental-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Tour Virtual</p>
                        <p className="text-sm text-gray-600">Disponible</p>
                      </div>
                    </div>
                  </div>
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
              Todo diseñado pensando en tu comodidad y seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Máxima Seguridad</h3>
              <p className="text-gray-600">
                Protocolos de bioseguridad internacionales y equipos de esterilización de última generación.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ambiente Relajante</h3>
              <p className="text-gray-600">
                Espacios diseñados para reducir la ansiedad y crear una experiencia placentera.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">
                Cada espacio está pensado para brindar una atención individualizada y de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Te Gustaría Conocer Nuestras Instalaciones?
          </h2>
          <p className="text-xl text-dental-200 mb-8 max-w-2xl mx-auto">
            Agenda una visita y descubre por qué nuestros pacientes se sienten tan cómodos en nuestras instalaciones
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+conocer+sus+instalaciones%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dental-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-block"
          >
            Agendar Visita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambientes;
