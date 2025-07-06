
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/7763065a-89ed-4786-a8c7-998e28bbf032.png" 
              alt="Dra. Liz Cheng" 
              className="h-16 w-auto bg-white p-2 rounded-lg"
            />
            <p className="text-gray-300">
              Odontología estética y restauradora con la más alta calidad y tecnología avanzada.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dental-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dental-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Av. Principal 123<br />
                  Consultorios Médicos<br />
                  Ciudad, País
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@dralencheng.com</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dental-400">Horarios de Atención</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dra. Liz Cheng - Odontología Estética y Restauradora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
