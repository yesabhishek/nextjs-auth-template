import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="w-full bg-white h-screen flex">
            <div className="max-w-4xl m-auto px-4 py-24">
                {/* Top badge */}
                <div className="flex justify-center mb-8">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600 rounded-full px-4 py-1 text-sm font-normal">
                        Now with AI-powered personalization
                    </Badge>
                </div>

                {/* Main heading */}
                <h1 className="text-center font-normal text-5xl text-gray-900 mb-6 tracking-tight">
                    Cold emails that convert,
                    <br />
                    <span className="text-gray-400">powered by intelligence</span>
                </h1>

                {/* Subheading */}
                <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
                    Send personalized bulk emails that feel hand-crafted. Our AI ensures each recipient gets a unique message that resonates.
                </p>

                {/* CTA Section */}
                <div className="flex justify-center gap-3 mb-16">
                    <Link href={"/auth/sign-in/"}>
                        <Button className="bg-gray-900 hover:bg-gray-800">
                            Get started
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>

                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                    {[
                        'AI-powered personalization',
                        'Automated follow-ups',
                        'Advanced analytics'
                    ].map((feature) => (
                        <div key={feature} className="flex items-center justify-center gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;