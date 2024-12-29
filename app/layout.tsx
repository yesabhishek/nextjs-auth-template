import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner';
import Providers from "@/components/Providers";
import { Inter_Tight, Bricolage_Grotesque } from 'next/font/google';

// Configure Inter Tight font
const interTight = Inter_Tight({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter-tight',
});

// Configure Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage',
});

export const metadata: Metadata = {
    title: "Nyxt Template",
    description: "Boilerplate app for starting NextJS app development faster.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${interTight.variable} ${bricolageGrotesque.variable}`}>
            <body className={`${interTight.className}`}>
                <Providers>{children}</Providers>
                <Toaster />
            </body>
        </html>
    );
}