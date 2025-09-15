
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Learning Platform',
            description: 'A comprehensive online learning platform built with React and Node.js, featuring course management, progress tracking, and interactive lessons.',
            image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
            category: 'Web Application'
        },
        {
            title: 'Task Management Dashboard',
            description: 'A modern, responsive task management system with drag-and-drop functionality, team collaboration features, and real-time updates.',
            image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Tailwind CSS', 'Firebase', 'TypeScript'],
            category: 'Dashboard'
        },
        {
            title: 'Python Automation Suite',
            description: 'Collection of Python scripts for automating daily tasks, data processing, and web scraping with a clean GUI interface.',
            image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['Python', 'Tkinter', 'Pandas', 'Beautiful Soup'],
            category: 'Automation'
        },
        {
            title: 'Portfolio Website Template',
            description: 'A customizable, modern portfolio template for developers with dark/light mode, animations, and responsive design.',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
            category: 'Template'
        },
        {
            title: 'Code Learning Game',
            description: 'An interactive web-based game that teaches programming concepts through puzzles and challenges, making learning fun and engaging.',
            image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['JavaScript', 'CSS3', 'HTML5', 'Game Logic'],
            category: 'Educational'
        },
        {
            title: 'API Documentation Tool',
            description: 'A tool for automatically generating beautiful, interactive API documentation from code comments and schemas.',
            image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['Node.js', 'Express', 'React', 'Markdown'],
            category: 'Tool'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A showcase of my work spanning web applications, educational tools, and automation solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300">
                                        <ExternalLink size={16} className="mr-1" />
                                        Live Demo
                                    </button>
                                    <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium text-sm transition-colors duration-300">
                                        <Github size={16} className="mr-1" />
                                        Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;