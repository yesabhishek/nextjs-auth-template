import Header from "@/components/internal/header";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <footer className="w-full px-6 py-4 border-t border-gray-100">
        <div className="max-w-[980px] mx-auto flex justify-between items-center">
          <div className="text-xs text-gray-500">
            © 2024 Nyxt Template, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/security" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Security
            </Link>
            <Link href="/status" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Status
            </Link>
            <Link href="/legal" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </footer>
    </>

  );
}
