const Skills = () => {
    const skills = [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'Git', level: 85, color: 'bg-red-500' },
        { name: 'Teaching', level: 90, color: 'bg-purple-500' },
    ];

    const technologies = [
        'React', 'TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3',
        'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design', 'REST APIs', 'MongoDB'
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A comprehensive toolkit built through years of hands-on experience and continuous learning.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Skill Bars */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Proficiency Levels</h3>
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{
                                            width: `${skill.level}%`,
                                            animation: `slideIn 1.5s ease-out ${index * 0.1}s both`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technologies Grid */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={tech}
                                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{tech}</span>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I Bring</h4>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                    6+ years of programming experience across multiple languages
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                    Strong foundation in both frontend and backend development
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                    Experience mentoring and teaching programming concepts
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                    Passion for clean, maintainable, and scalable code
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;