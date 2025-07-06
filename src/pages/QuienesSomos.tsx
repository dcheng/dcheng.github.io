
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const QuienesSomos = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.hero.title')} <span className="text-dental-600">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{t('about.mission.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.mission.description1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.mission.description2')}
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/f4d3b1ea-e3bf-41a0-bb8f-3ec51a334713.webp"
                alt="Dra. Liz Cheng"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.education.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.education.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.education.title1')}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {t('about.education.desc1')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.education.title2')}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {t('about.education.desc2')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.education.title3')}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {t('about.education.desc3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dental-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.quality')}</h3>
              <p className="text-gray-600">{t('about.values.qualityDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.trust')}</h3>
              <p className="text-gray-600">{t('about.values.trustDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.innovation')}</h3>
              <p className="text-gray-600">{t('about.values.innovationDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.warmth')}</h3>
              <p className="text-gray-600">{t('about.values.warmthDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
