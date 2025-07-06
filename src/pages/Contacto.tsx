
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-dental-600">Contacto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Agenda tu consulta o contáctanos para cualquier consulta
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ponte en contacto con nosotros para agendar tu cita o resolver cualquier duda
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Principal 123<br />
                      Consultorios Médicos, Piso 3<br />
                      Ciudad, País 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+51 987566993</p>
                    <p className="text-gray-600">+51 987566993</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@dralencheng.com</p>
                    <p className="text-gray-600">citas@dralencheng.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Sábados: 8:00 AM - 6:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-dental-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergencias Dentales</h3>
                <p className="text-gray-600 mb-3">
                  Para emergencias fuera del horario de oficina, contáctanos al:
                </p>
                <p className="text-dental-600 font-semibold text-lg">+123 456 7892</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Agenda tu Consulta
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-500 focus:border-dental-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-500 focus:border-dental-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-500 focus:border-dental-500 transition-colors"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-500 focus:border-dental-500 transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="diseno-sonrisa">Diseño de Sonrisa</option>
                    <option value="carillas">Carillas Dentales</option>
                    <option value="blanqueamiento">Blanqueamiento Dental</option>
                    <option value="implantes">Implantes Dentales</option>
                    <option value="coronas-puentes">Coronas y Puentes</option>
                    <option value="preventiva">Odontología Preventiva</option>
                    <option value="consulta-general">Consulta General</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-500 focus:border-dental-500 transition-colors"
                    placeholder="Cuéntanos sobre tu consulta o qué te gustaría saber..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dental-600 hover:bg-dental-700 text-white px-6 py-4 rounded-lg text-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600">
              Encuentranos en el corazón de la ciudad
            </p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interactivo</p>
              <p className="text-sm text-gray-500">C. Coronel Inclán 135, Miraflores, Lima</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
