
import { Calendar, Code, GraduationCap, Rocket } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            period: '2022 - Present',
            title: 'Teaching Programming',
            subtitle: '3 Years of Education',
            description: 'Sharing knowledge and helping aspiring developers start their coding journey. Teaching programming languages, web development, and best practices.',
            icon: GraduationCap,
            color: 'bg-purple-500',
            achievements: [
                'Taught 200+ students programming fundamentals',
                'Developed comprehensive curriculum for web development',
                'Created interactive learning materials and projects'
            ]
        },
        {
            period: '2019 - Present',
            title: 'Web Development Mastery',
            subtitle: 'Frontend & Backend Skills',
            description: 'Advanced into web development, mastering modern frameworks and technologies to create full-featured web applications.',
            icon: Code,
            color: 'bg-blue-500',
            achievements: [
                'Built responsive, modern web applications',
                'Mastered React, TypeScript, and modern CSS',
                'Implemented clean architecture and best practices'
            ]
        },
        {
            period: '2018 - 2019',
            title: 'Programming Foundation',
            subtitle: 'Python & Core Concepts',
            description: 'Started my programming journey with Python, building a solid foundation in programming concepts and problem-solving.',
            icon: Rocket,
            color: 'bg-green-500',
            achievements: [
                'Learned programming fundamentals with Python',
                'Developed algorithmic thinking and problem-solving skills',
                'Built first automation tools and scripts'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My Journey
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From Python beginner to experienced web developer and educator - here's how my skills evolved over the years.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 h-full hidden md:block dark:opacity-80"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}>
                                {/* Content */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                        <div className="flex items-center mb-4">
                                            <Calendar size={20} className="text-gray-500 dark:text-gray-400 mr-2" />
                                            <span className="text-gray-500 dark:text-gray-400 font-medium">{exp.period}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.subtitle}</h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                                                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Icon */}
                                <div className="w-16 h-16 mx-8 my-4 md:my-0 relative z-10">
                                    <div className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                                        <exp.icon className="text-white" size={24} />
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Current Focus */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4 text-white">Current Focus</h3>
                    <p className="text-lg mb-6">
                        Continuously learning new technologies, refining my teaching methods, and working on exciting projects that push the boundaries of web development.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Advanced React Patterns', 'Performance Optimization', 'Modern CSS', 'Teaching Innovation'].map((focus) => (
                            <span key={focus} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                                {focus}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;