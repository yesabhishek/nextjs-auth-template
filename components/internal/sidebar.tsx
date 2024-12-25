'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
    LayoutDashboard,
    Mail,
    Users,
    FileText,
    BarChart2,
    Settings,
    LogOut,
    ChevronLeft,
    MessageSquare,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
        { icon: MessageSquare, label: 'Compose', href: '/dashboard/compose' },
        { icon: Mail, label: 'Campaigns', href: '/dashboard/campaigns' },
        { icon: Users, label: 'Contacts', href: '/dashboard/contacts' },
        { icon: FileText, label: 'Templates', href: '/dashboard/templates' },
        { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
    ];

    const sidebarVariants = {
        expanded: { width: '240px' },
        collapsed: { width: '64px' }
    };

    const NavItem = ({ icon: Icon, label, href }) => (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <motion.a
                        href={href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-900",
                            "group relative h-10 w-full",
                            "transition-colors",
                            "hover:bg-gray-100/50"
                        )}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && (
                            <span className="text-sm font-medium">{label}</span>
                        )}
                    </motion.a>
                </TooltipTrigger>
                {collapsed && (
                    <TooltipContent side="right">
                        {label}
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );

    return (
        <motion.aside
            initial="expanded"
            animate={collapsed ? "collapsed" : "expanded"}
            variants={sidebarVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-screen border-r border-gray-100 bg-white fixed left-0 top-0"
        >
            {/* Logo Section */}
            <div className="h-16 border-b border-gray-100 flex items-center px-4">
                <motion.div
                    className="flex items-center gap-3"
                    animate={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
                >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-medium">C</span>
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-lg font-medium text-gray-900"
                        >
                            Cold Mail
                        </motion.span>
                    )}
                </motion.div>
            </div>

            {/* Navigation Section */}
            <div className="p-4">
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <NavItem key={item.label} {...item} />
                    ))}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-100 space-y-1">
                <NavItem icon={Settings} label="Settings" href="/dashboard/settings" />

                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start gap-3 text-gray-500 hover:text-gray-900 h-10"
                                onClick={() => signOut({ callbackUrl: '/' })}
                            >
                                <LogOut className="w-5 h-5" />
                                {!collapsed && <span className="text-sm font-medium">Log out</span>}
                            </Button>
                        </TooltipTrigger>
                        {collapsed && (
                            <TooltipContent side="right">
                                Log out
                            </TooltipContent>
                        )}
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setCollapsed(!collapsed)}
                                className="w-full justify-start gap-3 text-gray-500 hover:text-gray-900 h-10"
                            >
                                <ChevronLeft
                                    className={cn(
                                        "w-5 h-5 transition-transform",
                                        collapsed && "rotate-180"
                                    )}
                                />
                                {!collapsed && <span className="text-sm font-medium">Collapse</span>}
                            </Button>
                        </TooltipTrigger>
                        {collapsed && (
                            <TooltipContent side="right">
                                Expand
                            </TooltipContent>
                        )}
                    </Tooltip>
                </TooltipProvider>
            </div>
        </motion.aside>
    );
};

export default Sidebar;