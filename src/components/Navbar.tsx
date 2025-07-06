
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes Somos', href: '/quienes-somos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Ambientes', href: '/ambientes' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/7763065a-89ed-4786-a8c7-998e28bbf032.png" 
                alt="Dra. Liz Cheng" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-dental-600 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-dental-600 border-b-2 border-dental-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/dra.lizcheng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-dental-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dra.lizcheng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-dental-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <Link
              to="/contacto"
              className="bg-dental-600 hover:bg-dental-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-dental-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-dental-600 bg-dental-50'
                      : 'text-gray-700 hover:text-dental-600 hover:bg-dental-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Media Links */}
              <div className="flex items-center justify-center space-x-6 py-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-dental-600 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-dental-600 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              
              <Link
                to="/contacto"
                className="block w-full text-center bg-dental-600 hover:bg-dental-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
