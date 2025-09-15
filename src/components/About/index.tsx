
import { Code2, GraduationCap, Heart, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        My journey in software development has been driven by curiosity, passion, and a desire to create meaningful solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="prose prose-lg">
                            <p className="text-gray-700 leading-relaxed">
                                My programming journey began with <strong>Python</strong>, where I discovered the elegance of clean, readable code.
                                This foundation shaped my approach to problem-solving and set the stage for my evolution into web development.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Over the past <strong>6 years</strong>, I've immersed myself in the world of web technologies, mastering
                                HTML, CSS, JavaScript, and React. I believe in writing code that not only works but is maintainable,
                                scalable, and beautiful.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                For the last <strong>3 years</strong>, I've had the privilege of sharing my knowledge through teaching,
                                helping aspiring developers start their own coding journeys. There's nothing more rewarding than seeing
                                someone's eyes light up when they understand a complex concept.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Code2 className="text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                            <p className="text-gray-600 text-sm">Writing maintainable, efficient code that stands the test of time</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GraduationCap className="text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Teaching</h3>
                            <p className="text-gray-600 text-sm">Empowering others to unlock their potential through programming</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                            <p className="text-gray-600 text-sm">Driven by love for creating meaningful digital experiences</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="text-white" size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600 text-sm">Always exploring new technologies and creative solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;