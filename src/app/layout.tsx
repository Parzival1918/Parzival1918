import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getYamlData } from '@/lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pedro Juan Royo | Portfolio',
  description: 'PhD Student Computational Chemistry @ Day Group',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = getYamlData<{ name: string; link: string }[]>('navigation.yml');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar navItems={navItems} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
