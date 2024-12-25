"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Clock,
    Database,
    Github,
    Mail,
    Coffee,
    ArrowRight,
    Key,
    Code,
    Lock
} from 'lucide-react';

const FeatureCard = ({ title, children }) => (
    <Card className="p-6">
        <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">{title}</h3>
            {children}
        </CardContent>
    </Card>
);

const FeaturesPage = () => {
    const integrations = [
        { name: 'Postgres', icon: Database },
        { name: 'Prisma', icon: Code },
        { name: 'Google OAuth', icon: Mail },
        { name: 'GitHub OAuth', icon: Github },
        { name: 'Auth.js', icon: Lock }
    ];

    const roadmapItems = [
        { status: 'Completed', text: 'Authentication Module' },
        { status: 'Completed', text: 'Database Integration' },
        { status: 'Completed', text: 'Responsive Layouts' },
        { status: 'Coming Soon', text: 'Email Integration' },
        { status: 'Coming Soon', text: 'Docker Support' },
        { status: 'Coming Soon', text: 'Notification System' }
    ];

    return (
        <div className="w-full min-h-screen bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-24">
                {/* How it Works */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-medium text-gray-900">How it Works</h2>
                    <div className="grid gap-6">
                        <FeatureCard title="Quick Setup">
                            <div className="space-y-4">
                                <p className="text-gray-600">This repository comes pre-configured with everything you need to build modern web applications:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Lock className="h-5 w-5 text-gray-700 mt-1" />
                                        <span className="text-gray-600">Authentication module with Google and GitHub OAuth</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Database className="h-5 w-5 text-gray-700 mt-1" />
                                        <span className="text-gray-600">Database integration with Prisma and PostgreSQL</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-gray-700 mt-1" />
                                        <span className="text-gray-600">Save 24 hours of setup and configuration time</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Key className="h-5 w-5 text-gray-700 mt-1" />
                                        <span className="text-gray-600">Just add your API keys and database URL to get started</span>
                                    </li>
                                </ul>
                            </div>
                        </FeatureCard>
                    </div>
                </section>

                {/* Integrations */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-medium text-gray-900">Integrations</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {integrations.map((integration) => {
                            const Icon = integration.icon;
                            return (
                                <div
                                    key={integration.name}
                                    className="flex items-center gap-3 p-4 rounded-full border border-gray-200 bg-white"
                                >
                                    <Icon className="h-5 w-5 text-gray-700" />
                                    <span className="text-gray-900">{integration.name}</span>
                                </div>
                            );
                        })}
                        <div className="flex items-center gap-3 p-4 rounded-full border border-gray-200 bg-white text-gray-500">
                            <ArrowRight className="h-5 w-5" />
                            <span>More coming soon</span>
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-medium text-gray-900">Roadmap</h2>
                    <div className="space-y-4">
                        {roadmapItems.map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                                <div className={`flex items-center justify-center h-5 w-5 rounded border ${item.status === 'Completed'
                                        ? 'border-green-500 bg-green-500'
                                        : 'border-gray-300'
                                    }`}>
                                    {item.status === 'Completed' && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 6L5 9L10 3"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <span className={`flex-1 text-gray-600 ${item.status === 'Completed'
                                        ? 'line-through text-gray-400'
                                        : ''
                                    }`}>
                                    {item.text}
                                </span>
                                {item.status === 'Coming Soon' && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="space-y-8 text-center">
                    <h2 className="text-3xl font-medium text-gray-900">Pricing</h2>
                    <p className="text-xl text-gray-600">It's free forever.</p>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 h-12 flex items-center gap-2"
                        >
                            <Coffee className="h-5 w-5" />
                            Buy me a coffee
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturesPage;