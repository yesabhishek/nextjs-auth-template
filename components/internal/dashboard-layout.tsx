'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Calendar, BarChart2, Settings, LogOut } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { data: session } = useSession();

    const navigation = [
        { name: 'Home', href: '/dashboard', icon: Home },
        { name: 'Templates', href: '/dashboard/templates', icon: FileText },
        { name: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
        { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    const handleSignOut = () => {
        signOut({ callbackUrl: '/auth/sign-in' });
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Fixed-width sidebar */}
            <aside className="w-64 border-r border-gray-100 bg-white flex flex-col fixed h-full">
                {/* Logo area */}
                <div className="h-14 flex items-center px-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-medium">C</span>
                        </div>
                        <span className="text-base font-medium text-gray-900">Cold Mail</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-4">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md mb-1 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main content area */}
            <main className="pl-64 flex-1 flex flex-col min-h-screen">
                {/* Top header */}
                <header className="h-14 border-b border-gray-100 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
                    <h1 className="text-base font-medium text-gray-900">Dashboard</h1>

                    {/* User menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-50 py-1.5 px-2 rounded-md transition-colors">
                            <span className="text-sm text-gray-700">{session?.user?.name}</span>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={session?.user?.image || ''} />
                                <AvatarFallback>
                                    {session?.user?.name?.charAt(0) || 'U'}
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem
                                onClick={handleSignOut}
                                className="text-red-600 cursor-pointer"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                {/* Main content */}
                <div className="flex-1 p-6">
                    {/* Welcome Card */}
                    <div className="mb-6 bg-white border border-gray-100 rounded-lg p-6">
                        <h2 className="text-2xl font-medium text-gray-900">
                            Welcome back, {session?.user?.name?.split(' ')[0]}!
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Manage your email campaigns and templates from here.
                        </p>
                    </div>

                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;