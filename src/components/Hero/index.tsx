
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">


                    {/* Animated Text */}
                    <div className="space-y-4">
                        <h1 className="text-5xl  md:text-7xl leading-[1.5] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
                            Software Engineer
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                            Passionate about creating clean, efficient web experiences with
                            <span className="font-semibold text-blue-600"> 6 years of experience</span> in programming and
                            <span className="font-semibold text-purple-700"> 3 years of teaching</span>
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={scrollToAbout}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            Explore My Work
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 pt-8">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};

export default Hero;