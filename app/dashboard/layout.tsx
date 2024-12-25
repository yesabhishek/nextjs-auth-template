// app/dashboard/layout.tsx
import React from 'react';
import DashboardLayout from '@/components/internal/dashboard-layout';


export default function DashboardRootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <DashboardLayout>{children}</DashboardLayout>;
}