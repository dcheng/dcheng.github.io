
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Award, Heart, Shield } from 'lucide-react';

const Ambientes = () => {
  const gallery = [
    {
      id: 1,
      src: "/images/aa6d1e4c-31e0-48c7-9e56-41cace2b2b8c.webp",
      alt: "Consultorio dental moderno",
      title: "Consultorio Principal"
    },
    {
      id: 2,
      src: "/images/5269011c-4957-4664-a85b-82eb3b55cfb7.webp",
      alt: "Sala de espera cómoda",
      title: "Sala de Espera"
    },
    {
      id: 3,
      src: "/images/3005747e-a44c-4f9f-9e9d-9f87993a51c0.webp",
      alt: "Equipamiento dental avanzado",
      title: "Tecnología Avanzada"
    },
    {
      id: 4,
      src: "/images/aa9d76ff-8848-4755-86de-03cea8769a8f.webp",
      alt: "Área de Esterilización",
      title: "Área de Esterilización"
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
              Espacios diseñados para tu comodidad y tranquilidad, equipados con la más moderna tecnología dental
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <div className="flex items-center space-x-2">
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
              Todo pensado para brindarte la mejor experiencia dental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Esterilización Total</h3>
              <p className="text-gray-600">Protocolos estrictos de esterilización y desinfección</p>
            </div>

            <div className="text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-600">Equipamiento de última generación para mejores resultados</p>
            </div>

            <div className="text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ambiente Relajante</h3>
              <p className="text-gray-600">Espacios diseñados para reducir la ansiedad dental</p>
            </div>

            <div className="text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacidad Total</h3>
              <p className="text-gray-600">Consultorios privados para tu comodidad y confidencialidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Te gustaría conocer nuestras instalaciones?
          </h2>
          <p className="text-xl text-dental-200 mb-8 max-w-2xl mx-auto">
            Agenda una visita y descubre por qué nuestros pacientes se sienten cómodos y seguros en nuestro consultorio
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+agendar+mi+cita%21&type=phone_number&app_absent=0"
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
