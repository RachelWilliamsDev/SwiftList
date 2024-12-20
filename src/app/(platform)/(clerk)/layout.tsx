import Footer from '@/components/homepage/footer/footer';
import Navbar from '@/components/homepage/navbar/navbar';

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full items-center justify-center">{children}</div>
      <Footer />
    </>
  );
};
export default ClerkLayout;
