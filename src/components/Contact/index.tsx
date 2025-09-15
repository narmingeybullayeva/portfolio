import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm always interested in new opportunities, collaborations, and teaching opportunities. Let's create something amazing together!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Whether you're looking for a passionate developer, need mentoring, or want to collaborate on an exciting project,
                                I'd love to hear from you. Let's discuss how we can work together to bring your ideas to life.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Mail className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600">your.email@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <Phone className="text-green-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-purple-100 p-3 rounded-full mr-4">
                                    <MapPin className="text-purple-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Location</h4>
                                    <p className="text-gray-600">Available for remote work worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                            >
                                <Send size={20} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;