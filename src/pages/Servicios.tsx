
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smile, Crown, Zap, Shield, Camera, Stethoscope } from 'lucide-react';

const Servicios = () => {
  const servicios = [
    {
      icon: Smile,
      title: 'Diseño de Sonrisa',
      description: 'Planificación digital personalizada para crear la sonrisa perfecta según tus características faciales y preferencias.',
      features: ['Análisis facial digital', 'Mockup 3D', 'Planificación personalizada']
    },
    {
      icon: Crown,
      title: 'Carillas Dentales',
      description: 'Láminas ultrafinas de porcelana que corrigen imperfecciones y crean sonrisas naturalmente hermosas.',
      features: ['Porcelana de alta calidad', 'Mínimamente invasivo', 'Resultados inmediatos']
    },
    {
      icon: Zap,
      title: 'Blanqueamiento Dental',
      description: 'Tratamientos profesionales para aclarar el color de tus dientes de forma segura y efectiva.',
      features: ['Blanqueamiento en consultorio', 'Tratamiento domiciliario', 'Resultados duraderos']
    },
    {
      icon: Shield,
      title: 'Implantes Dentales',
      description: 'Reemplazo de dientes perdidos con implantes de titanio de última generación.',
      features: ['Implantes premium', 'Cirugía guiada', 'Rehabilitación completa']
    },
    {
      icon: Camera,
      title: 'Coronas y Puentes',
      description: 'Restauraciones fijas que devuelven la función y estética a tus dientes.',
      features: ['Materiales biocompatibles', 'Ajuste perfecto', 'Apariencia natural']
    },
    {
      icon: Stethoscope,
      title: 'Odontología Preventiva',
      description: 'Tratamientos preventivos para mantener tu salud bucal en óptimas condiciones.',
      features: ['Limpiezas profesionales', 'Sellantes dentales', 'Fluorización']
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
              Nuestros <span className="text-dental-600">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales especializados 
              con la más alta calidad y tecnología avanzada
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-dental-200 transition-colors">
                  <servicio.icon className="h-8 w-8 text-dental-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{servicio.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{servicio.description}</p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-dental-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-gray-600">
              Utilizamos equipos de última generación para garantizar la mejor atención
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Diagnóstico Avanzado
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con tecnología de imagen digital avanzada que nos permite 
                realizar diagnósticos precisos y planificar tratamientos con la máxima precisión.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-dental-400 rounded-full mr-3"></div>
                  Radiografías digitales de alta resolución
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-dental-400 rounded-full mr-3"></div>
                  Tomografía computarizada 3D
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-dental-400 rounded-full mr-3"></div>
                  Escáner intraoral digital
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img
                src="/images/75ec2dbc-f474-4594-8996-d17f53f467fe.png"
                alt="Tecnología dental avanzada"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu sonrisa?
          </h2>
          <p className="text-xl text-dental-100 mb-8 max-w-2xl mx-auto">
            Agenda tu consulta y descubre cómo podemos ayudarte a lograr la sonrisa de tus sueños
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-dental-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-dental-600 px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
