'use client';

import Footer from '@/components/homepage/footer/footer';
import Navbar from '@/components/homepage/navbar/navbar';

const MarketingLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
