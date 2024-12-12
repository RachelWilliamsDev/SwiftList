import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex">
        <div className="flex-1 p-5">
          <Sidebar />
        </div>
        <div className="flex-[4] p-5">
          <Navbar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
