
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-300">
                            © 2025 Software Engineer Portfolio. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center text-gray-300">
                        <span>Made with</span>
                        <Heart size={16} className="mx-2 text-red-500 fill-current" />
                        <span>and lots of coffee</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>Built with React, TypeScript, and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;