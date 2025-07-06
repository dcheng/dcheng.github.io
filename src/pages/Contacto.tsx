
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-dental-600">Contáctanos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para responder todas tus preguntas y ayudarte a conseguir la sonrisa de tus sueños
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                    <p className="text-gray-600">
                      C. Coronel Inclán 135<br />
                      Miraflores 15074<br />
                      Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                    <p className="text-gray-600">+51 987 566 993</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">lizbeth.cheng@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                      <p>Sábados y Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-3">Para consultas rápidas y citas</p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Tengo+una+consulta%21&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enviar Mensaje</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8471728524087!2d-77.0282!3d-12.1265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f6c2c123456%3A0x1234567890abcdef!2sC.%20Coronel%20Incl%C3%A1n%20135%2C%20Miraflores%2015074!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dra. Liz Cheng"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes una Emergencia Dental?
            </h2>
            <p className="text-gray-600 mb-6">
              Para emergencias dentales fuera del horario de atención, contáctanos por WhatsApp. 
              Te responderemos lo antes posible.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=51987566993&text=EMERGENCIA%20DENTAL%21%20Necesito%20ayuda%20urgente&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Contactar por Emergencia</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-dental-200 mb-8 max-w-2xl mx-auto">
            Agenda tu consulta hoy mismo y da el primer paso hacia la sonrisa de tus sueños
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+agendar+mi+cita%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dental-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-block"
          >
            Agendar Consulta
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
