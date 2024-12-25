import { Github, Heart } from 'lucide-react'
import React from 'react'

function FooterSection() {
    return (
        <footer className="w-full bg-gray-50 py-16 px-4 mt-24">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-brand sm:text-6xl lg:text-9xl text-center font-bold text-gray-900">Nyxt Template</h1>
                    <p className="text-gray-600 text-lg">Build your next project faster</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <a
                        href="https://github.com/yourusername/nyxt-template"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span>View on GitHub</span>
                    </a>
                    <a
                        href="https://github.com/yourusername/nyxt-template/stargazers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <Heart className="h-5 w-5" />
                        <span>Star on GitHub</span>
                    </a>
                </div>

                <div className="text-center text-sm text-gray-500 pt-8">
                    <p>Made with ❤️ by the open source community</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection