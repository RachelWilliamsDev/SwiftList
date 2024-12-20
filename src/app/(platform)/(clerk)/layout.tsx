import Footer from '@/components/homepage/footer/footer';
import Navbar from '@/components/homepage/navbar/navbar';

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
  return (
    <div className="flex h-full items-center justify-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default ClerkLayout;
