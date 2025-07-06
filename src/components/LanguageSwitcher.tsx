
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex items-center space-x-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            language === 'es'
              ? 'bg-dental-600 text-white'
              : 'text-gray-600 hover:text-dental-600'
          }`}
        >
          ES
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            language === 'en'
              ? 'bg-dental-600 text-white'
              : 'text-gray-600 hover:text-dental-600'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
