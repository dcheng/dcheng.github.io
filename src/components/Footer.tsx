
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img 
              src="/images/7763065a-89ed-4786-a8c7-998e28bbf032.webp" 
              alt="Dra. Liz Cheng" 
              className="h-24 w-auto bg-white p-2 rounded-lg"
            />
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dental-400">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dental-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  C. Coronel Inclán 135<br />
                  Miraflores 15074<br />
                  Lima, Perú
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+51 987 566 993</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">lizbeth.cheng@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dental-400">{t('footer.schedule')}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>{t('footer.scheduleText')}</p>
                  <p>{t('footer.weekends')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dental-400">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dra.lizcheng"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-600 hover:bg-dental-700 p-3 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/dra.lizcheng/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-600 hover:bg-dental-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.socialText')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
