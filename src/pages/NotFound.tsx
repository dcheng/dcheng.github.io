
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* 404 Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/images/f4d3b1ea-e3bf-41a0-bb8f-3ec51a334713.webp"
                alt="Dra. Liz Cheng"
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-2xl opacity-50"
              />
            </div>
            
            <h1 className="text-9xl font-bold text-dental-600 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('notfound.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('notfound.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-dental-600 hover:bg-dental-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>{t('notfound.homeBtn')}</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="border-2 border-dental-600 text-dental-600 hover:bg-dental-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('notfound.backBtn')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('notfound.links.title')}
            </h3>
            <p className="text-gray-600">
              {t('notfound.links.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/quienes-somos"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-dental-600">
                {t('notfound.links.aboutTitle')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('notfound.links.aboutDesc')}
              </p>
            </Link>
            
            <Link
              to="/servicios"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-dental-600">
                {t('notfound.links.servicesTitle')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('notfound.links.servicesDesc')}
              </p>
            </Link>
            
            <Link
              to="/ambientes"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-dental-600">
                {t('notfound.links.environmentsTitle')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('notfound.links.environmentsDesc')}
              </p>
            </Link>
            
            <Link
              to="/contacto"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-dental-600">
                {t('notfound.links.contactTitle')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('notfound.links.contactDesc')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
