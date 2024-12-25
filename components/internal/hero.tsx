import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, GithubIcon } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="w-full min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="w-full max-w-3xl mx-auto text-center space-y-8 pt-20">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm">
                    <span>v1.0 is now available</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl font-brand sm:text-6xl font-medium text-gray-500 tracking-tight">
                    Build <span className='text-black underline'>NextJS</span> apps faster
                    <span className="block">with <span className='text-black underline'>security</span> & <span className='text-black underline'>compliance</span></span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A minimalist Next.js template with everything you need to create stunning web applications. Start with a solid foundation.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/get-started">
                        <Button
                            size="lg"
                            className="bg-gray-900 hover:bg-gray-800 text-white font-medium p-3.5 rounded-full flex items-center gap-2"
                        >
                            <GithubIcon className="h-5 w-5" />
                            Star Repository
                        </Button>
                    </Link>
                    <Link href="/how-it-works">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-gray-200 hover:bg-gray-50 text-gray-600 font-medium p-3.5 rounded-full flex items-center gap-2"
                        >
                            How it works
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Optional Gradient Decoration */}
            <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-100 to-gray-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
        </div>
    );
};

export default Hero;