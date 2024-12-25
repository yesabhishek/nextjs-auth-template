import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const navItems = [
        { label: "How it works", href: "/how-it-works" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
    ];

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    {item.label}
                </a>
            ))}
        </>
    );

    return (
        <header className="w-full border-b border-gray-100/50 bg-white/70 backdrop-blur-xl fixed top-0 z-50 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gray-800">
                            <span className="text-white text-lg font-brand">C</span>
                        </div>
                        <span className="text-xl font-brand text-gray-900">Cold Mail</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLinks />
                </nav>

                {/* Desktop Sign In */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/auth/sign-in">
                        <Button variant="ghost" className="font-medium">
                            Sign in
                        </Button>
                    </Link>
                    <Link href="/get-started">
                        <Button className="bg-gray-900 hover:bg-gray-800 font-medium">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-3">
                    <Link href="/auth/sign-in">
                        <Button variant="ghost" size="sm" className="font-medium">
                            Sign in
                        </Button>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-700">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-80">
                            <div className="flex flex-col gap-8 pt-8">
                                <nav className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                                <Link href="/get-started" className="mt-2">
                                    <Button className="bg-gray-900 hover:bg-gray-800 w-full font-medium">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;