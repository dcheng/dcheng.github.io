
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smile, Shield, Zap, Heart, Award, Users } from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      title: 'Diseño de Sonrisa',
      description: 'Planificación digital personalizada para crear la sonrisa perfecta según tus características faciales.',
      icon: Smile,
      features: ['Análisis facial digital', 'Planificación 3D', 'Resultados predecibles']
    },
    {
      title: 'Carillas Dentales',
      description: 'Láminas ultrafinas de porcelana que transforman completamente tu sonrisa de manera conservadora.',
      icon: Shield,
      features: ['Mínima preparación dental', 'Resultados naturales', 'Larga duración']
    },
    {
      title: 'Blanqueamiento Dental',
      description: 'Tratamientos profesionales para lograr un blanqueamiento seguro y efectivo.',
      icon: Zap,
      features: ['Técnicas avanzadas', 'Resultados inmediatos', 'Seguro y controlado']
    },
    {
      title: 'Implantes Dentales',
      description: 'Reemplazo de dientes perdidos con implantes de titanio de alta calidad.',
      icon: Heart,
      features: ['Titanio de grado médico', 'Integración natural', 'Solución permanente']
    },
    {
      title: 'Coronas y Puentes',
      description: 'Restauración de dientes dañados con coronas y puentes de porcelana.',
      icon: Award,
      features: ['Porcelana de alta calidad', 'Ajuste perfecto', 'Apariencia natural']
    },
    {
      title: 'Odontología Preventiva',
      description: 'Cuidado preventivo para mantener tu sonrisa saludable a largo plazo.',
      icon: Users,
      features: ['Limpiezas profesionales', 'Aplicación de flúor', 'Educación en higiene']
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
              Nuestros <span className="text-dental-600">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales especializados con la más alta calidad y tecnología avanzada
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-dental-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-dental-600 rounded-full mr-3"></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Tecnología de <span className="text-dental-600">Vanguardia</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizamos la más avanzada tecnología dental para garantizar 
                resultados precisos, cómodos y duraderos. Nuestro equipamiento 
                de última generación nos permite ofrecer tratamientos más eficientes 
                y con mayor precisión.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escáner Intraoral 3D</h4>
                    <p className="text-gray-600 text-sm">Impresiones digitales precisas sin molestias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CAD/CAM</h4>
                    <p className="text-gray-600 text-sm">Diseño y fabricación asistida por computadora</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Microscopía Dental</h4>
                    <p className="text-gray-600 text-sm">Precisión máxima en todos los procedimientos</p>
                  </div>
                </div>
              </div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Sonrisa?
          </h2>
          <p className="text-xl text-dental-200 mb-8 max-w-2xl mx-auto">
            Agenda tu consulta personalizada y descubre cómo podemos ayudarte a lograr la sonrisa de tus sueños
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+agendar+mi+cita%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dental-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-block"
          >
            Agendar Consulta Ahora
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
