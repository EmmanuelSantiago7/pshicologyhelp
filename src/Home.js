import React, { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Nav Bar Section */}
            <nav className="flex flex-wrap items-center justify-between p-4 bg-[#e8e8e5] shadow-lg">
                {/* Logo / Brand */}
                <div className="text-2xl font-bold text-gray-700">Psychology Help</div>

                {/* Toggle Button for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <img
                            className={`toggle block ${isOpen ? 'hidden' : 'block'}`}
                            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                            width="30"
                            height="30"
                            alt="Menu"
                        />
                        <img
                            className={`toggle ${isOpen ? 'block' : 'hidden'}`}
                            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                            width="30"
                            height="30"
                            alt="Close"
                        />
                    </button>
                </div>

                {/* Links for Desktop & Mobile */}
                <div
                    className={`w-full md:w-auto md:flex flex-col md:flex-row items-center justify-between md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
                        isOpen ? 'flex' : 'hidden'
                    }`}
                >
                    <a href="/" className="block md:inline-block text-gray-700 hover:text-blue-500 px-3 py-2">Inicio</a>
                    <a href="/resources" className="block md:inline-block text-gray-700 hover:text-blue-500 px-3 py-2">Recursos Bienestar</a>
                    <a href="/self" className="block md:inline-block text-gray-700 hover:text-blue-500 px-3 py-2">Autoevaluación</a>
                    <a href="#gallery" className="block md:inline-block text-gray-700 hover:text-blue-500 px-3 py-2">Gallery</a>
                    <a href="#contactUs" className="block md:inline-block text-gray-700 hover:text-blue-500 px-3 py-2">Visit Us</a>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative w-full h-[500px] md:h-[600px]" id="home">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Background"
                        className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Bappa Flour Mill
                    </h1>
                    <p className="text-lg md:text-2xl font-light mb-8">
                        One-stop solution for flour grinding services
                    </p>
                    <a href="#contactUs" className="px-8 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-300 shadow-lg">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Our Services Section */}
            <section className="py-16 bg-gray-100" id="services">
                <div className="container mx-auto px-6 md:px-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                        Atención a los Alumnos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                            <img
                                src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
                                alt="Wheat Flour Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Wheat Flour Grinding
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
                                alt="Gram Flour Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Gram Flour Grinding
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Our gram flour is perfect for baking, cooking, and making snacks.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                            <img
                                src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp"
                                alt="Jowar Flour Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Jowar Flour Grinding
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Our jowar grinding service is a convenient way to get fresh jowar flour.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-gray-100 py-20" id="aboutus">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Texto de About Us */}
                        <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Sobre Nosotros
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                At Bappa Flour Mill, we’re dedicated to providing the highest quality products and services to our customers. With a wide variety of fresh flours and spices, we’re here to meet the needs of both businesses and individuals alike. Quality and customer satisfaction are at the heart of what we do.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our team is committed to sourcing the best ingredients and ensuring our products meet the highest standards, making us your trusted choice for all your flour needs.
                            </p>
                        </div>
                        {/* Imagen de About Us */}
                        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us"
                                className="w-full h-auto max-w-md rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-gray-50" id="gallery">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                        Presencia y Ayuda Psicologica
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Image Card 1 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 1"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 1</p>
                            </div>
                        </div>
                        {/* Image Card 2 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 2"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 2</p>
                            </div>
                        </div>
                        {/* Image Card 3 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 3"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 3</p>
                            </div>
                        </div>
                        {/* Image Card 4 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 4"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 4</p>
                            </div>
                        </div>
                        {/* Image Card 5 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 5"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 5</p>
                            </div>
                        </div>
                        {/* Image Card 6 */}
                        <div className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/2156337962/es/foto/ni%C3%B1os-diversos-felices-ni%C3%B1os-de-la-escuela-secundaria-abrazando-a-la-maestra-apreciando-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=YxZyMxiX4NVDWKZf9YOdn52GtOa3LEciLHJJmI6qQ-I="
                                alt="Gallery 6"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-center">Caption for Gallery 6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Us Section */}
            <section className="py-10 bg-gray-100" id="contactUs">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ayudanos a Ayudarte</h2>
                    <form className="max-w-lg mx-auto">
                        <div className="grid grid-cols-1 gap-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="border border-gray-300 p-3 rounded-md" 
                                required 
                            />
                            <input 
                                type="text" 
                                placeholder="Your Grade" 
                                className="border border-gray-300 p-3 rounded-md" 
                                required 
                            />
                            <input 
                                type="text" 
                                placeholder="Your Group" 
                                className="border border-gray-300 p-3 rounded-md" 
                                required 
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="border border-gray-300 p-3 rounded-md" 
                                required 
                            />
                            <textarea 
                                rows="4" 
                                placeholder="Your Message" 
                                className="border border-gray-300 p-3 rounded-md" 
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="bg-[#c8a876] text-white font-medium py-2 rounded-md hover:bg-[#c09858] transition duration-200"
                            >
                                Envia tu Mensaje!
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-200">
                <div className="container mx-auto text-center text-gray-700">
                    <p>&copy; 2024 Bappa Flour Mill. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
