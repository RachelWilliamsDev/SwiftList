import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex w-full">
        <Sidebar />

        <div className="flex-[4] p-5">
          <Navbar />
          <Separator className="mb-5" />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
