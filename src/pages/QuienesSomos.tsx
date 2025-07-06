import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, GraduationCap, Heart } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conoce a la <span className="text-dental-600">Dra. Liz Cheng</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialista en odontología estética y restauradora, dedicada a crear sonrisas hermosas y saludables
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Mi Misión</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi compromiso es brindar atención dental de la más alta calidad, 
                combinando experiencia clínica, tecnología avanzada y un enfoque personalizado 
                para cada paciente. Creo firmemente que una sonrisa saludable y hermosa 
                puede transformar la vida de las personas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con más de 15 años de experiencia en odontología estética y restauradora, 
                me especializo en crear sonrisas naturalmente hermosas que reflejen 
                la personalidad única de cada paciente.
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
              Formación y Experiencia
            </h2>
            <p className="text-xl text-gray-600">
              Una sólida preparación académica respaldada por años de práctica clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educación</h3>
              <p className="text-gray-600">
                Doctora en Odontología<br />
                Universidad Cayetano Heredia<br />
                Especialización en Estética Dental
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certificaciones</h3>
              <p className="text-gray-600">
                Certificada en Implantología<br />
                Especialista en Diseño de Sonrisa<br />
                Formación en Técnicas Avanzadas
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-dental-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-dental-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Filosofía</h3>
              <p className="text-gray-600">
                Atención personalizada<br />
                Tratamientos mínimamente invasivos<br />
                Resultados naturales y duraderos
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
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Calidad', description: 'Excelencia en cada tratamiento' },
              { title: 'Confianza', description: 'Relaciones duraderas con nuestros pacientes' },
              { title: 'Innovación', description: 'Tecnología y técnicas de vanguardia' },
              { title: 'Calidez', description: 'Atención humana y personalizada' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-dental-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-dental-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
