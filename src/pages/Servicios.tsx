
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smile, Shield, Zap, Heart, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Servicios = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.smileDesign.title'),
      description: t('services.smileDesign.description'),
      icon: Smile,
      features: [t('services.smileDesign.feature1'), t('services.smileDesign.feature2'), t('services.smileDesign.feature3')]
    },
    {
      title: t('services.veneers.title'),
      description: t('services.veneers.description'),
      icon: Shield,
      features: [t('services.veneers.feature1'), t('services.veneers.feature2'), t('services.veneers.feature3')]
    },
    {
      title: t('services.whitening.title'),
      description: t('services.whitening.description'),
      icon: Zap,
      features: [t('services.whitening.feature1'), t('services.whitening.feature2'), t('services.whitening.feature3')]
    },
    {
      title: t('services.implants.title'),
      description: t('services.implants.description'),
      icon: Heart,
      features: [t('services.implants.feature1'), t('services.implants.feature2'), t('services.implants.feature3')]
    },
    {
      title: t('services.crowns.title'),
      description: t('services.crowns.description'),
      icon: Award,
      features: [t('services.crowns.feature1'), t('services.crowns.feature2'), t('services.crowns.feature3')]
    },
    {
      title: t('services.preventive.title'),
      description: t('services.preventive.description'),
      icon: Users,
      features: [t('services.preventive.feature1'), t('services.preventive.feature2'), t('services.preventive.feature3')]
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
              {t('services.hero.title')} <span className="text-dental-600">{t('services.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.hero.description')}
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
                {t('services.technology.title1')} <span className="text-dental-600">{t('services.technology.title2')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('services.technology.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.technology.scanner.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.technology.scanner.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.technology.cadcam.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.technology.cadcam.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-dental-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.technology.microscopy.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.technology.microscopy.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img
                src="/images/75ec2dbc-f474-4594-8996-d17f53f467fe.webp"
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
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-dental-200 mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51987566993&text=Hola%21+Deseo+agendar+mi+cita%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dental-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-block"
          >
            {t('services.cta.button')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
