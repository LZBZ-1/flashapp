import React, {useState, useEffect} from 'react';
import {
    Search,
    Star,
    MapPin,
    Clock,
    User,
    Briefcase,
    Zap,
    Shield,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Menu,
    X,
    Phone,
    Mail
} from 'lucide-react';

const FlashHireLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navegación suave
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                <Briefcase className="w-6 h-6 text-white"/>
                            </div>
                            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Flash Hire
              </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {['Inicio', 'Características', 'Como Funciona', 'Testimonios', 'Contacto'].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(['hero', 'features', 'how-it-works', 'testimonials', 'contact'][index])}
                                    className={`font-medium transition-colors ${
                                        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => window.open('#', '_blank')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                            >
                                Comenzar Ahora
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        >
                            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4">
                            {['Inicio', 'Características', 'Como Funciona', 'Testimonios', 'Contacto'].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(['hero', 'features', 'how-it-works', 'testimonials', 'contact'][index])}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="px-4 pt-2">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                                    Comenzar Ahora
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero"
                     className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Conecta con
                                <span className="text-yellow-400"> Oportunidades</span>
                                <br/>al Instante
                            </h1>
                            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                                La plataforma que revoluciona el trabajo temporal en el Perú.
                                Encuentra trabajadores calificados o empleos flexibles en minutos.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                                    <User className="w-5 h-5 mr-2"/>
                                    Soy Trabajador
                                </button>
                                <button
                                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200 flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 mr-2"/>
                                    Soy Empleador
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">1000+</div>
                                    <div className="text-blue-200">Trabajadores</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                                    <div className="text-blue-200">Empresas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">95%</div>
                                    <div className="text-blue-200">Satisfacción</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image/Phone Mockup */}
                        <div className="relative">
                            <div className="relative z-10 mx-auto max-w-sm">
                                {/* Phone Frame */}
                                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                                    <div className="bg-white rounded-2xl overflow-hidden">
                                        {/* Screen Content */}
                                        <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white">
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <h3 className="text-lg font-bold">¡Hola, María!</h3>
                                                    <p className="text-blue-200 text-sm">Encuentra tu próximo
                                                        trabajo</p>
                                                </div>
                                                <div
                                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                                    <User className="w-6 h-6"/>
                                                </div>
                                            </div>

                                            <div className="bg-white/10 rounded-lg p-3 mb-4">
                                                <div className="flex items-center text-white/80">
                                                    <Search className="w-4 h-4 mr-2"/>
                                                    <span className="text-sm">Buscar trabajos...</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Job Card */}
                                        <div className="p-4 bg-gray-50">
                                            <div className="bg-white rounded-lg shadow-md p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold text-gray-800">Mesero - Café
                                                        Downtown</h4>
                                                    <span
                                                        className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            Urgente
                          </span>
                                                </div>
                                                <div className="flex items-center text-gray-600 mb-2 text-sm">
                                                    <MapPin className="w-3 h-3 mr-1"/>
                                                    <span>Miraflores</span>
                                                    <Clock className="w-3 h-3 ml-3 mr-1"/>
                                                    <span>4 horas</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i}
                                                                  className="w-3 h-3 text-yellow-400 fill-current"/>
                                                        ))}
                                                        <span className="ml-1 text-xs text-gray-600">4.8</span>
                                                    </div>
                                                    <span className="font-bold text-green-600 text-sm">S/. 60</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div
                                className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
                                <Zap className="w-6 h-6 text-yellow-800"/>
                            </div>
                            <div
                                className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-pulse">
                                <CheckCircle className="w-6 h-6 text-green-800"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            ¿Por qué elegir Flash Hire?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ofrecemos la solución más rápida y confiable para conectar talento con oportunidades
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Conexión Instantánea",
                                description: "Encuentra trabajadores o empleos en cuestión de minutos, no días.",
                                color: "bg-yellow-500"
                            },
                            {
                                icon: Shield,
                                title: "Perfiles Verificados",
                                description: "Todos nuestros usuarios pasan por un proceso de verificación riguroso.",
                                color: "bg-green-500"
                            },
                            {
                                icon: TrendingUp,
                                title: "Pagos Seguros",
                                description: "Sistema de pagos protegido que garantiza transacciones seguras.",
                                color: "bg-blue-500"
                            },
                            {
                                icon: Users,
                                title: "Comunidad Activa",
                                description: "Miles de trabajadores y empleadores confían en nuestra plataforma.",
                                color: "bg-purple-500"
                            },
                            {
                                icon: Star,
                                title: "Sistema de Calificaciones",
                                description: "Califica y revisa cada experiencia para mantener la calidad.",
                                color: "bg-orange-500"
                            },
                            {
                                icon: MapPin,
                                title: "Cobertura Nacional",
                                description: "Disponible en todas las principales ciudades del Perú.",
                                color: "bg-red-500"
                            }
                        ].map((feature, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-6 h-6 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Cómo Funciona
                        </h2>
                        <p className="text-xl text-gray-600">
                            Simple, rápido y efectivo en solo 3 pasos
                        </p>
                    </div>

                    {/* For Workers */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center text-blue-600 mb-12">Para Trabajadores</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "Regístrate",
                                    description: "Crea tu perfil con tu experiencia y habilidades",
                                    icon: User
                                },
                                {
                                    step: "2",
                                    title: "Busca Trabajos",
                                    description: "Explora oportunidades que coincidan con tu perfil",
                                    icon: Search
                                },
                                {
                                    step: "3",
                                    title: "Comienza a Trabajar",
                                    description: "Acepta el trabajo y empieza a ganar dinero",
                                    icon: Briefcase
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-8 h-8 text-white"/>
                                        </div>
                                        <div
                                            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-800">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Employers */}
                    <div>
                        <h3 className="text-2xl font-bold text-center text-purple-600 mb-12">Para Empleadores</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "Publica tu Necesidad",
                                    description: "Describe el trabajo que necesitas cubrir",
                                    icon: Briefcase
                                },
                                {
                                    step: "2",
                                    title: "Revisa Candidatos",
                                    description: "Ve perfiles verificados y elige al mejor",
                                    icon: Users
                                },
                                {
                                    step: "3",
                                    title: "Contrata al Instante",
                                    description: "Conecta directamente y comienza el trabajo",
                                    icon: CheckCircle
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-8 h-8 text-white"/>
                                        </div>
                                        <div
                                            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-800">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Lo que dicen nuestros usuarios
                        </h2>
                        <p className="text-xl text-blue-100">
                            Historias reales de éxito en nuestra plataforma
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "María González",
                                role: "Mesera",
                                avatar: "M",
                                rating: 5,
                                text: "En una semana conseguí 3 trabajos diferentes. La flexibilidad que me da Flash Hire es increíble."
                            },
                            {
                                name: "Carlos Restaurante",
                                role: "Dueño de Restaurante",
                                avatar: "C",
                                rating: 5,
                                text: "Encontré personal calificado en menos de 2 horas. Salvó mi evento del fin de semana."
                            },
                            {
                                name: "Ana Torres",
                                role: "Estudiante",
                                avatar: "A",
                                rating: 5,
                                text: "Perfecto para trabajar entre clases. Puedo elegir mis horarios y ganar dinero extra."
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-yellow-400">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        ¿Listo para comenzar?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Únete a miles de peruanos que ya están transformando su forma de trabajar
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                            Comenzar como Trabajador
                            <ArrowRight className="w-5 h-5 ml-2"/>
                        </button>
                        <button
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition duration-200 flex items-center justify-center border-2 border-blue-600">
                            Comenzar como Empleador
                            <ArrowRight className="w-5 h-5 ml-2"/>
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Contacta con nosotros
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                ¿Tienes preguntas? Estamos aquí para ayudarte
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div
                                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <Mail className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Email</h4>
                                        <p className="text-gray-300">contacto@flashhire.pe</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div
                                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Teléfono</h4>
                                        <p className="text-gray-300">+51 1 234-5678</p>
                                    </div>
                                </div>

                                <div className="flex items-center">

                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Oficina</h4>
                                    <p className="text-gray-300">Lima, Perú</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Envíanos un mensaje
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                  <textarea
                      rows={4}
                      placeholder="Tu mensaje"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  ></textarea>
                            </div>
                            <button
                                onClick={(e) => e.preventDefault()}
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <Briefcase className="w-6 h-6 text-white"/>
                                </div>
                                <span className="text-2xl font-bold">Flash Hire</span>
                            </div>
                            <p className="text-gray-300">
                                Conectando talento con oportunidades en todo el Perú.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Para Trabajadores</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white">Buscar Trabajos</a></li>
                                <li><a href="#" className="hover:text-white">Crear Perfil</a></li>
                                <li><a href="#" className="hover:text-white">Consejos</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Para Empleadores</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white">Publicar Trabajo</a></li>
                                <li><a href="#" className="hover:text-white">Buscar Talento</a></li>
                                <li><a href="#" className="hover:text-white">Precios</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Empresa</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white">Acerca de</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Ayuda</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
                        <p>&copy; 2024 Flash Hire. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FlashHireLanding;