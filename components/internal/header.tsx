import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Star, Box, Github } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const navItems = [
        { label: "How this works", href: "/#how-this-works" },
        { label: "Integrations", href: "/#integrations" },
        { label: "Roadmap", href: "/#roadmap" },
        { label: "Pricing", href: "/#pricing" },
    ];

    return (
        <header className="w-full border-b border-gray-100 bg-white fixed top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo and Branding */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-[#04001f] rounded-lg flex items-center justify-center">
                            <Box className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-medium text-gray-900 font-brand">Nyxt Template</span>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden md:flex items-center justify-center flex-1">
                    <ul className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Sign In Link */}
                    <Link
                        href="/auth/sign-in"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Sign In
                    </Link>

                    {/* Star Repository Button - Desktop */}
                    <div className="hidden md:block">
                        <Link  target='_blank' href="https://github.com/yesabhishek/nextjs-auth-template">
                            <Button
                                variant="default"
                                className="bg-gradient-to-br from-blue-500 to-[#04001f] rounded-full hover:bg-gray-800 text-sm flex items-center gap-2"
                            >
                                <Github className="h-4 w-4" />
                                Star Repository
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-700"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-xs p-6">
                                <nav className="flex flex-col gap-4 mt-6">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                    <Link href="/get-started" className="mt-2">
                                        <Button
                                            className="w-full bg-gray-900 hover:bg-gray-800 text-sm flex items-center justify-center gap-2"
                                        >
                                            <Star className="h-4 w-4" />
                                            Star Repository
                                        </Button>
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;