
import { Link } from 'react-router-dom';
import { Smile, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('home.hero.title')}
                <span className="text-dental-600 block">{t('home.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+agendar+mi+cita%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dental-600 hover:bg-dental-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 text-center"
                >
                  {t('home.hero.scheduleBtn')}
                </a>
                <Link
                  to="/servicios"
                  className="border-2 border-dental-600 text-dental-600 hover:bg-dental-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all text-center"
                >
                  {t('home.hero.servicesBtn')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/f4d3b1ea-e3bf-41a0-bb8f-3ec51a334713.webp"
                alt="Dra. Liz Cheng"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-dental-100 p-3 rounded-full">
                    <Smile className="h-6 w-6 text-dental-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+500</p>
                    <p className="text-sm text-gray-600">Sonrisas Transformadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-dental-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Estadísticas de la Clínica</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: t('home.stats.patients') },
              { icon: Award, number: '15+', label: t('home.stats.experience') },
              { icon: Smile, number: '1000+', label: t('home.stats.treatments') },
              { icon: Clock, number: '24/7', label: t('home.stats.emergency') },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-dental-200" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-dental-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.results.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.results.description')}
            </p>
          </div>
          
          <div className="relative">
            <img
              src="/images/08e1aa26-b1cc-4bed-a6fd-4b73c12f3183.webp"
              alt="Sonrisas naturalmente hermosas - Antes y después"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: t('home.services.aesthetic'), 
                description: t('home.services.aestheticDesc')
              },
              { 
                title: t('home.services.restorative'), 
                description: t('home.services.restorativeDesc')
              },
              { 
                title: t('home.services.preventive'), 
                description: t('home.services.preventiveDesc')
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Smile className="h-8 w-8 text-dental-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/servicios" 
                  className="text-dental-600 hover:text-dental-700 font-medium inline-flex items-center"
                >
                  {t('home.services.learnMore')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
