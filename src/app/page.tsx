'use client';

import Footer from '@/components/homepage/footer/footer';
import Hero from '@/components/homepage/hero/hero';
import Navbar from '@/components/homepage/navbar/navbar';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
