import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Fuel Headquarters | Cafe & Co-working Space in Nagpur',
  description: 'Fuel Headquarters in Nagpur - Your premium spot for artisan coffee, great food, and ambient co-working spaces.',
  keywords: 'Cafe, Nagpur, Coffee Shop, Co-working space, Fuel Headquarters, Tava Tadka theme, Restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-neutral-800 bg-background transition-colors duration-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
